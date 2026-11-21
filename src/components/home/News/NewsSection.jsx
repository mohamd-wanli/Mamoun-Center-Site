import { Link } from "react-router-dom";
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
        {featured && <span className="news-feature-label">في الواجهة</span>}
      </div>
      <div className="news-card-body">
        <div className="news-card-meta">
          <span>{story.category || "أخبار المركز"}</span>
          {validDate && <time dateTime={story.date}><CalendarDays size={15} aria-hidden="true" />{date.toLocaleDateString("ar-SY", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>}
        </div>
        <h3>{story.title}</h3>
        <p>{story.summary}</p>
        {story.path && (/^https?:\/\//i.test(story.path)
          ? <a className="news-read-link" href={story.path} aria-label={`اقرأ المزيد: ${story.title}`}>اقرأ المزيد</a>
          : <Link className="news-read-link" to={story.path} aria-label={`اقرأ المزيد: ${story.title}`}>اقرأ المزيد</Link>)}
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
    <section className="home-news" aria-labelledby="home-news-title" dir="rtl">
      <div className="container">
        <header className="news-section-heading">
          <span className="news-eyebrow"><Newspaper size={18} aria-hidden="true" /> من داخل المركز</span>
          <h2 id="home-news-title">أخبار وفعاليات <span>المركز</span></h2>
          <p>تابع أخبارنا، وفعالياتنا، وأحدث محطات التعلم والإنجاز في مركز المأمون الدولي.</p>
        </header>
        {status === "loading" ? (
          <div className="news-empty" role="status"><p>جارٍ تحميل أخبار المركز…</p></div>
        ) : status === "error" ? (
          <div className="news-empty" role="status">
            <div>
              <h3>تعذّر تحميل الأخبار حالياً</h3>
              <p>يرجى المحاولة مرة أخرى بعد قليل.</p>
              <button className="news-retry" type="button" onClick={retry}>إعادة المحاولة</button>
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
              <span className="news-empty-label">ابقَ على اطلاع</span>
              <h3>أخبارنا القادمة تجدونها هنا</h3>
              <p>لا توجد أخبار منشورة حالياً. نشارككم هنا مستجدات المركز وفعالياته فور الإعلان عنها.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
