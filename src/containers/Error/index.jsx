import "./index.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ErrorImg from '../../assets/images/error-image.webp'
export default function Error() {
  const { t, i18n } = useTranslation();

  return (
    <section className="errorContainer">
      <div className="errorContent">
        <div className="errorSplit">
          <div className="errorTitle">
            <h2>{t("errorTitle")}</h2>
          </div>
          <div className="errorText">
            <p>{t("errorText")}</p>
          </div>
          <div className="errorBtn">
            <Link className="error" to={`/${i18n.language}/${i18n.language === "fr" ? "accueil" : "home"}`}>
              <button><span>{t("ErrorLink")}</span></button>
            </Link>
          </div>
        </div>
        <div className="errorSplitImg">
            <div className="errorImg">
<img src={ErrorImg} alt="error-image"/>
            </div>
        </div>
      </div>
    </section>
  );
}
