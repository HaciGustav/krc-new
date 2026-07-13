import * as React from "react";
import { useTranslation } from "react-i18next"; 
import { useRouter } from "next/router"; 
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SidebarList from "./List";
import {
  AppBar,
  DrawerHeader,
  Main,
  drawerHeight,
  drawerWidth,
} from "./LayoutComponents";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import css from "@/styles/layout.module.css";
import LangSwitch from "../LangSwitch"; // Dein Sprach-Schalter

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation(); 
  const router = useRouter(); 
  const theme = useTheme();
  
  const [open, setOpen] = React.useState(true);
  const [alertOpen, setAlertOpen] = React.useState(true);
  
  const screenMedium = useMediaQuery("(max-width:800px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // --- Sprache aus dem Gedächtnis laden, wenn die Seite aufgerufen wird ---
  React.useEffect(() => {
    const savedLang = localStorage.getItem("krc_language");
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  React.useEffect(() => {
    setOpen(screenMedium ? false : true);
  }, [screenMedium]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      
      {/* THE TOP PURPLE HEADER BAR */}
      <AppBar
        sx={{
          height: drawerHeight,
          backgroundColor: "#692046",
        }}
      >
        {/* Mobile view layout for the top bar */}
        {screenMedium && (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between", // Platz zwischen Logo und Button
              alignItems: "center",
              paddingInline: "10px", 
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
              <IconButton onClick={() => setOpen(!open)}>
                {open ? (
                  <CloseIcon sx={{ color: "#fff" }} />
                ) : (
                  <MenuIcon sx={{ color: "#fff" }} />
                )}
              </IconButton>

              <Link
                href={"/"}
                style={{
                  textDecoration: "none",
                  backgroundColor: "#591036",
                  display: "grid",
                  placeItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "25%",
                }}
              >
                <img style={{ width: "2rem" }} src="/assets/logo.svg" alt="Logo" />
              </Link>

              <h3 style={{ fontSize: "0.7rem", textAlign: "center", margin: 0 }}>
                <span style={{ fontSize: "0.7rem", padding: "0" }}>KRC </span>
                {t("header.kanzlei")}
              </h3>
            </div>
            
            {/* Sprachwechsler Mobile */}
            <LangSwitch />
          </div>
        )}

        {/* Desktop view layout for the top bar (contact info) */}
        {!screenMedium && (
          <div className={css.header_info_div} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', paddingRight: '20px' }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
              {t("header.address")}
              <span style={{ paddingInline: "3px" }} />
              <a style={{ color: "#fff", textDecoration: "none" }} href="tel:+436601743900">
                +43 660 174 39 00
              </a>
              <span style={{ paddingInline: "3px" }}> | </span>
              <a style={{ color: "#fff", textDecoration: "none" }} href="mailto:office@krc-buchhaltung.at">
                office@krc-buchhaltung.at
              </a>
            </div>
            
            {/* Sprachwechsler Desktop */}
            <LangSwitch />
          </div>
        )}
      </AppBar>

      {/* THE LEFT SIDEBAR MENU */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#fff", 
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBlock: "2rem",
          }}
        >
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <img style={{ width: "8rem" }} src="/assets/logo.svg" alt="Logo" />
          </Link>
          <h3 style={{ color: "#000", fontSize: "1rem", textAlign: "center", margin: 0 }}>
            <span
              style={{
                fontSize: "1.5rem",
                display: "block",
                width: "100%",
                padding: "0",
              }}
            >
              KRC
            </span>
            {t("header.kanzlei")}
          </h3>
        </div>
        <Divider />
        <SidebarList />
      </Drawer>

      {/* THE MAIN CONTENT AREA ON THE RIGHT */}
      <Main open={open} sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <DrawerHeader /> 
        
        {/* --- HOLIDAY ALERT NOTIFICATION (Nur auf der Startseite sichtbar) --- */}
        {router.pathname === "/" && (
          <Box 
            sx={{
              position: "sticky",
              top: "0px",
              zIndex: 50,
              height: 0,
              overflow: "visible"
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c6cb",
                borderRadius: "5px",
                padding: "15px 20px",
                margin: "20px", 
                display: "flex",
                alignItems: "flex-start", 
                gap: "15px",
                color: "#721c24",
                boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease-in-out", 
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="#721c24" 
                style={{ width: "24px", height: "24px", flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M12 2L1 21h22L12 2zm0 3.45l8.4 14.55H3.6L12 5.45zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z"/>
              </svg>
              
              <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography 
                  onClick={() => setAlertOpen(!alertOpen)}
                  sx={{ fontWeight: "bold", fontFamily: "sans-serif", cursor: "pointer" }}
                >
                  {t("alert.short")}
                </Typography>
                
                {alertOpen && (
                  <Typography sx={{ fontFamily: "sans-serif", mt: 1 }}>
                    {t("alert.details")}
                  </Typography>
                )}
              </Box>

              <IconButton 
                onClick={() => setAlertOpen(!alertOpen)} 
                size="small" 
                sx={{ padding: 0, color: "#721c24", mt: "2px" }}
              >
                {alertOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                  </svg>
                )}
              </IconButton>
            </Box>
          </Box>
        )}
        {/* ---------------------------------- */}

        {/* Echter Content */}
        <Box sx={{ flexGrow: 1 }}>
            {children} 
        </Box>
        
      </Main>
    </Box>
  );
};

export default Layout;