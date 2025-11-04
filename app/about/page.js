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
import Designers from "@/components/Designers";
import Faq from "@/components/Faq";

export default function AboutHero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            backgroundImage: "url('/assets/about/newhero.jpeg')",
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
              About Arete Studio
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
              At Arete, design is more than aesthetics — it's emotion, function,
              and story. Every project reflects the harmony of purpose and
              personality, crafted to leave a lasting impression.
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

      {/* ===== INTRODUCTION SECTION ===== */}
      <Box
        sx={{
          mt: 12,
          mb: 14,

          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              {/* Main Title */}
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
                Our Design Ethos
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
                We're the Arete Team, bringing your dream visions to life
                through exceptional design.
              </Typography>

              {/* Content */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                    color: "text.primary",
                    mb: 3,
                  }}
                >
                  Arete Studio has established itself among Dhaka's most
                  respected interior design firms, built on the foundation that{" "}
                  <strong>collaboration, creativity, and transparency </strong>
                  create spaces that harmonize Bangladesh's cultural aesthetics
                  with contemporary design, crafting environments you'll truly
                  love and live in.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    fontSize: "1.1rem",
                    color: "text.primary",
                    mb: 3,
                  }}
                >
                  Since our founding, we've focused on balancing{" "}
                  <strong>personalization, style, and comfort</strong>— because
                  beautiful spaces should be lived in, not just admired.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    fontSize: "1.1rem",
                    color: "text.primary",
                    mb: 3,
                  }}
                >
                  With an award-winning portfolio featuring luxury residential
                  spaces, corporate offices, and commercial properties across
                  Bangladesh, we're proud to be among Dhaka's most trusted and
                  sought-after design firms.
                </Typography>
              </Box>

              {/* Highlight Box */}
              <Box
                sx={{
                  bgcolor: "rgba(200, 155, 60, 0.1)",
                  p: 3,
                  borderRadius: 2,
                  borderLeft: "4px solid #C89B3C",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    fontSize: "1rem",
                    color: "text.primary",
                    fontStyle: "italic",
                  }}
                >
                  From new construction to transformative remodels, our
                  passionate team meets you at any stage. We're honored to build
                  dreams together, one exceptional project at a time.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===== VIDEO SECTION ===== */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "100vh" },
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <Box
          component="video"
          src="/assets/about/main.mp4"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark Overlay for better text readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.2) 80%)",
            zIndex: 1,
          }}
        />

        {/* Content Overlay */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            pb: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              width: "100%",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.10rem" },
                mb: 2,
              }}
            >
              A R E T E
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "0.70rem" },
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Grid>
        {/* Stats Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            py: 12,
            position: "relative",
            backgroundImage: "url('/assets/about/background.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              maxWidth: "700px",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            {[
              { number: "15+", label: "Years Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "25+", label: "Industry Awards" },
            ].map((stat, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(200, 155, 60, 0.2)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#C89B3C",
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Designers />
      <Faq />
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
          Ready to Create Exceptional Spaces with Arete?
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
          Join our team of passionate designers and craftsmen dedicated to
          transforming visions into reality.
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
          Join Our Team
        </Button>
      </Box>
    </>
  );
}
