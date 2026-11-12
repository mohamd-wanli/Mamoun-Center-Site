import React, { useState } from "react";
import ServicesAppleHero from "./ServicesAppleHero";
import ServicesAppleBento from "./ServicesAppleBento";
import ServicesAppleModal from "./ServicesAppleModal";
import ServicesAppleExperience from "./ServicesAppleExperience";
import ServicesApplePartners from "./ServicesApplePartners";
import ServicesAppleBranches from "./ServicesAppleBranches";
import ServicesAppleCTA from "./ServicesAppleCTA";
import "./ServicesAppleView.css";

export default function ServicesAppleView() {
  const [selectedService, setSelectedService] = useState(null);

  function handleScrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="apple-services-page-wrap">
      {/* Apple-Style Hero */}
      <ServicesAppleHero onScrollToSection={handleScrollTo} />

      {/* Apple Bento Grid of Services */}
      <ServicesAppleBento onSelectService={(service) => setSelectedService(service)} />

      {/* 4 Pillars Experience & Standards */}
      <ServicesAppleExperience />

      {/* Partners & Institutions */}
      <ServicesApplePartners />

      {/* Campuses & Branches */}
      <ServicesAppleBranches />

      {/* Apple-style Closing CTA */}
      <ServicesAppleCTA />

      {/* Interactive Service Detail Sheet/Modal */}
      <ServicesAppleModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
