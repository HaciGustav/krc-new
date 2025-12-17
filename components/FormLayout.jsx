import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  DrawerHeader,
  drawerHeight,
  drawerWidth,
  Main,
} from "./Layout/LayoutComponents";
import Link from "next/link";
import SidebarList from "./Layout/List";
import css from "@/styles/layout.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const FormLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const screenMedium = useMediaQuery("(max-width:800px)");
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(screenMedium ? false : true);
  }, [screenMedium]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          height: drawerHeight,
          backgroundColor: "#692046",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "flex-start",
        }}
      >
        {screenMedium && (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              columnGap: "10px",
              color: "#fff",
            }}
          >
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
              <img style={{ width: "2rem" }} src="/assets/logo.svg" />
            </Link>
            <h3 style={{ fontSize: "0.7rem", textAlign: "center" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  // display: "block",
                  // width: "100%",
                  padding: "0",
                }}
              >
                {" "}
                KRC{" "}
              </span>{" "}
              Buchhaltungskanzlei KG
            </h3>
          </div>
        )}
        {!screenMedium && (
          <div className={css.header_info_div}>
            Großmarktstraße 4, 1230 Wien - Tel:
            <span style={{ paddingInline: "3px" }} />
            <a style={{ color: "#fff" }} href="tel:+43 660 174 39 00 ">
              {" "}
              +43 660 174 39 00{" "}
            </a>
            <span style={{ paddingInline: "3px" }}> | </span>
            <a
              style={{ color: "#fff" }}
              href="mailto:office@krc-buchhaltung.at"
            >
              {" "}
              office@krc-buchhaltung.at
            </a>
          </div>
        )}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
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
            <img style={{ width: "8rem" }} src="/assets/logo.svg" />
          </Link>
          <h3 style={{ color: "#000", fontSize: "1rem", textAlign: "center" }}>
            <span
              style={{
                fontSize: "1.5rem",
                display: "block",
                width: "100%",
                padding: "0",
              }}
            >
              {" "}
              KRC{" "}
            </span>{" "}
            Buchhaltungskanzlei KG
          </h3>
        </div>
        <Divider />
        <SidebarList />
        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default FormLayout;
