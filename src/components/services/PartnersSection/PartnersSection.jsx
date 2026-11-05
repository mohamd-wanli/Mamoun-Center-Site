import { useState, useMemo } from "react";
import { Handshake, Building, Globe, ShieldCheck } from "lucide-react";
import { partnersData, clientCategories } from "../../../data/services";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./PartnersSection.css";

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const filteredPartners = useMemo(() => {
    if (activeTab === "all") return partnersData;
    return partnersData.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className={`partners-section section ${
        isVisible ? "partners--visible" : ""
      }`}
    >
      <div className="container">
        {/* Header */}
        <div className="partners-header">
          <span className="section-tag">
            <Handshake size={15} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            شركاء النجاح والاعتماد
          </span>
          <h2 className="section-title">
            جهات ومؤسسات محلية ودولية
            <span className="section-title-accent"> استفادت من خدماتنا الاستشارية</span>
          </h2>
          <p className="partners-subtitle">
            سجل حافل بالشراكات الناجحة مع كبرى المنظمات الإنسانية الدولية، المؤسسات
            الحكومية، والشركات الاقتصادية الرائدة في سوريا والوطن العربي.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="partners-tabs-nav">
          {clientCategories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`partner-tab-btn ${
                  isActive ? "partner-tab--active" : ""
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="partners-grid">
          {filteredPartners.map((item, index) => (
            <div
              key={index}
              className="partner-badge-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="partner-icon-circle">
                {item.category === "intl" ? (
                  <Globe size={20} />
                ) : item.category === "regional" ? (
                  <ShieldCheck size={20} />
                ) : (
                  <Building size={20} />
                )}
              </div>
              <div className="partner-details">
                <h4 className="partner-name">{item.name}</h4>
                <span className="partner-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

