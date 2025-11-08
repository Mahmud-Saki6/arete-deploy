"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import ResidentialProjects from "@/components/ResidentialProjects";

export default function AllProjects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "75vh", md: "90vh" },
          overflow: "hidden",
          bgcolor: "#000",
        }}
      >
        {/* Background Video */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            "& video": {
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "brightness(0.7) contrast(1.05)",
            },
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1.1)",
              transition: "transform 8s ease-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
          >
            <source src="/assets/all/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* Overlay gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.0) 100%)",
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
              Project Gallery
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
            ></Typography>
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

      {/* ===== ARETE PORTFOLIO INTRODUCTION ===== */}
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          mb: { xs: 4, md: 6 },
          py: { xs: 6, md: 8 },
          background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #C89B3C, transparent)",
          },
        }}
      >
        {/* Subtle Background Pattern - Hidden on mobile */}
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            right: "10%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(200, 156, 60, 0.37) 0%, transparent 50%)",
            borderRadius: "50%",
            display: { xs: "none", md: "block" },
          }}
        />
        {/* another one - Hidden on mobile */}
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "10%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(200, 156, 60, 0.37) 0%, transparent 40%)",
            borderRadius: "50%",
            display: { xs: "none", md: "block" },
          }}
        />
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Main Title - More Sophisticated */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 300,
                lineHeight: 1.1,
                mb: 4,
                color: "#2c3e50",
                letterSpacing: "-0.02em",
              }}
            >
              The Art of
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  color: "#C89B3C",
                  display: "block",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                }}
              >
                Space & Purpose
              </Box>
            </Typography>

            {/* Description - More Unique Content */}
            <Typography
              sx={{
                color: "rgba(44, 62, 80, 0.8)",
                fontSize: "1.2rem",
                lineHeight: 1.7,
                mb: 12,
                mx: "auto",
                fontWeight: 300,
              }}
            >
              Where architectural vision meets human experience. Each project in
              our collection represents a dialogue between form and function,
              creating environments that don't just exist—they{" "}
              <strong>inspire</strong> and
              <strong> transform</strong>.
            </Typography>

            {/* Enhanced Stats Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                mb: 8,
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  number: "85+",
                  label: "Spaces Transformed",
                  sub: "Since 2018",
                },
                {
                  number: "97%",
                  label: "Client Retention",
                  sub: "Long-term partnerships",
                },
                {
                  number: "24",
                  label: "Industry Awards",
                  sub: "Excellence recognized",
                },
              ].map((stat, index) => (
                <Box
                  key={stat.label}
                  sx={{
                    textAlign: "center",
                    px: 3,
                    py: 2,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, #C89B3C, transparent)",
                      opacity: 0.6,
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 300,
                      color: "#2c3e50",
                      mb: 1,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#C89B3C",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      fontSize: "0.8rem",
                      mb: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(44, 62, 80, 0.6)",
                      fontStyle: "italic",
                      fontSize: "0.7rem",
                    }}
                  >
                    {stat.sub}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Signature Divider */}
            <Box
              sx={{
                width: "100px",
                height: "2px",
                background: "linear-gradient(90deg, #C89B3C, #2c3e50, #C89B3C)",
                mx: "auto",
                mb: 4,
                borderRadius: "1px",
                opacity: 0.8,
              }}
            />

            {/* Philosophical Statement */}
            <Box
              sx={{
                maxWidth: "600px",
                mx: "auto",
                p: 3,
                backgroundColor: "rgba(255, 255, 255, 0.29)",
                borderRadius: "12px",
                border: "2px solid rgba(200, 155, 60, 0.1)",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(44, 62, 80, 0.9)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  textAlign: "center",
                  fontWeight: 300,
                }}
              >
                "We believe exceptional design is not just about aesthetics, but
                about creating <strong>meaningful connections</strong> between
                people and their environments. Every space tells a story—we're
                here to help you write yours."
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Section Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: { xs: 11, md: 14 },
          letterSpacing: 9,
          textTransform: "uppercase",
          textAlign: "center",
          mb: 2,
          color: "#2c3e50",
        }}
      >
        RESIDENTIAL COLLECTION
      </Typography>

      <Typography
        sx={{
          color: "rgba(0,0,0,0.6)",
          fontSize: { xs: 11, md: 14 },
          maxWidth: 700,
          mx: "auto",
          mb: 6,
          textAlign: "center",
          fontStyle: "italic",
          lineHeight: 1.4,
        }}
      >
        Explore our journey through exceptional home designs — from urban
        apartments to luxury villas, each telling a unique story of living well.
      </Typography>

      <ResidentialProjects />

      {/* contact us part */}
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#F5F1E5",
          color: "#2c3e50",
          borderRadius: 2,
          py: 8,
          px: 4,
          border: "1px solid rgba(200, 155, 60, 0.2)",
          boxShadow: "0 4px 20px rgba(200, 155, 60, 0.1)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "0.90rem", md: "1.75rem" },
            letterSpacing: "-0.01em",
          }}
        >
          Ready to Transform Your Living Space?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            mb: 4,
            opacity: 0.8,
            fontSize: { xs: "0.70rem", md: "0.95rem" },
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Let's collaborate to create a home that reflects your personality,
          lifestyle, and dreams — where every detail tells your unique story.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#C89B3C",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            px: 4,
            py: 1.25,
            fontSize: { xs: "0.60rem", md: "0.85rem" },
            fontWeight: 600,
            borderRadius: "6px",
            transition: "all 0.3s ease",
            minWidth: "200px",
            "&:hover": {
              bgcolor: "#B88A2A",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(200, 155, 60, 0.3)",
            },
          }}
          onClick={() => {
            document.getElementById("contact-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Start Your Project
        </Button>
      </Box>
    </>
  );
}
