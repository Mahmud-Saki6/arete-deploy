"use client";
import Hero from "@/components/Hero";

import ServiceCards from "@/components/ServiceCards";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import Image from "next/image";
import OurProjectsSection from "@/components/OurProjectsSection";
import LatestWorkSection from "@/components/LatestWorkSection";
import PartnersInInnovation from "@/components/PartnersInInnovation";
import ContactSection from "@/components/ContactSection";
import MeetTheCreativeMinds from "@/components/MeetTheCreativeMinds";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const serviceCard = [
    {
      iconItem: ArchitectureOutlinedIcon,
      title: "Interior Design",
      des: "Creating inspiring and functional interior spaces tailored to your lifestyle.",
      btn: "Learn More",
      slug: "interior-design",
    },
    {
      iconItem: ChairOutlinedIcon,
      title: "Furniture Design",
      des: "Custom-designed furniture pieces crafted with precision, comfort, and elegance.",
      btn: "Learn More",
      slug: "furniture-design",
    },
    {
      iconItem: WeekendOutlinedIcon,
      title: "Space Planning",
      des: "Smart layout optimization ensuring maximum functionality and visual balance.",
      btn: "Learn More",
      slug: "space-planning",
    },
    {
      iconItem: LightModeOutlinedIcon,
      title: "Lighting Design",
      des: "Creative lighting concepts that elevate ambience and enhance visual appeal.",
      btn: "Learn More",
      slug: "lighting-design",
    },
    {
      iconItem: FormatPaintOutlinedIcon,
      title: "Material & Finish Consultancy",
      des: "Expert guidance on material selection, textures, and finishes to bring your design vision to life.",
      btn: "Learn More",
      slug: "material-finish-consultancy",
    },
    {
      iconItem: StyleOutlinedIcon,
      title: "Art & Decor Curation",
      des: "Handpicked artwork, decor pieces, and styling elements that complement your interior’s narrative.",
      btn: "Learn More",
      slug: "art-decor-curation",
    },
    {
      iconItem: DesignServicesOutlinedIcon,
      title: "Turnkey Solutions",
      des: "From concept to completion — a seamless, one-stop design & execution service.",
      btn: "Learn More",
      slug: "turnkey-solutions",
    },
    {
      iconItem: PrecisionManufacturingOutlinedIcon,
      title: "Custom Fabrication",
      des: "Bespoke installations and built-in furniture tailored for unique spaces.",
      btn: "Learn More",
      slug: "custom-fabrication",
    },
  ];
  return (
    <>
      <Hero></Hero>
      <Box
        sx={{
          textAlign: "center",
          width: "90%",
          maxWidth: "1720px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: 11, md: 14 },
            letterSpacing: 9,
            textTransform: "uppercase",
            mt: 12,
          }}
          mb={2}
        >
          LATEST&nbsp;WORK
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
          A curation of our most recent projects that redefine modern design —
          where creativity meets precision and purpose.
        </Typography>

        {/* latest work start*/}

        <LatestWorkSection />

        {/* latest work ends*/}
      </Box>
      {/* company overview video starts*/}
      <Box
        sx={{ position: "relative", height: "100vh", overflow: "hidden" }}
        mt={16}
      >
        {/* Background Video */}
        <Box
          component="video"
          src="/assets/home/background.mp4"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1, // Behind content
          }}
        />

        {/* Content Overlay */}
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "flex-end", // ✅ Changed from "center" to "flex-end"
            pb: 8, // ✅ Add padding at bottom for spacing
          }}
        >
          <Box sx={{ color: "white", textAlign: "center", width: "100%" }}>
            <Typography variant="h7" fontWeight="bold">
              A R E T E
            </Typography>
            <Typography fontSize={12} mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Typography>
          </Box>
        </Container>

        {/* Dark Overlay for better text readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            zIndex: 0,
          }}
        />
      </Box>
      {/* company overview video ends */}
      {/* our service start */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: { xs: 11, md: 14 },
          letterSpacing: 9,
          textTransform: "uppercase",
          mt: 12,
          textAlign: "center",
        }}
        mb={2}
      >
        OUR&nbsp;SERVICES
      </Typography>

      <Typography
        sx={{
          color: "rgba(0,0,0,0.6)",
          fontSize: { xs: 11, md: 14 },
          maxWidth: 700,
          mx: "auto",
          mb: 8,
          textAlign: "center",
        }}
      >
        From concept to completion — we deliver holistic design solutions that
        blend innovation, functionality, and elegance.
      </Typography>

      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", mt: 8 }}>
        <Grid container spacing={2}>
          {serviceCard.slice(0, 8).map((item, index) => (
            <Grid size={{ xs: 12, md: 3 }} key={index}>
              <ServiceCards {...item} slug={item.slug} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* our service end */}

      <OurProjectsSection />

      <PartnersInInnovation />

      <Gallery />

      <ContactSection />

      <MeetTheCreativeMinds />

      <Testimonials />
    </>
  );
}
