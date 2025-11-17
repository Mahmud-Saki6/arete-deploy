"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Card,
  CardContent,
  alpha,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Collapse,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(Array(6).fill(false));

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    projectLocation: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: "",
  });

  const contactItems = [
    {
      icon: FaPhone,
      title: "CALL US",
      content: "+880 2 1234 5678",
      description: "Speak directly with our design team",
      color: "#C89B3C",
    },
    {
      icon: FaEnvelope,
      title: "SEND US AN EMAIL",
      content: "enquiries@arete.com",
      description: "Get a personalized response within 24 hours",
      color: "#2c3e50",
    },
    {
      icon: FaMapMarkerAlt,
      title: "VISIT OUR STUDIO",
      content: "123 Gulshan Avenue, Dhaka 1212",
      description: "Schedule a showroom tour",
      color: "#8B4513",
    },
    {
      icon: FaClock,
      title: "BUSINESS HOURS",
      content: "Sat – Thurs: 10:00am – 7:00pm",
      description: "Friday: By appointment only",
      color: "#556B2F",
    },
  ];

  const faqItems = [
    {
      question: "How long does a typical interior design project take?",
      answer:
        "The timeline varies based on project scope, but most residential projects take 8-16 weeks from concept to completion. Commercial projects may take 12-24 weeks depending on size and complexity.",
    },

    {
      question: "What services are included in your interior design package?",
      answer:
        "Our comprehensive package includes space planning, concept development, 3D visualizations, material selection, furniture procurement, and project management. We tailor our services to meet your specific needs.",
    },
    {
      question: "Do you handle renovations and construction?",
      answer:
        "While we focus on interior design, we collaborate with trusted contractors and architects. We oversee the entire process to ensure the design vision is executed perfectly.",
    },
    {
      question: "Can you work with existing furniture and decor?",
      answer:
        "Absolutely! We love incorporating meaningful pieces you already own. We'll assess your existing items and suggest what works best with the new design concept.",
    },
    {
      question: "What areas do you serve in Bangladesh?",
      answer:
        "We primarily serve Dhaka and surrounding areas, but we've completed projects throughout Bangladesh. Remote consultations are also available for clients outside Dhaka.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===== FIXED handleSubmit FUNCTION =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      console.log("📤 Sending form data to PHP...");

      const response = await fetch("http://localhost/arete/contact-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("📨 PHP response:", result);

      if (result.success) {
        setSubmitResult({
          success: true,
          message: result.message,
        });

        // Reset form
        setFormData({
          name: "",
          projectLocation: "",
          email: "",
          phone: "",
          service: "",
          projectDetails: "",
        });
      } else {
        setSubmitResult({
          success: false,
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setSubmitResult({
        success: false,
        message:
          "Form submission failed. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "75vh", md: "90vh" },
          overflow: "hidden",
          bgcolor: "#000",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/contact/hero.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: "scale(1.1)",
            filter: "brightness(0.7) contrast(1.05)",
            transition: "transform 8s ease-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />

        {/* Overlay gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: { xs: "flex-end", md: "center" },
            justifyContent: { xs: "center", md: "flex-start" },
            width: "90%",
            maxWidth: "1720px",
            mx: "auto",
            pb: { xs: 2, md: 0 },
            px: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              color: "#fff",
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: 600 },
              position: "relative",
            }}
          >
            {/* Accent Bar */}
            <Box
              sx={{
                width: 90,
                height: 4,
                bgcolor: "#C89B3C",
                mb: { xs: 2, md: 3 },
                mx: { xs: "auto", md: 0 },
              }}
            />

            {/* Title */}
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: 2,
                fontSize: {
                  xs: "0.90rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
              }}
            >
              Contact Arete Studio
            </Typography>

            {/* Subtitle */}
            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 450,
                opacity: 0.9,
                fontSize: {
                  xs: "0.5rem",
                  md: "0.90rem",
                },
                mb: 2,
              }}
            >
              Let's bring your vision to life. Get in touch with our
              award-winning design team to start your transformation journey.
            </Typography>
          </Box>
        </Box>

        {/* Subtle noise texture overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')",
            opacity: 0.05,
            zIndex: 1,
          }}
        />
      </Box>

      {/* ===== CONTACT CARDS SECTION ===== */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f5f5f5 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background:
              "radial-gradient(circle at top right, rgba(200, 155, 60, 0.05) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "90%",
            maxWidth: "1720px",
            mx: "auto",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.8rem", md: "3rem" },
                    letterSpacing: "-0.02em",
                    color: "#1a1a1a",
                    mb: 2,
                    background:
                      "linear-gradient(135deg, #2c3e50 0%, #C89B3C 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let's Create Together
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    maxWidth: 800,
                    mx: "auto",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  Ready to transform your space? Get in touch with our
                  award-winning design team and start your journey to
                  exceptional interiors.
                </Typography>
              </motion.div>
            </Box>

            {/* Contact Cards Grid */}
            <Grid container spacing={3} justifyContent="center">
              {contactItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 4,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                          borderColor: item.color,
                        },
                        position: "relative",
                        overflow: "visible",
                        maxWidth: 300,
                        mx: "auto",
                      }}
                    >
                      {/* Accent Bar */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: `linear-gradient(90deg, ${
                            item.color
                          } 0%, ${alpha(item.color, 0.7)} 100%)`,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        }}
                      />

                      <CardContent sx={{ p: 4, textAlign: "center" }}>
                        {/* Icon */}
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${
                              item.color
                            } 0%, ${alpha(item.color, 0.8)} 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                            boxShadow: `0 8px 20px ${alpha(item.color, 0.3)}`,
                          }}
                        >
                          <item.icon
                            style={{
                              fontSize: "2rem",
                              color: "#ffffff",
                            }}
                          />
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#1a1a1a",
                            mb: 1,
                            fontSize: "1rem",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.title}
                        </Typography>

                        {/* Main Content */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: item.color,
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            mb: 1,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.content}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.5,
                            display: "block",
                            mt: 1,
                          }}
                        >
                          {item.description}
                        </Typography>

                        {/* Action Indicator */}
                        <Box
                          sx={{
                            mt: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                            fontWeight: 600,
                            fontSize: "0.875rem",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: item.color,
                              fontWeight: 600,
                              mr: 1,
                            }}
                          >
                            Contact Now
                          </Typography>
                          <FaArrowRight size={12} />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Box>

      {/* ===== CONTACT FORM & FAQ SECTION ===== */}
      <Box sx={{ bgcolor: "#f8f9fa", py: { xs: 8, md: 12 } }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid
            container
            spacing={6}
            alignItems="flex-start"
            justifyContent="center"
          >
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <Box sx={{ textAlign: "center", mb: 6 }}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        color: "#1a1a1a",
                        mb: 2,
                      }}
                    >
                      Tell Us About Your Vision
                    </Typography>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.secondary",
                        fontSize: "1.1rem",
                        maxWidth: 600,
                        mx: "auto",
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}
                    >
                      Ready to get started? Let us know about your project! Fill
                      out the form below, and we'll get back to you within 24
                      hours.
                    </Typography>
                  </motion.div>
                </Box>

                {/* Success/Error Alert */}
                {submitResult && (
                  <Alert
                    severity={submitResult.success ? "success" : "error"}
                    sx={{ mb: 3 }}
                  >
                    {submitResult.message}
                  </Alert>
                )}

                {/* Contact Form */}
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "grid", gap: 3 }}
                >
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Project Location *"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        type="email"
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <FormControl fullWidth disabled={isSubmitting}>
                    <InputLabel>Service You're Interested In *</InputLabel>
                    <Select
                      label="Service You're Interested In *"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    >
                      <MenuItem value="Interior Design">
                        Interior Design
                      </MenuItem>
                      <MenuItem value="Architecture">Architecture</MenuItem>
                      <MenuItem value="Consultation">Consultation</MenuItem>
                      <MenuItem value="Renovation">Renovation</MenuItem>
                      <MenuItem value="Custom Furniture">
                        Custom Furniture
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Tell us about your project *"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    variant="outlined"
                    multiline
                    rows={5}
                    required
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  <motion.div variants={itemVariants}>
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        disabled={isSubmitting}
                        sx={{
                          background:
                            "linear-gradient(135deg, #C89B3C 0%, #8B4513 100%)",
                          borderRadius: 3,
                          textAlign: "center",
                          px: 6,
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          textTransform: "none",
                          boxShadow: "0 8px 25px rgba(200, 155, 60, 0.3)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #8B4513 0%, #C89B3C 100%)",
                            boxShadow: "0 12px 35px rgba(200, 155, 60, 0.4)",
                            transform: "translateY(-2px)",
                          },
                          "&:disabled": {
                            background: "#cccccc",
                            transform: "none",
                            boxShadow: "none",
                          },
                          transition: "all 0.3s ease-in-out",
                          mt: 2,
                          minWidth: 200,
                        }}
                      >
                        {isSubmitting ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          "Submit Your Project"
                        )}
                      </Button>
                    </Box>
                  </motion.div>
                </Box>

                {/* WhatsApp Chat Button */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button
                      variant="outlined"
                      startIcon={<FaWhatsapp />}
                      sx={{
                        borderColor: "#25D366",
                        color: "#25D366",
                        padding: "12px 32px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        textTransform: "none",
                        borderRadius: 3,
                        borderWidth: 2,
                        "&:hover": {
                          borderColor: "#128C7E",
                          backgroundColor: "#25D366",
                          color: "#fff",
                          borderWidth: 2,
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                      href="https://wa.me/+880212345678"
                      target="_blank"
                    >
                      Chat with us on WhatsApp
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            {/* FAQ Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    p: 5,
                    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                    border: "1px solid",
                    borderColor: "divider",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1a1a1a",
                      mb: 4,
                      textAlign: "center",
                    }}
                  >
                    Frequently Asked Questions
                  </Typography>

                  {faqItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Box
                        sx={{
                          mb: 3,
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: 2,
                          overflow: "hidden",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            borderColor: "#C89B3C",
                            boxShadow: "0 4px 12px rgba(200, 155, 60, 0.1)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 3,
                            backgroundColor: alpha("#C89B3C", 0.05),
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              backgroundColor: alpha("#C89B3C", 0.1),
                            },
                          }}
                          onClick={() => handleExpandClick(index)}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: "#1a1a1a",
                              pr: 2,
                            }}
                          >
                            {item.question}
                          </Typography>
                          <Box
                            sx={{
                              transform: expanded[index]
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.3s ease-in-out",
                              color: "#C89B3C",
                            }}
                          >
                            <FaChevronDown size={16} />
                          </Box>
                        </Box>

                        <Collapse in={expanded[index]}>
                          <Box sx={{ p: 3 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                                lineHeight: 1.6,
                              }}
                            >
                              {item.answer}
                            </Typography>
                          </Box>
                        </Collapse>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Map Section */}
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              mt: 8,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902885627972!2d90.41319427538893!3d23.75087658879652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1d9a1a1c1%3A0x9e3f9a3dd9b9d902!2sGulshan%20Avenue!5e0!3m2!1sen!2sbd!4v1698237760000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Arete Studio Location"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
}
