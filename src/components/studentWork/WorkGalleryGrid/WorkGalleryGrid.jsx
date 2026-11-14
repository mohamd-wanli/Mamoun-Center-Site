import { User, Eye, Sparkles, Tag, ArrowUpRight } from "lucide-react";
import "./WorkGalleryGrid.css";

export default function WorkGalleryGrid({ projects, onSelectProject }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="work-empty-state">
        <Sparkles size={40} className="empty-ico" />
        <h3>لم يتم العثور على مشاريع مطابقة</h3>
        <p>جرب البحث بكلمات أخرى أو اختر تخصصاً آخر لاستعراض إبداعات المتدربين.</p>
      </div>
    );
  }

  return (
    <div className="work-gallery-grid">
      {projects.map((item, index) => (
        <article
          key={item.id}
          className="project-card"
          onClick={() => onSelectProject(item)}
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          {/* Card Media Wrap */}
          <div className="project-media-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="project-img"
              loading="lazy"
            />
            <div className="project-overlay" />

            {/* Badges on top of image */}
            <div className="project-badges-top">
              <span className="project-cat-badge">{item.categoryLabel}</span>
              <span className="project-year-badge">{item.year}</span>
            </div>

            {/* Quick Preview Hover Trigger */}
            <div className="project-hover-action">
              <span className="preview-pill">
                <Eye size={16} />
                <span>معاينة تفاصيل العمل</span>
              </span>
            </div>
          </div>

          {/* Card Content Body */}
          <div className="project-body">
            {/* Student Info Row */}
            <div className="student-author-row">
              <div className="author-avatar-circle">
                <User size={16} />
              </div>
              <div className="author-text">
                <strong className="student-name">{item.student}</strong>
                <span className="program-name">{item.program}</span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="project-title">{item.title}</h3>

            {/* Description */}
            <p className="project-desc">{item.description}</p>

            {/* Tags / Techniques */}
            {item.tags && item.tags.length > 0 && (
              <div className="project-tags-row">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-pill">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Card Action footer */}
            <div className="project-footer">
              <span className="project-view-link">
                <span>عرض المشروع كاملاً</span>
                <ArrowUpRight size={16} className="view-arrow" />
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
