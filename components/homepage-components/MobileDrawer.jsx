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

const MobileDrawer = ({ open, onClose, navigation, onNavigate }) => (
  <Drawer anchor="right" open={open} onClose={onClose}>
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navigation.map((item) => (
          <ListItem button key={item.id} onClick={() => onNavigate(item.id)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        <ListItem
          button
          onClick={() => onNavigate("forms")}
          sx={{
            bgcolor: "#692047",
            color: "white",
            mx: 2,
            borderRadius: 1,
            "&:hover": { bgcolor: "#8a2d5f" },
          }}
        >
          <ListItemText primary="Mitarbeiter-Formulare" />
        </ListItem>
      </List>
    </Box>
  </Drawer>
);

export default MobileDrawer;
