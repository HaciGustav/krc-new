import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { useTranslation } from "react-i18next";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(/assets/tr.webp)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "transparent",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(/assets/de.webp)`,
      backgroundSize: "contain",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const LangSwitch = () => {
  const { i18n } = useTranslation();

  const isTurkish = i18n.language === "tr";

  const toggleLanguage = (event) => {
    const newLang = event.target.checked ? "tr" : "de";
    i18n.changeLanguage(newLang);
    // HIER WIRD DIE SPRACHE GESPEICHERT:
    localStorage.setItem("krc_language", newLang);
  };

  return (
    <FormControlLabel
      sx={{
        opacity: "0.6",
        transition: "opacity 0.3s ",
        "&:hover": { opacity: "1" },
        margin: 0,
      }}
      control={
        <MaterialUISwitch 
          sx={{ m: 1 }} 
          checked={isTurkish} 
          onChange={toggleLanguage} 
        />
      }
    />
  );
};

export default LangSwitch;