import sewingImg from "../assets/images/sewing.jfif";
import ghairImg from "../assets/images/ghair.jfif";
import mhairImg from "../assets/images/mhair.jfif";
import phoneImg from "../assets/images/phone.jfif";
import carImg from "../assets/images/car.jfif";
import about4Img from "../assets/images/about4.jfif";
import trainingImg1 from "../assets/images/training-center.png";
import trainingImg2 from "../assets/images/training-center2.png";
import ctaImg from "../assets/images/cta.jfif";

export const workCategories = [
  { id: "all", label: "جميع الأعمال" },
  { id: "fashion", label: "أزياء وخياطة" },
  { id: "beauty", label: "تجميل وعناية نسائية" },
  { id: "barbering", label: "حلاقة رجالية" },
  { id: "phones", label: "صيانة الهواتف" },
  { id: "mechanics", label: "ميكانيك السيارات" },
];

export const workStats = [
  {
    value: "+5000",
    label: "خريج مؤهل ومحترف",
    subtext: "يعملون داخل وخارج القطر",
  },
  {
    value: "100%",
    label: "تطبيق يدوي ومشاريع حية",
    subtext: "تنفيذ كامل تحت إشراف المدرب",
  },
  {
    value: "92%",
    label: "نسبة تأسيس مشاريع وتوظيف",
    subtext: "جاهزية تامة لسوق العمل",
  },
  {
    value: "+30",
    label: "معرضاً وورشة تخرج سنوية",
    subtext: "عرض الأعمال أمام أصحاب العمل",
  },
];

export const studentProjects = [
  {
    id: 1,
    title: "تصميم وتنفيذ فستان سهرة راقٍ (Haute Couture)",
    student: "المتدربة ريم الأحمد",
    program: "دبلوم تصميم الأزياء والخياطة الراقية",
    category: "fashion",
    categoryLabel: "أزياء وخياطة",
    image: sewingImg,
    year: "دفعة 2026",
    description:
      "مشروع تخرج متكامل اعتمد على رسم الباترون الإيطالي المطور، قص الأقمشة الحريرية، وتنفيذ شك وتطريز يدوي دقيق مع تبطين احترافي ثلاثي الطبقات.",
    tags: ["باترون إيطالي", "شك يدوي", "خياطة راقية", "فساتين سهرة"],
  },
  {
    id: 2,
    title: "تشخيص وإصلاح مسارات بورد آيفون واستبدال آيسي الشحن",
    student: "المتدرب محمد العلي",
    program: "صيانة الهواتف الذكية المتقدمة",
    category: "phones",
    categoryLabel: "صيانة الهواتف",
    image: phoneImg,
    year: "دفعة 2026",
    description:
      "تشخيص عطل عدم استجابة الشحن في جهاز iPhone 13، وقراءة المخططات عبر ZXW، ورفع آيسي الشحن المتضرر، وإعادة شبلنة وتركيب آيسي جديد بدقة ميكروسكوبية.",
    tags: ["قراءة مخططات", "شبلنة آيسيات", "لحام ميكروسكوبي", "هاردوير آبل"],
  },
  {
    id: 3,
    title: "تسريحة عرائس كلاسيكية مع صبغة بالياج متدرجة",
    student: "المتدربة سارة خليل",
    program: "الحلاقة النسائية الشاملة وفنون التجميل",
    category: "beauty",
    categoryLabel: "تجميل وعناية نسائية",
    image: ghairImg,
    year: "دفعة 2026",
    description:
      "تطبيق تقنية سحب اللون الآمن وتوزيع صبغة البالياج بتدرج بيج ورمادي متناسق، وتنفيذ تسريحة ويفي ملكية مخصصة للمناسبات الكبرى وتثبيتها بدقة.",
    tags: ["سحب لون آمن", "صبغات بالياج", "تسريحات عرائس", "ترميم الشعر"],
  },
  {
    id: 4,
    title: "تدريج عصري (Skin Fade) وتنسيق لحية بالموس التقليدي",
    student: "المتدرب عمر حمود",
    program: "الحلاقة الرجالية والعناية الاحترافية",
    category: "barbering",
    categoryLabel: "حلاقة رجالية",
    image: mhairImg,
    year: "دفعة 2026",
    description:
      "تنفيذ تدريج دقيق من الصفر بمستوى احترافي مع دمج بالمشط والمقص، ورسم حدود اللحية بدقة مليمترية وتطبيق جلسة تنظيف بشرة بالبخار وأقنعة الطين.",
    tags: ["Skin Fade", "رسم لحية بالموس", "تنظيف بشرة", "تصفيف سشوار"],
  },
  {
    id: 5,
    title: "فحص وبرمجة كمبيوتر سيارة وتشخيص عطل حساس الأوكسجين",
    student: "المتدرب يزن القاسم",
    program: "ميكانيك وكهرباء السيارات الحديثة",
    category: "mechanics",
    categoryLabel: "ميكانيك السيارات",
    image: carImg,
    year: "دفعة 2026",
    description:
      "ربط جهاز الفحص OBD Scanner وتشخيص كود العطل DTC، فحص الإشارة الحية للمحرك، استبدال الحساس وفحص دورة الحقن الإلكتروني وضغط الوقود.",
    tags: ["فحص كمبيوتر OBD", "حساسات EFI", "كهرباء سيارات", "محركات بنزين"],
  },
  {
    id: 6,
    title: "تصميم بدلة نسائية كاجوال ورسمية (Tailored Suit)",
    student: "المتدربة نور الشامي",
    program: "تصميم الأزياء والتفصيل",
    category: "fashion",
    categoryLabel: "أزياء وخياطة",
    image: about4Img,
    year: "دفعة 2025",
    description:
      "تنفيذ جاكيت بليزر وبنطال كلاسيكي بقصة عصرية مع الاهتمام بتبطين الجيوب والياقة المنحنية باستخدام أقمشة جوخ عالية الجودة.",
    tags: ["تفصيل بليزر", "باترون بنطال", "تبطين راقٍ", "أزياء عمل"],
  },
  {
    id: 7,
    title: "تخطي حماية واستعادة بيانات نظام أندرويد بعد تلف السوفت وير",
    student: "المتدرب خالد النجار",
    program: "صيانة الهواتف الذكية (سوفت وير)",
    category: "phones",
    categoryLabel: "صيانة الهواتف",
    image: trainingImg1,
    year: "دفعة 2026",
    description:
      "إصلاح هاتف عالق في وضع Bootloop، تفليش روم رسمي متعدد الملفات دون فقدان بيانات العميل، وتخطي حماية FRP وإعادة تفعيل الشبكة.",
    tags: ["سوفت وير متقدم", "تفليش رومات", "تخطي FRP", "استرجاع بيانات"],
  },
  {
    id: 8,
    title: "فك وتجميع رأس محرك 4 أسطوانات وضبط خلوص الصبابات",
    student: "المتدرب باسل المصري",
    program: "ميكانيك السيارات وتشخيص الأعطال",
    category: "mechanics",
    categoryLabel: "ميكانيك السيارات",
    image: trainingImg2,
    year: "دفعة 2025",
    description:
      "تطبيق عملي كامل داخل ورشة المعهد: فك رأس المحرك (الكولاس)، فحص الصبابات وجلد البلوف، وتغيير كوانين وحساب عزم الشد بمفتاح العزم (Torque Wrench).",
    tags: ["توضيب محركات", "ضبط صبابات", "مفتاح عزم", "ورشة ميكانيك"],
  },
];

export const graduateStories = [
  {
    name: "مروة دياب",
    course: "خريجة تصميم الأزياء والخياطة",
    story:
      "بعد تخرجي من مركز المأمون بشهرين فقط، تمكنت من افتتاح الأتيليه الخاص بي 'Marwa Atelier'. المهارات العملية والباترون الإيطالي الذي تعلمته كانا سر تميزي أمام الزبائن.",
    role: "مؤسسة أتيليه للأزياء الراقية",
    rating: 5,
    avatar: ctaImg,
  },
  {
    name: "طارق سليم",
    course: "خريج صيانة الهواتف الذكية",
    story:
      "الدورة وضعتني في بيئة صيانة حقيقية من أول أسبوع. فور تخرجي افتتحت متجر صيانة وملحقات، وأصبحت أستقبل أجهزة من ورش أخرى لصيانة البوردات والآيسيات الدقيقة.",
    role: "مالك مركز FixTech للصيانة",
    rating: 5,
    avatar: phoneImg,
  },
  {
    name: "سامر حداد",
    course: "خريج الحلاقة الرجالية",
    story:
      "الخبرة المباشرة على زبائن حقيقيين أثناء التدريب منحتني ثقة هائلة. أعمل الآن في أرقى صالونات دمشق، وأستعد لإطلاق مشروعي الخاص خلال هذا العام.",
    role: "كبير مصففي الشعر ورائد أعمال",
    rating: 5,
    avatar: mhairImg,
  },
];
