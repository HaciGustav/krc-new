import {
  TextField,
  Button,
  FormControlLabel,
  FormControl,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";
import useFormUtilities from "@/hooks/useFormUtilities";
import ValidationWarningModal from "@/components/form-components/ValidationWarningModal";

const requiredFields = [
  {
    fieldName: "employer",
    fieldCaption: "Dienstgeber",
  },
  {
    fieldName: "workAddress",
    fieldCaption: "Betriebstätte",
  },
  {
    fieldName: "email",
    fieldCaption: "Firmen e-mail",
  },
  {
    fieldName: "firstnameDN",
    fieldCaption: "Vorname",
  },
  {
    fieldName: "lastnameDN",
    fieldCaption: "Nachname",
  },
  {
    fieldName: "insuranceNumberDN",
    fieldCaption: "Versicherungsnummer",
  },
  {
    fieldName: "dob",
    fieldCaption: "Geburtsdatum",
  },
  {
    fieldName: "changingPurpose",
    fieldCaption: "Änderungszweck",
  },
  {
    fieldName: "confirmation",
    fieldCaption: "DSVGO (Datenschutzerklärung)",
  },
];

const Aenderung = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { sendAenderung } = useFormCalls();

  const {
    warningModalProps,
    validateForm,
    handleCloseModal,
    pageHeaderSize,
    textfieldSize,
    typographyFontSize,
  } = useFormUtilities();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidationOk = validateForm(requiredFields, formData);
    if (isValidationOk) {
      setSubmitButtonDisabled(true);
      sendAenderung(formData).then(() => setSubmitButtonDisabled(false));
    }
  };

  return (
    <>
      <ValidationWarningModal
        modalProps={warningModalProps}
        handleClose={handleCloseModal}
      />

      <form className={css.container} onSubmit={handleSubmit}>
        <div className={css.flex_column}>
          <Typography
            variant="h4"
            sx={{ fontSize: pageHeaderSize }}
            gutterBottom
          >
            Änderungsformular
          </Typography>
          <div className={css.flex}>
            <TextField
              name="employer"
              label="Dienstgeber"
              size={textfieldSize}
              // required
              fullWidth
              value={formData.employer || ""}
              onChange={handleChange}
            />
            <TextField
              name="workAddress"
              size={textfieldSize}
              label="Betriebstätte (Arbeitsort)"
              // required
              fullWidth
              value={formData.workAddress || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="email"
              size={textfieldSize}
              label="Firmen e-mail"
              inputProps={{
                type: "email",
              }}
              // required
              fullWidth
              value={formData.email || ""}
              onChange={handleChange}
            />
            <div className={css.placeholder_div} />
          </div>
          <div className={css.flex}>
            <TextField
              name="firstnameDN"
              size={textfieldSize}
              label="Vorname DN"
              // required
              fullWidth
              value={formData.firstnameDN || ""}
              onChange={handleChange}
            />

            <TextField
              name="lastnameDN"
              size={textfieldSize}
              label="Nachname DN"
              // required
              fullWidth
              value={formData.lastnameDN || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="insuranceNumberDN"
              size={textfieldSize}
              label="Versicherungsnummer DN"
              fullWidth
              value={formData.insuranceNumberDN || ""}
              onChange={handleChange}
            />
            <DateInput
              filterValue={formData}
              size={textfieldSize}
              //required={true}
              setFilterValue={setFormData}
              label="Geburtsdatum"
              name="dob"
            />{" "}
          </div>
          <div className={css.flex}>
            <TextField
              name="address"
              label="Adresse"
              size={textfieldSize}
              fullWidth
              value={formData.address || ""}
              onChange={handleChange}
            />

            <TextField
              name="zip"
              label="PLZ"
              size={textfieldSize}
              fullWidth
              value={formData.zip || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="city"
              label="Ort"
              size={textfieldSize}
              fullWidth
              value={formData.city || ""}
              onChange={handleChange}
            />

            <TextField
              name="citizenship"
              label="Staatsbürgerschaft"
              size={textfieldSize}
              fullWidth
              value={formData.citizenship || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="iban"
              label="IBAN"
              size={textfieldSize}
              fullWidth
              value={formData.iban || ""}
              onChange={handleChange}
              inputProps={{ style: { textTransform: "uppercase" } }}
            />

            <DateInput
              filterValue={formData}
              size={textfieldSize}
              setFilterValue={setFormData}
              label="Anmeldedatum 1. Arbeitstag"
              name="firstWorkDay"
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="jobDescription"
              label="Tätigkeit"
              size={textfieldSize}
              placeholder="z.B Taxilenker"
              fullWidth
              value={formData.jobDescription || ""}
              onChange={handleChange}
            />

            <TextField
              name="experience"
              label="Erfahrung Vorjahre"
              size={textfieldSize}
              fullWidth
              value={formData.experience || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="workingHours"
              label="Arbeitszeit (Stunden-Woche)"
              size={textfieldSize}
              fullWidth
              value={formData.workingHours || ""}
              onChange={handleChange}
            />

            <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
              <InputLabel size={textfieldSize} id="group">
                Gruppe
              </InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="group"
                id="demo-select-small"
                size={textfieldSize}
                name="gruppe"
                value={formData?.gruppe || ""}
                label="Gruppe"
                onChange={handleChange}
              >
                <MenuItem value={""}>
                  <Typography
                    component="em"
                    sx={{ fontSize: typographyFontSize }}
                  >
                    None
                  </Typography>
                </MenuItem>

                <MenuItem value={"Angestellte/r"}>
                  <Typography sx={{ fontSize: typographyFontSize }}>
                    Angestellte/r
                  </Typography>
                </MenuItem>
                <MenuItem
                  value={"Arbeiter/in"}
                  sx={{ fontSize: typographyFontSize }}
                >
                  <Typography sx={{ fontSize: typographyFontSize }}>
                    Arbeiter/in
                  </Typography>
                </MenuItem>
                <MenuItem value={"Lehrling"}>
                  <Typography sx={{ fontSize: typographyFontSize }}>
                    Lehrling
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={css.flex}>
            <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
              <InputLabel size={textfieldSize} id="insuranceType">
                Versicherungstyp
              </InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="insuranceType"
                id="demo-select-small"
                size={textfieldSize}
                name="insuranceType"
                value={formData?.insuranceType || ""}
                label="Versicherungstyp"
                onChange={handleChange}
                slotProps={{ input: { sx: { fontSize: typographyFontSize } } }}
              >
                <MenuItem value={""}>
                  <Typography
                    component="em"
                    sx={{ fontSize: typographyFontSize }}
                  >
                    None
                  </Typography>
                </MenuItem>

                <MenuItem value={"Vollversichert"}>
                  <Typography sx={{ fontSize: typographyFontSize }}>
                    Vollversichert
                  </Typography>
                </MenuItem>
                <MenuItem value={"Geringfügig"}>
                  <Typography sx={{ fontSize: typographyFontSize }}>
                    Geringfügig
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="salary"
              label="Gehalt - Monat (Brutto)"
              size={textfieldSize}
              fullWidth
              value={formData.salary || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <TextField
              name="changingPurpose"
              label="Änderungszweck"
              size={textfieldSize}
              // required
              fullWidth
              multiline
              rows={3}
              value={formData.changingPurpose || ""}
              onChange={handleChange}
              placeholder="Bitte beschreiben Sie, welche Daten Sie ändern möchten"
            />

            <TextField
              name="note"
              label="Notizen"
              size={textfieldSize}
              fullWidth
              multiline
              rows={3}
              value={formData.note || ""}
              onChange={handleChange}
            />
          </div>
          <div className={css.flex}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.confirmation || false}
                  size={textfieldSize}
                  onChange={handleChange}
                  name="confirmation"
                  // required
                />
              }
              label={
                <span style={{ fontSize: typographyFontSize }}>
                  Hiermit akzeptiere ich die{" "}
                  <a href="/dsvgo"> DSVGO (Datenschutzerklärung)</a>
                </span>
              }
            />
          </div>

          <Button
            disabled={submitButtonDisabled}
            type="submit"
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-start" }}
          >
            Senden
          </Button>
        </div>
      </form>
    </>
  );
};

export default Aenderung;
