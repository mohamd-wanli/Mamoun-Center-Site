import { t } from "../i18n/index.js";
import trainingImg1 from "../assets/images/training-center.png";
import trainingImg2 from "../assets/images/training-center2.png";
import aboutStoryImg from "../assets/images/aboutStory.jfif";
import ctaImg from "../assets/images/cta.jfif";
import about4Img from "../assets/images/about4.jfif";
import phoneImg from "../assets/images/phone.jfif";
import service1 from "../assets/images/service1.jfif";
import service2 from "../assets/images/service2.jfif";
import cta2 from "../assets/images/cta2.jfif";
import te from "../assets/images/te.png";
import j from "../assets/images/j.png";

export const coreServices = [
  {
    id: "custom-programs",
    icon: "Sliders",
    tag: t("برامج مخصصة"),
    themeColor: "#d7a637", 
    image: trainingImg2,
    title: t("تصميم البرامج التدريبية حسب الطلب"),
    subtitle: "Custom Training Programs",
    description: t("نقدم خدمة تصميم وتفصيل حقائب تدريبية وبرامج تخصصية مرنة وموجهة خصيصاً للشركات أو الأفراد بما يلائم طبيعة عملهم وأهدافهم المهنية الدقيقة."),
    features: [
      t("تحديد وتحليل الاحتياجات التدريبية الفعلية"),
      t("إعداد مناهج وحقائب مخصصة للكوادر"),
      t("مرونة كاملة في المواعيد والمكان (حضوري أو بمقر الشركة)"),
      t("تقارير تقييمية مفصلة لأداء كل متدرب"),
    ],
  },
  {
    id: "hands-on-training",
    icon: "Wrench",
    tag: t("تطبيق واقعي 100%"),
    themeColor: "#2563eb", 
    image: service1,
    title: t("تدريب عملي تطبيقي ومختبرات متقدمة"),
    subtitle: "Hands-on Practical Training",
    description: t("المركز مجهز بالكامل بأحدث الورش والمعدات والمختبرات الاحترافية اللازمة لتنفيذ البرامج التدريبية المختلفة ومحاكاة بيئة العمل الميدانية الفعلية."),
    features: [
      t("معامل ومختبرات صيانة وتقنية متطورة"),
      t("ورش تجميل وخياطة مجهزة بمعدات مهنية"),
      t("تدريب يدوي مباشر بإشراف كبار الخبراء"),
      t("توفير مستلزمات وأدوات التدريب داخل المركز"),
    ],
  },
  {
    id: "accredited-certificates",
    icon: "Award",
    tag: t("معترف بها دولياً"),
    themeColor: "#16a34a", // Emerald Green
    image: about4Img,
    title: t("شهادات مهنية وحرفية معتمدة دولياً"),
    subtitle: "Accredited Certifications",
    description: t("يحصل المتدرب على شهادة مصدقة وموثقة من الجهات الرسمية المعنية تثبت كفاءته وتمنحه الأولوية والمصداقية العالية في التوظيف داخل وخارج القطر."),
    features: [
      t("شهادات مصدقة وقابلة للتصديق الخارجي"),
      t("إثبات خبرة مهنية يوثق الساعات التدريبية"),
      t("معترف بها لدى سوق العمل والجهات التوظيفية"),
      t("إمكانية إصدار وثائق رسمية باللغتين العربية والإنجليزية"),
    ],
  },
  {
    id: "training-content",
    icon: "FileText",
    tag: t("محتوى حصري ومحدث"),
    themeColor: "#0891b2", // Cyan / Teal
    image: service2,
    title: t("محتوى تدريبي متكامل وحقائب احترافية"),
    subtitle: "Comprehensive Training Modules",
    description: t("ملف تدريبي شامل وموثق يوضع بين يدي كل متدرب، يشمل الدروس العملية، الملاحظات الهندسية والفنية، المخططات، والنماذج التطبيقية الدقيقة."),
    features: [
      t("حقائب تدريبية مطورة وفق أحدث المعايير"),
      t("مخططات ومراجع هندسية وفنية دقيقة"),
      t("وصول دائم للمواد الإثرائية والتحديثات"),
      t("نماذج ومشاريع واقعية جاهزة للتطبيق الفوري"),
    ],
  },
  {
    id: "free-consulting",
    icon: "Headphones",
    tag: t("استشارة مجانية"),
    themeColor: "#e11d48", // Crimson Rose
    image: cta2,
    title: t("استشارات ما قبل التسجيل والتوجيه المهني"),
    subtitle: "Pre-Enrollment Career Guidance",
    description: t("نوفر جلسات استشارية فردية مجانية مع نخبة من خبرائنا لمساعدتك على تحديد شغفك واختيار الدورة الأكثر ملاءمة لأهدافك وخبراتك وسوق العمل."),
    features: [
      t("تقييم مستوى المهارات السابقة مجاناً"),
      t("تحديد المسار المهني الأنسب لاحتياجاتك"),
      t("شرح مجالات وفرص العمل لكل تخصص"),
      t("خطة زمنية مدروسة ومخصصة لمسارك التدريبي"),
    ],
  },
  {
    id: "corporate-training",
    icon: "Building2",
    tag: t("حلول الشركات"),
    themeColor: "#7c3aed", // Violet / Purple
    image: aboutStoryImg,
    title: t("تدريب وتطوير الشركات والمؤسسات"),
    subtitle: "Corporate Training Solutions",
    description: t("حلول تطويرية وتدريبية متكاملة للشركات والمنظمات تهدف إلى رفع إنتاجية فرق العمل، صقل كفاءات الموظفين، ومواكبة المعايير المؤسسية الحديثة."),
    features: [
      t("برامج موجهة لبناء مهارات فرق العمل"),
      t("خطط تدريب جماعية بأسعار وتسهيلات تفضيلية"),
      t("تنفيذ التدريب في مقر المركز أو موقع المؤسسة"),
      t("متابعة دورية وقياس الأثر التدريبي بعد انتهاء البرنامج"),
    ],
  },
];

export const clientCategories = [
  { id: "all", label: t("جميع الشركاء والجهات") },
  { id: "intl", label: t("منظمات وهيئات دولية") },
  { id: "national", label: t("مؤسسات وشركات وطنية") },
  { id: "regional", label: t("جهات وزارية وإقليمية") },
];

export const partnersData = [
  { name: t("منظمة الهلال الأحمر السوري"), category: "intl", tag: t("منظمة إنسانية دولية") },
  { name: t("المجلس الدنماركي للاجئين (DRC)"), category: "intl", tag: t("منظمة دولية") },
  { name: t("المجلس النرويجي للاجئين (NRC)"), category: "intl", tag: t("منظمة دولية") },
  { name: t("بطريركية الروم الأرثوذكس"), category: "intl", tag: t("مؤسسة أهلية وتنموية") },
  { name: t("راهبات دير الراعي الصالح"), category: "intl", tag: t("منظمة تنموية") },

  { name: t("مؤسسة الطيران العربية السورية"), category: "national", tag: t("قطاع حكومي") },
  { name: t("المؤسسة العامة للاتصالات"), category: "national", tag: t("قطاع الاتصالات") },
  { name: t("المؤسسة العربية للإعلان"), category: "national", tag: t("قطاع الإعلام والإعلان") },
  { name: t("مجموعة حمشو الدولية"), category: "national", tag: t("مجموعة صناعية وتجارية") },
  { name: t("شركة الحافظ للصناعات الإلكترونية"), category: "national", tag: t("قطاع الصناعة والإلكترونيات") },
  { name: t("الشركة السورية الكورية"), category: "national", tag: t("شركة مشتركة") },
  { name: t("مؤسسة الخط الحديدي الحجازي"), category: "national", tag: t("قطاع النقل والخدمات") },
  { name: t("مجموعة ماس الاقتصادية"), category: "national", tag: t("قطاع الاستثمار والأعمال") },

  { name: t("وزارة المالية - الـسـودان"), category: "regional", tag: t("قطاع حكومي") },
  { name: t("ديوان الضرائب - الـسـودان"), category: "regional", tag: t("مؤسسة مالية") },
  { name: t("الأمانة العامة لديوان الزكاة - الـسـودان"), category: "regional", tag: t("هيئة حكومية") },
  { name: t("المركز الوطني لتدريب الشباب - الـسـودان"), category: "regional", tag: t("تنمية وتدريب") },
  { name: t("مركز دراسات المرأة - الـسـودان"), category: "regional", tag: t("أبحاث وتطوير") },
  { name: t("مشاريع استقرار الشباب - الـسـودان"), category: "regional", tag: t("مبادرات شبابية") },
  { name: t("رابطة المرأة العاملة - الـسـودان"), category: "regional", tag: t("تطوير مهني") },
  { name: t("الدار الاستشارية اليمنية - اليـمـن"), category: "regional", tag: t("استشارات وتطوير") },
  { name: t("وكالة تنمية المنشآت الصغيرة - اليـمـن"), category: "regional", tag: t("ريادة الأعمال") },
  { name: t("مركز المحور للتدريب والتطوير - عُـمـان"), category: "regional", tag: t("مركز تدريبي") },
  { name: t("مركز الأعمال الأوروبي للتدريب - عُـمـان"), category: "regional", tag: t("استشارات دولية") },
];

export const branchesData = [
  {
    id: "victoria",
    name: t("فرع فكتوريا (التدريب التقني)"),
    location: t("دمشق - فكتوريا - خلف وزارة السياحة"),
    specialty: t("متخصص في برامج صيانة الأجهزة والتقنيات الحديثة والتدريب الإلكتروني المتطور."),
    image: te,
    phones: ["0112212226", "0112245987", "0931682500"],
    hours: t("من السبت إلى الخميس: 9:00 ص – 8:00 م"),
    isPrimary: true,
  },
  {
    id: "halbouni",
    name: t("فرع الحلبوني (التدريب الفني والحرفي)"),
    location: t("دمشق - الحلبوني - مقابل جامع الحلبوني"),
    specialty: t("متخصص في برامج تصميم الأزياء، الخياطة الراقية، والحلاقة والتجميل الشامل."),
    image: j,
    phones: ["0112242499", "0112251366", "0966382224"],
    hours: t("من السبت إلى الخميس: 9:00 ص – 8:00 م"),
    isPrimary: false,
  },
];
