"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Designers() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Senior Interior Designer",
      img: "/assets/home/profile1.png",
    },
    {
      name: "Marcus Rodriguez",
      role: "Architectural Designer",
      img: "/assets/home/profile2.png",
    },
    {
      name: "Aisha Khan",
      role: "Residential Design Specialist",
      img: "/assets/home/profile3.png",
    },
    {
      name: "David Kim",
      role: "3D Visualization Expert",
      img: "/assets/home/profile4.png",
    },
    {
      name: "Elena Petrova",
      role: "Lighting Design Consultant",
      img: "/assets/home/profile1.png",
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      img: "/assets/home/profile3.png",
    },
    {
      name: "Maya Sharma",
      role: "Furniture & Textile Designer",
      img: "/assets/home/profile2.png",
    },
    {
      name: "Carlos Mendez",
      role: "Sustainable Design Expert",
      img: "/assets/home/profile4.png",
    },
  ];
  return (
    <Box sx={{ textAlign: "center", mb: 12 }}>
      {/* Section Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: { xs: 11, md: 14 },
          letterSpacing: 9,
          textTransform: "uppercase",

          mb: 12,
        }}
      >
        DESIGN TEAM
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: "1720px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* Profile Image */}
            <Box
              sx={{
                width: 190,
                height: 190,

                overflow: "hidden",
                backgroundColor: "#edd927ff",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.07)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={170}
                height={170}
                objectFit="cover"
              />
            </Box>

            {/* Name and Role */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mt: 2,
                fontSize: "1rem",
                letterSpacing: 1,
                color: "#333",
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                mb: 2,
                fontSize: "0.9rem",
                letterSpacing: 0.5,
              }}
            >
              {member.role}
            </Typography>

            {/* Button */}
            <Button
              variant="outlined"
              sx={{
                color: "#333",
                borderColor: "#333",
                borderRadius: "50px",
                fontWeight: "bold",
                px: 3,
                py: 1,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                  color: "#fff",
                  borderColor: "#333",
                },
              }}
            >
              View Profile
            </Button>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
