"use client";
import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/portfolio" },
    { label: "Blog", href: "/contact" },
    { label: "Contact", href: "/" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const desktopMenu = (
    <Stack direction="row" spacing={3}>
      {menuItems.map((item) => (
        <Button
          key={item.label}
          component={Link}
          href={item.href}
          color="inherit"
          sx={{
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "primary.main",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );

  const mobileDrawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid rgba(0,0,0,0.1)",
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
            src="/assets/home/logo.svg"
            alt="Arete Logo"
            width={120}
            height={40}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            color: "text.primary",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.05)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <List sx={{ p: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem
            key={item.label}
            sx={{
              p: 0,
              mb: 1,
            }}
          >
            <Button
              component={Link}
              href={item.href}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                py: 1.5,
                px: 2,
                borderRadius: 2,
                color: "text.primary",
                transition: "all 0.3s ease-in-out",
                transform: `translateX(-20px)`,
                animation: `slideIn 0.4s ease-out ${index * 0.1}s both`,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  transform: "translateX(0) scale(1.02)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
                "@keyframes slideIn": {
                  "0%": {
                    opacity: 0,
                    transform: "translateX(-20px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                },
              }}
              onClick={toggleDrawer(false)}
            >
              <Typography variant="body1" fontWeight="500">
                {item.label}
              </Typography>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid #e6e6e6ff",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
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
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => (window.location.href = "/")}
          >
            <Image
              src="/assets/home/logo.svg"
              alt="Arete Logo"
              width={150}
              height={50}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>{desktopMenu}</Box>

          {/* Mobile Hamburger Menu */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "text.primary",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.05)",
                transform: "rotate(90deg)",
              },
            }}
            onClick={toggleDrawer(true)}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            border: "none",
            overflow: "hidden",
          },
        }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
            },
          },
        }}
      >
        {mobileDrawer}
      </Drawer>
    </>
  );
}
