"use client";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Fab,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useScrollTrigger,
  Slide,
  alpha,
} from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";

// Icons
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

// Enhanced color palette
const colors = {
  primary: "#B91C1C", // Rich British red
  secondary: "#1E3A8A", // Deep navy blue
  accent: "#D97706", // Warm amber
  neutral: {
    50: "#FAFAF9",
    100: "#F5F5F4",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917",
  },
  success: "#059669",
};

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function RestaurantHome() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for section navigation
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const reservationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleBookTable = () => {
    scrollToSection(reservationRef);
  };

  const handleViewMenu = () => {
    scrollToSection(menuRef);
  };

  const featuredDishes = [
    {
      id: 1,
      name: "Fish & Chips",
      description:
        "Traditional beer-battered cod with triple-cooked chips and mushy peas",
      price: "£18.50",
      category: "mains",
      image: "/assets/restaurant/fish-chips.jpg",
      featured: true,
      popular: true,
    },
    {
      id: 2,
      name: "Sunday Roast",
      description:
        "Slow-roasted beef with Yorkshire pudding, roast potatoes and seasonal vegetables",
      price: "£22.00",
      category: "mains",
      image: "/assets/restaurant/sunday-roast.jpg",
      featured: true,
    },
    {
      id: 3,
      name: "Beef Wellington",
      description:
        "Prime beef fillet wrapped in mushroom duxelles and puff pastry",
      price: "£32.00",
      category: "mains",
      image: "/assets/restaurant/beef-wellington.jpg",
      featured: true,
      chef: true,
    },
    {
      id: 4,
      name: "Sticky Toffee Pudding",
      description:
        "Warm date sponge with butterscotch sauce and vanilla ice cream",
      price: "£8.50",
      category: "desserts",
      image: "/assets/restaurant/sticky-toffee.jpg",
      featured: true,
    },
    {
      id: 5,
      name: "Scotch Egg",
      description:
        "Free-range egg wrapped in seasoned sausage meat with piccalilli",
      price: "£7.50",
      category: "starters",
      image: "/assets/restaurant/scotch-egg.jpg",
    },
    {
      id: 6,
      name: "Ploughman's Platter",
      description:
        "Selection of British cheeses, chutney, ham and artisan bread",
      price: "£16.00",
      category: "sharing",
      image: "/assets/restaurant/ploughmans.jpg",
    },
    {
      id: 7,
      name: "Shepherd's Pie",
      description: "Slow-cooked lamb with mashed potato crust and rich gravy",
      price: "£19.50",
      category: "mains",
      image: "/assets/restaurant/shepherds-pie.jpg",
    },
    {
      id: 8,
      name: "Eton Mess",
      description:
        "Classic English dessert with meringue, strawberries and cream",
      price: "£7.00",
      category: "desserts",
      image: "/assets/restaurant/eton-mess.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Food Critic - The Times",
      comment:
        "The most authentic British dining experience in London. The Beef Wellington is absolutely sublime!",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "James Thompson",
      role: "Regular Guest",
      comment:
        "Perfect Sunday Roast every single time. The Yorkshire puddings are exactly how my grandmother used to make them.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Emily Chen",
      role: "First-time Visitor",
      comment:
        "Wonderful atmosphere and exceptional service. The sticky toffee pudding is an absolute must-try!",
      rating: 4,
      date: "3 days ago",
    },
  ];

  const features = [
    {
      icon: RestaurantIcon,
      title: "Seasonal Menu",
      description:
        "Fresh ingredients sourced from local British suppliers and farms",
      color: colors.primary,
    },
    {
      icon: LocalDiningIcon,
      title: "Traditional Recipes",
      description: "Authentic British cuisine with contemporary culinary flair",
      color: colors.secondary,
    },
    {
      icon: EmojiEventsIcon,
      title: "Award Winning",
      description:
        "Recognized for excellence in British culinary arts since 2015",
      color: colors.accent,
    },
    {
      icon: GroupsIcon,
      title: "Private Dining",
      description: "Perfect for celebrations, gatherings and business events",
      color: colors.success,
    },
  ];

  const categories = [
    { id: "all", label: "All Menu" },
    { id: "starters", label: "Starters" },
    { id: "mains", label: "Main Courses" },
    { id: "desserts", label: "Desserts" },
    { id: "sharing", label: "Sharing Platters" },
  ];

  const filteredDishes =
    selectedCategory === "all"
      ? featuredDishes
      : featuredDishes.filter((dish) => dish.category === selectedCategory);

  const featuredItems = featuredDishes.filter((dish) => dish.featured);

  const navItems = [
    { label: "Home", ref: heroRef },
    { label: "Menu", ref: menuRef },
    { label: "About", ref: aboutRef },
    { label: "Reviews", ref: testimonialsRef },
    { label: "Reservations", ref: reservationRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <>
      {/* Navigation Header */}
      <HideOnScroll>
        <AppBar
          sx={{
            bgcolor: alpha(colors.neutral[900], 0.95),
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderBottom: `1px solid ${alpha(colors.neutral[700], 0.3)}`,
          }}
        >
          <Toolbar
            sx={{
              width: "90%",
              maxWidth: "1720px",
              mx: "auto",
              py: { xs: 1, md: 1.5 },
              minHeight: { xs: "60px", md: "70px" },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              THE UNION JACK
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => scrollToSection(item.ref)}
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    "&:hover": {
                      bgcolor: alpha(colors.primary, 0.1),
                      color: colors.primary,
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={handleBookTable}
                startIcon={<CalendarMonthIcon />}
                sx={{
                  bgcolor: colors.primary,
                  "&:hover": {
                    bgcolor: "#991B1B",
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${alpha(colors.primary, 0.3)}`,
                  },
                  px: 3,
                  ml: 1,
                  fontWeight: "bold",
                  borderRadius: 2,
                  boxShadow: `0 4px 15px ${alpha(colors.primary, 0.2)}`,
                  transition: "all 0.3s ease",
                }}
              >
                Book Table
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                "&:hover": {
                  bgcolor: alpha(colors.primary, 0.1),
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            bgcolor: colors.neutral[900],
            color: "white",
            backgroundImage:
              "linear-gradient(rgba(28, 25, 23, 0.97), rgba(28, 25, 23, 0.95))",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${colors.neutral[700]}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            THE UNION JACK
          </Typography>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ p: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": {
                  bgcolor: alpha(colors.primary, 0.1),
                },
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 1 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<CalendarMonthIcon />}
              onClick={handleBookTable}
              sx={{
                bgcolor: colors.primary,
                "&:hover": { bgcolor: "#991B1B" },
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 2,
                fontSize: "1rem",
              }}
            >
              Book Table
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          height: { xs: "85vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${colors.neutral[900]} 0%, ${colors.secondary}20 50%, ${colors.neutral[800]} 100%)`,
          pt: { xs: 7, md: 0 },
        }}
      >
        {/* Background Image with Enhanced Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(135deg, rgba(28, 25, 23, 0.85) 0%, rgba(30, 58, 138, 0.4) 50%, rgba(28, 25, 23, 0.9) 100%), url('/assets/restaurant/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: { xs: "scroll", md: "fixed" },
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            width: "90%",
            maxWidth: "1720px",
            mx: "auto",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.25rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "4.5rem",
                  },
                  fontWeight: "bold",
                  mb: { xs: 2, md: 3 },
                  lineHeight: { xs: 1.1, md: 1.05 },
                  background: `linear-gradient(135deg, #FFFFFF 0%, ${colors.neutral[200]} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  letterSpacing: { xs: "-0.02em", md: "-0.03em" },
                }}
              >
                THE UNION JACK
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
                  mb: { xs: 3, md: 4 },
                  opacity: 0.9,
                  fontWeight: 300,
                  lineHeight: 1.4,
                  maxWidth: 500,
                }}
              >
                Authentic British Cuisine in the Heart of London
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  mb: { xs: 4, md: 5 },
                  opacity: 0.8,
                  maxWidth: 500,
                  lineHeight: 1.6,
                }}
              >
                Experience the finest traditional British dishes crafted with
                passion, using locally sourced ingredients and time-honoured
                recipes passed down through generations.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={handleBookTable}
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": {
                      bgcolor: "#991B1B",
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${alpha(colors.primary, 0.4)}`,
                    },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    boxShadow: `0 4px 15px ${alpha(colors.primary, 0.3)}`,
                    minWidth: { xs: "140px", md: "auto" },
                  }}
                >
                  Book a Table
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<MenuBookIcon />}
                  onClick={handleViewMenu}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: colors.primary,
                      bgcolor: alpha(colors.primary, 0.1),
                      transform: "translateY(-2px)",
                    },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    minWidth: { xs: "140px", md: "auto" },
                  }}
                >
                  View Menu
                </Button>
              </Box>

              {/* Trust indicators */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  mt: 4,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <StarIcon
                    sx={{
                      color: colors.accent,
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    }}
                  >
                    4.9/5 (284 Reviews)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOnIcon
                    sx={{
                      color: colors.accent,
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    }}
                  >
                    Central London
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { md: 450, lg: 500 },
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: `0 25px 50px ${alpha(colors.neutral[900], 0.5)}`,
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${alpha(
                      colors.primary,
                      0.2
                    )} 0%, ${alpha(colors.secondary, 0.2)} 100%)`,
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src="/assets/restaurant/hero-dish.jpg"
                  alt="Signature Dish"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, md: 40 },
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "white",
            opacity: 0.8,
            cursor: "pointer",
          }}
          onClick={() => scrollToSection(menuRef)}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              fontWeight: 500,
            }}
          >
            Discover Our Menu
          </Typography>
          <Box
            sx={{
              width: 2,
              height: { xs: 30, md: 40 },
              bgcolor: "white",
              mx: "auto",
              borderRadius: 1,
              animation: "bounce 2s infinite",
            }}
          />
        </Box>

        <style jsx>{`
          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    border: `1px solid ${colors.neutral[200]}`,
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                      borderColor: alpha(feature.color, 0.3),
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 1.5, md: 2 },
                      mb: 3,
                      borderRadius: "50%",
                      bgcolor: alpha(feature.color, 0.1),
                      color: feature.color,
                      display: "inline-flex",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <feature.icon sx={{ fontSize: { xs: 32, md: 40 } }} />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      color: colors.neutral[900],
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.neutral[600],
                      lineHeight: 1.6,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Featured Dishes Preview */}
      <Box
        ref={menuRef}
        sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.neutral[50] }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
              }}
            >
              Signature Dishes
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "0.95rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              A taste of Britain's finest culinary traditions, crafted with
              passion and served with pride
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {featuredItems.map((dish) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dish.id}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${alpha(
                        colors.neutral[600],
                        0.15
                      )}`,
                    },
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    border: `1px solid ${colors.neutral[200]}`,
                  }}
                >
                  <Box
                    sx={{ position: "relative", height: { xs: 220, md: 280 } }}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Badges */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {dish.popular && (
                        <Box
                          sx={{
                            bgcolor: colors.accent,
                            color: "white",
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: { xs: "0.75rem", md: "0.85rem" },
                            fontWeight: "bold",
                          }}
                        >
                          Popular
                        </Box>
                      )}
                      {dish.chef && (
                        <Box
                          sx={{
                            bgcolor: colors.primary,
                            color: "white",
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: { xs: "0.75rem", md: "0.85rem" },
                            fontWeight: "bold",
                          }}
                        >
                          Chef's Special
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          color: colors.neutral[900],
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {dish.name}
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.primary}
                        sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                      >
                        {dish.price}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.neutral[600],
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {dish.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={handleBookTable}
                      sx={{
                        borderColor: colors.primary,
                        color: colors.primary,
                        "&:hover": {
                          borderColor: colors.primary,
                          bgcolor: alpha(colors.primary, 0.05),
                          transform: "translateY(-1px)",
                        },
                        py: { xs: 1, md: 1.25 },
                        fontWeight: "bold",
                        borderRadius: 2,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        transition: "all 0.2s ease",
                      }}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* View Full Menu Button */}
          <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setSelectedCategory("all");
                setTimeout(() => {
                  document
                    .getElementById("full-menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              sx={{
                bgcolor: colors.neutral[900],
                "&:hover": {
                  bgcolor: colors.neutral[800],
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 25px ${alpha(colors.neutral[900], 0.3)}`,
                },
                px: { xs: 5, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: "bold",
                borderRadius: 2,
                transition: "all 0.3s ease",
              }}
            >
              View Full Menu
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Full Menu Section */}
      <Box
        id="full-menu"
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: colors.neutral[900],
          color: "white",
        }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                mb: 3,
                background: `linear-gradient(135deg, #FFFFFF 0%, ${colors.neutral[200]} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              Our Complete Menu
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[400],
                fontSize: { xs: "0.95rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Explore our complete selection of traditional British favourites
              and contemporary creations
            </Typography>
          </Box>

          {/* Category Filter */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 1, md: 2 },
              mb: { xs: 6, md: 8 },
              flexWrap: "wrap",
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category.id}
                label={category.label}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "filled" : "outlined"
                }
                sx={{
                  bgcolor:
                    selectedCategory === category.id
                      ? colors.primary
                      : "transparent",
                  color: selectedCategory === category.id ? "white" : "white",
                  borderColor:
                    selectedCategory === category.id
                      ? colors.primary
                      : alpha(colors.neutral[400], 0.3),
                  "&:hover": {
                    bgcolor:
                      selectedCategory === category.id
                        ? "#991B1B"
                        : alpha(colors.primary, 0.2),
                  },
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  py: { xs: 1.5, md: 2 },
                  px: { xs: 2, md: 3 },
                  transition: "all 0.2s ease",
                }}
              />
            ))}
          </Box>

          {/* Menu Grid */}
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {filteredDishes.map((dish) => (
              <Grid size={{ xs: 12, md: 6 }} key={dish.id}>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 2, md: 3 },
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    bgcolor: alpha(colors.neutral[800], 0.5),
                    transition: "all 0.3s ease",
                    border: `1px solid ${alpha(colors.neutral[700], 0.5)}`,
                    "&:hover": {
                      bgcolor: alpha(colors.neutral[800], 0.8),
                      transform: "translateX(8px)",
                      borderColor: alpha(colors.primary, 0.3),
                    },
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 80, md: 100 },
                      height: { xs: 80, md: 100 },
                      position: "relative",
                      flexShrink: 0,
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: "white",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {dish.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={colors.primary}
                        sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                      >
                        {dish.price}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.neutral[400],
                        lineHeight: 1.5,
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                        mb: 2,
                      }}
                    >
                      {dish.description}
                    </Typography>
                    <Button
                      size="small"
                      onClick={handleBookTable}
                      sx={{
                        color: colors.primary,
                        fontWeight: "bold",
                        "&:hover": {
                          bgcolor: alpha(colors.primary, 0.1),
                        },
                        fontSize: { xs: "0.8rem", md: "0.85rem" },
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      Order Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* About Section */}
      <Box ref={aboutRef} sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                  mb: 4,
                  color: colors.neutral[900],
                  letterSpacing: "-0.02em",
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  mb: 4,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: colors.neutral[600],
                }}
              >
                Founded in 2010 by Master Chef Gordon Miller, The Union Jack
                brings the authentic taste of British culinary heritage to
                modern London. With over two decades of experience in
                Michelin-starred kitchens across the UK, Chef Miller is
                passionate about preserving traditional British recipes while
                adding contemporary flair.
              </Typography>
              <Typography
                sx={{
                  mb: 4,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: colors.neutral[600],
                }}
              >
                We work closely with trusted British suppliers and local
                producers, ensuring every ingredient tells a story of quality,
                tradition, and innovation. From our dry-aged beef to our
                hand-picked seasonal vegetables, we believe in the farm-to-fork
                philosophy.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": {
                      bgcolor: "#991B1B",
                      transform: "translateY(-2px)",
                    },
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: "bold",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  Meet Our Chef
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleBookTable}
                  sx={{
                    borderColor: colors.neutral[800],
                    color: colors.neutral[800],
                    "&:hover": {
                      borderColor: colors.primary,
                      bgcolor: alpha(colors.primary, 0.05),
                      transform: "translateY(-2px)",
                    },
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: "bold",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  Visit Us Today
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, sm: 400, md: 500 },
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: `0 20px 40px ${alpha(colors.neutral[600], 0.15)}`,
                }}
              >
                <Image
                  src="/assets/restaurant/about-image.jpg"
                  alt="Restaurant Interior"
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Decorative Element */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -40,
                    right: -40,
                    width: 200,
                    height: 200,
                    bgcolor: colors.primary,
                    borderRadius: "50%",
                    opacity: 0.1,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box
        ref={testimonialsRef}
        sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.neutral[50] }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
              }}
            >
              Guest Reviews
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "0.95rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Don't just take our word for it - hear from our valued guests
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 3,
                    bgcolor: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    border: `1px solid ${colors.neutral[200]}`,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0 15px 35px ${alpha(
                        colors.neutral[600],
                        0.15
                      )}`,
                    },
                  }}
                >
                  <Box
                    sx={{ position: "relative", display: "inline-flex", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 70, md: 80 },
                        height: { xs: 70, md: 80 },
                        borderRadius: "50%",
                        bgcolor: alpha(colors.primary, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.primary,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: "bold",
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Box>
                  </Box>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{ mb: 3, color: colors.primary }}
                    size={window.innerWidth < 600 ? "small" : "medium"}
                  />
                  <Typography
                    variant="body1"
                    fontStyle="italic"
                    sx={{
                      mb: 3,
                      lineHeight: 1.7,
                      color: colors.neutral[600],
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    "{testimonial.comment}"
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      color: colors.neutral[900],
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.neutral[500],
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      mb: 1,
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.neutral[400],
                      fontSize: { xs: "0.75rem", md: "0.8rem" },
                    }}
                  >
                    {testimonial.date}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Reservation Section */}
      <Box
        ref={reservationRef}
        sx={{ py: { xs: 6, md: 10 }, color: "white", position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            zIndex: -1,
          }}
        />
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                  mb: 3,
                  letterSpacing: "-0.02em",
                }}
              >
                Ready for an Unforgettable Experience?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.2rem" },
                  mb: 5,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: 600,
                }}
              >
                Book your table today and immerse yourself in authentic British
                cuisine, warm hospitality, and an atmosphere that celebrates the
                best of British culture.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={handleBookTable}
                  sx={{
                    bgcolor: "white",
                    color: colors.primary,
                    "&:hover": {
                      bgcolor: colors.neutral[100],
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${alpha(
                        colors.neutral[900],
                        0.3
                      )}`,
                    },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    minWidth: { xs: "160px", md: "auto" },
                  }}
                >
                  Book Your Table
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: alpha(colors.neutral[100], 0.1),
                      transform: "translateY(-2px)",
                    },
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    minWidth: { xs: "160px", md: "auto" },
                  }}
                >
                  +44 20 7946 0958
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: { xs: 250, md: 300 },
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: `0 20px 40px ${alpha(colors.neutral[900], 0.4)}`,
                  position: "relative",
                }}
              >
                <Image
                  src="/assets/restaurant/reservation-image.jpg"
                  alt="Restaurant Ambiance"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        ref={contactRef}
        sx={{
          bgcolor: colors.neutral[900],
          color: "white",
          py: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "white",
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                THE UNION JACK
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.8,
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Authentic British Cuisine & Hospitality in the heart of London.
                Experience the finest traditional dishes crafted with passion
                and served with pride.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {[InstagramIcon, FacebookIcon, TwitterIcon].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        color: colors.neutral[400],
                        "&:hover": {
                          color: colors.primary,
                          bgcolor: alpha(colors.primary, 0.1),
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Icon />
                    </IconButton>
                  )
                )}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "white",
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                CONTACT INFO
              </Typography>
              <Box sx={{ opacity: 0.8 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <LocationOnIcon
                    sx={{
                      color: colors.primary,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    123 Royal Avenue, London W1B 5GH
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <PhoneIcon
                    sx={{
                      color: colors.primary,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    +44 20 7946 0958
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <EmailIcon
                    sx={{
                      color: colors.primary,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    info@theunionjack.co.uk
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "white",
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                OPENING HOURS
              </Typography>
              <Box sx={{ opacity: 0.8 }}>
                {[
                  { days: "Monday - Thursday", hours: "12:00 - 22:00" },
                  { days: "Friday - Saturday", hours: "12:00 - 23:00" },
                  { days: "Sunday", hours: "12:00 - 20:00" },
                ].map((schedule, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1.5,
                    }}
                  >
                    <AccessTimeIcon
                      sx={{
                        color: colors.primary,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "0.85rem", md: "0.9rem" },
                          fontWeight: 500,
                        }}
                      >
                        {schedule.days}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "0.8rem", md: "0.85rem" },
                          color: colors.neutral[400],
                        }}
                      >
                        {schedule.hours}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderTop: `1px solid ${colors.neutral[700]}`,
              mt: { xs: 4, md: 6 },
              pt: { xs: 3, md: 4 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.6,
                fontSize: { xs: "0.8rem", md: "0.9rem" },
              }}
            >
              © 2024 The Union Jack Restaurant. All rights reserved. | Crafted
              with passion for British cuisine
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="Book table"
        onClick={handleBookTable}
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          bgcolor: colors.primary,
          "&:hover": {
            bgcolor: "#991B1B",
            transform: "scale(1.1)",
          },
          display: { xs: "flex", md: "none" },
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: `0 4px 15px ${alpha(colors.primary, 0.4)}`,
        }}
      >
        <CalendarMonthIcon />
      </Fab>
    </>
  );
}
