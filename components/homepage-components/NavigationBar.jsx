import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

// Navigation Bar Component
const NavigationBar = ({
  scrollY,
  navigation,
  onNavigate,
  isMobile,
  onMenuToggle,
}) => (
  <AppBar
    position="fixed"
    sx={{
      bgcolor:
        scrollY > 50 ? "rgba(105, 32, 71, 0.95)" : "rgba(78, 26, 54, 0.7)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
    }}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
        KRC Buchhaltungskanzlei
      </Typography>

      {!isMobile ? (
        <>
          <Box sx={{ display: "flex", gap: 2 }}>
            {navigation.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            onClick={() => onNavigate("forms")}
            sx={{
              ml: 3,
              bgcolor: "#d4a5b8",
              color: "#692047",
              fontWeight: 600,
              "&:hover": { bgcolor: "#e5c4d1" },
            }}
          >
            Mitarbeiter-Formulare
          </Button>
        </>
      ) : (
        <IconButton color="inherit" onClick={onMenuToggle}>
          <MenuIcon />
        </IconButton>
      )}
    </Toolbar>
  </AppBar>
);
export default NavigationBar;
