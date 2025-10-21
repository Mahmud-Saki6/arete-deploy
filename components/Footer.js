"use client";
import { Box, Typography, Grid, Link } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ddd",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1720px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Logo and Tagline */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/assets/home/logo.svg" // Update this with the actual logo path
            alt="Arete Logo"
            width={150}
            height={150}
            objectFit="contain"
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#777",
            maxWidth: "800px",
            mx: "auto",
            fontSize: 14,
            lineHeight: 1.6,
            mb: 5,
          }}
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>

        {/* Footer Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
            mb: 4,
          }}
        >
          {/* Company Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              COMPANY
            </Typography>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              About Us
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Our Story
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Careers
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Vision
            </Link>
          </Box>

          {/* Services Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              SERVICES
            </Typography>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Interior Design
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Furniture Solutions
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Decor & Installations
            </Link>
          </Box>

          {/* Products Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              PRODUCTS
            </Typography>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Furniture
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                mb: 1,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Lighting & Ambience
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                fontSize: 14,
                color: "#333",
                textDecoration: "none",
                "&:hover": {
                  color: "#d6c1ab",
                },
              }}
            >
              Art & Sculptures
            </Link>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              CONTACT
            </Typography>
            <Typography sx={{ fontSize: 14, mb: 1 }}>
              123 Gulshan Avenue, Dhaka 1212
            </Typography>
            <Typography sx={{ fontSize: 14, mb: 1 }}>
              Sat - Thurs: 10:00am - 7:00pm
            </Typography>
            <Typography sx={{ fontSize: 14, mb: 1 }}>
              +880 2 1234 5678
            </Typography>
            <Typography sx={{ fontSize: 14 }}>enquiries@arete.com</Typography>
          </Box>
        </Box>

        {/* Social Media Links */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Link href="#" sx={{ mx: 2 }}>
            <Image
              src="/assets/home/Facebook.svg" // Replace with your Facebook icon path
              alt="Facebook"
              width={30}
              height={30}
            />
          </Link>
          <Link href="#" sx={{ mx: 2 }}>
            <Image
              src="/assets/home/Instagram.svg" // Replace with your Instagram icon path
              alt="Instagram"
              width={30}
              height={30}
            />
          </Link>
        </Box>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", color: "#777", fontSize: 14, mt: 2 }}>
          <Typography>© 2025 Arete. All rights reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
