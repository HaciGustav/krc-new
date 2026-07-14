import css from "@/styles/footer.module.css";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const MapWithNoSSR = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.flex}>
          <div
            className={css.flex_column}
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className={css.footer_section}>
              <h2>{t('footer.company')}</h2>
              <p>{t('footer.companyFull')}</p>
              <p>
                {t('footer.address')},
                <br />
                {t('footer.city')}
              </p>
              <p>
                <a href="tel:+436601743900">{t('footer.phone')}</a>
                <br />

                <a href="mailto:office@krc-buchhaltung.at">
                  {t('footer.email')}
                </a>
              </p>
            </div>
            <div className={css.footer_section}>
              <h2>{t('footer.hours')}</h2>
              <p>
                {t('footer.hoursMonThu')}
                <br />
                {t('footer.hoursFri')}
                <br />
                {t('footer.hoursByAppointment')}
              </p>
            </div>
          </div>
          <div className={css.footer_section} style={{ width: "100%" }}>
            <MapWithNoSSR />
          </div>
        </div>
      </div>
      <div className={css.footer_bottom}>
        <p>{t('footer.copyright')}</p>
        <p>
          <a href="/dsvgo">{t('footer.privacy')}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
