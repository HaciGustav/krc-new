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
const FormCard = ({ icon: Icon, title, description, buttonText, href }) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      textAlign: "center",
      borderTop: "4px solid #692047",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 12px 24px rgba(105, 32, 71, 0.2)",
      },
    }}
  >
    <Icon sx={{ fontSize: 60, color: "#692047", mb: 2 }} />
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: "#692047" }}>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      {description}
    </Typography>
    <Button
      variant="contained"
      fullWidth
      href={href}
      sx={{
        bgcolor: "#692047",
        py: 1.5,
        "&:hover": { bgcolor: "#8a2d5f" },
      }}
    >
      {buttonText}
    </Button>
  </Paper>
);

export default FormCard;
