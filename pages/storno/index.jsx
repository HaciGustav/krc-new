import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Grid,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  useMediaQuery,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";
import useFormUtilities from "@/hooks/useFormUtilities";
import ValidationWarningModal from "@/components/form-components/ValidationWarningModal";
import SectionTitle from "@/components/form-components/SectionTitle";
const requiredFields = [
  {
    fieldName: "employer",
    fieldCaption: "Dienstgeber",
  },
  {
    fieldName: "workAddress",
    fieldCaption: "Betriebstätte (Arbeitsort)",
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
    fieldName: "cancellationType",
    fieldCaption: "Stornierung von - ",
  },
  {
    fieldName: "mailSentAt",
    fieldCaption: "Datum der gesendeten Nachricht",
  },
  {
    fieldName: "confirmation",
    fieldCaption: "DSVGO (Datenschutzerklärung)",
  },
];

const Storno = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const { sendStorno } = useFormCalls();

  const {
    warningModalProps,
    validateForm,
    handleCloseModal,
    pageHeaderSize,
    textfieldSize,
    typographyFontSize,
  } = useFormUtilities();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidationOk = validateForm(requiredFields, formData);
    if (isValidationOk) {
      setSubmitButtonDisabled(true);
      sendStorno(formData).then(() => setSubmitButtonDisabled(false));
    }
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <ValidationWarningModal
        modalProps={warningModalProps}
        handleClose={handleCloseModal}
      />

      <form className={css.container} onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ fontSize: pageHeaderSize }} gutterBottom>
          Stornierungsformular
        </Typography>
        <div className={css.flex_column}>
          <div className={css.form_section}>
            <SectionTitle title={"Firmendaten/Dienstgeber"} />
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
                label="Betriebstätte (Arbeitsort)"
                size={textfieldSize}
                // required
                fullWidth
                value={formData.workAddress}
                onChange={handleChange}
              />
            </div>
            <div className={css.flex}>
              <TextField
                name="email"
                label="Firmen e-mail"
                size={textfieldSize}
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
          </div>
          <div className={css.form_section}>
            <SectionTitle title={"Dienstnehmer/in - Arbeiter/in Daten"} />

            <div className={css.flex}>
              <TextField
                name="firstnameDN"
                label="Vorname DN"
                // required
                size={textfieldSize}
                fullWidth
                value={formData.firstnameDN || ""}
                onChange={handleChange}
              />
              <TextField
                name="lastnameDN"
                label="Nachname DN"
                // required
                size={textfieldSize}
                fullWidth
                value={formData.lastnameDN || ""}
                onChange={handleChange}
              />
            </div>

            <div className={css.flex}>
              <TextField
                name="insuranceNumberDN"
                label="Versicherungsnummer DN"
                // required
                size={textfieldSize}
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
              <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
                <InputLabel size={textfieldSize} id="cancellationType-group">
                  Stornierung von
                </InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId="cancellationType-group"
                  id="cancellationType-select-small"
                  size={textfieldSize}
                  name="cancellationType"
                  value={formData.cancellationType || ""}
                  onChange={handleChange}
                  label="Stornierung von"
                >
                  <MenuItem value={""}>
                    <Typography
                      component="em"
                      sx={{ fontSize: typographyFontSize }}
                    >
                      None
                    </Typography>
                  </MenuItem>

                  <MenuItem value={"Anmeldung"}>
                    <Typography sx={{ fontSize: typographyFontSize }}>
                      Anmeldung
                    </Typography>
                  </MenuItem>
                  <MenuItem value={"Abmeldung"}>
                    <Typography sx={{ fontSize: typographyFontSize }}>
                      Abmeldung
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>

              <DateInput
                filterValue={formData}
                // required={true}
                setFilterValue={setFormData}
                label="Datum der gesendeten Nachricht"
                name="mailSentAt"
                size={textfieldSize}
              />
            </div>
            <div className={css.flex}>
              <TextField
                name="note"
                label="Notizen"
                fullWidth
                multiline
                rows={4}
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

export default Storno;
