import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
    fieldName: "lastWorkDay",
    fieldCaption: "Abmeldedatum (Letzter Arbeitstag)",
  },
  {
    fieldName: "remainingHolidays",
    fieldCaption: "Resturlaub vorhanden",
  },
  {
    fieldName: "terminationType",
    fieldCaption: "Kündigungsart",
  },
  {
    fieldName: "confirmation",
    fieldCaption: "DSVGO (Datenschutzerklärung)",
  },
];

const Abmeldung = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { sendAbmeldung } = useFormCalls();

  const {
    warningModalProps,
    validateForm,
    handleCloseModal,
    pageHeaderSize,
    textfieldSize,
    typographyFontSize,
    setWarningModalProps,
  } = useFormUtilities();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidationOk = validateForm(requiredFields, formData);
    const isNotesError = formData.remainingHolidays === "Ja" && !formData.note;
    if (isValidationOk) {
      if (isNotesError) {
        setWarningModalProps({ open: true, fieldCaption: "Notizen" });
        return;
      }
      setSubmitButtonDisabled(true);
      sendAbmeldung(formData).then(() => setSubmitButtonDisabled(false));
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
          Abmeldeformular
        </Typography>
        <div className={css.flex_column}>
          <div className={css.form_section}>
            <SectionTitle title={"Firmendaten/Dienstgeber"} />
            <div className={css.flex}>
              <TextField
                size={textfieldSize}
                name="employer"
                label="Dienstgeber"
                fullWidth
                // required
                value={formData.employer || ""}
                onChange={handleChange}
              />
              <TextField
                size={textfieldSize}
                name="workAddress"
                label="Betriebstätte (Arbeitsort)"
                fullWidth
                // required
                value={formData.workAddress || ""}
                onChange={handleChange}
              />
            </div>

            <div className={css.flex}>
              <TextField
                size={textfieldSize}
                name="email"
                label="Firmen e-mail"
                inputProps={{
                  type: "email",
                }}
                fullWidth
                // required
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={css.form_section}>
            <SectionTitle title={"Dienstnehmer/in - Arbeiter/in Daten"} />
            <div className={css.flex}>
              <TextField
                size={textfieldSize}
                name="firstnameDN"
                label="Vorname DN"
                fullWidth
                // required
                value={formData.firstnameDN || ""}
                onChange={handleChange}
              />
            </div>
            <div className={css.flex}>
              <TextField
                size={textfieldSize}
                name="lastnameDN"
                label="Nachname DN"
                fullWidth
                // required
                value={formData.lastnameDN || ""}
                onChange={handleChange}
              />
            </div>
            <div className={css.flex}>
              <TextField
                size={textfieldSize}
                name="insuranceNumberDN"
                label="Versicherungsnummer DN"
                fullWidth
                // required
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
              />
            </div>
            <div className={css.flex}>
              <DateInput
                filterValue={formData}
                setFilterValue={setFormData}
                size={textfieldSize}
                // required={true}
                label="Abmeldedatum (Letzter Arbeitstag)"
                name="lastWorkDay"
              />
              {/* <TextField
              size={textfieldSize}
              name="remainingHolidays"
              label="Resturlaub vorhanden"
              fullWidth
              // required
              value={formData.remainingHolidays || ""}
              onChange={handleChange}
            /> */}

              <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
                <InputLabel size={textfieldSize} id="remainingHolidays-group">
                  Resturlaub vorhanden?
                </InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId="remainingHolidays-group"
                  id="remainingHolidays-select-small"
                  size={textfieldSize}
                  name="remainingHolidays"
                  value={formData.remainingHolidays || ""}
                  onChange={handleChange}
                  label="Resturlaub vorhanden?"
                >
                  <MenuItem value={"Nein"}>
                    <Typography sx={{ fontSize: typographyFontSize }}>
                      Nein
                    </Typography>
                  </MenuItem>
                  <MenuItem value={"Ja"}>
                    <Typography sx={{ fontSize: typographyFontSize }}>
                      Ja{" "}
                      <span
                        style={{
                          fontSize: "smaller",
                          color: "#f00",
                        }}
                      >
                        <em>(Bitte schreiben Sie in Notizen)</em>
                      </span>
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={css.flex}>
              <TextField
                size={textfieldSize}
                name="terminationType"
                label="Kündigungsart"
                fullWidth
                // required
                value={formData.terminationType || ""}
                onChange={handleChange}
              />
            </div>

            <div className={css.flex}>
              <TextField
                size={textfieldSize}
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      size={textfieldSize}
                      checked={formData.confirmation || false}
                      onChange={handleChange}
                      name="confirmation"
                      // required
                    />
                  }
                  label={
                    <span style={{ fontSize: typographyFontSize }}>
                      Hiermit akzeptiere ich die
                      <a href="/dsvgo"> DSVGO (Datenschutzerklärung)</a>
                    </span>
                  }
                />
              </FormGroup>
            </div>
          </div>
          <div className={css.flex}>
            <Button
              disabled={submitButtonDisabled}
              type="submit"
              variant="contained"
              color="primary"
            >
              Senden
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Abmeldung;
