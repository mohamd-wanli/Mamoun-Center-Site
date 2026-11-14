import { Star, Quote, Award } from "lucide-react";
import { graduateStories } from "../../../data/traineesWork";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./SuccessStories.css";

export default function SuccessStories() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`success-stories-section section ${
        isVisible ? "stories--visible" : ""
      }`}
    >
      <div className="container">
        {/* Header */}
        <div className="stories-header">
          <span className="section-tag">
            <Award size={15} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            قصص نجاح تلهمك
          </span>
          <h2 className="section-title">
            من قاعات التدريب
            <span className="section-title-accent"> إلى ريادة الأعمال وسوق العمل</span>
          </h2>
          <p className="stories-subtitle">
            نماذج حية لخريجي مركز المأمون الدولي الذين حوّلوا شغفهم إلى مشاريع ناجحة
            ووظائف مرموقة.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="stories-cards-grid">
          {graduateStories.map((item, index) => (
            <div
              key={index}
              className="story-card"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="story-quote-icon">
                <Quote size={28} />
              </div>

              {/* Rating */}
              <div className="story-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled" />
                ))}
              </div>

              {/* Story Text */}
              <p className="story-text">"{item.story}"</p>

              <div className="story-card-divider" />

              {/* Author Footer */}
              <div className="story-author-row">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="story-author-img"
                />
                <div className="story-author-details">
                  <h4 className="story-author-name">{item.name}</h4>
                  <span className="story-author-course">{item.course}</span>
                  <span className="story-author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
