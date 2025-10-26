"use client";
import { Box, Typography, Button, Grid, Chip, IconButton } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function LatestWorkSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Executive Meeting Room",
      img: "/assets/home/latest1.jpeg",
      description:
        "A modern boardroom with custom-designed furniture, acoustic wall finishes, and integrated lighting. The space is tailored for high-level discussions.",
      category: "Interior Design | Corporate | 2025",
      btn: "View Project",
      tags: ["Corporate", "Modern", "Luxury"],
    },
    {
      title: "Collaborative Workspace",
      img: "/assets/home/latest2.jpeg",
      description:
        "A modern boardroom with custom-designed furniture, acoustic wall finishes, and integrated lighting. The space is tailored for high-level discussions.",
      category: "Interior Design | Workspace | 2025",
      btn: "View Project",
      tags: ["Collaborative", "Innovative", "Ergonomic"],
    },
    {
      title: "Sculpture Installation",
      img: "/assets/home/latest3.jpeg",
      description:
        "Contemporary art installation that defines the corporate reception area. With geometric precision and innovative design, the sculpture embodies creativity and innovation.",
      category: "Decor | Art Installation | 2025",
      btn: "View Project",
      tags: ["Art", "Contemporary", "Statement"],
    },
    {
      title: "Executive Workspace",
      img: "/assets/home/latest4.jpeg",
      description:
        "A modern workspace designed with ergonomic furniture and integrated technology, perfect for high-level professional meetings and brainstorming sessions.",
      category: "Interior Design | Workspace | 2025",
      btn: "View Project",
      tags: ["Executive", "Tech-Integrated", "Premium"],
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
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    initial: {
      opacity: 0,
      background: "rgba(0, 0, 0, 0)",
    },
    hover: {
      opacity: 1,
      background: "rgba(0, 0, 0, 0.7)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  const viewButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1720px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ md: 6, xs: 12 }} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 450,
                    overflow: "hidden",
                    borderRadius: 4,
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    "&:hover": {
                      boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  {/* Main Image */}
                  <motion.div
                    variants={imageVariants}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      priority={index < 2}
                    />
                  </motion.div>

                  {/* Quick View Button - Always shows on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 3,
                      opacity: activeIndex === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: activeIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          width: 70,
                          height: 70,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                          "&:hover": {
                            backgroundColor: "grey.100",
                            transform: "scale(1.1)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <VisibilityIcon fontSize="large" />
                      </IconButton>
                    </motion.div>
                  </Box>

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                      opacity: activeIndex === index ? 0 : 0.7,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    variants={overlayVariants}
                    initial="initial"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      padding: 4,
                    }}
                  >
                    <motion.div
                      variants={contentVariants}
                      initial="initial"
                      style={{
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "400px",
                      }}
                    >
                      {/* Tags */}
                      <motion.div variants={textItemVariants}>
                        <Box
                          sx={{
                            mb: 2,
                            display: "flex",
                            gap: 1,
                            justifyContent: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {project.tags.map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              label={tag}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(255,255,255,0.15)",
                                color: "white",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                fontSize: "0.7rem",
                                height: "24px",
                              }}
                            />
                          ))}
                        </Box>
                      </motion.div>

                      {/* Title */}
                      <motion.div variants={textItemVariants}>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          sx={{
                            mb: 2,
                            letterSpacing: 1,
                            textTransform: "uppercase",
                            fontSize: { xs: 20, md: 24 },
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                          }}
                        >
                          {project.title}
                        </Typography>
                      </motion.div>

                      {/* Description */}
                      <motion.div variants={textItemVariants}>
                        <Typography
                          sx={{
                            fontSize: 15,
                            mb: 3,
                            lineHeight: 1.6,
                            opacity: 0.9,
                          }}
                        >
                          {project.description}
                        </Typography>
                      </motion.div>

                      {/* Category */}
                      <motion.div variants={textItemVariants}>
                        <Typography
                          sx={{
                            fontSize: 12,
                            color: "#e0e0e0",
                            letterSpacing: 1,
                            mb: 3,
                          }}
                        >
                          {project.category}
                        </Typography>
                      </motion.div>

                      {/* Button */}
                      <motion.div variants={textItemVariants}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outlined"
                            sx={{
                              color: "#fff",
                              borderColor: "#fff",
                              borderRadius: "50px",
                              px: 4,
                              py: 1.5,
                              fontWeight: "bold",
                              letterSpacing: 1.5,
                              fontSize: "0.8rem",
                              backdropFilter: "blur(10px)",
                              backgroundColor: "rgba(255,255,255,0.1)",
                              borderWidth: "2px",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "#fff",
                                color: "#000",
                                boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)",
                                borderColor: "#fff",
                              },
                            }}
                          >
                            {project.btn}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Static Bottom Info (visible without hover) */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      padding: 3,
                      textAlign: "left",
                      opacity: activeIndex === index ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "white",
                        mb: 1,
                        fontSize: 18,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "#e0e0e0",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {project.category}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        style={{ marginTop: "4rem" }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontWeight: "regular",
              letterSpacing: 1.5,
              fontSize: "1rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#333",
                boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              },
            }}
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
}
