"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

// === Import and Configure Inter font ===
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular (400) and Semi-Bold (600)
  display: "swap",
});

// === Create MUI Theme ===
const theme = createTheme({
  palette: {
    primary: { main: "#F5F1E5" }, // Arete gold tone
    secondary: { main: "#1e1e1e" }, // dark background tone
  },
  typography: {
    fontFamily: inter.style.fontFamily, // Use Inter as the global font
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});

// === Root Layout Component ===
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
