import { Link } from "react-router-dom";
import { Quote, Newspaper, Trophy } from "lucide-react";
import { studentOpinions, centerNews, centerAwards } from "../../../data/homeHighlights";
import "./HomeHighlights.css";

export default function HomeHighlights() {
  return (
    <div className="home-highlights">
      <section className="home-opinions" aria-labelledby="home-opinions-title">
        <div className="container">
          <header className="home-compact-heading">
            <span><Quote size={20} aria-hidden="true" /> تجارب المتدربين</span>
            <h2 id="home-opinions-title">آراء طلابنا</h2>
            {studentOpinions.some((opinion) => opinion.sample) && <p className="home-sample-note">نماذج توضيحية للعرض، وليست شهادات فعلية من طلاب.</p>}
          </header>
          <div className="home-opinions-grid">
            {studentOpinions.slice(0, 4).map((opinion) => (
              <figure className="home-opinion-card" key={opinion.id}>
                <Quote size={22} aria-hidden="true" />
                {opinion.quote ? <blockquote>{opinion.quote}</blockquote> : <p className="home-content-placeholder">مساحة مخصصة لرأي أحد طلابنا بعد اعتماده.</p>}
                <figcaption>{opinion.name || "بانتظار إضافة رأي الطالب"}{opinion.course && <span>{opinion.course}</span>}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="home-news" aria-labelledby="home-news-title">
        <div className="container home-news-layout">
          <header className="home-compact-heading">
            <span><Newspaper size={20} aria-hidden="true" /> من داخل المركز</span>
            <h2 id="home-news-title">آخر الأخبار</h2>
          </header>
          <div className="home-news-list">
            {centerNews.length ? centerNews.slice(0, 2).map((news) => (
              <article className="home-news-item" key={news.id}>
                {news.date && <time dateTime={news.date}>{new Date(`${news.date}T12:00:00`).toLocaleDateString("ar-SY")}</time>}
                <h3>{news.path ? <Link to={news.path}>{news.title}</Link> : news.title}</h3>
                <p>{news.summary}</p>
              </article>
            )) : <div className="home-news-item"><h3>أخبار المركز وفعالياته</h3><p className="home-content-placeholder">سيتم نشر آخر أخبار المركز هنا عند توفرها.</p></div>}
          </div>
        </div>
      </section>

      <section className="home-awards" aria-labelledby="home-awards-title">
        <div className="container">
          <header className="home-compact-heading">
            <span><Trophy size={20} aria-hidden="true" /> محطات نعتز بها</span>
            <h2 id="home-awards-title">جوائز وتكريمات المركز</h2>
          </header>
          <div className="home-awards-grid">
            {centerAwards.map((award) => (
              <figure className="home-award-card" key={award.image}>
                <div className="home-award-image"><img src={`/images/awards/${award.image}`} alt={award.title} loading="lazy" width="402" height="267" /></div>
                <figcaption><h3>{award.title}</h3><p>{award.detail}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
