import { t, language, locale } from "../../../i18n/index.js";
import { Link } from "../../../i18n/navigation.jsx";
import { CalendarDays, Newspaper } from "lucide-react";
import { centerNews } from "../../../data/homeHighlights";
import useWordPressNews from "../../../hooks/useWordPressNews";
import "./NewsSection.css";

function NewsCard({ story, featured = false }) {
  const date = story.date ? new Date(story.date) : null;
  const validDate = date && !Number.isNaN(date.getTime());
  return (
    <article className={`news-card${featured ? " news-card--featured" : ""}`}>
      <div className="news-card-media">
        {story.image ? (
          <img src={story.image} alt={story.imageAlt || ""} loading="lazy" />
        ) : <Newspaper size={56} strokeWidth={1} aria-hidden="true" />}
        {featured && <span className="news-feature-label"> {t("في الواجهة")} </span>}
      </div>
      <div className="news-card-body">
        <div className="news-card-meta">
          <span>{story.category || t("أخبار المركز")}</span>
          {validDate && <time dateTime={story.date}><CalendarDays size={15} aria-hidden="true" />{date.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>}
        </div>
        <h3 dir="auto">{story.title}</h3>
        <p dir="auto">{story.summary}</p>
        {story.path && (/^https?:\/\//i.test(story.path)
          ? <a className="news-read-link" href={story.path} aria-label={t("اقرأ المزيد: {{value0}}", { value0: story.title })}> {t("اقرأ المزيد")} </a>
          : <Link className="news-read-link" to={story.path} aria-label={t("اقرأ المزيد: {{value0}}", { value0: story.title })}> {t("اقرأ المزيد")} </Link>)}
      </div>
    </article>
  );
}

export default function NewsSection() {
  const { stories: remoteStories, status, retry } = useWordPressNews();
  const stories = status === "unconfigured" ? centerNews : remoteStories;
  const ordered = [...stories].sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
  const featured = ordered.find((story) => story.featured) || ordered[0];
  const recent = ordered.filter((story) => story !== featured).slice(0, 2);

  return (
    <section className="home-news" aria-labelledby="home-news-title">
      <div className="container">
        <header className="news-section-heading">
          <span className="news-eyebrow"><Newspaper size={18} aria-hidden="true" />  {t("من داخل المركز")} </span>
          <h2 id="home-news-title"> {t("أخبار وفعاليات")} <span> {t("المركز")} </span></h2>
          <p> {t("تابع أخبارنا، وفعالياتنا، وأحدث محطات التعلم والإنجاز في مركز المأمون الدولي.")} </p>
        </header>
        {language === "en" && remoteStories.length > 0 && <p className="news-language-note">Articles are shown in their original language. English translations are not yet connected.</p>}
        {status === "loading" ? (
          <div className="news-empty" role="status"><p> {t("جارٍ تحميل أخبار المركز…")} </p></div>
        ) : status === "error" ? (
          <div className="news-empty" role="status">
            <div>
              <h3> {t("تعذّر تحميل الأخبار حالياً")} </h3>
              <p> {t("يرجى المحاولة مرة أخرى بعد قليل.")} </p>
              <button className="news-retry" type="button" onClick={retry}> {t("إعادة المحاولة")} </button>
            </div>
          </div>
        ) : featured ? (
          <div className={`news-grid${recent.length ? "" : " news-grid--single"}`}>
            <NewsCard story={featured} featured />
            {recent.length > 0 && <div className="news-recent-list">{recent.map((story) => <NewsCard key={story.id} story={story} />)}</div>}
          </div>
        ) : (
          <div className="news-empty">
            <div className="news-empty-icon"><Newspaper size={64} strokeWidth={1} aria-hidden="true" /></div>
            <div>
              <span className="news-empty-label"> {t("ابقَ على اطلاع")} </span>
              <h3> {t("أخبارنا القادمة تجدونها هنا")} </h3>
              <p> {t("لا توجد أخبار منشورة حالياً. نشارككم هنا مستجدات المركز وفعالياته فور الإعلان عنها.")} </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
