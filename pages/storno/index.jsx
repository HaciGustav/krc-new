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

const Storno = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const { sendStorno } = useFormCalls();

  const screenSmall = useMediaQuery("(max-width:500px)");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitButtonDisabled(true);

    sendStorno(formData).then(() => setSubmitButtonDisabled(false));

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
        Stornierungsformular
      </Typography>
      <div className={css.flex_column}>
        <div className={css.flex}>
          <TextField
            name="employer"
            label="Dienstgeber"
            size={screenSmall ? "small" : undefined}
            required
            fullWidth
            value={formData.employer || ""}
            onChange={handleChange}
          />
          <TextField
            name="workAddress"
            label="Betriebstätte (Arbeitsort)"
            size={screenSmall ? "small" : undefined}
            required
            fullWidth
            value={formData.workAddress}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="email"
            label="Firmen e-mail"
            size={screenSmall ? "small" : undefined}
            inputProps={{
              type: "email",
            }}
            required
            fullWidth
            value={formData.email || ""}
            onChange={handleChange}
          />
          <div className={css.placeholder_div} />
        </div>
        <div className={css.flex}>
          <TextField
            name="firstnameDN"
            label="Vorname DN"
            required
            size={screenSmall ? "small" : undefined}
            fullWidth
            value={formData.firstnameDN || ""}
            onChange={handleChange}
          />
          <TextField
            name="lastnameDN"
            label="Nachname DN"
            required
            size={screenSmall ? "small" : undefined}
            fullWidth
            value={formData.lastnameDN || ""}
            onChange={handleChange}
          />
        </div>

        <div className={css.flex}>
          <TextField
            name="insuranceNumberDN"
            label="Versicherungsnummer DN"
            required
            size={screenSmall ? "small" : undefined}
            fullWidth
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />
          <div className={css.placeholder_div} />
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
            required={true}
            setFilterValue={setFormData}
            label="Gesendete Nachricht Datum"
            name="mailSentAt"
            size={screenSmall ? "small" : undefined}
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
                required
              />
            }
            label={
              <span style={{ fontSize: typographyFontSize }}>
                Hiermit akzeptiere ich die{" "}
                <a href="/dsvgo"> DSVGO (Dateschutzerklärung)</a>
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
  );
};

export default Storno;
