<?php
// contact-form.php - UPDATED FOR BOTH FORM TYPES
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

    // Get form type with default
    $formType = isset($input['formType']) ? $input['formType'] : 'project_inquiry';

    // Handle different form types and their required fields
    if ($formType == 'appointment') {
        // Appointment form validation
        $required_fields = ['name', 'email'];
        $subject = "New Appointment Booking: " . (isset($input['name']) ? $input['name'] : '');

        // For appointment form, message comes from 'message' field
        $projectDetails = isset($input['message']) ? $input['message'] : '';
    } else {
        // Project inquiry form validation (default)
        $required_fields = ['name', 'email', 'projectLocation', 'service', 'projectDetails'];
        $subject = "New Project Inquiry: " . (isset($input['name']) ? $input['name'] : '') . " - " . (isset($input['service']) ? $input['service'] : '');

        // For project form, message comes from 'projectDetails' field
        $projectDetails = isset($input['projectDetails']) ? $input['projectDetails'] : '';
    }

    // Validate required fields based on form type
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Please fill in all required fields. Missing: $field"]);
            exit;
        }
    }

    // Get common form data
    $name = htmlspecialchars(trim($input['name']));
    $email = htmlspecialchars(trim($input['email']));
    $phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone'])) : '';

    // Get form-specific data
    if ($formType == 'appointment') {
        // Appointment form specific data
        $message = isset($input['message']) ? htmlspecialchars(trim($input['message'])) : '';
        $projectLocation = isset($input['projectLocation']) ? htmlspecialchars(trim($input['projectLocation'])) : 'Not specified';
        $service = isset($input['service']) ? htmlspecialchars(trim($input['service'])) : 'Appointment';
    } else {
        // Project inquiry form specific data
        $projectLocation = htmlspecialchars(trim($input['projectLocation']));
        $service = htmlspecialchars(trim($input['service']));
        $projectDetails = htmlspecialchars(trim($input['projectDetails']));
        $message = $projectDetails; // For consistent email formatting
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
        exit;
    }

    // Email configuration
    $to = "mahmudgazi46@gmail.com";

    // Handle different form types for email content
    if ($formType == 'appointment') {
        $subject = "New Appointment Booking: $name";
        $email_message = "
NEW APPOINTMENT BOOKING - Arete Studio

Name: $name
Email: $email
Phone: " . ($phone ?: 'Not provided') . "
Project Location: $projectLocation
Service: $service

Appointment Details:
$message

Requested: " . date('Y-m-d H:i:s') . "
IP: " . $_SERVER['REMOTE_ADDR'] . "
        ";
    } else {
        $subject = "New Project Inquiry: $name - $service";
        $email_message = "
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
    }

    // Simple headers without MIME
    $headers = "From: mahmudgazi46@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Try to send email - but don't fail the form if email fails
    $email_sent = false;
    $email_error = '';

    try {
        $email_sent = mail($to, $subject, $email_message, $headers);
        if (!$email_sent) {
            $email_error = "Email function failed but form was received.";
        }
    } catch (Exception $e) {
        $email_error = "Email error: " . $e->getMessage();
    }

    // Always return success if we got this far - we'll handle email separately
    http_response_code(200);

    // Success messages based on form type
    if ($formType == 'appointment') {
        $success_message = $email_sent
            ? "Thank you! Your appointment request has been sent successfully. We'll contact you soon to confirm your booking."
            : "Thank you! We've received your appointment request. (Email service temporarily unavailable - we'll still contact you)";
    } else {
        $success_message = $email_sent
            ? "Thank you! Your project inquiry has been sent successfully to mahmudgazi46@gmail.com."
            : "Thank you! We've received your project details. (Email service temporarily unavailable)";
    }

    if ($email_sent) {
        echo json_encode([
            "success" => true,
            "message" => $success_message,
            "email_sent" => true,
            "form_type" => $formType
        ]);
    } else {
        // Still return success but log that email failed
        echo json_encode([
            "success" => true,
            "message" => $success_message,
            "email_sent" => false,
            "email_error" => $email_error,
            "form_type" => $formType
        ]);

        // Log the form submission to a file since email failed
        $log_data = [
            'timestamp' => date('Y-m-d H:i:s'),
            'form_type' => $formType,
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'service' => $service,
            'project_location' => $projectLocation,
            'message' => $formType == 'appointment' ? $message : $projectDetails,
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
