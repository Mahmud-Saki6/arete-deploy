"use client";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Stack, Box } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e6e6e6ff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 1,
          width: "90%",
          maxWidth: "1720px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => (window.location.href = "/")}
        >
          <Image
            src="/assets/home/logo.svg" // ✅ Correct path
            alt="Arete Logo"
            width={150}
            height={50}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        <Stack direction="row" spacing={3}>
          <Button component={Link} href="/" color="inherit">
            Home
          </Button>
          <Button component={Link} href="/about" color="inherit">
            About
          </Button>
          <Button component={Link} href="/portfolio" color="inherit">
            Products
          </Button>
          <Button component={Link} href="/contact" color="inherit">
            Blog
          </Button>
          <Button component={Link} href="/" color="inherit">
            Contact
          </Button>
        </Stack>
      </Box>
    </AppBar>
  );
}
