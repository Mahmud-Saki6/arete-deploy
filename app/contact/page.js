"use client";
import React from "react";
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
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Avatar,
  Divider,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HandshakeIcon from "@mui/icons-material/Handshake";
import DiamondIcon from "@mui/icons-material/Diamond";
import FlagIcon from "@mui/icons-material/Flag";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PublicIcon from "@mui/icons-material/Public";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { WhatsApp } from "@mui/icons-material";
// Sophisticated Premium Consultancy Color Palette
const colors = {
  primary: "#667EEA", // Light Periwinkle
  secondary: "#38B2AC", // Teal
  accent: "#F6AD55", // Apricot
  neutral: {
    50: "#F8FAFE",
    100: "#F0F4FD",
    200: "#E1E9FA",
    300: "#CEDAF6",
    400: "#A8BCEE",
    500: "#819DE2",
    600: "#637FD0",
    700: "#465A8F",
    800: "#2B3655",
    900: "#171D2D",
  },
  success: "#4FD1C7",
  error: "#FEB2B2",
  info: "#7F9CF5",
  gradients: {
    primary: "linear-gradient(135deg, #667EEA 0%, #5A6FD8 100%)",
    secondary: "linear-gradient(135deg, #38B2AC 0%, #319795 100%)",
    accent: "linear-gradient(135deg, #F6AD55 0%, #ED8936 100%)",
  },
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

export default function StartupConsultancyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  // Refs for section navigation
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleBookConsultation = () => {
    scrollToSection(contactRef);
  };

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const serviceModules = [
    {
      id: 1,
      icon: <LightbulbIcon />,
      title: "Idea Screening & Concept Validation",
      description: "Evaluate your startup idea's potential and viability",
      detailed:
        "We conduct rigorous analysis of your concept, assessing market potential, technical feasibility, and competitive landscape to validate your startup idea before significant investment.",
    },
    {
      id: 2,
      icon: <PeopleIcon />,
      title: "Customer Discovery & Persona Development",
      description: "Identify and understand your target audience",
      detailed:
        "In-depth customer research to develop detailed buyer personas, understand pain points, and validate demand for your solution.",
    },
    {
      id: 3,
      icon: <SearchIcon />,
      title: "Market Research & Industry Analysis",
      description: "Comprehensive market analysis and opportunity assessment",
      detailed:
        "Complete market sizing, trend analysis, and industry benchmarking to identify opportunities and threats in your target market.",
    },
    {
      id: 4,
      icon: <CompareArrowsIcon />,
      title: "Competitor Benchmarking & Positioning",
      description: "Analyze competitors and define your unique position",
      detailed:
        "Strategic analysis of competitors, identification of gaps in the market, and development of your unique competitive positioning.",
    },
    {
      id: 5,
      icon: <AssessmentIcon />,
      title: "Feasibility Study & Opportunity Assessment",
      description: "Evaluate technical and financial feasibility",
      detailed:
        "Comprehensive feasibility analysis covering technical, financial, operational, and market aspects of your business concept.",
    },
    {
      id: 6,
      icon: <BusinessIcon />,
      title: "Business Model (Lean Canvas/BMC)",
      description: "Develop comprehensive business model canvas",
      detailed:
        "Structured development of business model using proven frameworks like Lean Canvas and Business Model Canvas.",
    },
    {
      id: 7,
      icon: <PsychologyIcon />,
      title: "UVP Definition",
      description: "Define your unique value proposition",
      detailed:
        "Craft compelling value propositions that clearly articulate why customers should choose your solution over alternatives.",
    },
    {
      id: 8,
      icon: <TimelineIcon />,
      title: "MVP Scope & Roadmap",
      description: "Plan and scope your minimum viable product",
      detailed:
        "Strategic planning and scoping of MVP features to validate core assumptions with minimal investment.",
    },
    {
      id: 9,
      icon: <BarChartIcon />,
      title: "PMF Assessment",
      description: "Evaluate product-market fit and growth potential",
      detailed:
        "Systematic assessment of product-market fit using quantitative and qualitative methods to validate market acceptance.",
    },
    {
      id: 10,
      icon: <TrendingUpIcon />,
      title: "Pricing & WTP Testing",
      description: "Develop pricing strategy and willingness-to-pay tests",
      detailed:
        "Data-driven pricing strategy development and testing to optimize revenue while maximizing market penetration.",
    },
    {
      id: 11,
      icon: <RocketLaunchIcon />,
      title: "Pilot/Test Planning",
      description: "Plan and execute pilot programs and tests",
      detailed:
        "Design and execution of pilot programs to test market response and gather critical feedback before full launch.",
    },
    {
      id: 12,
      icon: <EmojiEventsIcon />,
      title: "Innovation & Grant Support",
      description: "Access innovation grants and funding support",
      detailed:
        "Assistance with grant applications, funding strategy, and access to innovation support programs.",
    },
  ];

  const keyBenefits = [
    {
      icon: <CheckCircleIcon />,
      title: "Validate Your Startup Idea",
      description: "Test your concept before investing significant resources",
    },
    {
      icon: <SecurityIcon />,
      title: "Reduce Risk & Avoid Failure",
      description: "Identify potential pitfalls and mitigate business risks",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Build Scalable Business Model",
      description: "Create a foundation for sustainable growth",
    },
    {
      icon: <SearchIcon />,
      title: "Understand Market & Competitors",
      description: "Gain deep market insights and competitive intelligence",
    },
    {
      icon: <GroupsIcon />,
      title: "Get Expert Guidance",
      description: "Access experienced consultants and industry experts",
    },
    {
      icon: <TimelineIcon />,
      title: "Save Time & Money",
      description: "Avoid costly mistakes and accelerate your progress",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery Session",
      description:
        "Initial consultation to understand your goals and challenges",
    },
    {
      step: 2,
      title: "Research & Analysis",
      description: "Comprehensive market research and opportunity assessment",
    },
    {
      step: 3,
      title: "Strategy & Planning",
      description:
        "Develop customized business strategy and implementation plan",
    },
    {
      step: 4,
      title: "Implementation Roadmap",
      description: "Step-by-step execution plan with milestones and timelines",
    },
    {
      step: 5,
      title: "Ongoing Support & Review",
      description:
        "Continuous monitoring, support, and performance optimization",
    },
  ];

  const pricingPlans = [
    {
      name: "Validation Package",
      price: "£2,499",
      description: "Perfect for idea validation and initial market research",
      features: [
        "Idea Screening & Validation",
        "Basic Market Research",
        "Competitor Analysis",
        "3 Consultation Sessions",
        "30-Day Email Support",
      ],
      highlighted: false,
    },
    {
      name: "Business Model Package",
      price: "£4,999",
      description: "Complete business model development and strategy",
      features: [
        "Full Business Model Canvas",
        "Comprehensive Market Research",
        "Customer Persona Development",
        "UVP Definition",
        "6 Consultation Sessions",
        "60-Day Support",
        "Financial Projections",
      ],
      highlighted: true,
    },
    {
      name: "Full Startup Launch",
      price: "£8,999",
      description: "End-to-end startup launch support and guidance",
      features: [
        "Everything in Business Model Package",
        "MVP Planning & Roadmap",
        "PMF Assessment",
        "Pricing Strategy",
        "Funding Strategy",
        "12 Consultation Sessions",
        "90-Day Support",
        "Grant Application Support",
      ],
      highlighted: false,
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Founder, TechFlow",
      content:
        "The consultancy helped us validate our idea and secure £150k in seed funding. Their strategic guidance was invaluable.",
      rating: 5,
      image: "/assets/testimonials/alex.jpg",
    },
    {
      name: "Sarah Chen",
      role: "CEO, GreenInnovate",
      content:
        "From concept to launch, their expertise saved us 6 months of development time and countless resources.",
      rating: 5,
      image: "/assets/testimonials/sarah.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Co-founder, DataMind",
      content:
        "The business model canvas workshop transformed our approach. We achieved product-market fit in just 4 months.",
      rating: 4,
      image: "/assets/testimonials/michael.jpg",
    },
  ];

  const caseStudies = [
    {
      title: "SaaS Platform Launch",
      metrics: "+300% revenue in 6 months",
      description: "Helped tech startup scale from MVP to market leader",
      before: "Struggling with product-market fit",
      after: "Clear market positioning with validated revenue model",
    },
    {
      title: "E-commerce Startup",
      metrics: "£500k seed funding secured",
      description: "Strategic guidance for funding and market entry",
      before: "Limited understanding of investor expectations",
      after: "Successful funding round with strong investor backing",
    },
    {
      title: "HealthTech Innovation",
      metrics: "5,000+ users in beta",
      description: "Product validation and go-to-market strategy",
      before: "Unclear target market and value proposition",
      after: "Validated product with strong user adoption metrics",
    },
  ];

  const faqs = [
    {
      question: "How long does the startup consultancy process take?",
      answer:
        "The duration depends on your package. Our Validation Package typically takes 2-4 weeks, Business Model Package 6-8 weeks, and Full Startup Launch 12-16 weeks. We provide detailed timelines during our discovery session.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with startups across various sectors including Technology, SaaS, E-commerce, HealthTech, FinTech, GreenTech, and Consumer Products. Our methodologies are adaptable to any industry.",
    },
    {
      question: "Do you offer ongoing support after the initial engagement?",
      answer:
        "Yes, all our packages include ongoing support periods. We also offer retainer options for continuous strategic guidance as your startup grows and evolves.",
    },
    {
      question: "Can you help with funding and investment?",
      answer:
        "Absolutely. We help prepare investment decks, financial models, and connect you with our network of investors. Our Full Startup Launch package includes comprehensive funding strategy development.",
    },
    {
      question: "What makes your consultancy different?",
      answer:
        "We combine deep startup experience with proven methodologies. Our approach is data-driven, founder-focused, and results-oriented. We've helped over 150 startups succeed with a 92% satisfaction rate.",
    },
  ];

  const navItems = [
    { label: "Services", ref: servicesRef },
    { label: "Process", ref: processRef },
    { label: "Pricing", ref: pricingRef },
    { label: "Case Studies", ref: testimonialsRef },
    { label: "FAQ", ref: faqRef },
    { label: "Contact", ref: contactRef },
  ];

  // New data for missing sections
  const outcomeBenefits = [
    {
      icon: <FlagIcon />,
      title: "Build a Strong Foundation",
      description:
        "Establish solid business fundamentals that support sustainable growth",
      gradient: "linear-gradient(135deg, #2D5A27 0%, #3E7C32 100%)",
    },
    {
      icon: <BoltIcon />,
      title: "Achieve Product-Market Fit",
      description:
        "Validate your solution with real customers and achieve market acceptance",
      gradient: "linear-gradient(135deg, #D4A017 0%, #E6B31E 100%)",
    },
    {
      icon: <VerifiedIcon />,
      title: "Validate Assumptions Early",
      description:
        "Test critical business assumptions before committing significant resources",
      gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Scale Faster with Expert Roadmap",
      description:
        "Accelerate growth with a clear, expert-guided scaling strategy",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
    },
  ];

  const trustBadges = [
    { name: "Startup Mentor Certified", icon: <WorkspacePremiumIcon /> },
    { name: "ISO 9001 Certified", icon: <VerifiedIcon /> },
    { name: "Forbes Council Member", icon: <PublicIcon /> },
    { name: "TechStars Partner", icon: <HandshakeIcon /> },
    { name: "UK Business Awards 2023", icon: <EmojiEventsIcon /> },
    { name: "Startup Genome Partner", icon: <DiamondIcon /> },
  ];

  const blogPosts = [
    {
      title: "Market Research Strategies for Startups",
      description:
        "Learn how to conduct effective market research on a startup budget",
      category: "Market Research",
    },
    {
      title: "Business Model Canvas: A Complete Guide",
      description: "Step-by-step guide to creating your business model canvas",
      category: "Business Planning",
    },
    {
      title: "Funding Strategies for Early-Stage Startups",
      description: "Explore different funding options and when to pursue them",
      category: "Funding",
    },
    {
      title: "Building Your MVP: What to Include",
      description: "Essential features for your minimum viable product",
      category: "Product Development",
    },
  ];

  const internalServices = [
    { title: "Market Research", description: "Deep dive market analysis" },
    { title: "Business Planning", description: "Comprehensive business plans" },
    { title: "Branding Strategy", description: "Build strong brand identity" },
    {
      title: "Financial Modeling",
      description: "Financial projections & planning",
    },
  ];

  const frameworks = [
    { name: "Lean Canvas", description: "One-page business model framework" },
    {
      name: "Business Model Canvas",
      description: "Visual chart with elements of business",
    },
    {
      name: "MVP Framework",
      description: "Minimum viable product development",
    },
    { name: "PMF Assessment", description: "Product-market fit validation" },
    { name: "A/B Testing", description: "Data-driven decision making" },
    { name: "SWOT Analysis", description: "Strategic planning framework" },
  ];

  return (
    <>
      {/* Navigation Header - Corporate Style */}
      <HideOnScroll>
        <AppBar
          sx={{
            bgcolor: "#FFFFFF",
            backdropFilter: "blur(20px)",
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08)",
            borderBottom: `1px solid ${colors.neutral[200]}`,
            color: colors.neutral[800],
          }}
        >
          <Toolbar
            sx={{
              width: "90%",
              maxWidth: "1720px",
              mx: "auto",
              py: { xs: 1.5, md: 2 },
              minHeight: { xs: "70px", md: "80px" },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: colors.primary,
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              StartupConsult
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => scrollToSection(heroRef)}
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  px: 2,
                  py: 1,
                  color: colors.neutral[700],
                  "&:hover": {
                    color: colors.primary,
                  },
                  transition: "all 0.2s ease-in-out",
                  textTransform: "none",
                }}
              >
                Home
              </Button>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.ref)}
                  sx={{
                    fontWeight: 500,
                    fontSize: "1rem",
                    px: 2,
                    py: 1,
                    color: colors.neutral[700],
                    "&:hover": {
                      color: colors.primary,
                    },
                    transition: "all 0.2s ease-in-out",
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={handleBookConsultation}
                startIcon={<CalendarMonthIcon />}
                sx={{
                  bgcolor: colors.primary,
                  "&:hover": {
                    bgcolor: "#23451F",
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${alpha(colors.primary, 0.3)}`,
                  },
                  px: 3,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  boxShadow: `0 4px 15px ${alpha(colors.primary, 0.2)}`,
                  transition: "all 0.3s ease",
                  ml: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Book Consultation
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: colors.primary,
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
            width: 320,
            bgcolor: "white",
            color: colors.neutral[800],
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${colors.neutral[200]}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: colors.primary,
              fontWeight: "bold",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            StartupConsult
          </Typography>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: colors.neutral[600] }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ p: 2 }}>
          <ListItem
            onClick={() => scrollToSection(heroRef)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": {
                bgcolor: alpha(colors.primary, 0.08),
              },
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: colors.neutral[700],
              }}
            />
          </ListItem>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": {
                  bgcolor: alpha(colors.primary, 0.08),
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
                  color: colors.neutral[700],
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 1 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<CalendarMonthIcon />}
              onClick={handleBookConsultation}
              sx={{
                bgcolor: colors.primary,
                "&:hover": { bgcolor: "#23451F" },
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 2,
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              Book Consultation
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Hero Section - Reduced Text Size */}
      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          bgcolor: colors.neutral[50],
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
              radial-gradient(${alpha(
                colors.primary,
                0.05
              )} 1px, transparent 1px),
              radial-gradient(${alpha(
                colors.primary,
                0.03
              )} 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            width: "90%",
            maxWidth: "1720px",
            mx: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="Expert Startup Guidance"
                sx={{
                  bgcolor: alpha(colors.secondary, 0.1),
                  color: colors.secondary,
                  fontWeight: "bold",
                  mb: 3,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.25rem",
                    sm: "2.75rem",
                    md: "3.25rem",
                    lg: "3.75rem",
                  },
                  fontWeight: "bold",
                  mb: 3,
                  lineHeight: 1.1,
                  color: colors.neutral[900],
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Startup Business Consultancy for Entrepreneurs
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                  mb: 4,
                  color: colors.neutral[600],
                  fontWeight: 400,
                  lineHeight: 1.4,
                  maxWidth: 600,
                }}
              >
                Validate ideas, build business models, and scale with expert
                guidance from concept to market leadership.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                  mb: 6,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={handleBookConsultation}
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": {
                      bgcolor: "#23451F",
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${alpha(colors.primary, 0.3)}`,
                    },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.5, md: 1.75 },
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    boxShadow: `0 4px 15px ${alpha(colors.primary, 0.2)}`,
                    textTransform: "none",
                  }}
                >
                  Get Free Startup Consultation
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: colors.primary,
                    color: colors.primary,
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: colors.primary,
                      bgcolor: alpha(colors.primary, 0.08),
                      transform: "translateY(-2px)",
                    },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.5, md: 1.75 },
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  Talk to Consultant
                </Button>
              </Box>

              {/* Trust Badges */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ display: "flex" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        sx={{
                          color: colors.secondary,
                          fontSize: "1.2rem",
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: colors.neutral[700],
                    }}
                  >
                    4.9/5 (150+ Reviews)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <BusinessIcon
                    sx={{
                      color: colors.primary,
                      fontSize: "1.2rem",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: colors.neutral[700],
                    }}
                  >
                    150+ Startups Supported
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Hero Visual */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 400, md: 500 },
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: `
        0 20px 40px -12px ${alpha(colors.neutral[900], 0.15)},
        inset 0 1px 0 ${alpha("#FFFFFF", 0.1)}
      `,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${alpha(
                      colors.primary,
                      0.1
                    )} 0%, ${alpha(colors.secondary, 0.05)} 100%)`,
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors.neutral[100], // Fallback background
                  }}
                >
                  <Image
                    src="/assets/consultancy/hero-team.jpg"
                    alt="Startup Consulting Team"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    priority
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = "none";
                    }}
                  />
                </Box>

                {/* Floating Card */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 40,
                    left: 40,
                    right: { xs: 40, md: "auto" },
                    zIndex: 3,
                    bgcolor: "white",
                    borderRadius: 2,
                    p: 3,
                    maxWidth: 300,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: colors.primary,
                      fontSize: "1.1rem",
                      mb: 1,
                    }}
                  >
                    92% Success Rate
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.neutral[600] }}
                  >
                    Startups achieving funding & growth milestones
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Key Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Why Choose Startup Consultancy?
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Transform your startup vision into a successful, scalable business
              with our expert guidance
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {keyBenefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${alpha(
                        colors.neutral[600],
                        0.1
                      )}`,
                    },
                    borderRadius: 3,
                    border: `1px solid ${colors.neutral[200]}`,
                    bgcolor: "white",
                  }}
                >
                  <CardContent
                    sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        p: 2,
                        mb: 3,
                        borderRadius: "50%",
                        bgcolor: alpha(colors.primary, 0.1),
                        color: colors.primary,
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        color: colors.neutral[900],
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                        mb: 2,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.neutral[600],
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Service Overview / Introduction Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.neutral[50] }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, md: 400 },
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src="/assets/consultancy/overview.jpg"
                  alt="Startup Consultancy Overview"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  mb: 3,
                  color: colors.neutral[900],
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                What is Startup Consultancy?
              </Typography>
              <Typography
                sx={{
                  color: colors.neutral[600],
                  fontSize: "1.1rem",
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Startup consultancy is a specialized service that helps
                entrepreneurs navigate the complex journey from idea to
                successful business. Our expert consultants provide strategic
                guidance, proven methodologies, and hands-on support to help you
                avoid common pitfalls and accelerate your growth.
              </Typography>
              <Typography
                sx={{
                  color: colors.neutral[600],
                  fontSize: "1.1rem",
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                We combine deep industry experience with data-driven insights to
                help you validate your idea, develop a scalable business model,
                and execute your strategy effectively. Whether you're at the
                ideation stage or ready to scale, our consultancy provides the
                tools and expertise you need to succeed.
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollToSection(servicesRef)}
                sx={{
                  bgcolor: colors.primary,
                  "&:hover": { bgcolor: "#23451F" },
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  textTransform: "none",
                }}
              >
                Explore Our Services
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Service Modules Section */}
      <Box ref={servicesRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              What's Included in Our Consultancy
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Comprehensive modules covering every aspect of startup development
              and growth
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {serviceModules.map((module) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={module.id}>
                <Card
                  onClick={() => handleOpenModal(module.id)}
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 30px ${alpha(
                        colors.neutral[600],
                        0.1
                      )}`,
                      borderColor: colors.primary,
                      cursor: "pointer",
                    },
                    borderRadius: 2,
                    border: `1px solid ${colors.neutral[200]}`,
                    bgcolor: "white",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          bgcolor: alpha(colors.primary, 0.1),
                          color: colors.primary,
                        }}
                      >
                        {module.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: colors.neutral[900],
                          fontSize: "1.1rem",
                        }}
                      >
                        {module.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.neutral[600],
                        lineHeight: 1.5,
                      }}
                    >
                      {module.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Detailed Service Explanation Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.neutral[50] }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 6,
              textAlign: "center",
              color: colors.neutral[900],
              letterSpacing: "-0.02em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Why Startup Consultancy Matters
          </Typography>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: colors.primary, mb: 3 }}
                  >
                    Reduce Startup Failure Risk
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.neutral[600],
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    Startups face numerous challenges that can lead to failure.
                    Our consultancy helps identify and mitigate these risks
                    early through:
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {[
                      "Market validation before significant investment",
                      "Customer discovery to ensure product-market fit",
                      "Financial feasibility analysis",
                      "Competitive landscape assessment",
                      "Regulatory and compliance guidance",
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <CheckCircleIcon sx={{ color: colors.primary }} />
                        <Typography>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: colors.primary, mb: 3 }}
                  >
                    Proven Frameworks We Use
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.neutral[600],
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    We apply industry-proven methodologies to ensure your
                    startup's success:
                  </Typography>
                  <Grid container spacing={2}>
                    {frameworks.map((framework, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Card
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: `1px solid ${colors.neutral[200]}`,
                          }}
                        >
                          <Typography
                            fontWeight="bold"
                            sx={{ color: colors.neutral[900] }}
                          >
                            {framework.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: colors.neutral[600] }}
                          >
                            {framework.description}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Outcome-Based Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Key Outcomes You'll Achieve
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {outcomeBenefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background: benefit.gradient,
                    color: "white",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${alpha(
                        colors.neutral[900],
                        0.2
                      )}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "inline-flex",
                        p: 2,
                        mb: 3,
                        borderRadius: "50%",
                        bgcolor: alpha("#FFFFFF", 0.2),
                      }}
                    >
                      {React.cloneElement(benefit.icon, {
                        sx: { fontSize: "2rem" },
                      })}
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        mb: 2,
                        fontSize: "1.5rem",
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      sx={{
                        opacity: 0.9,
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Process Section */}
      <Box
        ref={processRef}
        sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.neutral[50] }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Our Consultancy Process
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              A structured 5-step framework for startup success
            </Typography>
          </Box>

          <Box sx={{ position: "relative" }}>
            {/* Desktop Timeline */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Stepper
                alternativeLabel
                sx={{
                  "& .MuiStepLabel-root": {
                    "& .MuiStepLabel-label": {
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: colors.neutral[900],
                    },
                  },
                  "& .MuiStepConnector-root": {
                    "& .MuiStepConnector-line": {
                      borderColor: colors.neutral[300],
                      borderWidth: 2,
                    },
                  },
                }}
              >
                {processSteps.map((step) => (
                  <Step key={step.step}>
                    <StepLabel>
                      <Typography variant="h6" fontWeight="bold">
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: colors.neutral[600], mt: 1 }}
                      >
                        {step.description}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {/* Mobile Steps */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Grid container spacing={3}>
                {processSteps.map((step) => (
                  <Grid size={{ xs: 12 }} key={step.step}>
                    <Card
                      sx={{
                        borderLeft: `4px solid ${colors.primary}`,
                        borderRadius: 2,
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ color: colors.neutral[900] }}
                        >
                          Step {step.step}: {step.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: colors.neutral[600], mt: 1 }}
                        >
                          {step.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Why Choose Us (E-E-A-T Section) */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Why Choose Us: Expertise & Authority
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: colors.primary, mb: 4 }}
                  >
                    Our Credentials
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: alpha(colors.primary, 0.1),
                        }}
                      >
                        <HistoryEduIcon
                          sx={{ color: colors.primary, fontSize: 30 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          8+ Years Experience
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Specializing in startup consultancy
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: alpha(colors.primary, 0.1),
                        }}
                      >
                        <BusinessIcon
                          sx={{ color: colors.primary, fontSize: 30 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          150+ Startups Supported
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Across various industries and stages
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: alpha(colors.primary, 0.1),
                        }}
                      >
                        <SchoolIcon
                          sx={{ color: colors.primary, fontSize: 30 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          MBA-Certified Team
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          From top business schools
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: alpha(colors.primary, 0.1),
                        }}
                      >
                        <EmojiEventsIcon
                          sx={{ color: colors.primary, fontSize: 30 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          Industry Awards
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Recognized excellence in consultancy
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: colors.primary, mb: 4 }}
                  >
                    Media Recognition
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                      gap: 3,
                    }}
                  >
                    {[
                      {
                        name: "Forbes",
                        description: "Featured in Startup Innovation",
                      },
                      {
                        name: "TechCrunch",
                        description: "Coverage of client success",
                      },
                      {
                        name: "Business Insider",
                        description: "Expert contributor",
                      },
                      {
                        name: "BBC Business",
                        description: "Industry insights featured",
                      },
                    ].map((media, index) => (
                      <Box
                        key={index}
                        sx={{
                          p: 2,
                          border: `1px solid ${colors.neutral[200]}`,
                          borderRadius: 2,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          fontWeight="bold"
                          sx={{ color: colors.primary }}
                        >
                          {media.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: colors.neutral[600] }}
                        >
                          {media.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2, color: colors.neutral[900] }}
                  >
                    Our Expert Team Includes:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {[
                      "Ex-VC Partner",
                      "Serial Entrepreneur",
                      "Growth Hacker",
                      "Financial Analyst",
                      "Market Research Expert",
                    ].map((expert, index) => (
                      <Chip
                        key={index}
                        label={expert}
                        sx={{
                          bgcolor: alpha(colors.primary, 0.1),
                          color: colors.primary,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Trust Badges Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.neutral[50] }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: 4,
              textAlign: "center",
              color: colors.neutral[900],
            }}
          >
            Trusted By Industry Leaders
          </Typography>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {trustBadges.map((badge, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                <Card
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: 2,
                    border: `1px solid ${colors.neutral[200]}`,
                    bgcolor: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ color: colors.primary, mb: 1 }}>{badge.icon}</Box>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      color: colors.neutral[900],
                      fontSize: "0.875rem",
                    }}
                  >
                    {badge.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Pricing Section */}
      <Box ref={pricingRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Choose Your Startup Package
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Flexible packages designed for startups at different stages
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {pricingPlans.map((plan, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    border: plan.highlighted
                      ? `2px solid ${colors.primary}`
                      : `1px solid ${colors.neutral[200]}`,
                    bgcolor: plan.highlighted
                      ? alpha(colors.primary, 0.03)
                      : "white",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${alpha(
                        colors.neutral[600],
                        0.15
                      )}`,
                    },
                    borderRadius: 3,
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {plan.highlighted && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: colors.primary,
                        color: "white",
                        px: 3,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: "0.875rem",
                        fontWeight: "bold",
                      }}
                    >
                      Most Popular
                    </Box>
                  )}
                  <CardContent
                    sx={{ p: { xs: 3, md: 4 }, pt: plan.highlighted ? 5 : 4 }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        color: colors.neutral[900],
                        fontSize: { xs: "1.5rem", md: "1.75rem" },
                      }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        color: colors.primary,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        mb: 2,
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.neutral[600],
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {plan.description}
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      {plan.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            mb: 1.5,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: colors.primary,
                              fontSize: "1.2rem",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: colors.neutral[700] }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      variant={plan.highlighted ? "contained" : "outlined"}
                      fullWidth
                      size="large"
                      onClick={handleBookConsultation}
                      sx={{
                        bgcolor: plan.highlighted
                          ? colors.primary
                          : "transparent",
                        color: plan.highlighted ? "white" : colors.primary,
                        borderColor: colors.primary,
                        "&:hover": {
                          bgcolor: plan.highlighted
                            ? "#23451F"
                            : alpha(colors.primary, 0.08),
                          transform: "translateY(-2px)",
                        },
                        py: 1.5,
                        fontWeight: "bold",
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        textTransform: "none",
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Testimonials & Case Studies */}
      <Box
        ref={testimonialsRef}
        sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.neutral[50] }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Startup Success Stories
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              See how our consultancy has helped startups achieve remarkable
              results
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 8 }}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: `1px solid ${colors.neutral[200]}`,
                    bgcolor: "white",
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 3, color: colors.secondary }}
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
                      "{testimonial.content}"
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: alpha(colors.primary, 0.1),
                          color: colors.primary,
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{
                            color: colors.neutral[900],
                            fontSize: "1rem",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.neutral[500],
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Case Studies */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: 4,
              color: colors.neutral[900],
              textAlign: "center",
            }}
          >
            Detailed Case Studies
          </Typography>
          <Grid container spacing={3}>
            {caseStudies.map((caseStudy, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: `1px solid ${colors.neutral[200]}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 30px ${alpha(
                        colors.neutral[600],
                        0.1
                      )}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: colors.neutral[900],
                        mb: 2,
                      }}
                    >
                      {caseStudy.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        bgcolor: alpha(colors.primary, 0.1),
                        color: colors.primary,
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        mb: 2,
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: "1rem" }} />
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {caseStudy.metrics}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: colors.neutral[600], mb: 2 }}
                    >
                      {caseStudy.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: colors.neutral[500] }}
                        >
                          Before:
                        </Typography>
                        <Typography variant="body2">
                          {caseStudy.before}
                        </Typography>
                      </Box>
                      <ArrowRightAltIcon sx={{ color: colors.primary }} />
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: colors.neutral[500] }}
                        >
                          After:
                        </Typography>
                        <Typography variant="body2">
                          {caseStudy.after}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Blog Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Related Resources & Insights
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Explore our latest articles and guides for startup founders
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {blogPosts.map((post, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: `1px solid ${colors.neutral[200]}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 30px ${alpha(
                        colors.neutral[600],
                        0.1
                      )}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        bgcolor: alpha(colors.primary, 0.1),
                        color: colors.primary,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: colors.neutral[900],
                        mb: 2,
                        fontSize: "1.1rem",
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.neutral[600],
                        mb: 3,
                      }}
                    >
                      {post.description}
                    </Typography>
                    <Button
                      size="small"
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        color: colors.primary,
                        textTransform: "none",
                      }}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Internal Links Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.neutral[50] }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Explore Our Other Services
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {internalServices.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: `1px solid ${colors.neutral[200]}`,
                    bgcolor: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 30px ${alpha(
                        colors.neutral[600],
                        0.1
                      )}`,
                      borderColor: colors.primary,
                    },
                    cursor: "pointer",
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "inline-flex",
                        p: 2,
                        mb: 3,
                        borderRadius: "50%",
                        bgcolor: alpha(colors.primary, 0.1),
                        color: colors.primary,
                      }}
                    >
                      <DescriptionOutlinedIcon />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: colors.neutral[900],
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.neutral[600],
                        mb: 3,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: colors.primary,
                        color: colors.primary,
                        "&:hover": {
                          bgcolor: alpha(colors.primary, 0.08),
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box ref={faqRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                color: colors.neutral[900],
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              sx={{
                color: colors.neutral[600],
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Get answers to common questions about our startup consultancy
              services
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === `panel${index}`}
                onChange={handleFaqChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  border: `1px solid ${colors.neutral[200]}`,
                  bgcolor: "white",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "& .MuiAccordionSummary-content": {
                      my: 2,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: colors.neutral[900],
                      fontSize: "1.1rem",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: colors.neutral[600],
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Final CTA & Contact Form */}
      <Box
        ref={contactRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${colors.primary} 0%, #23451F 100%)`,
          color: "white",
        }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  mb: 3,
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Ready to Start Your Business Journey?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  mb: 5,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: 600,
                }}
              >
                Book a free consultation with our startup experts and get
                personalized guidance for your business idea.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  flexWrap: "wrap",
                  mb: 4,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <PhoneIcon sx={{ color: colors.secondary }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    +44 20 7123 4567
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <EmailIcon sx={{ color: colors.secondary }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    hello@startupconsult.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={handleBookConsultation}
                  sx={{
                    bgcolor: colors.secondary,
                    color: colors.neutral[900],
                    "&:hover": {
                      bgcolor: "#B38912",
                      transform: "translateY(-2px)",
                    },
                    px: 5,
                    py: 1.75,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  Book Free Consultation
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsApp />}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: alpha("#FFFFFF", 0.1),
                    },
                    px: 4,
                    py: 1.75,
                    fontWeight: "bold",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  WhatsApp Quick Chat
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  bgcolor: "white",
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    color: colors.neutral[900],
                    mb: 3,
                  }}
                >
                  Get in Touch
                </Typography>

                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    size="medium"
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    size="medium"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    size="medium"
                  />
                  <TextField
                    fullWidth
                    label="Your Business Idea"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: colors.primary,
                      "&:hover": { bgcolor: "#23451F" },
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    Submit Application
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Contact Section with Map */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.neutral[50] }}>
        <Box sx={{ width: "90%", maxWidth: "1720px", mx: "auto" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 6,
              textAlign: "center",
              color: colors.neutral[900],
              letterSpacing: "-0.02em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Visit Our Office
          </Typography>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <Box
                  sx={{
                    height: { xs: 300, md: 400 },
                    position: "relative",
                    borderRadius: "12px 12px 0 0",
                    overflow: "hidden",
                  }}
                >
                  {/* Map Embed Placeholder */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      bgcolor: colors.neutral[200],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.neutral[600],
                    }}
                  >
                    <Typography variant="h6">Google Maps Embed</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                    London Office
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <LocationOnIcon sx={{ color: colors.primary }} />
                      <Typography>
                        123 Innovation Street, London EC1A 1BB
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <PhoneIcon sx={{ color: colors.primary }} />
                      <Typography>+44 20 7123 4567</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <EmailIcon sx={{ color: colors.primary }} />
                      <Typography>hello@startupconsult.com</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <AccessTimeIcon sx={{ color: colors.primary }} />
                      <Typography>Mon-Fri: 9:00 AM - 6:00 PM</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                    Get in Touch
                  </Typography>
                  <Typography sx={{ mb: 4, color: colors.neutral[600] }}>
                    Have questions? We're here to help. Contact us today to
                    discuss how we can support your startup journey.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<PhoneIcon />}
                      sx={{
                        bgcolor: colors.primary,
                        "&:hover": { bgcolor: "#23451F" },
                        py: 1.5,
                        fontWeight: "bold",
                        borderRadius: 2,
                        textTransform: "none",
                      }}
                    >
                      Call Now
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EmailIcon />}
                      sx={{
                        borderColor: colors.primary,
                        color: colors.primary,
                        "&:hover": { borderColor: colors.primary },
                        py: 1.5,
                        fontWeight: "bold",
                        borderRadius: 2,
                        textTransform: "none",
                      }}
                    >
                      Send Email
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<WhatsApp />}
                      sx={{
                        borderColor: "#25D366",
                        color: "#25D366",
                        "&:hover": { borderColor: "#25D366" },
                        py: 1.5,
                        fontWeight: "bold",
                        borderRadius: 2,
                        textTransform: "none",
                      }}
                    >
                      WhatsApp Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box
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
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                StartupConsult
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
                Expert startup consultancy helping entrepreneurs transform ideas
                into successful businesses through strategic guidance and proven
                methodologies.
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {[LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        color: colors.neutral[400],
                        "&:hover": {
                          color: colors.secondary,
                          bgcolor: alpha(colors.secondary, 0.1),
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
                Services
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "Startup Consultancy",
                  "Business Planning",
                  "Market Research",
                  "Financial Modeling",
                  "Brand Strategy",
                  "Funding Support",
                ].map((service) => (
                  <Typography
                    key={service}
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      "&:hover": {
                        opacity: 1,
                        color: colors.secondary,
                        cursor: "pointer",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {service}
                  </Typography>
                ))}
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
                Contact Info
              </Typography>
              <Box sx={{ opacity: 0.8 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <LocationOnIcon
                    sx={{ color: colors.secondary, fontSize: "1.1rem" }}
                  />
                  <Typography variant="body2">
                    123 Innovation Street, London EC1A 1BB
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <PhoneIcon
                    sx={{ color: colors.secondary, fontSize: "1.1rem" }}
                  />
                  <Typography variant="body2">+44 20 7123 4567</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <EmailIcon
                    sx={{ color: colors.secondary, fontSize: "1.1rem" }}
                  />
                  <Typography variant="body2">
                    hello@startupconsult.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <AccessTimeIcon
                    sx={{ color: colors.secondary, fontSize: "1.1rem" }}
                  />
                  <Typography variant="body2">Mon-Fri: 9am-6pm</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: colors.neutral[700], my: 4 }} />
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.6,
                fontSize: { xs: "0.8rem", md: "0.9rem" },
              }}
            >
              © 2024 StartupConsult. All rights reserved. | Professional
              Business Consultancy Services
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Service Module Modal */}
      <Modal
        open={openModal !== null}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal !== null}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", md: 600 },
              maxHeight: "90vh",
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              overflow: "auto",
            }}
          >
            {openModal && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: alpha(colors.primary, 0.1),
                        color: colors.primary,
                      }}
                    >
                      {serviceModules.find((m) => m.id === openModal)?.icon}
                    </Box>
                    <Typography variant="h5" fontWeight="bold">
                      {serviceModules.find((m) => m.id === openModal)?.title}
                    </Typography>
                  </Box>
                  <IconButton onClick={handleCloseModal}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: colors.neutral[600], lineHeight: 1.6, mb: 4 }}
                >
                  {serviceModules.find((m) => m.id === openModal)?.detailed}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleBookConsultation}
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": { bgcolor: "#23451F" },
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  Book Service Consultation
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="Book consultation"
        onClick={handleBookConsultation}
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          bgcolor: colors.primary,
          "&:hover": {
            bgcolor: "#23451F",
            transform: "scale(1.1)",
          },
          display: { xs: "flex", md: "none" },
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: `0 6px 20px ${alpha(colors.primary, 0.4)}`,
          width: 56,
          height: 56,
        }}
      >
        <CalendarMonthIcon />
      </Fab>
    </>
  );
}
// i have changed the contact page
