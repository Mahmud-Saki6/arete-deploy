"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Hero() {
  // ===== Slides with unique titles + descriptions =====
  const slides = [
    {
      id: 1,
      title: "Interior Design",
      desc: "Transforming spaces into timeless experiences — balancing form, function, and sophistication.",
      img: "/assets/home/hero1.jpeg",
    },
    {
      id: 2,
      title: "Furniture Solutions",
      desc: "Custom-crafted pieces blending craftsmanship, comfort, and innovation for every environment.",
      img: "/assets/home/hero2.jpeg",
    },
    {
      id: 3,
      title: "Decor & Installations",
      desc: "Art-driven installations and decor that elevate interiors with depth, texture, and personality.",
      img: "/assets/home/hero3.jpeg",
    },
    {
      id: 4,
      title: "Creative Intelligence",
      desc: "Design meets strategy — intelligent, data-inspired concepts crafted for lasting impact.",
      img: "/assets/home/hero4.jpeg",
    },
  ];

  // ===== Core State =====
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDraggingRail, setIsDraggingRail] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopStart, setScrollTopStart] = useState(0);
  const railRef = useRef(null);
  const autoPlayRef = useRef(null);

  // ===== Auto-play every 5 seconds =====
  useEffect(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  // ===== Navigation =====
  const handlePrev = () => {
    setCurrentIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
    centerActiveThumb();
  };

  const handleNext = () => {
    setCurrentIndex((p) => (p === slides.length - 1 ? 0 : p + 1));
    centerActiveThumb();
  };

  const goTo = (i) => {
    setCurrentIndex(i);
    centerActiveThumb(i);
  };

  // ===== Keep the active thumbnail centered in the right rail =====
  const centerActiveThumb = (idx = currentIndex) => {
    const rail = railRef.current;
    if (!rail) return;
    const thumb = rail.querySelector(`[data-thumb-index="${idx}"]`);
    if (!thumb) return;

    const railRect = rail.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const railCenter = rail.scrollTop + railRect.height / 2;
    const thumbCenter =
      rail.scrollTop + (thumbRect.top - railRect.top) + thumbRect.height / 2;

    const delta = thumbCenter - railCenter;
    rail.scrollTo({ top: rail.scrollTop + delta, behavior: "smooth" });
  };

  // ===== Drag logic for right rail =====
  const onMouseDownRail = (e) => {
    setIsDraggingRail(true);
    setStartY(e.pageY - railRef.current.offsetTop);
    setScrollTopStart(railRef.current.scrollTop);
  };
  const onMouseUpRail = () => setIsDraggingRail(false);
  const onMouseLeaveRail = () => setIsDraggingRail(false);
  const onMouseMoveRail = (e) => {
    if (!isDraggingRail) return;
    e.preventDefault();
    const y = e.pageY - railRef.current.offsetTop;
    const walk = (y - startY) * 1.5;
    railRef.current.scrollTop = scrollTopStart - walk;
  };

  // ===== Touch support =====
  const touchStartY = useRef(0);
  const touchStartScroll = useRef(0);
  const onTouchStartRail = (e) => {
    const t = e.touches[0];
    touchStartY.current = t.clientY;
    touchStartScroll.current = railRef.current.scrollTop;
  };
  const onTouchMoveRail = (e) => {
    const t = e.touches[0];
    const diff = (t.clientY - touchStartY.current) * 1.5;
    railRef.current.scrollTop = touchStartScroll.current - diff;
  };

  // ===== Layout constants =====
  const railWidth = 260;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
        {/* ===== LEFT: Main Hero ===== */}
        <Box
          sx={{
            position: "relative",
            width: `calc(100% - ${railWidth}px)`,
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Slides container */}
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: `${slides.length * 100}%`,
              transform: `translateX(-${
                (100 / slides.length) * currentIndex
              }%)`,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            {slides.map((s, i) => (
              <Box
                key={s.id}
                sx={{
                  position: "relative",
                  flex: `0 0 ${100 / slides.length}%`,
                  height: "100%",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${s.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 1s ease, opacity 0.8s ease",
                    transform: i === currentIndex ? "scale(1)" : "scale(0.96)",
                    opacity: i === currentIndex ? 1 : 0.6,
                  },
                }}
              >
                {/* Gradient overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
                  }}
                />

                {/* Text content */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    px: { xs: 3, md: 15 },
                  }}
                >
                  <Box sx={{ color: "#fff", maxWidth: 720 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        lineHeight: 1.1,
                        mb: 4,
                        textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                        letterSpacing: "-0.02em",
                        transition: "transform 0.6s ease, opacity 0.6s ease",
                        transform:
                          i === currentIndex
                            ? "translateY(0)"
                            : "translateY(10px)",
                        opacity: i === currentIndex ? 1 : 0,
                      }}
                    >
                      {s.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        maxWidth: 700,
                        opacity: i === currentIndex ? 0.95 : 0,
                        transition:
                          "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
                        transform:
                          i === currentIndex
                            ? "translateY(0)"
                            : "translateY(6px)",
                        textShadow: "1px 1px 6px rgba(0,0,0,0.35)",
                        mb: 3,
                      }}
                    >
                      {s.desc}
                    </Typography>

                    <Button variant="contained" color="primary" size="large">
                      Explore Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            aria-label="Previous slide"
            sx={{
              position: "absolute",
              top: "50%",
              left: 16,
              transform: "translateY(-50%)",
              color: "#fff",
              background: "rgba(0,0,0,0.35)",
              "&:hover": { background: "rgba(0,0,0,0.55)" },
              zIndex: 3,
            }}
          >
            <ArrowBackIos fontSize="small" />
          </IconButton>
          <IconButton
            onClick={handleNext}
            aria-label="Next slide"
            sx={{
              position: "absolute",
              top: "50%",
              right: 16 + railWidth,
              transform: "translateY(-50%)",
              color: "#fff",
              background: "rgba(0,0,0,0.35)",
              "&:hover": { background: "rgba(0,0,0,0.55)" },
              zIndex: 3,
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>

          {/* Dots */}
          <Box
            sx={{
              position: "absolute",
              left: 24,
              bottom: 24,
              display: "flex",
              gap: 1,
              zIndex: 3,
            }}
          >
            {slides.map((_, i) => (
              <Box
                key={i}
                onClick={() => goTo(i)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor:
                    i === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* ===== RIGHT: Vertical Thumbnail Rail ===== */}
        <Box
          ref={railRef}
          onMouseDown={onMouseDownRail}
          onMouseUp={onMouseUpRail}
          onMouseLeave={onMouseLeaveRail}
          onMouseMove={onMouseMoveRail}
          onTouchStart={onTouchStartRail}
          onTouchMove={onTouchMoveRail}
          sx={{
            width: `${railWidth}px`,
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            bgcolor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            px: 2,
            py: 2,
            cursor: isDraggingRail ? "grabbing" : "grab",
            "&::-webkit-scrollbar": { width: 0 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.12em",
              display: "block",
              mb: 1.5,
              ml: 1,
            }}
          >
            Browse
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {slides.map((s, i) => {
              const active = i === currentIndex;
              return (
                <Box
                  key={s.id}
                  data-thumb-index={i}
                  onClick={() => goTo(i)}
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                    height: 100,
                    boxShadow: active
                      ? "0 0 0 2px #fff inset, 0 6px 18px rgba(0,0,0,0.35)"
                      : "0 0 0 1px rgba(255,255,255,0.15) inset",
                    transform: active ? "scale(1.02)" : "scale(1.0)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={s.img}
                    alt={s.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: active ? 1 : 0.75,
                      transition: "opacity 0.25s ease",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "rgba(0,0,0,0.45)",
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <Typography
                      noWrap
                      variant="caption"
                      sx={{
                        color: "#fff",
                        textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                        fontWeight: active ? 700 : 500,
                      }}
                    >
                      {s.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
