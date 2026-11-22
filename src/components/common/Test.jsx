import { t } from "../../i18n/index.js";
import "./s.css";

export default function Test() {
  return (
    <div class="parent">
       {t("الأب (Parent)")} <div class="child"> {t("الابن (Child)")} </div>
    </div>
  );
}
