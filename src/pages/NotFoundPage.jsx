import { Link } from "../i18n/navigation";
import { language } from "../i18n";

export default function NotFoundPage() {
  return (
    <section className="section container">
      <h1>{language === "en" ? "Page not found" : "الصفحة غير موجودة"}</h1>
      <p>{language === "en" ? "The page may have moved or the address may be incorrect." : "ربما تم نقل الصفحة أو أن العنوان غير صحيح."}</p>
      <Link to="/">{language === "en" ? "Return home" : "العودة إلى الرئيسية"}</Link>
    </section>
  );
}
