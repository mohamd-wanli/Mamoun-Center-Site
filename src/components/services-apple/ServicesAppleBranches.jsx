import React, { useState } from "react";
import { MapPin, Phone, Clock, Copy, Check, Compass } from "lucide-react";
import { branchesData } from "../../data/services";
import "./ServicesAppleBranches.css";

export default function ServicesAppleBranches() {
  const [copiedId, setCopiedId] = useState(null);

  function handleCopyAddress(id, text) {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  }

  return (
    <section id="branches-section" className="apple-branches-section">
      <div className="container">
        {/* Header */}
        <div className="apple-branches-header">
          <div className="apple-branches-badge">
            <Compass size={15} />
            <span>CAMPUSES & LOCATIONS</span>
          </div>
          <h2 className="apple-branches-title">مراكزنا وفروعنا التدريبية</h2>
          <p className="apple-branches-subtitle">
            موقعان استراتيجيان في قلب دمشق، مجهزان بأعلى التقنيات والورش لتقديم تدريب مهني غير مسبوق.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="apple-branches-grid">
          {branchesData.map((branch) => {
            const isCopied = copiedId === branch.id;

            return (
              <div
                key={branch.id}
                className={`apple-branch-card ${
                  branch.isPrimary ? "apple-branch-card--primary" : ""
                }`}
              >
                {/* Media Image Banner */}
                <div className="apple-branch-media">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="apple-branch-img"
                    loading="lazy"
                  />
                  <div className="apple-branch-media-overlay" />

                  {/* Status Pills on Image */}
                  <div className="apple-branch-overlay-pills">
                    <span className="apple-status-live">
                      <span className="apple-status-pulse" />
                      مفتوح لاستقبالكم
                    </span>

                    {branch.isPrimary && (
                      <span className="apple-primary-badge">المقر الرئيسي</span>
                    )}
                  </div>
                </div>

                {/* Branch Details */}
                <div className="apple-branch-body">
                  <h3 className="apple-branch-name">{branch.name}</h3>
                  <p className="apple-branch-specialty">{branch.specialty}</p>

                  {/* Location with Copy Action */}
                  <div className="apple-branch-location-box">
                    <div className="apple-branch-loc-text">
                      <MapPin size={17} className="apple-loc-icon" />
                      <span>{branch.location}</span>
                    </div>

                    <button
                      type="button"
                      className={`apple-copy-btn ${isCopied ? "apple-copy-btn--copied" : ""}`}
                      onClick={() => handleCopyAddress(branch.id, branch.location)}
                      title="نسخ العنوان"
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} />
                          <span>تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>نسخ</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Working Hours */}
                  <div className="apple-branch-hours">
                    <Clock size={16} className="apple-hours-icon" />
                    <span>{branch.hours}</span>
                  </div>

                  {/* Phones list */}
                  <div className="apple-branch-phones">
                    <span className="apple-phones-label">
                      <Phone size={14} />
                      هواتف التواصل المباشر:
                    </span>
                    <div className="apple-phone-pills">
                      {branch.phones.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:${phone}`}
                          className="apple-phone-pill"
                          dir="ltr"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
