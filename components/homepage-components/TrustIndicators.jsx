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
const TrustIndicators = () => {
  const indicators = [
    { number: "500+", label: "Zufriedene Mandanten" },
    { number: "25", label: "Jahre Erfahrung" },
    { number: "100%", label: "Diskretion garantiert" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        {indicators.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#692047",
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                {item.number}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrustIndicators;
