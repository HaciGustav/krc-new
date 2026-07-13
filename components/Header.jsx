import styles from "@/styles/header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.header_container}>
        <div
          className={styles.header_parallax}
          style={{ backgroundImage: `url(/assets/header.jpg)` }}
        >
          <div className={styles.header_opacity}>
            <div>
              <h1 className={`${styles.header_title} ${styles.border_effect} `}>
                {t('header.title')}
              </h1>
              <div className={styles.slogan_wrapper}>
                <h2
                  className={styles.border_effect}
                  // style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {t('header.slogan1')}
                </h2>{" "}
                <span style={{ display: "grid", placeItems: "center" }}>●</span>
                <h2
                  className={styles.border_effect}
                  // style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {t('header.slogan2')}
                </h2>{" "}
                <span style={{ display: "grid", placeItems: "center" }}>●</span>
                <h2
                  className={styles.border_effect}
                  // style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {t('header.slogan3')}
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
