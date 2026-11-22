import { t } from "../i18n/index.js";
// Replace the empty entries with approved student quotes and center news.
// Empty entries render as explicitly labeled placeholders, never invented endorsements.
export const studentOpinions = [
  { id: 1, name: t("تجربة توضيحية"), course: t("الإلكترونيات والصيانة"), quote: t("أكثر ما أعجبني هو ربط الشرح بالتطبيق العملي، وفهم خطوات تشخيص الأعطال بطريقة واضحة ومنظمة."), sample: true },
  { id: 2, name: t("تجربة توضيحية"), course: t("التصميم الغرافيكي"), quote: t("التدريب على مشاريع متنوعة ساعدني على تطوير أفكاري وتحويلها إلى تصاميم أستطيع إضافتها إلى معرض أعمالي."), sample: true },
  { id: 3, name: t("تجربة توضيحية"), course: t("الخياطة وتصميم الأزياء"), quote: t("تعلمت كيف أنتقل من الفكرة إلى الباترون والتنفيذ، وأصبحت أكثر ثقة في اختيار التفاصيل وإنجاز القطع."), sample: true },
  { id: 4, name: t("تجربة توضيحية"), course: t("إدارة الأعمال"), quote: t("الأمثلة والنقاشات العملية جعلت المفاهيم أسهل، وساعدتني على التفكير بطريقة أكثر تنظيماً في بيئة العمل."), sample: true },
];

// Published news entries: { id, title, summary, date: "YYYY-MM-DD", path?, image?, imageAlt?, category?, featured? }.
export const centerNews = [];

export const centerAwards = [
  { image: "award-1.jpg", title: t("درع جامعة أدنبرة"), detail: t("اسكتلندا · 2004") },
  { image: "award-2.jpg", title: t("الجائزة الدولية للتميز وبرستيج الأعمال"), detail: t("نيويورك · 2007") },
  { image: "award-3.jpg", title: t("الجائزة الذهبية الأمريكية للجودة"), detail: t("نيويورك · 1998") },
  { image: "award-4.jpg", title: t("الجائزة العالمية الألفية للتميز"), detail: t("مدريد · 2000") },
  { image: "award-5.jpg", title: t("درع جامعة سندرلاند البريطانية"), detail: t("المملكة المتحدة · 2001") },
  { image: "award-6.jpg", title: t("درع معهد تكنولوجيا المعلومات"), detail: t("مركز المعلومات واتخاذ القرار · مصر") },
];
