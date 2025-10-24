"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Typography, IconButton, Avatar, Stack } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    logoText: "SP",
    stars: 5,
    quote:
      "Thanks to Hospital Product Directory, we were able to expand our reach and improve our business effectiveness. We highly recommend their services.",
    name: "MR. SPARKONTROL",
    role: "CEO",
  },
  {
    logoText: "EH",
    stars: 5,
    quote:
      "Ozanera is a dedicated B2B portal for the healthcare sector. Every inquiry we received through the platform was genuine.",
    name: "MR. RAHUL DOSHI",
    role: "M.D",
  },
  {
    logoText: "GL",
    stars: 5,
    quote:
      "Keeping a company profile on Ozanera helped us acquire more customers. It’s the only directory built for the healthcare sector. Thank you Ozanera.",
    name: "MR. MAHESH KULKARNI",
    role: "CEO",
  },
  {
    logoText: "MT",
    stars: 4,
    quote:
      "The listing flow was simple and the visibility we got exceeded expectations. Great channel for qualified B2B leads.",
    name: "MRS. PRIYA SHAH",
    role: "Marketing Head",
  },
  {
    logoText: "CP",
    stars: 5,
    quote:
      "Reliable, niche, and effective. We consistently get high-intent queries from the right buyers.",
    name: "MR. ARUN NAIR",
    role: "Director",
  },
];

const mod = (n, m) => ((n % m) + m) % m;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef(null);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => prev + newDirection);
  };

  useEffect(() => {
    if (hovering) return;
    timerRef.current = setInterval(() => paginate(1), 10000);
    return () => clearInterval(timerRef.current);
  }, [hovering]);

  const currentIndex = mod(index, testimonials.length);
  const testimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 0.8,
        ease: [0.45, 0.05, 0.35, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.45, 0.05, 0.35, 1],
      },
    }),
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#F5F1E5",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: 13,
          letterSpacing: 8,
          textTransform: "uppercase",
        }}
        mb={2}
      >
        client&nbsp;experiences
      </Typography>

      <Typography
        sx={{
          color: "rgba(0,0,0,0.6)",
          fontSize: 14,
          maxWidth: 700,
          mx: "auto",
          mb: 8,
        }}
      >
        Stories of collaboration and success — real experiences shared by our
        valued clients.
      </Typography>

      {/* Carousel */}
      <Box
        sx={{
          position: "relative",
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: "absolute",
              width: "650px",
              height: "260px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              padding: "1.8rem 1.6rem",
              textAlign: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#ddd0aa",
                color: "#331e15",
                fontWeight: 700,
                margin: "0 auto 10px",
                width: 50,
                height: 50,
                fontSize: 18,
              }}
            >
              {testimonial.logoText}
            </Avatar>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={0.5}
              mb={1.2}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <StarRoundedIcon
                  key={i}
                  sx={{
                    color: i < testimonial.stars ? "#331e15" : "#D0D0D0",
                    fontSize: 18,
                  }}
                />
              ))}
            </Stack>
            <Typography
              sx={{ color: "#444", fontSize: 13, lineHeight: 1.5, mb: 1 }}
            >
              “ {testimonial.quote} ”
            </Typography>
            <Typography
              sx={{ fontWeight: 700, fontSize: 13, color: "#222", mt: 1 }}
            >
              — {testimonial.name}
            </Typography>
            <Typography sx={{ fontSize: 11, color: "#777" }}>
              {testimonial.role}
            </Typography>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <IconButton
          onClick={() => paginate(-1)}
          sx={{
            position: "absolute",
            left: "12%",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <ChevronLeftRoundedIcon />
        </IconButton>

        <IconButton
          onClick={() => paginate(1)}
          sx={{
            position: "absolute",
            right: "12%",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <ChevronRightRoundedIcon />
        </IconButton>
      </Box>

      {/* Dots */}
      <Stack direction="row" justifyContent="center" spacing={1} mt={5}>
        {testimonials.map((_, i) => {
          const active = i === currentIndex;
          return (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: active ? 10 : 8,
                height: active ? 10 : 8,
                borderRadius: "50%",
                bgcolor: active ? "#331e15" : "rgba(0,0,0,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
