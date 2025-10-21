"use client";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(to bottom, #1c1b1a, #2b2725)",
        color: "#fff",
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
        {/* Subtitle */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: 13,
            letterSpacing: 8,
            textTransform: "uppercase",
            mb: 12,
            color: "#a8a7a6da",
          }}
        >
          LET&apos;S DESIGN YOUR NEXT SPACE TOGETHER
        </Typography>

        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* Left - Appointment Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  backgroundColor: "#d6c1ab",
                  borderRadius: 2,
                  p: 6,
                  color: "#2b2725",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={3}
                  textAlign="center"
                >
                  Book an Appointment
                </Typography>

                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      sx: { backgroundColor: "#f5e9db", borderRadius: 1 },
                    }}
                  />
                  <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      sx: { backgroundColor: "#f5e9db", borderRadius: 1 },
                    }}
                  />
                  <TextField
                    label="Phone"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      sx: { backgroundColor: "#f5e9db", borderRadius: 1 },
                    }}
                  />
                  <TextField
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      sx: { backgroundColor: "#f5e9db", borderRadius: 1 },
                    }}
                  />
                  <Typography
                    variant="caption"
                    display="block"
                    textAlign="center"
                    sx={{ mt: 1, mb: 2, color: "#4b3b2f" }}
                  >
                    We will get back to you within 24 hours.
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#8b4a25",
                      "&:hover": { backgroundColor: "#a0522d" },
                      borderRadius: 2,
                      py: 1.2,
                      fontWeight: "bold",
                      color: "#fff",
                      textTransform: "none",
                    }}
                  >
                    Book Appointment
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right - Showroom Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Visit Our Showroom
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Address Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    justifyContent: "center",
                  }}
                >
                  <FaMapMarkerAlt
                    style={{ marginRight: 12, color: "#d6c1ab" }}
                  />
                  <Typography>123 Gulshan Avenue, Dhaka 1212</Typography>
                </Box>

                {/* Working Hours Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    justifyContent: "center",
                  }}
                >
                  <FaClock style={{ marginRight: 12, color: "#d6c1ab" }} />
                  <Typography>Sat – Thurs: 10:00am – 7:00pm</Typography>
                </Box>

                {/* Phone Number Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    justifyContent: "center",
                  }}
                >
                  <FaPhone style={{ marginRight: 12, color: "#d6c1ab" }} />
                  <Typography>+880 2 1234 5678</Typography>
                </Box>

                {/* Email Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    justifyContent: "center",
                  }}
                >
                  <FaEnvelope style={{ marginRight: 12, color: "#d6c1ab" }} />
                  <Typography>enquiries@arete.com</Typography>
                </Box>
              </Box>

              {/* Map Embed */}
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                  mt: 8,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902885627972!2d90.41319427538893!3d23.75087658879652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1d9a1a1c1%3A0x9e3f9a3dd9b9d902!2sGulshan%20Avenue!5e0!3m2!1sen!2sbd!4v1698237760000!5m2!1sen!2sbd"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
