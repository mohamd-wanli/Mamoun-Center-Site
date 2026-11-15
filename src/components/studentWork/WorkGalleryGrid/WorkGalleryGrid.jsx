import { User, Eye, Sparkles, ArrowUpRight, Layers } from "lucide-react";
import "./WorkGalleryGrid.css";

export default function WorkGalleryGrid({
  projects,
  categories = [],
  activeCategory = "all",
  onSelectCategory,
  onSelectProject,
}) {
  return (
    <div className="work-gallery-wrapper">
      <div className="gallery-header-bar">
        <div className="gallery-header-text">
          <h2 className="gallery-title">معرض المشاريع الحية بأيدي متدربينا</h2>
          <p className="gallery-desc">
            تصفح نماذج واقعية من مشاريع التخرج المنفذة داخل ورش ومعامل المعهد，
            والتي تجسد الجاهزية الكاملة لسوق العمل.
          </p>
        </div>
      </div>

      {!projects || projects.length === 0 ? (
        <div className="work-empty-state">
          <Sparkles size={40} className="empty-ico" />
          <h3>لم يتم العثور على مشاريع في هذا القسم</h3>
          <p>اختر قسماً آخر أو اعرض جميع الأعمال لاستكشاف مشاريع المتدربين.</p>
        </div>
      ) : (
        <div className="work-gallery-grid">
          {projects.map((item, index) => (
            <article
              key={item.id}
              className="project-card"
              onClick={() => onSelectProject && onSelectProject(item)}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="project-media-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay" />

                <div className="project-badges-top">
                  <span className="project-cat-badge">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="project-hover-action">
                  <span className="preview-pill">
                    <Eye size={16} />
                    <span>معاينة تفاصيل العمل</span>
                  </span>
                </div>
              </div>

              <div className="project-body">
                <div className="student-author-row">
                  <div className="author-avatar-circle">
                    <User size={16} />
                  </div>
                  <div className="author-text">
                    <strong className="student-name">{item.student}</strong>
                    <span className="program-name">{item.program}</span>
                  </div>
                </div>

                <h3 className="project-title">{item.title}</h3>

                <p className="project-desc">{item.description}</p>

                {item.tags && item.tags.length > 0 && (
                  <div className="project-tags-row">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

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
      )}
    </div>
  );
}
