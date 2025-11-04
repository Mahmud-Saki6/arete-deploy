"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, TouchApp } from "@mui/icons-material";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

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
  const [touchStartX, setTouchStartX] = useState(0);
  const railRef = useRef(null);
  const autoPlayRef = useRef(null);
  const touchTimeoutRef = useRef(null);

  // ===== Auto-play every 5 seconds (disabled during touch) =====
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
    if (!isMobile) centerActiveThumb();
  };

  const handleNext = () => {
    setCurrentIndex((p) => (p === slides.length - 1 ? 0 : p + 1));
    if (!isMobile) centerActiveThumb();
  };

  const goTo = (i) => {
    setCurrentIndex(i);
    if (!isMobile) centerActiveThumb(i);
  };

  // ===== Keep the active thumbnail centered in the right rail (desktop only) =====
  const centerActiveThumb = (idx = currentIndex) => {
    if (isMobile) return;

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

  // ===== Touch swipe for mobile =====
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    // Pause autoplay during touch interaction
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next
        handleNext();
      } else {
        // Swipe right - previous
        handlePrev();
      }
    }

    // Resume autoplay after a delay
    touchTimeoutRef.current = setTimeout(() => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }, 3000);
  };

  // ===== Drag logic for right rail (desktop only) =====
  const onMouseDownRail = (e) => {
    if (isMobile) return;
    setIsDraggingRail(true);
    setStartY(e.pageY - railRef.current.offsetTop);
    setScrollTopStart(railRef.current.scrollTop);
  };

  const onMouseUpRail = () => setIsDraggingRail(false);
  const onMouseLeaveRail = () => setIsDraggingRail(false);

  const onMouseMoveRail = (e) => {
    if (!isDraggingRail || isMobile) return;
    e.preventDefault();
    const y = e.pageY - railRef.current.offsetTop;
    const walk = (y - startY) * 1.5;
    railRef.current.scrollTop = scrollTopStart - walk;
  };

  // ===== Touch support for rail (tablet) =====
  const touchStartY = useRef(0);
  const touchStartScroll = useRef(0);

  const onTouchStartRail = (e) => {
    if (isMobile) return;
    const t = e.touches[0];
    touchStartY.current = t.clientY;
    touchStartScroll.current = railRef.current.scrollTop;
  };

  const onTouchMoveRail = (e) => {
    if (isMobile) return;
    const t = e.touches[0];
    const diff = (t.clientY - touchStartY.current) * 1.5;
    railRef.current.scrollTop = touchStartScroll.current - diff;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", md: "100vh" },
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* ===== MAIN HERO SECTION ===== */}
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              md: `calc(100% - ${isTablet ? "200px" : "260px"})`,
            },
            height: { xs: "100%", md: "100%" },
            overflow: "hidden",
            order: { xs: 2, md: 1 },
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {slides.map((s, i) => (
              <Box
                key={s.id}
                sx={{
                  position: "relative",
                  flex: `0 0 ${100 / slides.length}%`,
                  height: "100%",
                  overflow: "hidden", // Prevent any overflow
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${s.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 1.2s ease, opacity 0.8s ease",
                    // Removed the scale effect that was causing next image preview
                    transform: "scale(1.1)", // Consistent scale for all images
                    opacity: i === currentIndex ? 1 : 0, // Only show current slide
                  },
                }}
              >
                {/* Enhanced gradient overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: {
                      xs: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.5) 100%)",
                      md: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%)",
                    },
                    opacity: i === currentIndex ? 1 : 0, // Only show overlay for current slide
                    transition: "opacity 0.8s ease",
                  }}
                />

                {/* Text content - Only show for current slide */}
                {i === currentIndex && (
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      height: "100%",
                      display: "flex",
                      alignItems: { xs: "flex-end", md: "center" },
                      justifyContent: { xs: "center", md: "flex-start" },
                      textAlign: { xs: "center", md: "left" },
                      px: { xs: 3, md: 15 },
                      pb: { xs: 6, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        color: "#fff",
                        maxWidth: { xs: "100%", md: 600 },
                        mb: { xs: 4, md: 0 },
                      }}
                    >
                      <Typography
                        variant={isMobile ? "h5" : "h3"} // Reduced from h4 to h5 on mobile
                        sx={{
                          fontWeight: 800,
                          lineHeight: 1.1,
                          mb: { xs: 2, md: 3 }, // Reduced margin on mobile
                          textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                          letterSpacing: "-0.02em",
                          fontSize: {
                            xs: "1.75rem", // Smaller font size on mobile
                            sm: "2rem",
                            md: "3rem",
                          },
                          transition: "transform 0.8s ease, opacity 0.8s ease",
                          transform: "translateY(0)",
                          opacity: 1,
                        }}
                      >
                        {s.title}
                      </Typography>

                      <Typography
                        variant={isMobile ? "body2" : "h6"} // Reduced from body1 to body2 on mobile
                        sx={{
                          maxWidth: 700,
                          opacity: 0.95,
                          transition:
                            "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
                          transform: "translateY(0)",
                          textShadow: "1px 1px 6px rgba(0,0,0,0.35)",
                          mb: { xs: 3, md: 4 },
                          fontSize: {
                            xs: "0.875rem", // Smaller font size on mobile
                            sm: "1rem",
                            md: "1.25rem",
                          },
                          lineHeight: {
                            xs: 1.4, // Tighter line height on mobile
                            md: 1.6,
                          },
                          display: {
                            xs: "block",
                            md: "block",
                          },
                        }}
                      >
                        {s.desc}
                      </Typography>

                      <Box
                        sx={{
                          transition:
                            "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
                          transform: "translateY(0)",
                          opacity: 1,
                        }}
                      >
                        {/* Button */}
                        <Button
                          variant="outlined"
                          size={isMobile ? "small" : "medium"}
                          sx={{
                            borderColor: "#C89B3C",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            px: { xs: 3, md: 5 },
                            py: { xs: 0.75, md: 1.2 },
                            fontWeight: 600,
                            borderRadius: "30px",
                            fontSize: {
                              xs: "0.8rem",
                              md: "0.9rem",
                            },
                            minWidth: { xs: "140px", md: "auto" },
                            transition: "all 0.4s ease",
                            "&:hover": {
                              bgcolor: "#C89B3C",
                              color: "#000",
                              borderColor: "#C89B3C",
                              transform: "translateY(-3px)",
                            },
                          }}
                        >
                          Discover More
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/* Navigation Arrows - Hidden on mobile */}
          {!isMobile && (
            <>
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
                  "&:hover": {
                    background: "rgba(0,0,0,0.55)",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                  transition: "all 0.3s ease",
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
                  right: 16 + (isTablet ? 200 : 260),
                  transform: "translateY(-50%)",
                  color: "#fff",
                  background: "rgba(0,0,0,0.35)",
                  "&:hover": {
                    background: "rgba(0,0,0,0.55)",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                  zIndex: 3,
                }}
              >
                <ArrowForwardIos fontSize="small" />
              </IconButton>
            </>
          )}

          {/* Dots Indicator - Enhanced for mobile */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "50%", md: 24 },
              bottom: { xs: 16, md: 24 }, // Reduced bottom spacing on mobile
              transform: { xs: "translateX(-50%)", md: "none" },
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
                  width: { xs: 8, md: 10 }, // Smaller dots on mobile
                  height: { xs: 8, md: 10 }, // Smaller dots on mobile
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor:
                    i === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: i === currentIndex ? "scale(1.2)" : "scale(1)",
                  "&:hover": {
                    backgroundColor:
                      i === currentIndex ? "#fff" : "rgba(255,255,255,0.8)",
                    transform: "scale(1.3)",
                  },
                }}
              />
            ))}
          </Box>

          {/* Swipe indicator for mobile */}
          {isMobile && (
            <Box
              sx={{
                position: "absolute",
                top: 16, // Reduced top spacing on mobile
                right: 16, // Reduced right spacing on mobile
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: 0.5, // Reduced gap on mobile
                color: "rgba(255,255,255,0.7)",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { opacity: 0.7 },
                  "50%": { opacity: 1 },
                  "100%": { opacity: 0.7 },
                },
              }}
            >
              <TouchApp sx={{ fontSize: "0.875rem" }} /> {/* Smaller icon */}
              <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                {" "}
                {/* Smaller text */}
                Swipe
              </Typography>
            </Box>
          )}
        </Box>

        {/* ===== VERTICAL THUMBNAIL RAIL - Hidden on mobile, responsive on tablet ===== */}
        {!isMobile && (
          <Box
            ref={railRef}
            onMouseDown={onMouseDownRail}
            onMouseUp={onMouseUpRail}
            onMouseLeave={onMouseLeaveRail}
            onMouseMove={onMouseMoveRail}
            onTouchStart={onTouchStartRail}
            onTouchMove={onTouchMoveRail}
            sx={{
              width: { md: "200px", lg: "260px" },
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              bgcolor: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(2px)",
              borderLeft: "1px solid rgba(255,255,255,0.15)",
              px: 2,
              py: 2,
              cursor: isDraggingRail ? "grabbing" : "grab",
              order: { xs: 1, md: 2 },
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
                fontSize: { md: "0.7rem", lg: "0.75rem" },
              }}
            >
              Browse
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                      height: { md: 80, lg: 100 },
                      boxShadow: active
                        ? "0 0 0 2px #fff inset, 0 6px 18px rgba(0,0,0,0.35)"
                        : "0 0 0 1px rgba(255,255,255,0.15) inset",
                      transform: active ? "scale(1.02)" : "scale(1.0)",
                      transition:
                        "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow:
                          "0 0 0 2px rgba(255,255,255,0.5) inset, 0 8px 20px rgba(0,0,0,0.4)",
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
                        transition: "opacity 0.3s ease",
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
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <Typography
                        noWrap
                        variant="caption"
                        sx={{
                          color: "#fff",
                          textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                          fontWeight: active ? 700 : 500,
                          fontSize: { md: "0.7rem", lg: "0.75rem" },
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
        )}
      </Box>
    </Box>
  );
}
