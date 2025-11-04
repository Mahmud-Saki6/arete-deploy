"use client";
import React, { useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Arete Studio's design process?",
      answer:
        "Our design process begins with an in-depth consultation to understand your vision, followed by concept development, detailed planning, and meticulous execution. We maintain transparent communication throughout the entire project.",
    },
    {
      question: "How long does a typical interior design project take?",
      answer:
        "Project timelines vary based on scope and complexity. Residential projects typically take 8-16 weeks, while commercial spaces may require 12-24 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work within specific budget ranges?",
      answer:
        "Yes, we tailor our services to accommodate various budget levels. We're committed to maximizing your investment while delivering exceptional quality and design excellence.",
    },
    {
      question: "Can Arete Studio work with existing furniture and decor?",
      answer:
        "Absolutely! We specialize in integrating existing pieces with new design elements to create cohesive spaces that reflect your personal style while incorporating fresh perspectives.",
    },
    {
      question: "What areas in Bangladesh do you serve?",
      answer:
        "We serve clients throughout Bangladesh, with primary focus on Dhaka, Chittagong, and Sylhet. We also undertake projects in other major cities and are available for consultation nationwide.",
    },
    {
      question: "How do I get started with Arete Studio?",
      answer:
        "Begin by scheduling a complimentary initial consultation where we discuss your vision, requirements, and budget. From there, we'll create a customized proposal outlining our design approach and next steps.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#f8f9faba" }}>
      <Container maxWidth="lg">
        {/* Section Title - Centered */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: 9, md: 11 },
              letterSpacing: 8,
              textTransform: "uppercase",
              mb: 2,
              color: "#2c3e50",
            }}
          >
            FAQS
          </Typography>
        </Box>

        {/* FAQ Accordion - Centered */}
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Box>
              {faqData.map((faq, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 2,
                    mb: 2,
                    bgcolor: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      p: 3,
                    }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#2c3e50",
                        pr: 2,
                        flex: 1,
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#C89B3C",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        transition: "transform 0.3s ease",
                        transform:
                          openIndex === index
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        minWidth: "20px",
                        textAlign: "center",
                      }}
                    >
                      +
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: openIndex === index ? "block" : "none",
                      px: 3,
                      pb: 3,
                      animation:
                        openIndex === index ? "fadeIn 0.3s ease" : "none",
                      "@keyframes fadeIn": {
                        from: { opacity: 0, transform: "translateY(-10px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(0,0,0,0.7)",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
