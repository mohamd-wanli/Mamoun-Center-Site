// Replace the empty entries with approved student quotes and center news.
// Empty entries render as explicitly labeled placeholders, never invented endorsements.
export const studentOpinions = [
  { id: 1, name: "تجربة توضيحية", course: "الإلكترونيات والصيانة", quote: "أكثر ما أعجبني هو ربط الشرح بالتطبيق العملي، وفهم خطوات تشخيص الأعطال بطريقة واضحة ومنظمة.", sample: true },
  { id: 2, name: "تجربة توضيحية", course: "التصميم الغرافيكي", quote: "التدريب على مشاريع متنوعة ساعدني على تطوير أفكاري وتحويلها إلى تصاميم أستطيع إضافتها إلى معرض أعمالي.", sample: true },
  { id: 3, name: "تجربة توضيحية", course: "الخياطة وتصميم الأزياء", quote: "تعلمت كيف أنتقل من الفكرة إلى الباترون والتنفيذ، وأصبحت أكثر ثقة في اختيار التفاصيل وإنجاز القطع.", sample: true },
  { id: 4, name: "تجربة توضيحية", course: "إدارة الأعمال", quote: "الأمثلة والنقاشات العملية جعلت المفاهيم أسهل، وساعدتني على التفكير بطريقة أكثر تنظيماً في بيئة العمل.", sample: true },
];

// News entries: { id, title, summary, date: "YYYY-MM-DD", path }.
export const centerNews = [];

export const centerAwards = [
  { image: "award-1.jpg", title: "درع جامعة أدنبرة", detail: "اسكتلندا · 2004" },
  { image: "award-2.jpg", title: "الجائزة الدولية للتميز وبرستيج الأعمال", detail: "نيويورك · 2007" },
  { image: "award-3.jpg", title: "الجائزة الذهبية الأمريكية للجودة", detail: "نيويورك · 1998" },
  { image: "award-4.jpg", title: "الجائزة العالمية الألفية للتميز", detail: "مدريد · 2000" },
  { image: "award-5.jpg", title: "درع جامعة سندرلاند البريطانية", detail: "المملكة المتحدة · 2001" },
  { image: "award-6.jpg", title: "درع معهد تكنولوجيا المعلومات", detail: "مركز المعلومات واتخاذ القرار · مصر" },
];
