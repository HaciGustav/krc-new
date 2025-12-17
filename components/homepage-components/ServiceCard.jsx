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
const ServiceCard = ({ icon, title, description }) => (
  <Card
    sx={{
      height: "100%",
      borderLeft: "4px solid #692047",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 10px 30px rgba(105, 32, 71, 0.2)",
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ color: "#692047", mb: 2 }}>{icon}</Box>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600, color: "#692047" }}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ServiceCard;
