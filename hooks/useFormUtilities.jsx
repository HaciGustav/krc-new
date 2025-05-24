import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
const initModalProps = { open: false, fieldCaption: "", message: "" };

const useFormUtilities = () => {
  const [warningModalProps, setWarningModalProps] = useState(initModalProps);

  const screenSmall = useMediaQuery("(max-width:500px)");

  const validateForm = (requiredFields, formData) => {
    for (const { fieldName, fieldCaption } of requiredFields) {
      const fieldValue = formData[fieldName];
      if (fieldName == "insuranceNumberDN") {
        const isvalid = /^\d{10}$/.test(fieldValue);
        if (!isvalid) {
          setWarningModalProps({
            open: true,
            fieldCaption,
            message: "Versicherungsnummer ist ungültig!",
          });
          return false;
        }
      }
      if (
        fieldValue === "" ||
        fieldValue === undefined ||
        fieldValue === false
      ) {
        setWarningModalProps({ open: true, fieldCaption });
        return false;
      }
    }

    return true;
  };

  const handleCloseModal = () => setWarningModalProps(initModalProps);

  const pageHeaderSize = screenSmall ? "1.5rem" : undefined;
  const textfieldSize = screenSmall ? "small" : undefined;
  const typographyFontSize = screenSmall ? "smaller" : "small";

  return {
    warningModalProps,
    setWarningModalProps,
    handleCloseModal,
    validateForm,

    //input styles
    screenSmall,
    pageHeaderSize,
    textfieldSize,
    typographyFontSize,
  };
};

export default useFormUtilities;
