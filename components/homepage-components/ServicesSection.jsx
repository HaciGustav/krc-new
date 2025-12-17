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
import ServiceCard from "./ServiceCard";
const ServicesSection = () => {
  const services = [
    {
      icon: <AccountBalance sx={{ fontSize: 40 }} />,
      title: "Steuerberatung",
      description:
        "Professionelle Beratung in allen steuerlichen Angelegenheiten. Wir optimieren Ihre Steuerlast und sorgen für vollständige Compliance.",
    },
    {
      icon: <Assessment sx={{ fontSize: 40 }} />,
      title: "Jahresabschluss",
      description:
        "Erstellung von Jahresabschlüssen nach HGB und IFRS. Transparente und präzise Finanzberichterstattung für Ihr Unternehmen.",
    },
    {
      icon: <People sx={{ fontSize: 40 }} />,
      title: "Lohnbuchhaltung",
      description:
        "Zuverlässige Abwicklung Ihrer Lohn- und Gehaltsabrechnung. Pünktlich, korrekt und rechtssicher.",
    },
    {
      icon: <Business sx={{ fontSize: 40 }} />,
      title: "Unternehmensgründung",
      description:
        "Begleitung von der Idee bis zur erfolgreichen Gründung. Wir unterstützen Sie bei allen rechtlichen und steuerlichen Fragen.",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: "Finanzplanung",
      description:
        "Strategische Planung für nachhaltigen wirtschaftlichen Erfolg. Liquiditätsmanagement und Investitionsberatung.",
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Betriebsprüfung",
      description:
        "Kompetente Vertretung bei Betriebsprüfungen. Wir schützen Ihre Interessen gegenüber den Finanzbehörden.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }} id="services">
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 2, color: "#692047", fontWeight: 700 }}
      >
        Unsere Leistungen
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Maßgeschneiderte Lösungen für Ihre finanziellen Anforderungen
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
