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
import FormCard from "./FormCard";
const FormsSection = () => {
  const forms = [
    {
      icon: PersonAdd,
      title: "Mitarbeiter anmelden",
      description:
        "Registrieren Sie neue Mitarbeiter in Ihrem Unternehmen schnell und unkompliziert.",
      buttonText: "Zum Anmeldeformular",
      href: "/anmeldung",
    },
    {
      icon: Edit,
      title: "Daten aktualisieren",
      description:
        "Aktualisieren Sie die Informationen Ihrer bestehenden Mitarbeiter bei Änderungen.",
      buttonText: "Daten aktualisieren",
      href: "/aenderung",
    },
    {
      icon: PersonRemove,
      title: "Mitarbeiter abmelden",
      description:
        "Melden Sie bestehende Mitarbeiter schnell und unkompliziert aus Ihrem Unternehmen ab.",
      buttonText: "Zum Abmeldeformular",
      href: "/abmeldung",
    },
  ];

  return (
    <Box id="forms" sx={{ bgcolor: "#f3e5ed", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, color: "#692047", fontWeight: 700 }}
        >
          Mitarbeiter-Formulare
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Für bestehende Mandanten
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {forms.map((form, index) => (
            <Grid item xs={12} md={5} key={index}>
              <FormCard {...form} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Bitte halten Sie Ihre Mandantennummer bereit. Bei Fragen stehen wir
            Ihnen gerne zur Verfügung.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FormsSection;
