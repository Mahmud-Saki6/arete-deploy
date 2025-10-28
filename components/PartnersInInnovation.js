"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PartnersSection() {
  const [isHovered, setIsHovered] = useState(false);

  const partners = [
    { name: "S.ALAM", img: "/assets/home/salom.jpg" },
    { name: "united group", img: "/assets/home/united.jfif" },
    { name: "Kartell", img: "/assets/partners/salom.jpg" },
    { name: "Louis Poulsen", img: "/assets/partners/united.jfif" },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
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
        DESIGN&nbsp;PARTNERS
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
        A curation of our most recent projects that redefine modern design —
        where creativity meets precision and purpose.
      </Typography>

      {/* Marquee Container with Overflow Hidden */}
      <Box
        sx={{
          position: "relative",
          mx: "auto",
          maxWidth: "1400px",
          overflow: "hidden", // This hides logos outside the container
          height: "300px", // Fixed height to contain the marquee
          display: "flex",
          alignItems: "center",
          mb: 12,
        }}
      >
        {/* Single Marquee Row */}
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{
            display: "flex",
            gap: "8rem",
            alignItems: "center",
            padding: "2rem 0",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                cursor: "pointer",
              }}
            >
              {/* Logo Container */}
              <Box
                sx={{
                  width: 180,
                  height: 180,
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  fill
                  style={{
                    objectFit: "contain",
                    padding: "2rem",
                  }}
                  sizes="(max-width: 768px) 100px, 180px"
                />
              </Box>

              {/* Partner Name */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  fontSize: "1.1rem",
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  minWidth: "180px",
                }}
              >
                {partner.name}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
