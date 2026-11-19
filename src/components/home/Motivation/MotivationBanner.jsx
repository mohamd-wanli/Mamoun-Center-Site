import "./MotivationBanner.css";

export default function MotivationBanner() {
  return (
    <aside className="motivation-banner" aria-label="رسالة تحفيزية لطلابنا">
      <div className="container motivation-banner__content">
        {/* <Sparkles className="motivation-banner__icon" size={28} aria-hidden="true" /> */}
        <p>
          كل مهارة تتعلّمها اليوم، <strong>تفتح لك باباً جديداً غداً.</strong>
        </p>
      </div>
    </aside>
  );
}
