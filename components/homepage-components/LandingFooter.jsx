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
const LandingFooter = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: "#692047",
      color: "white",
      py: 4,
      textAlign: "center",
    }}
  >
    <Typography variant="body1">
      © 2025 KRC Buchhaltungskanzlei KG. Alle Rechte vorbehalten.
    </Typography>
    <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
      Impressum | Datenschutz | AGB
    </Typography>
  </Box>
);

export default LandingFooter;
