"use client";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function OurProjectsSection() {
  const projects = [
    {
      title: "Commercial Projects",
      img: "/assets/home/commercial.jpeg",
      btn: "Explore Commercial",
      link: "/portfolio/commercial",
    },
    {
      title: "Residential Projects",
      img: "/assets/home/residential.jpeg",
      btn: "Explore Residential",
      link: "/portfolio/residential",
    },
  ];

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1720px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: { xs: 11, md: 14 },
          letterSpacing: 9,
          textTransform: "uppercase",
          mt: 12,
        }}
        mb={2}
      >
        DESIGN&nbsp;WORKS
      </Typography>

      <Typography
        sx={{
          color: "rgba(0,0,0,0.6)",
          fontSize: { xs: 11, md: 14 },
          maxWidth: 700,
          mx: "auto",
          mb: 8,
        }}
      >
        From corporate offices to modern homes — our design philosophy bridges
        aesthetics, innovation, and timeless elegance.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid
            size={{ xs: 12, sm: 6 }}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                position: "relative",
                height: { xs: 280, sm: 400, md: 550 },
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.4s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* ✅ Properly Sized Image */}
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
                  color: "#fff",
                  textAlign: "left",
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, letterSpacing: 1 }}
                >
                  {project.title}
                </Typography>

                <Link href={project.link} passHref>
                  <Button
                    component="a"
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      borderRadius: "4px",
                      px: 3,
                      py: 1,
                      mb: 5,
                      fontSize: 13,
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                  >
                    {project.btn}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
