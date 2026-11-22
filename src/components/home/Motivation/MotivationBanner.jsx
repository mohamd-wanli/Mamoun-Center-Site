import { t } from "../../../i18n/index.js";
import "./MotivationBanner.css";

export default function MotivationBanner() {
  return (
    <aside className="motivation-banner" aria-label={t("رسالة تحفيزية لطلابنا")}>
      <div className="container motivation-banner__content">
        {/* <Sparkles className="motivation-banner__icon" size={28} aria-hidden="true" /> */}
        <p>
           {t("كل مهارة تتعلّمها اليوم،")} <strong> {t("تفتح لك باباً جديداً غداً.")} </strong>
        </p>
      </div>
    </aside>
  );
}
