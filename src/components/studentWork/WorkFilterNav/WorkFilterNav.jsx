import { Search, X, Sparkles } from "lucide-react";
import { workCategories } from "../../../data/traineesWork";
import "./WorkFilterNav.css";

export default function WorkFilterNav({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  totalResults,
}) {
  return (
    <div className="work-filter-wrapper">
      {/* Search & Intro Row */}
      <div className="work-filter-top">
        <div className="work-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="ابحث باسم المتدرب، المشروع، أو التقنية المستخدمة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="work-search-input"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery("")}
              aria-label="مسح البحث"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="work-counter-pill">
          <Sparkles size={16} />
          <span>
            عرض <strong>{totalResults}</strong> من المشاريع التطبيقية
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="work-categories-scroll">
        {workCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`work-category-btn ${
                isActive ? "work-category--active" : ""
              }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
