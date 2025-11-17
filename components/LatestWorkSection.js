"use client";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Modal,
  Button,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function ResidentialProjects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // ========= PROJECT DATA =========

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

  // ========= HANDLERS =========
  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // ========= ANIMATIONS =========
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // ========= RENDER =========
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1720px",
        mx: "auto",
        textAlign: "center",
        mb: 12,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
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
                      style={{ objectFit: "cover" }}
                      priority={index < 2}
                    />
                  </motion.div>

                  {/* View Button */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 3,
                      opacity: activeIndex === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: activeIndex === index ? "auto" : "none",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: activeIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(project);
                        }}
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

                  {/* Title & Category */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      p: 3,
                      textAlign: "left",
                      opacity: activeIndex === index ? 0 : 1,
                      transition: "opacity 0.3s ease",
                      zIndex: 1,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
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

      {/* === MODAL (Fixed for Mobile) === */}
      <Modal
        open={Boolean(selectedProject)}
        onClose={handleCloseModal}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0,0,0,0.95) !important",
          },
        }}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            padding: "16px", // mobile safe padding
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "fixed",
              top: 12,
              right: 12,
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Full Image */}
          {selectedProject && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "900px",
                height: { xs: "70vh", sm: "85vh" },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
                zIndex: 5,
              }}
            >
              <Image
                src={selectedProject.img}
                alt={selectedProject.title}
                fill
                style={{
                  objectFit: "contain",
                  backgroundColor: "black",
                }}
                priority
              />
            </Box>
          )}
        </motion.div>
      </Modal>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        style={{ marginTop: "4rem" }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/portfolio/all" passHref>
            <Button
              component="a"
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
          </Link>
        </motion.div>
      </motion.div>
    </Box>
  );
}
