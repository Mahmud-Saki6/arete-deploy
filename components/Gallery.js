"use client";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Gallery() {
  const galleryItems = [
    {
      type: "video",
      src: "/assets/home/office.mp4",
      title: "Workspace Tour",
      category: "Office",
    },
    {
      type: "image",
      src: "/assets/home/outside.jpeg",
      title: "Executive Suite",
      category: "Corporate",
    },

    {
      type: "image",
      src: "/assets/home/chair.jpeg",
      title: "Art Installation",
      category: "Decor",
    },
    {
      type: "image",
      src: "/assets/home/sofa.jpeg",
      title: "Modern Lounge",
      category: "Residential",
    },
    {
      type: "video",
      src: "/assets/home/furniture.mp4",
      title: "Design Process",
      category: "Behind Scenes",
    },
    {
      type: "video",
      src: "/assets/home/lighting.mp4",
      title: "Conference Room",
      category: "Corporate",
    },
    {
      type: "image",
      src: "/assets/home/table.jpeg",
      title: "Collaborative Space",
      category: "Workspace",
    },
  ];

  // Custom grid layout with varied sizes
  const getGridStyle = (index) => {
    const styles = [
      { gridColumn: "span 2", gridRow: "span 1" },
      { gridColumn: "span 1", gridRow: "span 2" },
      { gridColumn: "span 2", gridRow: "span 1" },
      { gridColumn: "span 2", gridRow: "span 1" },
      { gridColumn: "span 2", gridRow: "span 2" },
      { gridColumn: "span 1", gridRow: "span 1" },
      { gridColumn: "span 2", gridRow: "span 1" },
      { gridColumn: "span 2", gridRow: "span 1" },
      { gridColumn: "span 1", gridRow: "span 1" },
      { gridColumn: "span 1", gridRow: "span 2" },
    ];
    return styles[index % styles.length];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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

  const hoverVariants = {
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.4,
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
        mb: 16,
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: 13,
            letterSpacing: 8,
            textTransform: "uppercase",
            mb: 2,
            background: "linear-gradient(45deg, #000 30%, #666 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          G A L L E R Y
        </Typography>

        <Typography
          sx={{
            color: "rgba(0,0,0,0.6)",
            fontSize: 14,
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            lineHeight: 1.6,
          }}
        >
          A curation of our most recent projects that redefine modern design —
          where creativity meets precision and purpose.
        </Typography>
      </motion.div>
      {/* Dynamic Masonry Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridAutoRows: "200px",
            gap: "24px",
            gridAutoFlow: "dense",
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                ...getGridStyle(index),
              }}
            >
              {/* Media Container */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "fit",
                      transition: "transform 0.6s ease",
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "60%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="gradient-overlay"
                />

                {/* Bottom Info Bar */}

                {/* Type Badge */}
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
}
