import React, { useState } from "react";
import { Handshake, Building, Globe2, Landmark } from "lucide-react";
import { partnersData, clientCategories } from "../../data/services";
import "./ServicesApplePartners.css";

const categoryIconMap = {
  intl: Globe2,
  national: Building,
  regional: Landmark,
};

export default function ServicesApplePartners() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPartners = partnersData.filter(
    (partner) => activeCategory === "all" || partner.category === activeCategory
  );

  return (
    <section id="partners-section" className="apple-partners-section">
      <div className="container">
        {/* Apple Centered Header */}
        <div className="apple-partners-header">
          <div className="apple-partners-eyebrow">
            <Handshake size={15} />
            <span>ENTERPRISE & PARTNERSHIPS</span>
          </div>
          <h2 className="apple-partners-title">
            شركاء النجاح والجهات المعتمدة
          </h2>
          <p className="apple-partners-subtitle">
            نفخر بتأهيل وتدريب كوادر كبرى المنظمات الدولية، المؤسسات الحكومية، والشركات الصناعية في الشرق الأوسط.
          </p>

          {/* Segmented Filter */}
          <div className="apple-partners-filters" role="tablist">
            {clientCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`apple-partner-tab ${
                  activeCategory === cat.id ? "apple-partner-tab--active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {activeCategory === cat.id && (
                  <span className="apple-tab-count">
                    {filteredPartners.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="apple-partners-grid">
          {filteredPartners.map((partner, index) => {
            const CatIcon = categoryIconMap[partner.category] || Building;
            return (
              <div key={index} className="apple-partner-card">
                <div className="apple-partner-card-inner">
                  <div className="apple-partner-icon-box">
                    <CatIcon size={20} />
                  </div>
                  <div className="apple-partner-text-box">
                    <h4 className="apple-partner-name">{partner.name}</h4>
                    <span className="apple-partner-tag">{partner.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Proof Note */}
        <div className="apple-partners-footnote">
          <p>
            هل تمثل شركة أو منظمة وتبحث عن برنامج تأهيلي مخصص لكوادر عملك؟{" "}
            <a href="tel:0112212226" className="apple-footnote-link">
              تواصل مع إدارة التدريب المؤسسي &larr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
