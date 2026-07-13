import css from "@/styles/forms.module.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Dsvgo = () => {
  const { t } = useTranslation();

  return (
    <div className={css.container}>
      <Typography variant="h4" gutterBottom>
        {t('privacy.title')}
      </Typography>

      <div className={css.flex_column}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {t('privacy.contactForm')}
        </Typography>
        <Typography>
          {t('privacy.contactFormText')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {t('privacy.registration')}
        </Typography>
        <Typography>
          {t('privacy.registrationText')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {t('privacy.itSecurity')}
        </Typography>
        <Typography>
          {t('privacy.itSecurityText')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {t('privacy.legalBasis')}
        </Typography>
        <Typography>
          {t('privacy.legalBasisText')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {t('privacy.yourRights')}
        </Typography>
        <Typography>
          {t('privacy.yourRightsText')}
        </Typography>
      </div>
    </div>
  );
};

export default Dsvgo;
