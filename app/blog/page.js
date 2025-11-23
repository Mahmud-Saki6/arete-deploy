"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Button,
  Modal,
  IconButton,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  CalendarToday,
  Person,
  Close,
  ArrowForward,
  BookmarkBorder,
  Share,
} from "@mui/icons-material";

export default function BlogPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openModal, setOpenModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedBlog(null);
  };

  const blogs = [
    {
      title:
        "Shaping Dhaka's Workspaces: Modern Commercial Interior Design Trends Transforming 2025",
      excerpt:
        "Discover the 2025 commercial interior design trends transforming Dhaka workspaces — hybrid-ready layouts, ergonomic interiors, smart-office tech, and sustainable fittings to boost productivity and brand image.",
      image: "/assets/blog/Commercial Design.jpg",
      date: "March 15, 2024",
      author: "Arete Studio Team",
      readTime: "8 min read",
      category: "Commercial Design",
      fullContent: {
        introduction: [
          "Dhaka's skyline is changing, but what's happening inside those buildings is even more exciting. Over the last two decades, commercial interior design in Dhaka has shifted dramatically—from rigid cubicles and dull color palettes to flexible layouts, biophilic accents, smart offices, and vibrant branded environments that boost productivity and employee well-being.",
          "Today's Dhaka-based companies—tech startups, corporate headquarters, banks, co-working hubs, retail brands, clinics, restaurants, and even government offices—are rethinking how a workspace should feel. The shift isn't just aesthetic; it's strategic, cultural, and driven by global standards. If you're planning to update your office in 2025, understanding these trends can help you shape a space that is efficient, inspiring, and future-proof.",
        ],
        sections: [
          {
            title: "How Dhaka's Workspaces Evolved Over the Last 20 Years",
            content: [
              "Two decades ago, most commercial spaces in Dhaka reflected a traditional mindset: heavy wooden furniture, crowded floor plans, fluorescent lighting, and very limited design identity. Productivity was measured by presence—not performance.",
              "Fast-forward to 2025, and the landscape looks entirely different. Businesses now want:",
              {
                list: [
                  "Open, collaborative office layouts",
                  "Ergonomic furniture",
                  "Acoustic solutions",
                  "Branded interior identity",
                  "Eco-friendly materials",
                  "Smart meeting rooms",
                  "Modern reception designs",
                  "Biophilic interior elements",
                  "Efficient storage and space optimization",
                ],
              },
              "This shift mirrors global trends, but Dhaka's growth has accelerated it. The rise of corporate offices in Gulshan, Banani, Dhanmondi, Uttara, and Motijheel has also played a major role in shaping a modern design culture. Companies now invest in professional commercial interior design services in Bangladesh not just for aesthetics but to attract clients, improve work culture, and retain top talent.",
            ],
          },
          {
            title:
              "The Most In-Demand Office Interior Design Trends in Dhaka (2025)",
            subsections: [
              {
                title: "1. Open-Concept Workspaces",
                content:
                  "Open layouts remain the top choice for modern offices in Bangladesh. They offer improved communication, better workflow, and reduced construction costs. Commercial clients often request:",
                list: [
                  "Modular workstation layouts",
                  "Glass partitions",
                  "Multi-purpose collaborative zones",
                  "Hot-desking systems",
                ],
              },
              {
                title: "2. Biophilic & Eco-Friendly Design",
                content:
                  "Dhaka's fast-paced city life has increased the desire for calm, nature-inspired workplaces. Today's office renovation projects commonly include:",
                list: [
                  "Indoor plants & vertical gardens",
                  "Natural wood textures",
                  "Soft lighting",
                  "Sustainable materials",
                  "Green-certified paints",
                ],
              },
              {
                title: "3. Smart Office Technologies",
                content:
                  "The modern workplace must be efficient. Companies now integrate:",
                list: [
                  "Smart conference rooms",
                  "Automatic lighting systems",
                  "Digital scheduling displays",
                  "Access control systems",
                  "Energy-saving climate automation",
                ],
              },
              {
                title: "4. Flexible & Multi-Purpose Spaces",
                content:
                  "Dhaka's rapidly growing businesses need designs that can adapt. Multifunctional interior solutions are becoming the new normal:",
                list: [
                  "Foldable partitions",
                  "Multi-use lounges",
                  "Moveable desks",
                  "Modular meeting pods",
                ],
              },
              {
                title: "5. Retail & Restaurant Interior Innovation",
                content:
                  "Not only offices—retail and hospitality businesses in Dhaka have also changed dramatically. Modern retail interior design focuses on clean lighting, product-centric displays, customer flow optimization, and brand color integration. Restaurants emphasize mood lighting, Instagrammable corners, smart seating layout, acoustics, and hospitality-friendly textures.",
              },
            ],
          },
          {
            title: "Why These Trends Matter for Your Business",
            content: [
              "Updating your workspace directly affects team performance, client perception, and brand reputation. A modern commercial interior design can:",
              {
                list: [
                  "Increase productivity",
                  "Improve employee satisfaction",
                  "Enhance brand identity",
                  "Impress clients instantly",
                  "Optimize every square foot",
                  "Reduce long-term maintenance costs",
                ],
              },
              "How You Can Transform Your Own Workspace in 2025: Start with a professional space assessment, adopt modern materials & efficient layouts, integrate your brand identity, prioritize employee comfort, and think long-term, not just trend-based.",
            ],
          },
        ],
        conclusion:
          "Dhaka's commercial spaces are evolving fast, and businesses that adapt now will lead the future. Whether you run an office, a retail shop, a restaurant, or a corporate facility, your interior environment silently communicates who you are. A thoughtfully designed workspace doesn't just look modern — it improves performance, strengthens your brand, and creates a lasting impression on everyone who walks through your doors. If your office still feels outdated, cramped, dim, or uninviting, the reality is simple: it's holding your business back. 2025 is the perfect year to rethink your workspace, embrace modern commercial interior design, and build an environment that inspires your team, attracts clients, and reflects the true identity of your brand.",
      },
    },
    {
      title: "Smart Offices in Dhaka: Technology-Driven Design for 2025",
      excerpt:
        "Explore how smart offices in Dhaka are transforming workplace design through technology-driven solutions, hybrid work models, IoT integration, smart security, and employee-focused environments.",
      image: "/assets/blog/Smart Office.jpg",
      date: "March 12, 2024",
      author: "Arete Studio Team",
      readTime: "7 min read",
      category: "Smart Office",
      fullContent: {
        introduction: [
          "Dhaka's business landscape is changing faster than ever, and the idea of a 'smart office' has moved from being a nice upgrade to something many companies now consider essential. As more organizations adopt hybrid work models and clients expect smoother digital communication, the demand for a modern, tech-enabled workplace has grown naturally.",
          "In 2025, smart offices in Dhaka are not just about installing fancy gadgets—they are about creating a work environment where employees can focus better, collaborate easily, and feel comfortable throughout the day. Technology simply supports these goals behind the scenes.",
        ],
        sections: [
          {
            title: "What Makes an Office 'Smart'?",
            content: [
              "A smart office uses a mix of intelligent systems and everyday tools to reduce friction in daily work. It can include something as simple as motion-sensor lights or something more advanced like AI-assisted meeting rooms and IoT-connected equipment.",
              "These elements usually appear in a smart office:",
              {
                list: [
                  "Automated lighting and temperature control",
                  "Touchless or biometric entry",
                  "Cloud-based file sharing and communication",
                  "Smart projectors and wireless presentation systems",
                  "Ergonomic layouts with tech-friendly furniture",
                  "Energy-efficient monitoring tools",
                ],
              },
              "Together, these pieces create a workspace that is simpler to manage and more pleasant to work in.",
            ],
          },
          {
            title: "Why Smart Offices Are Becoming Popular in Dhaka",
            content: [
              "Hybrid work is now the norm. Companies discovered that flexibility doesn't hurt productivity. Hybrid employees need reliable video conferencing setups, good internet coverage, and easy access to files, whether they're in the office or working remotely.",
              "Employees expect a better working experience. Younger professionals pay attention to comfort and work atmosphere. A smart office reduces unnecessary stress and encourages better performance.",
              "Technology is no longer expensive. Many tools that were once premium—like automated lighting or cloud solutions—are now affordable in Bangladesh.",
              "Client expectations are rising. International clients often judge a company by its workspace. A modern office helps build credibility before the first meeting even begins.",
            ],
          },
          {
            title: "Key Features Found in Dhaka's Smart Offices in 2025",
            subsections: [
              {
                title: "1. Smart Lighting and Climate Control",
                content:
                  "Lighting and temperature alone can affect employee mood and monthly utility bills. Many offices now use motion sensors, daylight-responsive lighting, and automated thermostats to maintain comfort and reduce energy consumption.",
              },
              {
                title: "2. IoT-Integrated Workstations",
                content:
                  "IoT devices quietly improve everyday routines. Smart desks, occupancy sensors, and wireless presentation systems save time and reduce operational hassle.",
              },
              {
                title: "3. High-Quality Video Conferencing Rooms",
                content:
                  "As more teams collaborate across borders, a dependable meeting room has become essential. Most modern rooms now include high-resolution cameras, noise-filtering microphones, and AI-assisted framing or transcription.",
              },
              {
                title: "4. Cloud-Based Collaboration Tools",
                content:
                  "Cloud systems keep everyone connected—even when they're working from different locations. Tools like Google Workspace, Microsoft 365, Notion, Slack, and Zoom are widely used across Dhaka.",
              },
              {
                title: "5. Ergonomic & Wellness-Focused Layouts",
                content:
                  "Smart office design isn't only about technology—comfort matters too. Adjustable desks, ergonomic chairs, natural light, and indoor plants improve health and productivity.",
              },
              {
                title: "6. Modern, Automated Security",
                content:
                  "Security systems now rely on biometrics, RFID cards, and smart CCTV. This improves safety, ensures accurate attendance, and prevents unauthorized access.",
              },
              {
                title: "7. Smart Office Management Platforms",
                content:
                  "These systems help manage meeting room booking, visitor check-ins, inventory, and maintenance alerts. They're especially popular in coworking spaces and large companies.",
              },
            ],
          },
          {
            title: "How Smart Offices Benefit Dhaka Businesses",
            content:
              "Smart offices provide better productivity, lower energy and maintenance costs, stronger communication, a polished brand image, and improved employee satisfaction.",
            list: [
              "Better productivity",
              "Lower energy and maintenance costs",
              "Stronger communication",
              "A polished brand image",
              "Improved employee satisfaction",
            ],
          },
          {
            title:
              "How Companies in Dhaka Can Begin Their Smart Office Transition",
            content: [
              "Companies can start by analyzing their current workspace, upgrading their network, introducing smart lighting and AC automation, adding IoT devices gradually, modernizing conference rooms, improving furniture and layout, strengthening office security, and moving processes to the cloud.",
              "For any company—whether small or large—investing in a smart office in 2025 is more than a trend. It's a long-term strategy to attract talent, impress clients, and build a culture of efficiency and growth.",
            ],
          },
        ],
        conclusion:
          "Dhaka's workplaces are evolving quickly, and smart office design is at the center of this shift. When technology, aesthetics, and employee well-being come together, the result is a workspace that feels modern, reliable, and energizing.",
      },
    },
    {
      title: "Biophilic Design: Bringing Nature into Dhaka Offices",
      excerpt:
        "How natural elements are transforming urban workspaces in Bangladesh, creating healthier and more productive environments for employees.",
      image: "/assets/blog/Wellness Design.jpg",
      date: "March 10, 2024",
      author: "Arete Studio Team",
      readTime: "6 min read",
      category: "Wellness Design",
      fullContent: {
        introduction: [
          "Biophilic design is revolutionizing Dhaka's office spaces by integrating natural elements into the workplace. This approach not only enhances aesthetic appeal but also significantly improves employee well-being and productivity.",
          "In Dhaka's fast-paced urban environment, these benefits are more valuable than ever as companies seek to create spaces that promote both creativity and comfort.",
        ],
        sections: [
          {
            title: "The Science Behind Biophilic Design",
            content: [
              "Studies show that incorporating natural elements into workspaces can reduce stress by up to 15%, improve cognitive function by 8-10%, and boost creativity by 15%.",
              "The human connection to nature is deeply rooted in our biology, and bringing elements of nature indoors can have profound effects on mental health and productivity.",
            ],
          },
        ],
        conclusion:
          "Biophilic design represents more than just a trend—it's a fundamental shift towards creating workspaces that nurture both people and the planet.",
      },
    },
    {
      title: "Sustainable Materials in Modern Interior Design",
      excerpt:
        "Eco-friendly choices for contemporary Bangladeshi spaces, focusing on locally sourced and sustainable materials.",
      image: "/assets/blog/Materials.jpg",
      date: "February 28, 2024",
      author: "Arete Studio Team",
      readTime: "5 min read",
      category: "Materials",
      fullContent: {
        introduction: [
          "Sustainability is no longer a trend but a necessity in modern interior design. The construction and design industry is increasingly focusing on eco-friendly practices and materials.",
          "In Bangladesh, this shift towards sustainability is gaining momentum as both designers and clients recognize the long-term benefits of environmentally conscious choices.",
        ],
        sections: [
          {
            title: "Locally Sourced Sustainable Materials",
            content:
              "Bangladesh offers a wealth of sustainable material options that support local economies and reduce carbon footprint:",
            list: [
              "Bamboo and rattan from Bangladeshi sources",
              "Recycled wood and reclaimed materials",
              "Natural stone and terracotta",
              "Eco-friendly paints and finishes",
            ],
          },
        ],
        conclusion:
          "Sustainable interior design represents a commitment to both environmental responsibility and long-term value.",
      },
    },
    {
      title: "Modern Reception Areas: Creating Lasting First Impressions",
      excerpt:
        "Designing reception spaces that reflect your brand identity and welcome clients with sophistication.",
      image: "/assets/blog/Reception Design.jpg",
      date: "February 20, 2024",
      author: "Arete Studio Team",
      readTime: "5 min read",
      category: "Reception Design",
      fullContent: {
        introduction: [
          "The reception area is the first point of contact for your clients and sets the tone for their entire experience with your brand.",
          "A well-designed reception space can significantly impact client perception and brand identity.",
        ],
        sections: [
          {
            title: "Key Elements of an Effective Reception",
            content:
              "Creating a reception area that balances aesthetics and functionality requires careful consideration of several elements:",
            list: [
              "Strategic lighting design",
              "Comfortable seating arrangements",
              "Brand-consistent color schemes",
              "Reception desk design and materials",
            ],
          },
        ],
        conclusion:
          "Your reception area is more than just a waiting space—it's a strategic tool for brand communication.",
      },
    },
    {
      title: "Ergonomic Furniture for Productive Workspaces",
      excerpt:
        "Selecting furniture that promotes health, comfort, and productivity in modern Dhaka offices.",
      image: "/assets/blog/Office Furniture.jpg",
      date: "February 15, 2024",
      author: "Arete Studio Team",
      readTime: "6 min read",
      category: "Office Furniture",
      fullContent: {
        introduction: [
          "Ergonomic furniture is no longer a luxury but a necessity in modern office design, especially in Dhaka's fast-paced business environment.",
          "Proper ergonomic design can significantly reduce workplace injuries and improve overall productivity.",
        ],
        sections: [
          {
            title: "Essential Ergonomic Considerations",
            content:
              "When selecting office furniture, consider these key ergonomic factors:",
            list: [
              "Adjustable chair height and lumbar support",
              "Desk height and monitor positioning",
              "Keyboard and mouse placement",
              "Footrests and anti-fatigue mats",
            ],
          },
        ],
        conclusion:
          "Investing in ergonomic furniture is investing in your team's health and productivity.",
      },
    },
  ];

  const renderBlogContent = (content) => {
    if (!content) return null;

    return (
      <Box sx={{ lineHeight: 1.6 }}>
        {/* Introduction */}
        {content.introduction &&
          content.introduction.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "0.9rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              {paragraph}
            </Typography>
          ))}

        {/* Sections */}
        {content.sections &&
          content.sections.map((section, sectionIndex) => (
            <Box key={sectionIndex} sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#2c3e50",
                  fontSize: { xs: "1.3rem", md: "1.75rem" },
                  lineHeight: 1.3,
                }}
              >
                {section.title}
              </Typography>

              {Array.isArray(section.content) ? (
                section.content.map((item, itemIndex) => {
                  if (typeof item === "string") {
                    return (
                      <Typography
                        key={itemIndex}
                        variant="body1"
                        sx={{
                          mb: 2,
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </Typography>
                    );
                  } else if (item.list) {
                    return (
                      <List
                        key={itemIndex}
                        sx={{
                          listStyleType: "disc",
                          pl: 2,
                          mb: 2,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {item.list.map((listItem, listIndex) => (
                          <ListItem
                            key={listIndex}
                            sx={{
                              display: "list-item",
                              pl: 1,
                              py: 0.5,
                              fontSize: "inherit",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "inherit",
                                lineHeight: 1.6,
                              }}
                            >
                              {listItem}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    );
                  }
                  return null;
                })
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", md: "1.1rem" },
                    lineHeight: 1.7,
                  }}
                >
                  {section.content}
                </Typography>
              )}

              {/* Subsections */}
              {section.subsections &&
                section.subsections.map((subsection, subIndex) => (
                  <Box key={subIndex} sx={{ mb: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: "#C89B3C",
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                        lineHeight: 1.4,
                      }}
                    >
                      {subsection.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 1.5,
                        fontSize: { xs: "0.9rem", md: "1.1rem" },
                        lineHeight: 1.7,
                      }}
                    >
                      {subsection.content}
                    </Typography>
                    {subsection.list && (
                      <List
                        sx={{
                          listStyleType: "disc",
                          pl: 2,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {subsection.list.map((listItem, listIndex) => (
                          <ListItem
                            key={listIndex}
                            sx={{
                              display: "list-item",
                              pl: 1,
                              py: 0.5,
                              fontSize: "inherit",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "inherit",
                                lineHeight: 1.6,
                              }}
                            >
                              {listItem}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                ))}

              {/* Standalone lists */}
              {section.list && (
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 2,
                    mb: 2,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {section.list.map((listItem, listIndex) => (
                    <ListItem
                      key={listIndex}
                      sx={{
                        display: "list-item",
                        pl: 1,
                        py: 0.5,
                        fontSize: "inherit",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "inherit",
                          lineHeight: 1.6,
                        }}
                      >
                        {listItem}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}

        {/* Conclusion */}
        {content.conclusion && (
          <Box
            sx={{
              bgcolor: "rgba(200, 155, 60, 0.1)",
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              mb: 4,
              mt: 4,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#2c3e50",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Conclusion
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                fontStyle: "italic",
                fontSize: { xs: "0.9rem", md: "1.1rem" },
              }}
            >
              {content.conclusion}
            </Typography>
          </Box>
        )}
      </Box>
    );
  };

  return (
    <>
      {/* ======================== HERO SECTION ======================== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "75vh", md: "90vh" },
          overflow: "hidden",
          bgcolor: "#000",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog/hero2.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: "scale(1.1)",
            filter: "brightness(0.7) contrast(1.05)",
            transition: "transform 8s ease-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 100%)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: { xs: "flex-end", md: "center" },
            justifyContent: { xs: "center", md: "flex-start" },
            width: "90%",
            maxWidth: "1720px",
            mx: "auto",
            pb: { xs: 2, md: 0 },
            px: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              color: "#fff",
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: 600 },
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 90,
                height: 4,
                bgcolor: "#C89B3C",
                mb: { xs: 2, md: 3 },
                mx: { xs: "auto", md: 0 },
              }}
            />

            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: 2,
                fontSize: {
                  xs: "0.90rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
              }}
            >
              The Studio Blog
            </Typography>

            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 450,
                opacity: 0.9,
                fontSize: {
                  xs: "0.5rem",
                  md: "0.90rem",
                },
                mb: 2,
              }}
            >
              Design decoded. From concept to completion, get an insider's look
              at our projects, inspirations, and the principles that guide us.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')",
            opacity: 0.05,
            zIndex: 1,
          }}
        />
      </Box>

      {/* ======================== BLOG GRID SECTION ======================== */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1720px",
          mx: "auto",
          py: 12,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: 11, md: 14 },
            letterSpacing: 9,
            textTransform: "uppercase",
            textAlign: "center",
            mb: 2,
            color: "#2c3e50",
          }}
        >
          LATEST&nbsp;ARTICLES
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
          Explore our latest insights on interior design trends, tips, and
          transformations shaping Dhaka's spaces.
        </Typography>

        <Grid container spacing={6}>
          {blogs.map((blog, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  background: "white",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    borderColor: "rgba(200, 155, 60, 0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={blog.category}
                    size="small"
                    sx={{
                      bgcolor: "rgba(200,155,60,0.12)",
                      color: "#C89B3C",
                      fontWeight: 600,
                      mb: 2.5,
                      px: 1.5,
                      py: 0.5,
                      fontSize: "0.7rem",
                      letterSpacing: "0.05em",
                      border: "1px solid rgba(200,155,60,0.2)",
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.3,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "#2c3e50",
                      minHeight: "2.6em",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.5,
                      mb: 3,
                      fontSize: "0.85rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "3.8em",
                    }}
                  >
                    {blog.excerpt}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2.5 }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarToday sx={{ fontSize: 14, color: "#C89B3C" }} />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={500}
                        fontSize="0.75rem"
                      >
                        {blog.date}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Person sx={{ fontSize: 14, color: "#C89B3C" }} />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={500}
                        fontSize="0.75rem"
                      >
                        {blog.author}
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* Read More Button */}
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    onClick={() => handleOpen(blog)}
                    sx={{
                      borderColor: "#C89B3C",
                      color: "#C89B3C",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      px: 3,
                      py: 1,
                      "&:hover": {
                        borderColor: "#B88A2A",
                        backgroundColor: "rgba(200, 155, 60, 0.1)",
                        transform: "translateX(4px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ======================== FULLSCREEN MODAL ======================== */}
      <Modal
        open={openModal}
        onClose={handleClose}
        sx={{
          overflow: "auto",
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "90%" },
            maxWidth: "1200px",
            maxHeight: { xs: "95vh", md: "90vh" },
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: { xs: 2, md: 3 },
            boxShadow: 24,
            p: 0,
          }}
        >
          {selectedBlog && (
            <>
              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: { xs: 8, md: 16 },
                  top: { xs: 8, md: 16 },
                  zIndex: 10,
                  bgcolor: "rgba(255,255,255,0.9)",
                  "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                  width: { xs: 32, md: 48 },
                  height: { xs: 32, md: 48 },
                }}
              >
                <Close sx={{ fontSize: { xs: 18, md: 24 } }} />
              </IconButton>

              {/* Hero Image */}
              <CardMedia
                component="img"
                height={isMobile ? "200" : "400"}
                image={selectedBlog.image}
                alt={selectedBlog.title}
                sx={{ width: "100%" }}
              />

              {/* Content Container */}
              <Container
                maxWidth="md"
                sx={{
                  py: { xs: 4, md: 6 },
                  px: { xs: 3, md: 4 },
                }}
              >
                {/* Article Header */}
                <Box sx={{ mb: 4 }}>
                  <Chip
                    label={selectedBlog.category}
                    sx={{
                      bgcolor: "rgba(200,155,60,0.1)",
                      color: "#C89B3C",
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                      height: { xs: 24, md: 32 },
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      lineHeight: 1.3,
                      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                      color: "#2c3e50",
                    }}
                  >
                    {selectedBlog.title}
                  </Typography>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 3 }}
                    sx={{ mb: 4 }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarToday
                        sx={{
                          fontSize: { xs: 16, md: 18 },
                          color: "#C89B3C",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                      >
                        {selectedBlog.date}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Person
                        sx={{
                          fontSize: { xs: 16, md: 18 },
                          color: "#C89B3C",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                      >
                        {selectedBlog.author}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                    >
                      {selectedBlog.readTime}
                    </Typography>
                  </Stack>

                  <Divider sx={{ mb: 4 }} />
                </Box>

                {/* Article Content */}
                {renderBlogContent(selectedBlog.fullContent)}
              </Container>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
