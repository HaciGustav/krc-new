import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  Switch,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";

const Abmeldung = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { sendAbmeldung } = useFormCalls();

  const screenSmall = useMediaQuery("(max-width:500px)");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitButtonDisabled(true);

    sendAbmeldung(formData).then(() => setSubmitButtonDisabled(false));

    // console.log("Form Data:", formData);
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const pageHeaderSize = screenSmall ? "1.5rem" : undefined;
  const textfieldSize = screenSmall ? "small" : undefined;
  const typographyFontSize = screenSmall ? "0.67rem" : "medium";

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ fontSize: pageHeaderSize }} gutterBottom>
        Abmeldeformular
      </Typography>
      <div className={css.flex_column}>
        <div className={css.flex}>
          <TextField
            size={textfieldSize}
            name="employer"
            label="Dienstgeber"
            fullWidth
            required
            value={formData.employer || ""}
            onChange={handleChange}
          />
          <TextField
            size={textfieldSize}
            name="workAddress"
            label="Betriebstätte (Arbeitsort)"
            fullWidth
            required
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
            required
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            size={textfieldSize}
            name="firstnameDN"
            label="Vorname DN"
            fullWidth
            required
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
            required
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
            required
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <DateInput
            filterValue={formData}
            setFilterValue={setFormData}
            size={textfieldSize}
            required={true}
            label="Abmeldedatum (Letzter Arbeitstag)"
            name="lastWorkDay"
          />
        </div>
        <div className={css.flex}>
          <TextField
            size={textfieldSize}
            name="remainingHolidays"
            label="Verbleibende Urlaubstage"
            fullWidth
            required
            value={formData.remainingHolidays || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            size={textfieldSize}
            name="terminationType"
            label="Kündigungsart"
            fullWidth
            required
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
                  required
                />
              }
              label={
                <span style={{ fontSize: typographyFontSize }}>
                  Hiermit akzeptiere ich die
                  <a href="/dsvgo"> DSVGO (Dateschutzerklärung)</a>
                </span>
              }
            />
          </FormGroup>
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
  );
};

export default Abmeldung;
