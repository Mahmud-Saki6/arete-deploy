<?php
// contact-form.php - FIXED VERSION
try {
    // Set headers first - IMPORTANT: No output before headers
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    // Handle preflight OPTIONS request
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // For testing - allow GET requests to check if file works
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo json_encode([
            "success" => true,
            "message" => "PHP contact form is working! Use POST to submit data.",
            "timestamp" => date('Y-m-d H:i:s')
        ]);
        exit;
    }

    // Only allow POST requests for form submission
    if ($_SERVER["REQUEST_METHOD"] != "POST") {
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
        exit;
    }

    // Get the raw POST data
    $json_input = file_get_contents('php://input');

    if (empty($json_input)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "No data received."]);
        exit;
    }

    // Decode JSON data
    $input = json_decode($json_input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid JSON data: " . json_last_error_msg()]);
        exit;
    }

    // Validate required fields
    $required_fields = ['name', 'email', 'projectLocation', 'service', 'projectDetails'];
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Please fill in all required fields. Missing: $field"]);
            exit;
        }
    }

    // Get form data
    $name = htmlspecialchars(trim($input['name']));
    $projectLocation = htmlspecialchars(trim($input['projectLocation']));
    $email = htmlspecialchars(trim($input['email']));
    $phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone'])) : '';
    $service = htmlspecialchars(trim($input['service']));
    $projectDetails = htmlspecialchars(trim($input['projectDetails']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
        exit;
    }

    // Email configuration - SIMPLIFIED to avoid mail() issues
    $to = "mahmudgazi46@gmail.com";
    $subject = "New Project Inquiry: $name - $service";

    // Plain text email to avoid issues
    $message = "
NEW PROJECT INQUIRY - Arete Studio

Name: $name
Email: $email
Phone: " . ($phone ?: 'Not provided') . "
Project Location: $projectLocation
Service: $service

Project Details:
$projectDetails

Submitted: " . date('Y-m-d H:i:s') . "
IP: " . $_SERVER['REMOTE_ADDR'] . "
    ";

    // Simple headers without MIME
    $headers = "From: mahmudgazi46@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Try to send email - but don't fail the form if email fails
    $email_sent = false;
    $email_error = '';

    try {
        $email_sent = mail($to, $subject, $message, $headers);
        if (!$email_sent) {
            $email_error = "Email function failed but form was received.";
        }
    } catch (Exception $e) {
        $email_error = "Email error: " . $e->getMessage();
    }

    // Always return success if we got this far - we'll handle email separately
    http_response_code(200);

    if ($email_sent) {
        echo json_encode([
            "success" => true,
            "message" => "Thank you! Your message has been sent successfully to mahmudgazi46@gmail.com.",
            "email_sent" => true
        ]);
    } else {
        // Still return success but log that email failed
        echo json_encode([
            "success" => true,
            "message" => "Thank you! We've received your project details. (Email service temporarily unavailable)",
            "email_sent" => false,
            "email_error" => $email_error
        ]);

        // Log the form submission to a file since email failed
        $log_data = [
            'timestamp' => date('Y-m-d H:i:s'),
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'service' => $service,
            'project_location' => $projectLocation,
            'project_details' => $projectDetails,
            'ip' => $_SERVER['REMOTE_ADDR']
        ];

        file_put_contents('form_submissions.log', json_encode($log_data) . PHP_EOL, FILE_APPEND | LOCK_EX);
    }
} catch (Exception $e) {
    // Catch any unexpected errors
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Server error: " . $e->getMessage()
    ]);
}
