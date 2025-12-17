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
const ParallaxSection = ({ imageUrl, title, subtitle, icon: Icon }) => (
  <Box
    sx={{
      height: { xs: "40vh", md: "60vh" },
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: { md: "fixed" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: "rgba(105, 32, 71, 0.7)",
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        color: "white",
        px: 2,
      }}
    >
      {Icon && <Icon sx={{ fontSize: 80, mb: 2 }} />}
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h6">{subtitle}</Typography>
    </Box>
  </Box>
);

export default ParallaxSection;
