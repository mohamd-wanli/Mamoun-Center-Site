import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, Check, ChevronLeft, Clock, MapPin, Plus } from "lucide-react";
import { branchesData, clientCategories, coreServices, partnersData } from "../../data/services";
import workshop from "../../assets/images/phone.jfif";
import "./ServicesGuide.css";

function ServiceDirectory() {
  return (
    <section id="service-directory" className="sg-section container">
      <h2>دليل الخدمات</h2>
      <div className="sg-directory">
        {coreServices.map((service, index) => (
          <details key={service.id} name="training-service" open={index === 0}>
            <summary>
              <img src={service.image} alt="" loading="lazy" />
              <span><small lang="en" dir="ltr">{service.subtitle}</small><strong>{service.title}</strong></span>
              <Plus className="sg-plus" size={20} aria-hidden="true" />
            </summary>
            <div className="sg-detail">
              <p>{service.description}</p>
              <ul>{service.features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
              <div className="sg-actions">
                <Link to="/contact">طلب الخدمة <ArrowLeft size={16} /></Link>
                <a href={`https://wa.me/963944000111?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمة " + service.title)}`}>استفسر عبر واتساب</a>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function PartnerDirectory() {
  const [category, setCategory] = useState("all");
  const partners = partnersData.filter(partner => category === "all" || partner.category === category);
  return (
    <section className="sg-partners">
      <div className="container sg-section">
        <h2>شركاؤنا في التدريب</h2>
        <div className="sg-filters" role="group" aria-label="تصفية الشركاء">
          {clientCategories.map(item => (
            <button key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>
          ))}
        </div>
        <ul className="sg-partner-list">{partners.map(partner => (
          <li key={partner.name}><strong>{partner.name}</strong><small>{partner.tag}</small></li>
        ))}</ul>
      </div>
    </section>
  );
}

export default function ServicesGuide() {
  return (
    <div className="sg" dir="rtl" lang="ar">
      <header className="sg-hero">
        <div className="container sg-hero-inner">
          <div>
            <nav aria-label="مسار التنقل"><Link to="/">الرئيسية</Link><ChevronLeft size={14} /><span aria-current="page">خدماتنا</span></nav>
            <h1>خدمات التدريب<br /><em>والتطوير المهني</em></h1>
            <p>من اختيار تخصصك إلى تدريب فريق عملك، صمّم مسارك مع مركز المأمون الدولي في دمشق.</p>
            <div className="sg-actions">
              <a className="sg-primary" href="#service-directory">تصفّح الخدمات <ArrowDown size={18} /></a>
              <Link to="/contact">احجز استشارة <ArrowLeft size={18} /></Link>
            </div>
          </div>
          <figure><img src={workshop} alt="التدريب على صيانة الهواتف المحمولة" /><figcaption>ورش التدريب العملي <span lang="en" dir="ltr">MIC / DAMASCUS</span></figcaption></figure>
        </div>
      </header>
      <ServiceDirectory />
      <PartnerDirectory />
      <section className="sg-section container">
        <h2>فروعنا في دمشق</h2>
        <div className="sg-branches">{branchesData.map(branch => (
          <article key={branch.id}>
            <img src={branch.image} loading="lazy" alt="" />
            <div>
              <h3>{branch.name}</h3><p>{branch.specialty}</p>
              <p><MapPin size={17} />{branch.location}</p><p><Clock size={17} />{branch.hours}</p>
              <div className="sg-phones">{branch.phones.map(phone => <a key={phone} dir="ltr" href={`tel:${phone}`}>{phone}</a>)}</div>
            </div>
          </article>
        ))}</div>
      </section>
    </div>
  );
}
