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
const HeroSection = ({ scrollY, onNavigate }) => (
  <Box
    id="home"
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      background:
        "linear-gradient(135deg, #692047 0%, #8a2d5f 50%, #a84472 100%)",
      position: "relative",
      overflow: "hidden",
      pt: 8,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    />

    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Box sx={{ textAlign: "center", color: "white" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 700,
            mb: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          KRC Buchhaltungskanzlei
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.3rem", md: "2rem" },
            fontWeight: 300,
            letterSpacing: 2,
            mb: 4,
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          Vertrauen durch Präzision
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => onNavigate("contact")}
          sx={{
            bgcolor: "white",
            color: "#692047",
            px: 5,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: 50,
            "&:hover": {
              bgcolor: "#f5f5f5",
              transform: "translateY(-3px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Jetzt Beratung anfragen
        </Button>
      </Box>
    </Container>
  </Box>
);
export default HeroSection;
