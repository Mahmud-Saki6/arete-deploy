"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetTheCreativeMinds() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & Creative Director",
      img: "/assets/home/profile1.png",
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & Head of Design",
      img: "/assets/home/profile2.png",
    },
    {
      name: "Alex Lee",
      role: "Lead Architect",
      img: "/assets/home/profile3.png",
    },
    {
      name: "Priya Rahman",
      role: "Interior Design Specialist",
      img: "/assets/home/profile4.png",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", my: 12 }}>
      {/* Section Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: 13,
          letterSpacing: 8,
          textTransform: "uppercase",
          mt: 12,
          mb: 12,
        }}
      >
        Meet The Creative Minds
      </Typography>

      <Box
        sx={{
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
                width: 250,
                height: 250,

                overflow: "hidden",
                backgroundColor: "#ffeb3b",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={220}
                height={220}
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
                px: 4,
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
