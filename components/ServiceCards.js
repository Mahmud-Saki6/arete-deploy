import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function ServiceCards({ iconItem: IconComponent, title, des, btn, slug }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 412,
        height: 291,
        borderRadius: "26px",
        border: "1px solid #EAF0F5",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#331e15",
          "& .card-title, & .card-text, & .learn-more-btn": {
            color: "#ffffff !important",
          },
          "& .icon-box": {
            backgroundColor: "#ffffff",
            "& svg": {
              color: "#331e15",
            },
          },
        },
      }}
    >
      {/* Faint overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "absolute",
          top: 30,
          left: 32,
          zIndex: 2,
          width: "calc(100% - 64px)",
        }}
      >
        {/* Dynamic Icon with circle */}
        <Box
          className="icon-box"
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "#855538", //background of the icon circles
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            transition: "all 0.3s ease",
          }}
        >
          {IconComponent && (
            <IconComponent sx={{ color: "#ffffff", fontSize: 28 }} />
          )}
        </Box>

        {/* Title */}
        <Typography
          variant="h3"
          className="card-title"
          sx={{
            fontSize: 20,
            color: "#331e15",
            fontWeight: 600,
            mb: 2,
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          className="card-text"
          sx={{
            fontSize: 16,
            color: "#331e15",
            lineHeight: "24px",
            mb: 2,
            transition: "color 0.3s ease",
            whiteSpace: "pre-line",
          }}
        >
          {des}
        </Typography>

        {/* Learn More Button */}
        <Link
          href={`/services/${slug}`}
          passHref
          style={{ textDecoration: "none" }}
        >
          <Button
            className="learn-more-btn"
            sx={{
              p: 0,
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
              color: "#331e15",
              transition: "color 0.3s ease",
            }}
            endIcon={<span style={{ fontSize: "16px", marginLeft: 4 }}>→</span>}
          >
            {btn}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ServiceCards;
