"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const galleryItems = [
    { type: "video", src: "/assets/home/office.mp4" },
    { type: "image", src: "/assets/home/outside.jpeg" },
    { type: "image", src: "/assets/home/latest5.jpeg" },
    { type: "image", src: "/assets/home/sofa.jpeg" },
    { type: "video", src: "/assets/home/furniture.mp4" },
    { type: "image", src: "/assets/home/wall.jpeg" },
    { type: "video", src: "/assets/home/lighting.mp4" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
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
        display: { xs: "none", md: "block" }, // Hide entire gallery on mobile
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
            fontSize: { xs: 11, md: 14 },
            letterSpacing: 9,
            textTransform: "uppercase",
            mb: 2,
            background: "linear-gradient(45deg, #000 30%, #666 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          GALLERY
        </Typography>

        <Typography
          sx={{
            color: "rgba(0,0,0,0.6)",
            fontSize: { xs: 11, md: 14 },
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

      {/* Grid System */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // single column on phones
              sm: "repeat(6, 1fr)", // 6 columns on tablets
              md: "repeat(12, 1fr)", // 12 columns on laptops/desktops
            },
            gap: { xs: 2, sm: 2.5, md: 2 },
            gridAutoFlow: "dense",
            "& .cell": {
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          {/* ROW 1 */}
          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "1 / span 8",
              height: "370px",
            }}
          >
            <video
              src={galleryItems[4].src}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>

          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "9 / span 4",
              height: "370px",
            }}
          >
            <Image
              src={galleryItems[1].src}
              alt="Gallery"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* ROW 2 */}
          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "1 / span 6",
              height: "300px",
            }}
          >
            <Image
              src={galleryItems[2].src}
              alt="Gallery"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "7 / span 6",
              height: "300px",
            }}
          >
            <Image
              src={galleryItems[3].src}
              alt="Gallery"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* ROW 3 */}
          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "1 / span 5",
              height: "300px",
            }}
          >
            <video
              src={galleryItems[0].src}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "6 / span 3",
              height: "300px",
            }}
          >
            <Image
              src={galleryItems[5].src}
              alt="Gallery"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* VIDEO */}
          <motion.div
            className="cell"
            variants={itemVariants}
            style={{
              gridColumn: "9 / span 4",
              height: "300px",
            }}
          >
            <video
              src={galleryItems[6].src}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}
