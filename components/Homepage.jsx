import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Paper,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountBalance,
  Assessment,
  People,
  TrendingUp,
  Security,
  CloudDone,
  PersonAdd,
  Edit,
  Business,
  PersonRemove,
} from "@mui/icons-material";

import ContactSection from "@/components/homepage-components/ContactSection";
import FormsSection from "@/components/homepage-components/FormsSection";
import HeroSection from "@/components/homepage-components/HeroSection";
import LandingFooter from "@/components/homepage-components/LandingFooter";
import MobileDrawer from "@/components/homepage-components/MobileDrawer";
import NavigationBar from "@/components/homepage-components/NavigationBar";
import ParallaxSection from "@/components/homepage-components/ParallaxSection";
import ServicesSection from "@/components/homepage-components/ServicesSection";
import TrustIndicators from "@/components/homepage-components/TrustIndicators";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { label: "Start", id: "home" },
    { label: "Leistungen", id: "services" },
    { label: "Über uns", id: "about" },
    { label: "Kontakt", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#fafafa" }}>
      <NavigationBar
        scrollY={scrollY}
        navigation={navigation}
        onNavigate={scrollToSection}
        isMobile={isMobile}
        onMenuToggle={() => setMobileOpen(!mobileOpen)}
      />

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navigation={navigation}
        onNavigate={scrollToSection}
      />

      <HeroSection scrollY={scrollY} onNavigate={scrollToSection} />

      <TrustIndicators />

      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600"
        title="Kompetente Beratung"
        subtitle="Für Unternehmen jeder Größe"
      />

      <ServicesSection />

      <FormsSection />

      <ParallaxSection
        id="about"
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600"
        title="Digitale Buchhaltung"
        subtitle="Modern, effizient und sicher"
        icon={CloudDone}
      />

      <ContactSection />

      <LandingFooter />
    </Box>
  );
};

export default LandingPage;
