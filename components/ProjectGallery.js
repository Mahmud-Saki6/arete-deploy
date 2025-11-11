"use client";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Modal,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ProjectGallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ========= COMBINED PROJECT DATA =========
  const allProjects = [
    // Bedroom
    {
      title: "Luxury Bedroom with Canopy Bed",
      img: "/assets/residential/img1.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Luxury | Residential | 2025",
    },
    {
      title: "Contemporary Bedroom with Arch Design",
      img: "/assets/residential/img2.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Contemporary | Residential | 2025",
    },
    {
      title: "Modern Bedroom with Neutral Tones",
      img: "/assets/residential/img4.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Modern | Residential | 2025",
    },
    {
      title: "Natural Bedroom with Soft Linens",
      img: "/assets/residential/img5.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Natural | Residential | 2025",
    },
    {
      title: "Chic Modern Bedroom with Sleek Decor",
      img: "/assets/residential/img6.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Modern | Residential | 2025",
    },
    {
      title: "Bright Artistic Bedroom with Inviting Decor",
      img: "/assets/residential/img7.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Artistic | Residential | 2025",
    },
    {
      title: "Cozy Bedroom with Natural Light and Neutral Tones",
      img: "/assets/residential/img8.jpeg",
      category: "Bedroom",
      type: "Residential",
      fullCategory: "Bedroom | Cozy | Residential | 2025",
    },

    // Living Room
    {
      title: "Eclectic Living Room with Art Gallery Wall",
      img: "/assets/residential/img3.jpeg",
      category: "Living Room",
      type: "Residential",
      fullCategory: "Living Room | Eclectic | Residential | 2025",
    },

    // Executive Office
    {
      title: "Executive Office with Marble and Wood Finishes (GSO-01)",
      img: "/assets/commercial/img3.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Executive Office with World Map Feature Wall",
      img: "/assets/commercial/img4.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Classic CEO Office with Mahogany Finish and Decor Wall",
      img: "/assets/commercial/img9.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Private Executive Cabin with Glass Partition and Natural Light",
      img: "/assets/commercial/img11.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Vintage Executive Chamber with Classic Wooden Finish",
      img: "/assets/commercial/img21.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },
    {
      title: "Modern Executive Desk with Open Glass View",
      img: "/assets/commercial/img23.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },
    {
      title:
        "Minimalist Executive Suite with Marble Flooring and Ambient Lighting",
      img: "/assets/commercial/img31.jpeg",
      category: "Executive Office",
      type: "Commercial",
      fullCategory: "Interior Design | Executive Office | 2025",
    },

    // Meeting Room
    {
      title: "Modern Boardroom with Accent Lighting and Plants",
      img: "/assets/commercial/img5.jpeg",
      category: "Meeting Room",
      type: "Commercial",
      fullCategory: "Interior Design | Meeting Room | 2025",
    },
    {
      title: "Compact Meeting Room with Wall Art and Pendant Lighting",
      img: "/assets/commercial/img27.jpeg",
      category: "Meeting Room",
      type: "Commercial",
      fullCategory: "Interior Design | Meeting Room | 2025",
    },
    {
      title: "Modern Boardroom with Soft Lighting and Neutral Palette",
      img: "/assets/commercial/img29.jpeg",
      category: "Meeting Room",
      type: "Commercial",
      fullCategory: "Interior Design | Meeting Room | 2025",
    },
    {
      title: "Glass Meeting Room with Vertical Blinds and Ambient Lighting",
      img: "/assets/commercial/img32.jpeg",
      category: "Meeting Room",
      type: "Commercial",
      fullCategory: "Interior Design | Meeting Room | 2025",
    },

    // Workstation
    {
      title: "Modern Workstation Zone with Lounge Seating",
      img: "/assets/commercial/img12.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },
    {
      title: "Classic Office Interior with Partition Workspaces",
      img: "/assets/commercial/img17.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },
    {
      title: "Creative Studio with Bright Open Work Area",
      img: "/assets/commercial/img25.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },
    {
      title: "Functional Office Workspace with Glass Partitions",
      img: "/assets/commercial/img22.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },

    // Conference Room
    {
      title: "Executive Meeting Room with Perforated Ceiling Lights",
      img: "/assets/commercial/img6.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Executive Meeting Room with Contemporary Wall Design",
      img: "/assets/commercial/img15.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Boardroom with Modern Decor and Indoor Plants",
      img: "/assets/commercial/img16.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Compact Conference Room with Glass Table and Pendant Lights",
      img: "/assets/commercial/img18.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Minimalist Boardroom with Modern Ceiling Grid Design",
      img: "/assets/commercial/img26.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },

    // Living Room (Commercial lounges and waiting areas)
    {
      title: "Commercial Lounge with Curved Ceiling Lighting",
      img: "/assets/commercial/img1.jpeg",
      category: "Living Room",
      type: "Commercial",
      fullCategory: "Interior Design | Commercial | Lounge | 2025",
    },
    {
      title: "Modern Commercial Waiting Area with Custom Storage Wall",
      img: "/assets/commercial/img2.jpeg",
      category: "Living Room",
      type: "Commercial",
      fullCategory: "Interior Design | Commercial | Reception | 2025",
    },
    {
      title: "Luxury Conference Lounge with Wooden Paneling",
      img: "/assets/commercial/img10.jpeg",
      category: "Living Room",
      type: "Commercial",
      fullCategory: "Interior Design | Commercial Lounge | 2025",
    },
    {
      title: "Elegant Corridor with Wooden Accent Wall and Lounge Chair",
      img: "/assets/commercial/img20.jpeg",
      category: "Living Room",
      type: "Commercial",
      fullCategory: "Interior Design | Commercial | Reception | 2025",
    },
    {
      title: "IFDC Reception with Geometric Wall and Illuminated Branding",
      img: "/assets/commercial/img30.jpeg",
      category: "Living Room",
      type: "Commercial",
      fullCategory: "Interior Design | Reception | Branding | 2025",
    },

    // Workstation (Collaborative spaces and co-working areas)
    {
      title: "Bright Collaborative Workspace with Minimal Design",
      img: "/assets/commercial/img13.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },
    {
      title: "Contemporary Open Office with Dual Desk Layout",
      img: "/assets/commercial/img19.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },
    {
      title: "Large Collaborative Workspace with Wooden Ceiling Panels",
      img: "/assets/commercial/img24.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },
    {
      title: "Open Workstation Layout with Orange Dividers",
      img: "/assets/commercial/img28.jpeg",
      category: "Workstation",
      type: "Commercial",
      fullCategory: "Interior Design | Workstation | 2025",
    },

    // Conference Room (Training centers and labs)
    {
      title: "Computer Lab with Blue Accent Lighting",
      img: "/assets/commercial/img7.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Modern Training Room with Dual-Tone Lighting",
      img: "/assets/commercial/img8.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
    {
      title: "Commercial Hallway with Glass Conference Rooms",
      img: "/assets/commercial/img14.jpeg",
      category: "Conference Room",
      type: "Commercial",
      fullCategory: "Interior Design | Conference Room | 2025",
    },
  ];
  // ========= GROUP PROJECTS BY CATEGORY =========
  const projectsByCategory = useMemo(() => {
    const grouped = {};
    allProjects.forEach((project) => {
      if (!grouped[project.category]) {
        grouped[project.category] = [];
      }
      grouped[project.category].push(project);
    });
    return grouped;
  }, []);

  // ========= GET ALL CATEGORIES =========
  const categories = Object.keys(projectsByCategory);

  // ========= HANDLERS =========
  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);
  const handleCategoryClick = (category) => setSelectedCategory(category);
  const handleBackToCategories = () => setSelectedCategory(null);

  // ========= RENDER CATEGORY VIEW =========
  const renderCategoryView = () => (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1720px",
        mx: "auto",
        mt: 8,
        mb: 8,
      }}
    >
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid size={{ xs: 12, md: 6 }} key={category}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 250,
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  },
                }}
                onClick={() => handleCategoryClick(category)}
              >
                <Image
                  src={projectsByCategory[category][0].img}
                  alt={category}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    color: "white",
                    p: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {category}
                  </Typography>
                  <Typography variant="body2">
                    {projectsByCategory[category].length} projects
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // ========= RENDER PROJECTS VIEW =========
  const renderProjectsView = () => {
    const categoryProjects = projectsByCategory[selectedCategory] || [];

    return (
      <Box
        sx={{
          width: "90%",
          maxWidth: "1720px",
          mx: "auto",
          py: 8,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Button
            onClick={handleBackToCategories}
            startIcon={<ArrowBackIosIcon />}
            sx={{ color: "#2c3e50", flexShrink: 0 }}
          >
            Back to Categories
          </Button>

          <Chip
            label={`${categoryProjects.length} projects`}
            sx={{
              backgroundColor: "#C89B3C",
              color: "white",
              flexShrink: 0,
              display: { xs: "none", sm: "inline-flex" }, // Hide on mobile, show on small screens and up
            }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: 24,
            flex: 1,
            mx: 2,
            mb: 5,
          }}
        >
          {selectedCategory} Projects
        </Typography>
        {/* Projects Grid */}
        <Grid container spacing={3}>
          {categoryProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

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
                    }}
                  >
                    <IconButton
                      onClick={() => handleOpenModal(project)}
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                        "&:hover": { backgroundColor: "grey.100" },
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Box>

                  {/* Project Info */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      color: "white",
                      p: 2,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold" noWrap>
                      {project.title}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      {project.type}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <>
      {selectedCategory ? renderProjectsView() : renderCategoryView()}

      {/* Fixed Modal */}
      <Modal
        open={Boolean(selectedProject)}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0,0,0,0.95)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "auto",
            height: "auto",
            outline: "none",
          }}
        >
          {selectedProject && (
            <>
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

              {/* Project Info */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  color: "white",
                  p: 3,
                  zIndex: 2,
                }}
              ></Box>

              {/* Image Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: 1,
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src={selectedProject.img}
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "85vh",
                    objectFit: "contain",
                  }}
                  priority
                />
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
