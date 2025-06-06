import css from "@/styles/footer.module.css";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

const Footer = () => {
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
              <h2>KRC</h2>
              <p>Buchhaltungskanzlei KG</p>
              <p>
                Großmarktstraße 4,
                <br />
                1230 Wien
              </p>
              <p>
                <a href="tel:+436601743900">+43 660 174 39 00</a>
                <br />

                <a href="mailto:office@krc-buchhaltung.at">
                  office@krc-buchhaltung.at
                </a>
              </p>
            </div>
            <div className={css.footer_section}>
              <h2>ÖFFNUNGSZEITEN</h2>
              <p>
                Mo-Do: 09:00-14:00
                <br />
                Fr: 09:00-12:00
                <br />
                oder nach Terminvereinbarung
              </p>
            </div>
          </div>
          <div className={css.footer_section} style={{ width: "100%" }}>
            <MapWithNoSSR />
          </div>
        </div>
      </div>
      <div className={css.footer_bottom}>
        <p>© Copyright - KRC Buchhaltung</p>
        <p>
          <a href="/dsvgo">Datenschutz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
