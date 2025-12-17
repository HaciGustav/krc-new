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
const ContactSection = () => (
  <Container maxWidth="lg" sx={{ py: 10 }} id="contact">
    <Typography
      variant="h3"
      align="center"
      sx={{ mb: 2, color: "#692047", fontWeight: 700 }}
    >
      Kontaktieren Sie uns
    </Typography>
    <Typography
      variant="h6"
      align="center"
      color="text.secondary"
      sx={{ mb: 6 }}
    >
      Wir freuen uns auf Ihre Anfrage
    </Typography>

    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        KRC Buchhaltungskanzlei
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Großmarktstraße 4, 1230 Wien
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Tel: +43 660 174 39 00
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        E-Mail: office@krc-buchhaltung.at
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "#692047",
          px: 5,
          py: 1.5,
          "&:hover": { bgcolor: "#8a2d5f" },
        }}
      >
        Termin vereinbaren
      </Button>
    </Box>
  </Container>
);

export default ContactSection;
