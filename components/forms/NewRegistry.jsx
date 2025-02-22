import css from "@/styles/forms.module.css";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  Checkbox,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";
import { toastWarnNotify } from "@/utils/ToastNotify";
import { useEffect, useState } from "react";
import FileInput from "../form-components/FileInput";
import InfoIcon from "@mui/icons-material/Info";

const NewRegistry = () => {
  const [formData, setFormData] = useState({ minWage: true });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const screenSmall = useMediaQuery("(max-width:500px)");

  const { sendAnmeldung } = useFormCalls();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    let inputValue = value;

    if (type === "checkbox") {
      inputValue = checked;
    } else if (type === "file") {
      inputValue = event.target.files[0];
    }
    const additionalInfo = {};
    if (name === "salaryForm" && value === "kv") {
      additionalInfo.salary = "";
      additionalInfo.minWage = true;
    } else if (name === "salaryForm" && value !== "kv") {
      additionalInfo.minWage = false;
    }
    console.log(additionalInfo);

    setFormData({
      ...formData,
      ...additionalInfo,
      [name]: inputValue,
    });
  };
  console.log(formData);

  const validateForm = () => {
    let responseFlag = false;
    if (!formData.gruppe) {
      toastWarnNotify("Das Feld 'Gruppe' ist erforderlich!");
    } else if (!formData.insuranceType) {
      toastWarnNotify("Das Feld 'Versicherungstyp' ist erforderlich!");
      // } else if (!formData.eCard) {
      //   toastWarnNotify("Das Feld 'E Card' ist erforderlich!");
      // } else if (!formData.meldezettel) {
      //   toastWarnNotify("Das Feld 'Meldezettel' ist erforderlich!");
      // } else if (!formData.reisepass) {
      //   toastWarnNotify("Das Feld 'Reisepass' ist erforderlich!");
    } else {
      responseFlag = true;
    }
    return responseFlag;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidationOk = validateForm();
    if (isValidationOk) {
      setSubmitButtonDisabled(true);
      sendAnmeldung(formData).then(() => setSubmitButtonDisabled(false));
    }
  };
  const pageHeaderSize = screenSmall ? "1.5rem" : undefined;
  const textfieldSize = screenSmall ? "small" : undefined;
  const typographyFontSize = screenSmall ? "0.67rem" : "medium";
  const isManualInputSelected = formData?.salaryForm === "manualInput";
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ fontSize: pageHeaderSize }} gutterBottom>
        Anmeldeformular
      </Typography>{" "}
      <div className={css.flex_column}>
        <div className={css.flex}>
          <TextField
            size={textfieldSize}
            name="employer"
            label="Dienstgeber"
            required
            fullWidth
            value={formData.employer || ""}
            onChange={handleChange}
          />

          <TextField
            name="workAddress"
            size={textfieldSize}
            label="Betriebstätte (Arbeitsort)"
            required
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
            required
            inputProps={{
              type: "email",
            }}
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
            required
            fullWidth
            value={formData.firstnameDN || ""}
            onChange={handleChange}
          />
          <TextField
            name="lastnameDN"
            size={textfieldSize}
            label="Nachname DN"
            required
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
            required
            fullWidth
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />

          <div className={css.placeholder_div} />
        </div>
        <div className={css.flex}>
          <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
            <InputLabel size={textfieldSize} id="group">
              Familienzustand
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="group"
              id="demo-select-small"
              size={textfieldSize}
              name="maritalStatus"
              value={formData?.maritalStatus || ""}
              label="Familienzustand"
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

              <MenuItem value={"ledig"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Ledig
                </Typography>
              </MenuItem>
              <MenuItem value={"verheiratet"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Verheiratet
                </Typography>
              </MenuItem>
              <MenuItem value={"sonstiges"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Sonstiges
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
            <InputLabel size={textfieldSize} id="gender-group">
              Geschlecht
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="gender-group"
              id="gender-select-small"
              size={textfieldSize}
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              label="Geschlecht"
            >
              <MenuItem value={""}>
                <Typography
                  component="em"
                  sx={{ fontSize: typographyFontSize }}
                >
                  None
                </Typography>
              </MenuItem>

              <MenuItem value={"Weiblich"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Weiblich
                </Typography>
              </MenuItem>
              <MenuItem value={"Männlich"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Männlich
                </Typography>
              </MenuItem>
              <MenuItem value={"Andere"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Andere
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={css.flex}>
          <TextField
            name="address"
            label="Adresse"
            size={textfieldSize}
            required
            fullWidth
            value={formData.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="zip"
            size={textfieldSize}
            label="PLZ"
            required
            fullWidth
            value={formData.zip || ""}
            onChange={handleChange}
          />
          <TextField
            name="city"
            size={textfieldSize}
            label="Ort"
            required
            fullWidth
            value={formData.city || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="citizenship"
            size={textfieldSize}
            label="Staatsbürgerschaft"
            required
            fullWidth
            value={formData.citizenship || ""}
            onChange={handleChange}
          />
          <TextField
            name="iban"
            size={textfieldSize}
            label="IBAN"
            fullWidth
            value={formData.iban || ""}
            onChange={handleChange}
            sx={{ textTransform: "uppercase" }}
          />
        </div>

        <div className={css.flex}>
          <DateInput
            filterValue={formData}
            size={textfieldSize}
            required={true}
            setFilterValue={setFormData}
            label="Anmeldedatum 1. Arbeitstag"
            name="firstWorkDay"
          />
          <TextField
            name="jobDescription"
            label="Tätigkeit"
            size={textfieldSize}
            placeholder="z.B Taxilenker"
            required
            fullWidth
            value={formData.jobDescription || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="workingHours"
            label="Arbeitszeit (Stunden-Woche)"
            size={textfieldSize}
            required
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

              <MenuItem value={"angestellter"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Angestellter
                </Typography>
              </MenuItem>
              <MenuItem value={"arbeiter"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Arbeiter
                </Typography>
              </MenuItem>
              <MenuItem value={"lehrling"}>
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
              size={textfieldSize}
              labelId="insuranceType"
              id="demo-select-small"
              name="insuranceType"
              value={formData?.insuranceType || ""}
              label="Versicherungstyp"
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
          <div className={css.placeholder_div} />
        </div>
        <div className={css.flex}>
          <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
            <InputLabel size={textfieldSize} id="gehalt-select-label">
              Gehalt
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              size={textfieldSize}
              labelId="gehalt-select-label"
              id="gehalt-select-small"
              name="salaryForm"
              value={formData?.salaryForm || (formData?.minWage && "kv")}
              label="Gehalt"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={"kv"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Mindestlohn
                </Typography>
              </MenuItem>
              <MenuItem value={"manualInput"}>
                <Typography sx={{ fontSize: typographyFontSize }}>
                  Manuelle Eingabe
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
          {isManualInputSelected ? (
            <TextField
              name="salary"
              size={textfieldSize}
              label="Gehalt Manuelle Eingabe (Brutto)"
              required
              fullWidth
              value={formData.salary || ""}
              onChange={handleChange}
            />
          ) : (
            <div className={css.flex} />
          )}

          {/* <FormControlLabel
            // sx={{ width: "100%" }}
            slotProps={{
              typography: { fontSize: typographyFontSize },
            }}
            control={
              <Checkbox
                size={textfieldSize}
                checked={formData.minWage || false}
                onChange={handleChange}
                name="minWage"
              />
            }
            label="Gehalt nach Kollektivvertrag"
          /> */}
        </div>
        <div className={css.flex}>
          <TextField
            name="note"
            label="Notizen"
            size={textfieldSize}
            fullWidth
            multiline
            rows={4}
            value={formData.note || ""}
            onChange={handleChange}
          />
        </div>
        <div
          className={css.flex}
          style={{ flexWrap: screenSmall ? "wrap" : "nowrap", rowGap: "5px" }}
        >
          <FileInput
            id="eCard"
            name="eCard"
            label="E Card"
            handleChange={handleChange}
            value={formData.eCard}
          />
          <FileInput
            id="meldezettel"
            name="meldezettel"
            label="Meldezettel"
            handleChange={handleChange}
            value={formData.meldezettel}
          />
          <FileInput
            id="reisepass"
            name="reisepass"
            label="Reisepass"
            handleChange={handleChange}
            value={formData.reisepass}
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

export default NewRegistry;
