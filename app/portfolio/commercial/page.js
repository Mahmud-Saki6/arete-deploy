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
import CommercialProjects from "@/components/CommercialProjects";

export default function Commercial() {
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
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/commercial/hero.jpeg')",
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
              Commercial Innovations
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
              Creating strategic commercial environments that elevate brands and
              optimize business performance across all sectors.
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

      {/* ===== THE ART OF HOME-MAKING ===== */}
      <Box
        sx={{
          mt: 12,
          mb: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
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
                BUSINESS SPACES
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
                Transforming commercial properties into productive environments
                that tell your business story.
              </Typography>

              {/* Interactive Feature List */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#C89B3C",
                      borderRadius: "50%",
                      mt: 1.5,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#2c3e50", mb: 1, fontSize: "1.2rem" }}
                    >
                      Brand Spatial Integration
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.7, color: "text.primary" }}
                    >
                      We translate corporate identity into physical
                      environments. Every space becomes a three-dimensional
                      brand experience, reinforcing your company values and
                      culture through strategic design narratives.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#C89B3C",
                      borderRadius: "50%",
                      mt: 1.5,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#2c3e50", mb: 1, fontSize: "1.2rem" }}
                    >
                      Workplace Performance Optimization
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.7, color: "text.primary" }}
                    >
                      Engineering environments that boost productivity,
                      collaboration, and employee wellbeing. We analyze workflow
                      patterns and human behavior to create spaces that work as
                      hard as your team.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#C89B3C",
                      borderRadius: "50%",
                      mt: 1.5,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#2c3e50", mb: 1, fontSize: "1.2rem" }}
                    >
                      Commercial Durability Engineering
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.7, color: "text.primary" }}
                    >
                      Selecting materials and systems built for high-traffic
                      environments. We balance aesthetic appeal with long-term
                      performance, ensuring your investment withstands the
                      demands of daily business operations.
                    </Typography>
                  </Box>
                </Box>

                {/* Unique Commercial Addition */}
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#C89B3C",
                      borderRadius: "50%",
                      mt: 1.5,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#2c3e50", mb: 1, fontSize: "1.2rem" }}
                    >
                      ROI-Focused Design Strategy
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.7, color: "text.primary" }}
                    >
                      Every design decision is measured against business impact.
                      We create spaces that not only look exceptional but drive
                      tangible returns through increased productivity, reduced
                      turnover, and enhanced brand perception.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Commercial Statistics Highlight */}
              <Box
                sx={{
                  bgcolor: "rgba(44, 62, 80, 0.05)",
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid rgba(44, 62, 80, 0.1)",
                }}
              >
                <Grid container spacing={3} textAlign="center">
                  <Grid item xs={3}>
                    <Typography variant="h4" fontWeight="bold" color="#C89B3C">
                      150+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Commercial Projects
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h4" fontWeight="bold" color="#C89B3C">
                      35%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Productivity Increase
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h4" fontWeight="bold" color="#C89B3C">
                      99%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Client Retention
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h4" fontWeight="bold" color="#C89B3C">
                      2.1x
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ROI Average
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
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
        Commercial COLLECTION
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
        Explore our commercial design solutions — creating spaces that work
        harder for your business, from offices to retail and beyond.
      </Typography>

      <CommercialProjects />

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
          Ready to Transform Your Business Environment?
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
          Let's work together to design a space that elevates your brand and
          empowers your team — creating environments where business thrives.
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
