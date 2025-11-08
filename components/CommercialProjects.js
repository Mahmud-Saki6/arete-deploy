"use client";
import { Box, Typography, Grid, IconButton, Modal } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

export default function CommercialProjects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // ========= PROJECT DATA =========
  const projects = [
    {
      title: "Commercial Lounge with Curved Ceiling Lighting",
      img: "/assets/commercial/img1.jpeg",
      category: "Interior Design | Commercial | Lounge | 2025",
    },
    {
      title: "Modern Commercial Waiting Area with Custom Storage Wall",
      img: "/assets/commercial/img2.jpeg",
      category: "Interior Design | Commercial | Reception | 2025",
    },
    {
      title: "Executive Office with Marble and Wood Finishes (GSO-01)",
      img: "/assets/commercial/img3.jpeg",
      category: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Executive Office with World Map Feature Wall",
      img: "/assets/commercial/img4.jpeg",
      category: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Modern Boardroom with Accent Lighting and Plants",
      img: "/assets/commercial/img5.jpeg",
      category: "Interior Design | Meeting Room | 2025",
    },
    {
      title: "Executive Meeting Room with Perforated Ceiling Lights",
      img: "/assets/commercial/img6.jpeg",
      category: "Interior Design | Boardroom | 2025",
    },
    {
      title: "Computer Lab with Blue Accent Lighting",
      img: "/assets/commercial/img7.jpeg",
      category: "Interior Design | IT Lab | 2025",
    },
    {
      title: "Modern Training Room with Dual-Tone Lighting",
      img: "/assets/commercial/img8.jpeg",
      category: "Interior Design | Training Center | 2025",
    },
    {
      title: "Classic CEO Office with Mahogany Finish and Decor Wall",
      img: "/assets/commercial/img9.jpeg",
      category: "Interior Design | CEO Office | 2025",
    },
    {
      title: "Luxury Conference Lounge with Wooden Paneling",
      img: "/assets/commercial/img10.jpeg",
      category: "Interior Design | Commercial Lounge | 2025",
    },
    {
      title: "Private Executive Cabin with Glass Partition and Natural Light",
      img: "/assets/commercial/img11.jpeg",
      category: "Interior Design | Executive Cabin | 2025",
    },
    {
      title: "Modern Workstation Zone with Lounge Seating",
      img: "/assets/commercial/img12.jpeg",
      category: "Interior Design | Workstation | 2025",
    },
    {
      title: "Bright Collaborative Workspace with Minimal Design",
      img: "/assets/commercial/img13.jpeg",
      category: "Interior Design | Collaborative Space | 2025",
    },
    {
      title: "Commercial Hallway with Glass Conference Rooms",
      img: "/assets/commercial/img14.jpeg",
      category: "Interior Design | Office Corridor | 2025",
    },
    {
      title: "Executive Meeting Room with Contemporary Wall Design",
      img: "/assets/commercial/img15.jpeg",
      category: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Boardroom with Modern Decor and Indoor Plants",
      img: "/assets/commercial/img16.jpeg",
      category: "Interior Design | Boardroom | 2025",
    },
    {
      title: "Classic Office Interior with Partition Workspaces",
      img: "/assets/commercial/img17.jpeg",
      category: "Interior Design | Workstation | 2025",
    },
    {
      title: "Compact Conference Room with Glass Table and Pendant Lights",
      img: "/assets/commercial/img18.jpeg",
      category: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Contemporary Open Office with Dual Desk Layout",
      img: "/assets/commercial/img19.jpeg",
      category: "Interior Design | Co-working Space | 2025",
    },
    {
      title: "Elegant Corridor with Wooden Accent Wall and Lounge Chair",
      img: "/assets/commercial/img20.jpeg",
      category: "Interior Design | Commercial | Reception | 2025",
    },
    {
      title: "Vintage Executive Chamber with Classic Wooden Finish",
      img: "/assets/commercial/img21.jpeg",
      category: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Functional Office Workspace with Glass Partitions",
      img: "/assets/commercial/img22.jpeg",
      category: "Interior Design | Office Cubicle | 2025",
    },
    {
      title: "Modern Executive Desk with Open Glass View",
      img: "/assets/commercial/img23.jpeg",
      category: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Large Collaborative Workspace with Wooden Ceiling Panels",
      img: "/assets/commercial/img24.jpeg",
      category: "Interior Design | Co-working | 2025",
    },
    {
      title: "Creative Studio with Bright Open Work Area",
      img: "/assets/commercial/img25.jpeg",
      category: "Interior Design | Workstation | 2025",
    },
    {
      title: "Minimalist Boardroom with Modern Ceiling Grid Design",
      img: "/assets/commercial/img26.jpeg",
      category: "Interior Design | Boardroom | 2025",
    },
    {
      title: "Compact Meeting Room with Wall Art and Pendant Lighting",
      img: "/assets/commercial/img27.jpeg",
      category: "Interior Design | Meeting Room | 2025",
    },
    {
      title: "Open Workstation Layout with Orange Dividers",
      img: "/assets/commercial/img28.jpeg",
      category: "Interior Design | Co-working Space | 2025",
    },
    {
      title: "Modern Boardroom with Soft Lighting and Neutral Palette",
      img: "/assets/commercial/img29.jpeg",
      category: "Interior Design | Meeting Room | 2025",
    },
    {
      title: "IFDC Reception with Geometric Wall and Illuminated Branding",
      img: "/assets/commercial/img30.jpeg",
      category: "Interior Design | Reception | Branding | 2025",
    },
    {
      title:
        "Minimalist Executive Suite with Marble Flooring and Ambient Lighting",
      img: "/assets/commercial/img31.jpeg",
      category: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Glass Meeting Room with Vertical Blinds and Ambient Lighting",
      img: "/assets/commercial/img32.jpeg",
      category: "Interior Design | Meeting Room | 2025",
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
    </Box>
  );
}
