import "@/styles/globals.css";

import Layout from "@/components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  const theme = useMemo(() => createTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
      <ToastContainer />
    </ThemeProvider>
  );
}
