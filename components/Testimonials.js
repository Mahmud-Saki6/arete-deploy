"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Typography, IconButton, Avatar, Stack } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    logoText: "AI",
    stars: 5,
    quote:
      "Arete turned our workspace into a visual experience. Every corner now tells our brand story through design and precision craftsmanship.",
    name: "MR. ADNAN ISLAM",
    role: "Managing Director, Vertex Group",
  },
  {
    logoText: "MS",
    stars: 5,
    quote:
      "We wanted a home that felt timeless yet modern. The Arete team blended materials, textures, and light in a way that exceeded expectations.",
    name: "MRS. MUBINA SULTANA",
    role: "Homeowner, Dhaka",
  },
  {
    logoText: "NT",
    stars: 4,
    quote:
      "Our boutique hotel project was handled with incredible attention to detail — from concept sketches to the final décor installation.",
    name: "MR. NABIL TAREK",
    role: "CEO, Urban Nest Hotels",
  },
  {
    logoText: "FH",
    stars: 5,
    quote:
      "The furniture line Arete custom-designed for our flagship store combined comfort and artistry seamlessly. Truly one-of-a-kind pieces.",
    name: "MS. FARHANA HAQUE",
    role: "Creative Director, StudioHaus",
  },
  {
    logoText: "RC",
    stars: 5,
    quote:
      "Their design intelligence and understanding of space are unmatched. Arete didn’t just design interiors — they redefined how our team works and feels every day.",
    name: "MR. RAYHAN CHOWDHURY",
    role: "COO, Novalab Technologies",
  },
];

const mod = (n, m) => ((n % m) + m) % m;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timerRef = useRef(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => prev + newDirection);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      paginate(1); // Swipe left = next
    }
    if (isRightSwipe) {
      paginate(-1); // Swipe right = previous
    }
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
          fontSize: { xs: 11, md: 14 },
          letterSpacing: 9,
          textTransform: "uppercase",
        }}
        mb={2}
      >
        client&nbsp;experiences
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
              touchAction: "pan-y", // Enable vertical scrolling while allowing horizontal swipe
            }}
            // Touch events for mobile swipe
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
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
              mb={1.6}
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
              sx={{
                textAlign: "center",
                color: "#444",
                fontSize: { xs: 11, md: 13 },
                maxWidth: { xs: 300, md: 700 },
                lineHeight: 1.5,
                mb: 2,
                mx: "auto",
              }}
            >
              " {testimonial.quote} "
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

        {/* Arrows - Hide on mobile for cleaner swipe experience */}
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
            display: { xs: "none", md: "flex" }, // Hide on mobile
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
            display: { xs: "none", md: "flex" }, // Hide on mobile
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
