import { t } from "../i18n/index.js";
import phoneImg from "../assets/images/phone.jfif";
import carImg from "../assets/images/car.jfif";
import elecmade from "../assets/images/الكهرباء الصناعية.jfif";
import repairdevice from "../assets/images/صيانة الأجهزة.jfif";
import elctron from "../assets/images/مبادئ.jfif";
import phonehs from "../assets/images/phonehs.jfif";
import plc from "../assets/images/plc.jfif";
import light from "../assets/images/light.jfif";
import auto from "../assets/images/auto.jfif";
import advmachine from "../assets/images/advmachine.jfif";
import carelec from "../assets/images/carelec.jfif";
import cool from "../assets/images/cool.jfif";
import photographyImg from "../assets/images/courses/photography.jpg";
import mensBarberingImg from "../assets/images/courses/mens-barbering.jpg";
import advancedMensBarberingImg from "../assets/images/courses/advanced-mens-barbering.jpg";
import theoreticalAccountingImg from "../assets/images/courses/theoretical-accounting.jpg";
import practicalAccountingImg from "../assets/images/courses/practical-accounting.jpg";
import graphicDesignImg from "../assets/images/courses/graphic-design.jpg";
import motionGraphicDesignImg from "../assets/images/courses/motion-graphic-design.jpg";
import womensHairStylingImg from "../assets/images/courses/womens-hair-styling.jpg";
import hairColorTechniquesImg from "../assets/images/courses/hair-color-techniques.jpg";
import professionalChignonImg from "../assets/images/courses/professional-chignon.jpg";
import comprehensiveBeautyImg from "../assets/images/courses/comprehensive-beauty.jpg";
import nailGelImg from "../assets/images/courses/nail-gel.jpg";
import skinCareImg from "../assets/images/courses/skin-care.jpg";
import specializedMakeupImg from "../assets/images/courses/specialized-makeup.jpg";
import lashExtensionsImg from "../assets/images/courses/lash-extensions.jpg";
import womensTailoringImg from "../assets/images/courses/womens-tailoring.jpg";
import eveningBridalTailoringImg from "../assets/images/courses/evening-bridal-tailoring.jpg";
import moulageImg from "../assets/images/courses/moulage.jpg";
import hauteCoutureImg from "../assets/images/courses/haute-couture.jpg";
import fashionIllustrationImg from "../assets/images/courses/fashion-illustration.jpg";
import mensTailoringImg from "../assets/images/courses/mens-tailoring.jpg";
import childrensTailoringImg from "../assets/images/courses/childrens-tailoring.jpg";
import fashionSewingImg from "../assets/images/courses/fashion-sewing.jpg";
import sewingStitchingImg from "../assets/images/courses/sewing-stitching.jpg";
import administrativeLeadershipImg from "../assets/images/courses/administrative-leadership.jpg";
import humanResourcesImg from "../assets/images/courses/human-resources.jpg";
import solarEnergySystemsImg from "../assets/images/courses/solar-energy-systems.jpg";
import surveillanceSystemsImg from "../assets/images/courses/surveillance-systems.jpg";
import autotronicsImg from "../assets/images/courses/autotronics.jpg";
import icdlImg from "../assets/images/courses/icdl.jpg";
import ccnaNetworkAdministrationImg from "../assets/images/courses/ccna-network-administration.jpg";
import htmlCssJavascriptImg from "../assets/images/courses/html-css-javascript.jpg";
import phpMysqlImg from "../assets/images/courses/php-mysql.jpg";
import laravelImg from "../assets/images/courses/laravel.jpg";
import flutterImg from "../assets/images/courses/flutter.jpg";
import cybersecurityImg from "../assets/images/courses/cybersecurity.jpg";
import windowsServerImg from "../assets/images/courses/windows-server.jpg";
import autocadImg from "../assets/images/courses/autocad.jpg";
import threeDsMaxImg from "../assets/images/courses/3ds-max.jpg";


export const courseCategories = [
  {
    id: "all",
    label: t("جميع التخصصات"),
  },
  {
    id: "tech",
    label: t("إلكترونيات وصيانة"),
  },
  {
    id: "technical",
    label: t("دورات فنية"),
  },
  {
    id: "automotive",
    label: t("ميكانيك وكهرباء السيارات"),
  },
  {
    id: "beauty",
    label: t("حلاقة وتجميل وعناية"),
  },
  {
    id: "computer",
    label: t("كمبيوتر وتصميم ومحاسبة"),
  },
  { id: "fashion", label: t("خياطة وتصميم أزياء") },
  { id: "business", label: t("إدارة الأعمال") },
];

export const programs = [
  {
    id: 6,
    slug: "basic-electronics",
    categoryId: "tech",
    categoryLabel: t("إلكترونيات وصيانة"),
    department: t("قسم الإلكترونيات"),
    badge: t("أساسي"),
    title: t("الإلكترونيات الأساسية (مبادئ الإلكترون)"),
    subtitle: "Basic Electronics",
    description:
      t("دورة تأسيسية للتعرف على العناصر الإلكترونية وأدوات القياس واللحام، وفحص المكونات وتنفيذ دارات إلكترونية عملية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/basic-electronics",
    image: elctron,
    rating: null,
    reviewsCount: null,
    duration: t("30 ساعة تدريبية"),
    hours: t("30 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("أساسي"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 30,
    totalSessions: null,
    highlights: [
      t("أساسيات الإلكترونيات والقياس"),
      t("اللحام وفحص العناصر"),
      t("عناصر الدارات ومصادر التغذية"),
      t("التحكم والدارات التطبيقية"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الإلكترونيات والقياس"),
        topics: [
          t("أدوات العمل ووحدات القياس"),
          t("المقاومات وأنواعها وقراءة العناصر وطرق توصيلها"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("اللحام وفحص العناصر"),
        topics: [
          t("اللحام بالكاوي العادي وكاوي الهواء وفك وتركيب عناصر SMD"),
          t("أجهزة القياس التماثلية والرقمية والمخططات على الحاسب"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("عناصر الدارات ومصادر التغذية"),
        topics: [
          t("البطاريات والملفات والمحولات والمكثفات"),
          t("أنصاف النواقل والترانزستورات BJT وMOSFET ومنظمات الجهد"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("التحكم والدارات التطبيقية"),
        topics: [
          t("دارات الشحن والفصل الآلي والإنذار"),
          t("الثايريستور والدياك والترياك والدارات المتكاملة ومكبر العمليات والفوتوكابلر"),
          t("اختبار عملي على مخطط دارة إلكترونية"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعد فني إلكترونيات"),
      t("التمهيد للتخصص في صيانة الأجهزة الإلكترونية"),
    ],
  },

  {
    id: 9,
    slug: "charger-cooker-inverter-repair",
    categoryId: "tech",
    categoryLabel: t("إلكترونيات وصيانة"),
    department: t("قسم الإلكترونيات"),
    badge: t("دورة مكثفة"),
    title: t("صيانة الشاحن والطباخ والإنفرتر"),
    subtitle: "Charger, Induction Cooker & Inverter Repair",
    description:
      t("دورة مكثفة لدراسة شواحن البطاريات والطباخ التحريضي ومبدلات الطاقة وطرق فحص أعطالها وإصلاحها."),
    linkText: t("استكشف الدورة"),
    path: "/courses/charger-cooker-inverter-repair",
    image: repairdevice,
    rating: null,
    reviewsCount: null,
    duration: t("38 ساعة تدريبية"),
    hours: t("38 ساعة تدريبية"),
    sessions: t("25 جلسة تدريبية"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 38,
    totalSessions: 25,
    highlights: [
      t("شواحن البطاريات"),
      t("الطباخ التحريضي"),
      t("مبدلات الطاقة Inverters"),
      t("تشخيص الأعطال والصيانة"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("شواحن البطاريات"),
        topics: [
          t("أنواع الشواحن ومواصفاتها ومبدأ العمل"),
          t("المخططات الصندوقية والتفصيلية وتشخيص الأعطال"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("الطباخ التحريضي"),
        topics: [
          t("مبدأ العمل والمخطط الصندوقي والتفصيلي"),
          t("الأعطال الشائعة للطباخ التحريضي"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("مبدلات الطاقة Inverters"),
        topics: [
          t("أنواع المبدلات ومواصفاتها وأشكال إشارة الخرج"),
          t("طريقة العمل والاستخدام وقراءة المخططات"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تشخيص الأعطال والصيانة"),
        topics: [
          t("متابعة أعطال الشواحن ومبدلات الطاقة وإصلاحها"),
          t("ربط الأعطال بالمخططات ودراسة أعطال الطباخ"),
        ],
      },
    ],
    careerOpportunities: [
      t("فني صيانة شواحن ومبدلات طاقة"),
      t("فني صيانة أجهزة إلكترونية"),
    ],
  },

  {
    id: 13,
    slug: "plc-programming",
    categoryId: "tech",
    categoryLabel: t("إلكترونيات وصيانة"),
    department: t("قسم الإلكترونيات"),
    badge: t("دورة تدريبية"),
    title: t("التحكم المنطقي المبرمج (PLC)"),
    subtitle: "Programmable Logic Controllers (PLC)",
    description:
      t("تدريب على أجهزة التحكم المنطقي المبرمج وبرمجة Ladder وتوصيل التوسعات وشاشات اللمس وتطبيقات التحكم الصناعي."),
    linkText: t("استكشف الدورة"),
    path: "/courses/plc-programming",
    image: plc,
    rating: null,
    reviewsCount: null,
    duration: t("72 ساعة تدريبية"),
    hours: t("72 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 72,
    totalSessions: null,
    highlights: [
      t("أساسيات PLC والبرمجة"),
      t("البرمجة المتقدمة والتوسعات"),
      t("تطبيقات أجهزة Delta وLS"),
      t("واجهات التشغيل HMI"),
      t("التطبيقات العملية للتحكم"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات PLC والبرمجة"),
        topics: [
          t("أنواع الأجهزة ومكوناتها ومميزاتها"),
          t("Smart Relay وLOGO وZELIO وبرمجة Ladder والمحاكاة"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("البرمجة المتقدمة والتوسعات"),
        topics: [
          t("خريطة الذاكرة والمرمز والتوسعات الرقمية والتمثيلية"),
          t("العمليات الحسابية والمداخل والمخارج التمثيلية"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تطبيقات أجهزة Delta وLS"),
        topics: [
          t("DVP-SX PLC وتوسعات Delta ومتحكم الحرارة DTC1000"),
          t("أجهزة Master-K PLC من LS وتوسعاتها"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("واجهات التشغيل HMI"),
        topics: [
          t("شاشات DOP-B وربطها مع PLC"),
          t("برمجة الأزرار والمؤشرات والرسائل والإنذارات والرسوم ونقل البرامج"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("التطبيقات العملية للتحكم"),
        topics: [
          t("استخدام الشاشة وPLC للتحكم بالمحركات Servo"),
          t("تطبيقات التحكم بمبدلات الطاقة Inverter"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعد فني تحكم صناعي"),
      t("فني أنظمة PLC وواجهات التشغيل"),
    ],
  },
  {
    id: 4,
    slug: "phone-maintenance",
    categoryId: "tech",
    categoryLabel: t("إلكترونيات وصيانة"),
    department: t("قسم الإلكترونيات"),
    badge: t("هاردوير وسوفتوير"),
    title: t("صيانة الهواتف الخلوية (هاردوير وسوفتوير)"),
    subtitle: "Mobile Phone Hardware & Software Repair",
    description:
      t("برنامج يجمع صيانة المكونات الإلكترونية للهواتف وتشخيص أعطالها مع صيانة البرمجيات والنسخ الاحتياطي والتعامل مع أجهزة ومعالجات متعددة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/phone-maintenance",
    image: phonehs,
    rating: null,
    reviewsCount: null,
    duration: t("63 ساعة تدريبية"),
    hours: t("63 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 63,
    totalSessions: null,
    highlights: [
      t("بنية الهواتف وأدوات الفحص"),
      t("صيانة الشاشات ودارات الشحن والاتصال"),
      t("الصيانة الإلكترونية الدقيقة"),
      t("أساسيات السوفتوير وأدوات الصيانة"),
      t("صيانة برمجيات الهواتف والمعالجات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("بنية الهواتف وأدوات الفحص"),
        topics: [
          t("فك وتركيب الهواتف والتعرف على المعالجات والذواكر وأنواع الشاشات"),
          t("استخدام الأفوميتر ووحدة التغذية وقراءة المخططات"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("صيانة الشاشات ودارات الشحن والاتصال"),
        topics: [
          t("فحص وتبديل جاكة الشحن وإصلاح مسار الشحن"),
          t("تشخيص أعطال الشبكة والواي فاي وفحص العناصر وتبديلها"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("الصيانة الإلكترونية الدقيقة"),
        topics: [
          t("فك وتبديل الدوائر المتكاملة IC وبلورات الشاشات"),
          t("استخدام المخططات الصندوقية والتفصيلية ومكبس البلورات"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("أساسيات السوفتوير وأدوات الصيانة"),
        topics: [
          t("النسخ الاحتياطي باستخدام Smart Switch وأوضاع التشغيل والاستعادة وبرنامج Odin 3"),
          t("الرومات والبوكسات والروت والتعامل مع الحسابات وكلمات المرور للأجهزة المصرح بصيانتها"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("صيانة برمجيات الهواتف والمعالجات"),
        topics: [
          t("صيانة برمجيات أجهزة iPhone وHuawei وSony"),
          t("التعامل مع برمجيات معالجات Qualcomm وMediaTek"),
        ],
      },
    ],
    careerOpportunities: [
      t("فني صيانة هواتف خلوية (هاردوير وسوفتوير)"),
      t("فني دعم وصيانة أجهزة محمولة"),
    ],
  },
  {
    id: 15,
    slug: "advanced-phone-repair",
    categoryId: "tech",
    categoryLabel: t("إلكترونيات وصيانة"),
    department: t("قسم الإلكترونيات"),
    badge: t("متقدم"),
    title: t("صيانة الهواتف الخلوية المتقدمة"),
    subtitle: "Advanced Mobile Phone Repair",
    description:
      t("تدريب متقدم على صيانة بوردات الهواتف والدوائر المتكاملة المحمية وإصلاح التوصيلات وبلورات الشاشات."),
    linkText: t("استكشف الدورة"),
    path: "/courses/advanced-phone-repair",
    image: phoneImg,
    rating: null,
    reviewsCount: null,
    duration: t("27 ساعة تدريبية"),
    hours: t("27 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("متقدم"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 27,
    totalSessions: null,
    highlights: [
      t("صيانة الدوائر المتكاملة"),
      t("إصلاح التوصيلات الدقيقة"),
      t("قراءة المخططات وتشخيص البورد"),
      t("صيانة بلورات الشاشات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("صيانة الدوائر المتكاملة"),
        topics: [
          t("فك وتركيب الدوائر المتكاملة IC"),
          t("فك وتركيب الدوائر المتكاملة المحمية"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("إصلاح التوصيلات الدقيقة"),
        topics: [
          t("تسحيب الأسلاك داخل البورد"),
          t("تعويض أطراف الدوائر المتكاملة بالجنابر"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("قراءة المخططات وتشخيص البورد"),
        topics: [t("مخططات الجوالات"), t("استخدام المخططات لفحص البوردات")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("صيانة بلورات الشاشات"),
        topics: [t("فك وتركيب بلورات الجوالات"), t("استخدام مكبس البلورات")],
      },
    ],
    careerOpportunities: [
      t("فني صيانة هواتف متقدمة"),
      t("فني صيانة بوردات ودوائر متكاملة"),
    ],
  },
  {
    id: 16,
    slug: "electrical-wiring",
    categoryId: "technical",
    categoryLabel: t("دورات فنية"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("الإنارة العامة والتمديدات الكهربائية"),
    subtitle: "Electrical Wiring & Lighting",
    description:
      t("دورة تطبيقية في أساسيات الكهرباء وتمديد دارات الإنارة والحماية والتوزيع والتحكم والربط بين مصادر التغذية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/electrical-wiring",
    image: light,
    rating: null,
    reviewsCount: null,
    duration: t("60 ساعة تدريبية"),
    hours: t("60 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 60,
    totalSessions: null,
    highlights: [
      t("أساسيات الكهرباء والسلامة"),
      t("التمديدات ودارات الإنارة"),
      t("المكونات والمخططات الكهربائية"),
      t("دارات التحكم والخدمات"),
      t("ربط مصادر التغذية والقياس"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الكهرباء والسلامة"),
        topics: [
          t("السلامة المهنية والوقاية من الحريق وأخطار الكهرباء"),
          t("التيار AC وDC والتأريض وقانون أوم والشبكات الأحادية والثلاثية"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("التمديدات ودارات الإنارة"),
        topics: [
          t("التابلو وعلب التوزيع والمجاري والمفاتيح والبريز"),
          t("دارات المصابيح بالتسلسل والتفرع والتحكم من عدة أماكن"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("المكونات والمخططات الكهربائية"),
        topics: [
          t("أنواع المصابيح والقواطع وحساب أطوال الأسلاك"),
          t("مصباح الفلوريسنت والمحول والتقويم وإنارة الأدراج"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("دارات التحكم والخدمات"),
        topics: [
          t("الأجراس والتلفون والخلية الضوئية وحساس الحركة"),
          t("الكونتاكتور والريليه والتايمر وضواغط التشغيل والإيقاف"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("ربط مصادر التغذية والقياس"),
        topics: [
          t("دارات ATS لربط المولدة بالشبكة"),
          t("دارة الفواشة الكهربائية وعداد القدرة الأحادي"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعد فني تمديدات كهربائية"),
      t("فني صيانة إنارة وتحكم كهربائي"),
    ],
  },
  {
    id: 17,
    slug: "industrial-automation",
    categoryId: "technical",
    categoryLabel: t("دورات فنية"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("التحكم الآلي والكهرباء الصناعية"),
    subtitle: "Industrial Electrical Control",
    description:
      t("تدريب على مكونات التحكم الكهربائي وحماية المحركات وتنفيذ دارات تشغيلها والتحكم بها وربط مصادر التغذية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/industrial-automation",
    image: elecmade,
    rating: null,
    reviewsCount: null,
    duration: t("60 ساعة تدريبية"),
    hours: t("60 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 60,
    totalSessions: null,
    highlights: [
      t("السلامة والمحركات الكهربائية"),
      t("مكونات التحكم والحماية"),
      t("دارات التشغيل والإيقاف"),
      t("التحكم المتقدم بالمحركات"),
      t("التحويل بين مصادر التغذية"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("السلامة والمحركات الكهربائية"),
        topics: [
          t("التأريض والحماية من الصواعق والعدد اليدوية والبنسة أمبير"),
          t("الشبكات والقواطع والمحركات الأحادية والثلاثية"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("مكونات التحكم والحماية"),
        topics: [
          t("الكونتاكتور والريليه والأوفرلود وقواطع حماية المحرك والطور"),
          t("المؤقتات والحساسات والضواغط ومصابيح الإشارة"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("دارات التشغيل والإيقاف"),
        topics: [
          t("قراءة المخططات ودارات التحكم"),
          t("التشغيل بضواغط متعددة وعكس الحركة وقاطع نهاية الشوط"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("التحكم المتقدم بالمحركات"),
        topics: [
          t("التتابع والتأخير الزمني وتشغيل محركين"),
          t("النجمي والمثلثي ومحركات داهلندر بسرعتين"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("التحويل بين مصادر التغذية"),
        topics: [
          t("دارات ATS لربط المولدة بالشبكة"),
          t("دارة ATS للشبكة ومولدة الحارة ومولدة المنزل"),
        ],
      },
    ],
    careerOpportunities: [
      t("فني تحكم كهربائي صناعي"),
      t("فني صيانة لوحات التحكم والمحركات"),
    ],
  },
  {
    id: 18,
    slug: "air-conditioning",
    categoryId: "technical",
    categoryLabel: t("دورات فنية"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("التكييف والتبريد"),
    subtitle: "Air Conditioning & Refrigeration",
    description:
      t("برنامج يجمع تركيب وصيانة المكيفات والبرادات، وفحص الدارات الكهربائية والمحركات والحساسات، وتشخيص الأعطال وعمليات التفريغ والشحن."),
    linkText: t("استكشف الدورة"),
    path: "/courses/air-conditioning",
    image: cool,
    rating: null,
    reviewsCount: null,
    duration: t("54 ساعة تدريبية"),
    hours: t("54 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 54,
    totalSessions: null,
    highlights: [
      t("أساسيات التكييف والتبريد ومكونات الأجهزة"),
      t("الدارات الكهربائية وأنظمة التحكم"),
      t("تركيب المكيفات وصيانة البرادات"),
      t("عمليات التفريغ والشحن"),
      t("القياسات وتشخيص الأعطال وإصلاحها"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات التكييف والتبريد ومكونات الأجهزة"),
        topics: [
          t("مكونات المكيف النافذي والمكيف من قطعتين"),
          t("أنواع الفريونات وحركة الغاز ومكونات البراد والمحرك وتحديد استطاعته"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("الدارات الكهربائية وأنظمة التحكم"),
        topics: [
          t("توصيل دارات المكيف والبراد والكونتاكتور وفحص المراوح"),
          t("الريموت كونترول والصمام العاكس والريليه والأوفرلود والترموستات والتايمر والحساسات"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تركيب المكيفات وصيانة البرادات"),
        topics: [
          t("تركيب المكيف من قطعتين وتوصيل دارات التشغيل الساخن والبارد"),
          t("لحام المواسير والمبادل الحراري وصيانة محركات البرادات وتغيير الزيت"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("عمليات التفريغ والشحن"),
        topics: [
          t("تفريغ وشحن المكيفات والبرادات"),
          t("استخدام أدوات قياس الضغط وفحص ضغط المحرك"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("القياسات وتشخيص الأعطال وإصلاحها"),
        topics: [
          t("قياس الأمبير والفولت والمقاومة وفحص المحركات"),
          t("تشخيص أعطال المكيفات والبرادات والحساسات والدوائر الإلكترونية"),
        ],
      },
    ],
    careerOpportunities: [
      t("فني تركيب وصيانة مكيفات"),
      t("فني صيانة برادات وأنظمة تبريد"),
    ],
  },

  {
    id: 5,
    slug: "auto-mechanics",
    categoryId: "automotive",
    categoryLabel: t("ميكانيك وكهرباء السيارات"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("ميكانيك السيارات"),
    subtitle: "Automotive Mechanics",
    description:
      t("تدريب على محركات البنزين والمازوت وأجزائها ودارات الوقود والتزييت والتبريد والاشتعال، وصيانة الفرامل ونقل الحركة مع تطبيقات عملية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/auto-mechanics",
    image: carImg,
    rating: null,
    reviewsCount: null,
    duration: t("38 ساعة تدريبية"),
    hours: t("38 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 38,
    totalSessions: null,
    highlights: [
      t("محركات البنزين والمازوت"),
      t("دارات التزييت والتبريد"),
      t("دارات الوقود والاشتعال والحقن"),
      t("الفرامل ونقل الحركة"),
      t("التطبيق العملي وتشخيص الأعطال"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("محركات البنزين والمازوت"),
        topics: [
          t("الأجزاء الثابتة والمتحركة ومبدأ العمل وعيار الصبابات"),
          t("فك وتركيب الكولاس والبيستون والكرنك والميل الكامتري وفحص الضغط والشد العياري"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("دارات التزييت والتبريد"),
        topics: [
          t("تجميع المحرك وتنظيف مجاري الزيت وفحص ضغط الزيت والمضخة"),
          t("مكونات التبريد وأسباب ارتفاع الحرارة وصيانتها"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("دارات الوقود والاشتعال والحقن"),
        topics: [
          t("الكاربريتور والبخاخات ودارات الحقن في محركات المازوت"),
          t("الاشتعال العادي والإلكتروني والاختبارات العملية"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الفرامل ونقل الحركة"),
        topics: [
          t("الفرامل الهيدروليكية والسيرفو والديسك والطنبور"),
          t("الدبرياج وعلبة السرعة والكرونة وأعطالها"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("التطبيق العملي وتشخيص الأعطال"),
        topics: [
          t("فحص محرك بنزين حديث وأعطال الاشتعال والوقود واللوحة الإلكترونية"),
          t("تدريب كل طالب على الفك والتركيب والعيار"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعد فني ميكانيك سيارات"),
      t("فني صيانة محركات وأنظمة نقل الحركة"),
    ],
  },
  {
    id: 21,
    slug: "auto-electrical",
    categoryId: "automotive",
    categoryLabel: t("ميكانيك وكهرباء السيارات"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("كهرباء السيارات"),
    subtitle: "Automotive Electrical Systems",
    description:
      t("دورة في الأنظمة الكهربائية للسيارات والإنارة والاشتعال والبطاريات والدينمو والمرش، مع تطبيقات تشخيص وإصلاح الأعطال."),
    linkText: t("استكشف الدورة"),
    path: "/courses/auto-electrical",
    image: carelec,
    rating: null,
    reviewsCount: null,
    duration: t("38 ساعة تدريبية"),
    hours: t("38 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 38,
    totalSessions: null,
    highlights: [
      t("أساسيات كهرباء السيارات"),
      t("البطارية والاشتعال والتحكم"),
      t("الإنارة وملحقات السيارة"),
      t("الدينمو ونظام بدء التشغيل"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات كهرباء السيارات"),
        topics: [
          t("التيار AC وDC وأجهزة القياس وأنظمة 12 و24 فولت"),
          t("التابلو ومؤشراته والفيوزات ومفتاح الكونتاك"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("البطارية والاشتعال والتحكم"),
        topics: [
          t("البطارية وطرق شحنها ودارات الاشتعال القديمة والحديثة"),
          t("الريليه ومضخة البنزين والمروحة الكهربائية وحساس الحرارة"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("الإنارة وملحقات السيارة"),
        topics: [
          t("أنوار الرجوع والفرامل والأنوار الرئيسية والغمازات"),
          t("دارات الزمور والمساحات وبخاخ الماء"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الدينمو ونظام بدء التشغيل"),
        topics: [
          t("أجزاء الدينمو وفحصه وبلاتين الدينمو الإلكتروني والكهرومغناطيسي"),
          t("فك وتركيب المرش واختبار أوتوماتيك المرش وتشخيص الأعطال"),
        ],
      },
    ],
    careerOpportunities: [
      t("فني كهرباء سيارات"),
      t("فني صيانة أنظمة الشحن وبدء التشغيل"),
    ],
  },
  {
    id: 22,
    slug: "advanced-auto-mechanics",
    categoryId: "automotive",
    categoryLabel: t("ميكانيك وكهرباء السيارات"),
    department: t("قسم الدورات الفنية"),
    badge: t("متقدم"),
    title: t("ميكانيك السيارات المتقدم"),
    subtitle: "Advanced Automotive Mechanics & Diagnostics",
    description:
      t("دورة متقدمة للتعرف على الحساسات والمشغلات واستخدام برامج وأجهزة فحص السيارات وقراءة أكواد الأعطال."),
    linkText: t("استكشف الدورة"),
    path: "/courses/advanced-auto-mechanics",
    image: advmachine,
    rating: null,
    reviewsCount: null,
    duration: t("27 ساعة تدريبية"),
    hours: t("27 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("متقدم"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 27,
    totalSessions: null,
    highlights: [
      t("الحساسات والمشغلات"),
      t("المراجع الفنية وأجهزة الفحص"),
      t("طرق تشخيص الأعطال"),
      t("التطبيق العملي على فحص السيارات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("الحساسات والمشغلات"),
        topics: [t("دراسة الحساسات Sensors"), t("دراسة المشغلات Actuators")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("المراجع الفنية وأجهزة الفحص"),
        topics: [t("استخدام برنامج Auto Data"), t("أنواع أجهزة Auto Scanner")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("طرق تشخيص الأعطال"),
        topics: [
          t("طرق فحص السيارات ما قبل عام 1995"),
          t("أكواد الأعطال ومكان الفحص"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("التطبيق العملي على فحص السيارات"),
        topics: [
          t("استخدام جهاز Auto Scanner"),
          t("تطبيق فحص السيارات باستخدام أجهزة التشخيص"),
        ],
      },
    ],
    careerOpportunities: [
      t("فني تشخيص أعطال السيارات"),
      t("فني فحص إلكتروني للسيارات"),
    ],
  },
  {
    id: 23,
    slug: "photography",
    categoryId: "technical",
    categoryLabel: t("دورات فنية"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("التصوير الضوئي"),
    subtitle: "Photography",
    description:
      t("دورة في استخدام العدسات والكاميرات الرقمية والإضاءة والخلفيات، والتصوير الداخلي والخارجي وتجهيز الصور للطباعة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/photography",
    image: photographyImg,
    rating: null,
    reviewsCount: null,
    duration: t("30 ساعة تدريبية"),
    hours: t("30 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 30,
    totalSessions: null,
    highlights: [
      t("الكاميرات والعدسات"),
      t("الإضاءة والخلفيات"),
      t("التصوير العملي"),
      t("معالجة الصور وتجهيزها"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("الكاميرات والعدسات"),
        topics: [t("التعرف على العدسات"), t("دراسة تفصيلية للكاميرات الرقمية")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("الإضاءة والخلفيات"),
        topics: [t("دراسة الخلفيات والمناظر"), t("توزيع الضوء")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("التصوير العملي"),
        topics: [t("التصوير الداخلي"), t("جولة تصوير خارجي")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("معالجة الصور وتجهيزها"),
        topics: [
          t("استخدام الحاسب بما يتناسب مع التصوير"),
          t("تحضير الصورة للطباعة"),
        ],
      },
    ],
    careerOpportunities: [t("مساعد مصور ضوئي"), t("مصور للصور الداخلية والخارجية")],
  },
  {
    id: 3,
    slug: "mens-barbering",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة الرجالية"),
    badge: t("أساسي"),
    title: t("الحلاقة الرجالية الأساسية"),
    subtitle: "Basic Men’s Barbering",
    description:
      t("دورة تأسيسية في قص الشعر واستخدام آلة الحلاقة والموس وتحديد الذقن والتصفيف، مع جلسات عمل موزعة خلال الدورة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/mens-barbering",
    image: mensBarberingImg,
    rating: null,
    reviewsCount: null,
    duration: t("54 ساعة تدريبية"),
    hours: t("54 ساعة تدريبية"),
    sessions: t("36 جلسة تدريبية"),
    level: t("أساسي"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 54,
    totalSessions: 36,
    highlights: [
      t("أساسيات قص الشعر"),
      t("استخدام آلة الحلاقة"),
      t("حلاقة الذقن والعناية بالمظهر"),
      t("التصفيف والتطبيق العملي"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات قص الشعر"),
        topics: [t("طرق قص الشعر مع التدريب"), t("شرح قصات الشعر والموديلات")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("استخدام آلة الحلاقة"),
        topics: [
          t("التدريب على استخدام آلة الحلاقة في الجلسة الأولى"),
          t("متابعة التطبيق في الجلسة الثانية"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("حلاقة الذقن والعناية بالمظهر"),
        topics: [
          t("استخدام الموس وطرق حلاقة وتحديد الذقن"),
          t("استخدام الشمع والخيط"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("التصفيف والتطبيق العملي"),
        topics: [
          t("السيشوار والتدريب العملي"),
          t("جلسات العمل والامتحان النهائي وتحديد المستوى"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعد حلاق رجالي"),
      t("العمل في صالونات الحلاقة الرجالية"),
    ],
  },
  {
    id: 24,
    slug: "advanced-mens-barbering",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة الرجالية"),
    badge: t("متقدم"),
    title: t("الحلاقة الرجالية المتقدمة"),
    subtitle: "Advanced Men’s Barbering",
    description:
      t("دورة متقدمة في القصات الحديثة والصبغة والميش والتسبيل وحمام الزيت وتنظيف البشرة، مع تطبيق عملي."),
    linkText: t("استكشف الدورة"),
    path: "/courses/advanced-mens-barbering",
    image: advancedMensBarberingImg,
    rating: null,
    reviewsCount: null,
    duration: t("36 ساعة تدريبية"),
    hours: t("36 ساعة تدريبية"),
    sessions: t("24 جلسة تدريبية"),
    level: t("متقدم"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 36,
    totalSessions: 24,
    highlights: [
      t("قصات الشعر الحديثة"),
      t("صبغات الشعر والميش"),
      t("العناية بالشعر"),
      t("العناية بالبشرة"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("قصات الشعر الحديثة"),
        topics: [
          t("التدريب على القصات الحديثة"),
          t("تطبيق مهارات القص في المستوى المتقدم"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("صبغات الشعر والميش"),
        topics: [t("الصبغة والميش"), t("تطبيق عملي على الصبغة والميش")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("العناية بالشعر"),
        topics: [t("التسبيل"), t("حمام الزيت")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("العناية بالبشرة"),
        topics: [t("تنظيف البشرة"), t("تطبيق مهارات العناية بالمظهر")],
      },
    ],
    careerOpportunities: [t("حلاق رجالي"), t("مصفف شعر رجالي")],
  },
  {
    id: 25,
    slug: "theoretical-accounting",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("المحاسبة النظرية"),
    subtitle: "Theoretical Accounting",
    description:
      t("دورة في المبادئ المحاسبية وتسجيل العمليات المالية والتجارية والتسويات والجرد والحسابات الختامية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/theoretical-accounting",
    image: theoreticalAccountingImg,
    rating: null,
    reviewsCount: null,
    duration: t("30 ساعة تدريبية"),
    hours: t("30 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 30,
    totalSessions: null,
    highlights: [
      t("مبادئ المحاسبة والقيود"),
      t("المعاملات المالية والتجارية"),
      t("التسويات والمراجعة"),
      t("الحسابات الختامية وتطبيقات الشركات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("مبادئ المحاسبة والقيود"),
        topics: [
          t("تعريف المحاسبة وفروعها وأهدافها والمصطلحات المحاسبية"),
          t("مستندات وثبوتيات القيد والقيود المحاسبية للعمليات المالية والتجارية"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("المعاملات المالية والتجارية"),
        topics: [
          t("الخصم وأنواعه والأوراق التجارية"),
          t("اهتلاكات الموجودات الثابتة والمقدمات والمستحقات"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("التسويات والمراجعة"),
        topics: [
          t("التسويات الجردية وميزان المراجعة"),
          t("الأخطاء وطرق تصحيحها وأنواع الجرد"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الحسابات الختامية وتطبيقات الشركات"),
        topics: [
          t("الحسابات الختامية"),
          t("المعالجة المحاسبية في شركات الأشخاص والامتحان النهائي"),
        ],
      },
    ],
    careerOpportunities: [t("مساعد محاسب"), t("التمهيد للتخصص في المحاسبة العملية")],
  },
  {
    id: 26,
    slug: "practical-accounting",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("المحاسبة العملية"),
    subtitle: "Practical Computerized Accounting",
    description:
      t("دورة تطبيقية على برامج المحاسبة تشمل تأسيس الحسابات وإدارة الفواتير والمستودعات واستخراج التقارير والحسابات الختامية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/practical-accounting",
    image: practicalAccountingImg,
    rating: null,
    reviewsCount: null,
    duration: t("27 ساعة تدريبية"),
    hours: t("27 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 27,
    totalSessions: null,
    highlights: [
      t("إعداد البرامج وتأسيس الشركة"),
      t("العمليات التجارية والمستودعات"),
      t("التقارير والتسويات"),
      t("الحسابات الختامية والتطبيق العملي"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("إعداد البرامج وتأسيس الشركة"),
        topics: [
          t("التعريف ببرامج المحاسبة وتنصيبها"),
          t("دليل الحسابات والمواد والمستودعات وإدخال بيانات التأسيس"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("العمليات التجارية والمستودعات"),
        topics: [
          t("فواتير المشتريات والمبيعات والعمليات المتعلقة بالبضاعة"),
          t("معالجة الأوراق التجارية"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("التقارير والتسويات"),
        topics: [
          t("التقارير المحاسبية والمستودعية وكشوفات الزبائن والموردين"),
          t("إثبات التسويات الجردية والاهتلاكات والمقدمات والمستحقات"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الحسابات الختامية والتطبيق العملي"),
        topics: [
          t("إعداد الحسابات الختامية"),
          t("تقنيات البرامج وتطبيق الأنماط المحاسبية والامتحان النهائي"),
        ],
      },
    ],
    careerOpportunities: [t("مساعد محاسب"), t("موظف إدخال بيانات محاسبية ومستودعية")],
  },
  {
    id: 27,
    slug: "graphic-design",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("التصميم الغرافيكي"),
    subtitle: "Graphic Design",
    description:
      t("دورة في التصميم باستخدام Adobe Photoshop CC 2021 وAdobe Illustrator، من أدوات التصميم وتعديل الصور إلى الشعارات والمشاريع التطبيقية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/graphic-design",
    image: graphicDesignImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("أساسيات Adobe Photoshop"),
      t("مشاريع التصميم باستخدام Photoshop"),
      t("أساسيات Adobe Illustrator والرسم المتجهي"),
      t("الهوية البصرية والتصميم الإعلاني"),
      t("التصميم المتقدم ومشروع التخرج"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات Adobe Photoshop"),
        topics: [
          t("واجهة البرنامج واختصارات لوحة المفاتيح والطبقات"),
          t("الأدوات وخياراتها والألوان والفلاتر والتحديد المتقدم"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("مشاريع التصميم باستخدام Photoshop"),
        topics: [
          t("تصميم Poster وCart Visit وBrochure وFlyer وغلاف CD"),
          t("التعامل مع المجسمات ضمن فوتوشوب"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("أساسيات Adobe Illustrator والرسم المتجهي"),
        topics: [
          t("واجهة البرنامج والأدوات ورسم الأشكال وصناعة الفراشي والكاليغراف"),
          t("دمج الأشكال والألوان والتصدير"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الهوية البصرية والتصميم الإعلاني"),
        topics: [
          t("تصميم الإنفوغرافيك والشعارات والإعلانات التجارية"),
          t("تصميم شعار بحروف ثلاثية الأبعاد"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("التصميم المتقدم ومشروع التخرج"),
        topics: [
          t("الرسم المنظوري والتصميم ثلاثي الأبعاد والزخرفة"),
          t("مشروع التخرج"),
        ],
      },
    ],
    careerOpportunities: [t("مصمم غرافيك مبتدئ"), t("مصمم مواد إعلانية وبصرية")],
  },
  {
    id: 28,
    slug: "motion-graphic-design",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("التصميم الإعلاني المتحرك"),
    subtitle: "Motion Graphic Design",
    description:
      t("دورة في المونتاج والتصميم المتحرك باستخدام Adobe Premiere (15 ساعة) وAdobe After Effects (20 ساعة)، تشمل التحريك والمؤثرات البصرية والإخراج."),
    linkText: t("استكشف الدورة"),
    path: "/courses/motion-graphic-design",
    image: motionGraphicDesignImg,
    rating: null,
    reviewsCount: null,
    duration: t("35 ساعة تدريبية"),
    hours: t("35 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 35,
    totalSessions: null,
    highlights: [
      t("أساسيات المونتاج"),
      t("المونتاج المتقدم والإخراج"),
      t("أساسيات التحريك"),
      t("التحكم بالعناصر والحركة"),
      t("المؤثرات البصرية المتقدمة"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات المونتاج – Adobe Premiere"),
        topics: [
          t("واجهة البرنامج وبداية المشروع وإضافة اللوغو والتحكم بالمحتوى"),
          t("الانتقالات والمؤثرات وAdjustment Layer ومعالجة اهتزاز الكاميرا"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("المونتاج المتقدم والإخراج – Adobe Premiere"),
        topics: [
          t("الكرومـا والتحريك وMasking وتعديل الألوان وسرعة الفيديو"),
          t("Proxy Files وتصدير الفيديو والمقدمات المتحركة وتأثير الفيلم القديم"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("أساسيات التحريك – Adobe After Effects"),
        topics: [
          t("الواجهة والطبقات وKey Frame والكتابة العربية والإنجليزية"),
          t("التأثيرات والتصدير وMasking وAlpha Matte"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("التحكم بالعناصر والحركة – Adobe After Effects"),
        topics: [
          t("Adjustment Layers وParenting وExpressions وNull Object"),
          t("Motion Track وتتبع الحركة ثلاثي الأبعاد"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("المؤثرات البصرية المتقدمة"),
        topics: [
          t("تتبع الحركة لإضافة عناصر إلى المشهد"),
          t("فصل الشخص باستخدام Rotoscoping"),
        ],
      },
    ],
    careerOpportunities: [t("مصمم موشن غرافيك مبتدئ"), t("محرر فيديو ومونتير")],
    softwareHours: {
      "Adobe Premiere": 15,
      "Adobe After Effects": 20,
    },
  },
  {
    id: 1,
    slug: "womens-hair-styling",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("شامل"),
    title: t("أكاديمية الحلاقة النسائية الشاملة"),
    subtitle: "Comprehensive Women’s Hairdressing",
    description:
      t("تدريب على العناية بالشعر وقصه وتصفيفه، وتقنيات الصبغة والميش والشنيونات."),
    linkText: t("استكشف الدورة"),
    path: "/courses/womens-hair-styling",
    image: womensHairStylingImg,
    rating: null,
    reviewsCount: null,
    duration: t("74 ساعة تدريبية"),
    hours: t("74 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("شامل"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 74,
    totalSessions: null,
    highlights: [
      t("أساسيات المهنة والعناية بالشعر"),
      t("قص الشعر وتصفيفه"),
      t("تلوين الشعر والميش"),
      t("تنسيق التسريحات والشنيونات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات المهنة والعناية بالشعر"),
        topics: [
          t("إتيكيت المهنة والتعامل مع الزبونة"),
          t("حمام الكريم ومساج الرأس"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("قص الشعر وتصفيفه"),
        topics: [t("قصات الشعر الطويل والقصير"), t("التدريب على السيشوار")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تلوين الشعر والميش"),
        topics: [
          t("دائرة الألوان وقراءة الكتالوج وسلم التفتيح والتغميق"),
          t("صبغة الجذور ومزج الألوان والميش وسحب اللون والأومبريه"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تنسيق التسريحات والشنيونات"),
        topics: [
          t("أساسيات تنسيق التسريحة وتطبيق التسريحات"),
          t("شنيونات الشعر الطويل والقصير"),
        ],
      },
    ],
    careerOpportunities: [
      t("مصففة شعر نسائية"),
      t("العمل في صالونات الحلاقة النسائية"),
    ],
  },
  {
    id: 29,
    slug: "hair-color-techniques",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("دورة تدريبية"),
    title: t("تكنيك الألوان"),
    subtitle: "Hair Coloring Techniques",
    description:
      t("دورة متخصصة في تلوين الشعر ومزج الصبغات وتطبيق تقنيات الميش والأومبريه والكونتور."),
    linkText: t("استكشف الدورة"),
    path: "/courses/hair-color-techniques",
    image: hairColorTechniquesImg,
    rating: null,
    reviewsCount: null,
    duration: t("42 ساعة تدريبية"),
    hours: t("42 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 42,
    totalSessions: null,
    highlights: [
      t("أساسيات نظرية الألوان"),
      t("الصبغات ومزج الألوان"),
      t("الميش وسحب اللون"),
      t("تقنيات الألوان المتقدمة"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات نظرية الألوان"),
        topics: [t("دائرة الألوان وقراءة الكتالوج"), t("سلم التفتيح والتغميق")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("الصبغات ومزج الألوان"),
        topics: [t("صبغة الجذور"), t("مزج الألوان")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("الميش وسحب اللون"),
        topics: [t("الميش بأنواعه"), t("سحب اللون")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تقنيات الألوان المتقدمة"),
        topics: [t("الأومبريه"), t("كونتور الشعر")],
      },
    ],
    careerOpportunities: [t("فنية تلوين شعر"), t("العمل في صالونات التجميل")],
  },
  {
    id: 30,
    slug: "professional-chignon",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("دورة تدريبية"),
    title: t("الشنيون الاحترافي"),
    subtitle: "Professional Chignon Styling",
    description:
      t("تدريب متخصص على قواعد الشنيون وتسريحات العرائس والشنيونات ثلاثية الأبعاد."),
    linkText: t("استكشف الدورة"),
    path: "/courses/professional-chignon",
    image: professionalChignonImg,
    rating: null,
    reviewsCount: null,
    duration: t("32 ساعة تدريبية"),
    hours: t("32 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 32,
    totalSessions: null,
    highlights: [
      t("قواعد الشنيون الأساسية"),
      t("شنيون العروس"),
      t("الشنيونات ثلاثية الأبعاد"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("قواعد الشنيون الأساسية"),
        topics: [t("قواعد بناء الشنيون وتنسيقه")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("شنيون العروس"),
        topics: [t("تطبيق شنيونات العرائس")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("الشنيونات ثلاثية الأبعاد"),
        topics: [t("تطبيق شنيونات 3D")],
      },
    ],
    careerOpportunities: [
      t("مصففة تسريحات المناسبات"),
      t("العمل في صالونات العرائس"),
    ],
  },
  {
    id: 31,
    slug: "comprehensive-beauty",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("شامل"),
    title: t("أكاديمية التجميل الشاملة"),
    subtitle: "Comprehensive Beauty Academy",
    description:
      t("برنامج يجمع العناية بالزبائن والبشرة والأظافر وتقنيات المكياج الأساسي والمتقدم."),
    linkText: t("استكشف الدورة"),
    path: "/courses/comprehensive-beauty",
    image: comprehensiveBeautyImg,
    rating: null,
    reviewsCount: null,
    duration: t("82 ساعة تدريبية"),
    hours: t("82 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("شامل"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 82,
    totalSessions: null,
    highlights: [
      t("إتيكيت المهنة وإزالة الشعر"),
      t("العناية بالأظافر"),
      t("العناية بالبشرة"),
      t("المكياج الأساسي والمتقدم"),
      t("تقنيات المكياج المتخصصة"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("إتيكيت المهنة وإزالة الشعر"),
        topics: [t("التعامل مع الزبائن"), t("استخدام الحفافة للجسم والحاجب والواكس")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("العناية بالأظافر"),
        topics: [t("المانيكير والباديكير"), t("تصاميم الأظافر")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("العناية بالبشرة"),
        topics: [
          t("أنواع البشرة والمواد ومشاكل البشرة والعناية السطحية بها"),
          t("تنظيف البشرة الكلاسيكي والناتوراج"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("المكياج الأساسي والمتقدم"),
        topics: [t("مكياج نهاري وسهرة خفيف"), t("سموكي وميني سموكي وأوروبي لبناني")],
      },
      {
        unit: t("المحور الخامس"),
        title: t("تقنيات المكياج المتخصصة"),
        topics: [t("سوفت لايت وخليجي"), t("كت كريس وكونتور")],
      },
    ],
    careerOpportunities: [
      t("العمل في مراكز التجميل"),
      t("فنية مكياج وعناية تجميلية"),
    ],
  },
  {
    id: 32,
    slug: "nail-gel",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("دورة تدريبية"),
    title: t("جل الأظافر"),
    subtitle: "Nail Gel Techniques",
    description:
      t("تدريب على العناية بالأظافر وتصميمها وتركيب الجل وإزالته وتقنيات الأكريليك والفايبر."),
    linkText: t("استكشف الدورة"),
    path: "/courses/nail-gel",
    image: nailGelImg,
    rating: null,
    reviewsCount: null,
    duration: t("22 ساعة تدريبية"),
    hours: t("22 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 22,
    totalSessions: null,
    highlights: [
      t("تهيئة الأظافر والعناية بها"),
      t("تصاميم الأظافر"),
      t("تركيب الجل وإزالته"),
      t("تقنيات الأكريليك والفايبر"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("تهيئة الأظافر والعناية بها"),
        topics: [t("العناية باللحمية"), t("المانيكير والباديكير")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("تصاميم الأظافر"),
        topics: [t("تطبيق ديزاينات الأظافر")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تركيب الجل وإزالته"),
        topics: [t("طرق تركيب الجل"), t("طرق إزالة الجل")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تقنيات الأكريليك والفايبر"),
        topics: [t("صب الأكريليك"), t("الفايبر")],
      },
    ],
    careerOpportunities: [t("فنية أظافر"), t("العمل في صالونات التجميل")],
  },
  {
    id: 33,
    slug: "skin-care",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("دورة تدريبية"),
    title: t("العناية بالبشرة"),
    subtitle: "Skin Care",
    description:
      t("التعرف على أنواع البشرة والمواد المستخدمة ومشاكلها وطرق العناية السطحية وجلسات التنظيف."),
    linkText: t("استكشف الدورة"),
    path: "/courses/skin-care",
    image: skinCareImg,
    rating: null,
    reviewsCount: null,
    duration: t("22 ساعة تدريبية"),
    hours: t("22 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 22,
    totalSessions: null,
    highlights: [
      t("أنواع البشرة والمواد"),
      t("مشاكل البشرة والعناية السطحية"),
      t("جلسات تنظيف البشرة"),
      t("تقنيات العناية بالأجهزة"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أنواع البشرة والمواد"),
        topics: [t("تمييز أنواع البشرة"), t("قائمة المواد المستخدمة")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("مشاكل البشرة والعناية السطحية"),
        topics: [
          t("التعرف على مشاكل البشرة"),
          t("طرق العناية السطحية المذكورة في المنهاج"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("جلسات تنظيف البشرة"),
        topics: [t("التنظيف الكلاسيكي والناتوراج")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تقنيات العناية بالأجهزة"),
        topics: [t("جلسة هيدرافيشل"), t("شرح الديرمابن وفوائده")],
      },
    ],
    careerOpportunities: [
      t("العمل في مجال العناية التجميلية بالبشرة"),
      t("مساعدة فنية في مركز تجميل، ضمن الصلاحيات المهنية"),
    ],
  },
  {
    id: 34,
    slug: "specialized-makeup",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("دورة تدريبية"),
    title: t("المكياج التخصصي"),
    subtitle: "Specialized Makeup",
    description:
      t("تدريب على المكياج النهاري والمسائي والموديلات المتقدمة وتجهيز العروس."),
    linkText: t("استكشف الدورة"),
    path: "/courses/specialized-makeup",
    image: specializedMakeupImg,
    rating: null,
    reviewsCount: null,
    duration: t("48 ساعة تدريبية"),
    hours: t("48 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 48,
    totalSessions: null,
    highlights: [
      t("مصطلحات المكياج والأساسيات"),
      t("تقنيات مكياج العيون"),
      t("أنماط المكياج المتقدم"),
      t("تحديد الوجه وتجهيز العروس"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("مصطلحات المكياج والأساسيات"),
        topics: [t("مصطلحات المهنة"), t("مكياج نهاري وسهرة خفيف")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("تقنيات مكياج العيون"),
        topics: [t("سموكي وميني سموكي"), t("كت كريس")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("أنماط المكياج المتقدم"),
        topics: [t("أوروبي لبناني وسوفت لايت"), t("مكياج خليجي")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تحديد الوجه وتجهيز العروس"),
        topics: [t("كونتور"), t("تجهيز عروس احترافي")],
      },
    ],
    careerOpportunities: [t("فنية مكياج"), t("العمل في تجهيز العرائس والمناسبات")],
  },
  {
    id: 35,
    slug: "lash-extensions",
    categoryId: "beauty",
    categoryLabel: t("حلاقة وتجميل وعناية"),
    department: t("قسم الحلاقة والتجميل"),
    badge: t("دورة تدريبية"),
    title: t("الرموش الدائمة"),
    subtitle: "Lash and Brow Styling",
    description:
      t("تدريب على قلب الرموش ولامينيشن الحواجب وتقنيات تركيب الرموش والحواجب."),
    linkText: t("استكشف الدورة"),
    path: "/courses/lash-extensions",
    image: lashExtensionsImg,
    rating: null,
    reviewsCount: null,
    duration: t("12 ساعة تدريبية"),
    hours: t("12 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 12,
    totalSessions: null,
    highlights: [
      t("قلب الرموش"),
      t("لامينيشن الحواجب"),
      t("تركيب الرموش"),
      t("تركيب الحواجب"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("قلب الرموش"),
        topics: [t("تقنية قلب الرموش")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("لامينيشن الحواجب"),
        topics: [t("تطبيق لامينيشن الحواجب")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تركيب الرموش"),
        topics: [t("إكستشن الرموش")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تركيب الحواجب"),
        topics: [t("إكستشن الحواجب")],
      },
    ],
    careerOpportunities: [t("فنية رموش وحواجب"), t("العمل في صالونات التجميل")],
  },
  {
    id: 36,
    slug: "womens-tailoring",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("خياطة سيبورات نسائية"),
    subtitle: "Women’s Tailoring",
    description:
      t("تدريب على أخذ القياسات ورسم القوالب وتنفيذ التنانير والقمصان والبناطيل والفساتين النسائية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/womens-tailoring",
    image: womensTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: t("76 ساعة تدريبية"),
    hours: t("76 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 76,
    totalSessions: null,
    highlights: [
      t("القياسات والقوالب الأساسية"),
      t("التنانير وتطوير الموديلات"),
      t("القمصان والبناطيل"),
      t("الفساتين والبلوزات"),
      t("تطوير التصاميم وتنفيذها"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("القياسات والقوالب الأساسية"),
        topics: [t("أخذ قياسات الجسم"), t("سحب ستاندر المقاسات الجاهزة")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("التنانير وتطوير الموديلات"),
        topics: [
          t("قوالب التنورة الضيقة والمكسمة والموسعة"),
          t("تنزيل الموديلات على القالب الأساسي وتنفيذها"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("القمصان والبناطيل"),
        topics: [
          t("قالب القميص الكلاسيكي والأكمام والقبّات"),
          t("قالب البنطال المكسّم وقصه وخياطته"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الفساتين والبلوزات"),
        topics: [
          t("قالب المكسّم للفساتين والبلوزات"),
          t("تصريف بنس الصدر وتطبيق القصات"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("تطوير التصاميم وتنفيذها"),
        topics: [
          t("موديلات الفساتين والزم والكسرات والكلوش"),
          t("تطبيق عملي على الماكينة"),
        ],
      },
    ],
    careerOpportunities: [t("خياطة الملابس النسائية"), t("العمل في مشاغل التفصيل")],
  },
  {
    id: 37,
    slug: "evening-bridal-tailoring",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("خياطة سهرة وعرايسي"),
    subtitle: "Evening and Bridal Dressmaking",
    description:
      t("تدريب على قوالب التنانير والفساتين والأكمام والقبّات وموديلات ملابس السهرة والأعراس."),
    linkText: t("استكشف الدورة"),
    path: "/courses/evening-bridal-tailoring",
    image: eveningBridalTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: t("66 ساعة تدريبية"),
    hours: t("66 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 66,
    totalSessions: null,
    highlights: [
      t("قوالب التنانير"),
      t("الأكمام والقبّات"),
      t("موديلات الفساتين"),
      t("فساتين السهرة والشاحط"),
      t("ضبط القوام والتعديلات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("قوالب التنانير"),
        topics: [
          t("تنفيذ موديلات التنورة على الورق والقماش"),
          t("قوالب الكسرات والزم والكلوش"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("الأكمام والقبّات"),
        topics: [
          t("قوالب موديلات الأكمام والريكلان"),
          t("القبّات البحرية والعريضة والملكية"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("موديلات الفساتين"),
        topics: [t("موديلات الدلع والزم والكسرات"), t("فساتين الكت مع كم وبدون كم")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("فساتين السهرة والشاحط"),
        topics: [t("فساتين السهرة النافش والبليق"), t("الشاحط بأنواعه وموديلاته")],
      },
      {
        unit: t("المحور الخامس"),
        title: t("ضبط القوام والتعديلات"),
        topics: [
          t("تحجيم الصدر وتطبيق موديلات السوتيان على الفستان"),
          t("علاج القبّات والحالات الشاذة"),
        ],
      },
    ],
    careerOpportunities: [
      t("خياطة فساتين السهرة والأعراس"),
      t("العمل في مشاغل الأزياء"),
    ],
  },
  {
    id: 38,
    slug: "moulage",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("المولاج"),
    subtitle: "Fashion Draping (Moulage)",
    description:
      t("تدريب على تشكيل القماش وبناء وتنفيذ موديلات متنوعة مباشرة على المانيكان."),
    linkText: t("استكشف الدورة"),
    path: "/courses/moulage",
    image: moulageImg,
    rating: null,
    reviewsCount: null,
    duration: t("68 ساعة تدريبية"),
    hours: t("68 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 68,
    totalSessions: null,
    highlights: [
      t("تجهيز المانيكان والقالب"),
      t("القصات والتشكيل على المانيكان"),
      t("تقنيات الدرابيه"),
      t("ابتكار الموديلات وتعديل القياسات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("تجهيز المانيكان والقالب"),
        topics: [
          t("وضع شرائط الساتان على المانيكان"),
          t("تنفيذ القالب المكسّم لفستان السهرة مع التطبيب"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("القصات والتشكيل على المانيكان"),
        topics: [t("موديلات بعدة قصات"), t("كسرات الصدر وكوب الصدر مع التنورة")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تقنيات الدرابيه"),
        topics: [
          t("درابيه منتظمة وعشوائية"),
          t("درابيه سرايب وموديلات الدلع مع القصات المتداخلة"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("ابتكار الموديلات وتعديل القياسات"),
        topics: [
          t("تنفيذ موديلات بعدة قصات وأفكار"),
          t("تكبير المانيكان بعدة قياسات"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعدة مصممة أزياء"),
      t("العمل في مشاغل تصميم الفساتين"),
    ],
  },
  {
    id: 39,
    slug: "haute-couture",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("خياطة هوت كوتور"),
    subtitle: "Haute Couture Sewing",
    description:
      t("تطبيق موديلات الهوت كوتور على القماش والمانيكان باستخدام القصات المتداخلة والكسرات والزخارف."),
    linkText: t("استكشف الدورة"),
    path: "/courses/haute-couture",
    image: hauteCoutureImg,
    rating: null,
    reviewsCount: null,
    duration: t("68 ساعة تدريبية"),
    hours: t("68 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 68,
    totalSessions: null,
    highlights: [
      t("تشكيل الصدر والتفاصيل"),
      t("القصات والتشكيل الهندسي"),
      t("تقنيات الهوت كوتور"),
      t("تطوير الموديلات والتنانير"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("تشكيل الصدر والتفاصيل"),
        topics: [
          t("موديلات الوردة على الصدر"),
          t("الكسرات المتداخلة والوردة بأوراق"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("القصات والتشكيل الهندسي"),
        topics: [
          t("القصات المتداخلة وموديل الشمس"),
          t("موديل القلب وقصات الزكزاك والزوايا"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تقنيات الهوت كوتور"),
        topics: [t("الزم على الصدر"), t("موديل حراشف السمكة والقبّات الفنية")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تطوير الموديلات والتنانير"),
        topics: [t("موديل إلغاء خياطة الجنب"), t("موديل تنورة البواري")],
      },
    ],
    careerOpportunities: [
      t("خياطة أزياء هوت كوتور"),
      t("العمل في مشاغل الأزياء الراقية"),
    ],
  },
  {
    id: 40,
    slug: "fashion-illustration",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("الرسم والابتكار"),
    subtitle: "Fashion Illustration and Creative Design",
    description:
      t("تدريب على الرسم والألوان وخامات الأقمشة ورسم المانيكان وتصميم الموديلات المستوحاة من الطبيعة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/fashion-illustration",
    image: fashionIllustrationImg,
    rating: null,
    reviewsCount: null,
    duration: t("68 ساعة تدريبية"),
    hours: t("68 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 68,
    totalSessions: null,
    highlights: [
      t("أساسيات الرسم والألوان"),
      t("رسم المانيكان وخامات الأقمشة"),
      t("رسم الملابس والموديلات"),
      t("الابتكار واستلهام الأفكار"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الرسم والألوان"),
        topics: [
          t("التعرف على المواد المستخدمة"),
          t("تدريبات الرسم ودرجات الألوان ومزجها"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("رسم المانيكان وخامات الأقمشة"),
        topics: [
          t("رسم العارضة وتحريكها"),
          t("خامات الأقمشة وتطبيقها على الموديلات"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("رسم الملابس والموديلات"),
        topics: [t("رسم البدلة البيضاء"), t("رسم الكسرات والزم والكلوش")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الابتكار واستلهام الأفكار"),
        topics: [t("استيحاء الموديل من الطبيعة")],
      },
    ],
    careerOpportunities: [t("مساعدة مصمم أزياء"), t("رسم وتطوير أفكار الأزياء")],
  },
  {
    id: 41,
    slug: "mens-tailoring",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("خياطة الرجالي"),
    subtitle: "Men’s Tailoring",
    description:
      t("تدريب على القياسات والقوالب وتنفيذ القمصان والبناطيل والسترات والملابس الرجالية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/mens-tailoring",
    image: mensTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: t("68 ساعة تدريبية"),
    hours: t("68 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 68,
    totalSessions: null,
    highlights: [
      t("القياسات والقوالب"),
      t("القمصان والبناطيل"),
      t("السترات والملابس التقليدية"),
      t("الملابس المتنوعة والطقم الرسمي"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("القياسات والقوالب"),
        topics: [t("أخذ مقاسات الجسم"), t("سحب ستاندر المقاسات الجاهزة")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("القمصان والبناطيل"),
        topics: [
          t("تنفيذ القميص العريض والمكسّم وقصاته"),
          t("تنفيذ البنطال العريض والمكسّم وقصاته"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("السترات والملابس التقليدية"),
        topics: [t("قالب السترة وموديلاتها"), t("قالب الكلابية الكويتية والسعودية")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الملابس المتنوعة والطقم الرسمي"),
        topics: [
          t("قالب البيرمودة والتي شرت"),
          t("قوالب الطقم الرسمي والتطبيق العملي على الماكينة"),
        ],
      },
    ],
    careerOpportunities: [t("خياط ملابس رجالية"), t("العمل في مشاغل التفصيل")],
  },
  {
    id: 42,
    slug: "childrens-tailoring",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("خياطة ولادي"),
    subtitle: "Children’s Clothing Tailoring",
    description:
      t("تدريب على أخذ القياسات وبناء قوالب الملابس الولادية وتنفيذها على الماكينة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/childrens-tailoring",
    image: childrensTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: t("68 ساعة تدريبية"),
    hours: t("68 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 68,
    totalSessions: null,
    highlights: [
      t("القياسات والقوالب"),
      t("قوالب التنانير والموديلات"),
      t("القمصان والبناطيل"),
      t("الفساتين والبلوزات والملحقات"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("القياسات والقوالب"),
        topics: [t("أخذ قياسات الجسم"), t("سحب ستاندر المقاسات الجاهزة")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("قوالب التنانير والموديلات"),
        topics: [
          t("التنورة الضيقة والمكسمة والموسعة"),
          t("تنزيل الموديلات على القالب وتنفيذ القصات"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("القمصان والبناطيل"),
        topics: [
          t("قالب القميص الكلاسيكي والأكمام والقبّات"),
          t("قالب البنطال المكسّم وقصه وخياطته"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الفساتين والبلوزات والملحقات"),
        topics: [
          t("قوالب المكسّم وموديلات الفساتين والزم والكسرات"),
          t("طريقة عمل الطواقي والبربتوز"),
        ],
      },
    ],
    careerOpportunities: [t("خياطة ملابس الأطفال"), t("العمل في مشاغل الألبسة")],
  },
  {
    id: 2,
    slug: "fashion-sewing",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("شامل"),
    title: t("تصميم أزياء شاملة"),
    subtitle: "Comprehensive Fashion Design",
    description:
      t("برنامج يجمع قوالب السيبورات النسائية وموديلات السهرة وقوالب الملابس الرجالية مع التنفيذ والتطبيق."),
    linkText: t("استكشف الدورة"),
    path: "/courses/fashion-sewing",
    image: fashionSewingImg,
    rating: null,
    reviewsCount: null,
    duration: t("120 ساعة تدريبية"),
    hours: t("120 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("شامل"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 120,
    totalSessions: null,
    highlights: [
      t("قوالب السيبورات النسائية"),
      t("تصميم موديلات السهرة"),
      t("تنفيذ موديلات السهرة"),
      t("قوالب الرجالي والتطبيق"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("قوالب السيبورات النسائية"),
        topics: [t("قالب السيبورات النسائي كامل")],
      },
      {
        unit: t("المحور الثاني"),
        title: t("تصميم موديلات السهرة"),
        topics: [t("موديلات السهرة")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("تنفيذ موديلات السهرة"),
        topics: [t("التطبيق والتنفيذ العملي لموديلات السهرة")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("قوالب الرجالي والتطبيق"),
        topics: [t("قوالب الرجالي"), t("التنفيذ والتطبيق")],
      },
    ],
    careerOpportunities: [
      t("العمل في مجال تصميم الأزياء"),
      t("العمل في مشاغل الخياطة والتفصيل"),
    ],
  },
  {
    id: 43,
    slug: "sewing-stitching",
    categoryId: "fashion",
    categoryLabel: t("خياطة وتصميم أزياء"),
    department: t("قسم الخياطة وتصميم الأزياء"),
    badge: t("دورة تدريبية"),
    title: t("خياطة – درزة وحبكة"),
    subtitle: "Sewing and Overlocking",
    description:
      t("تدريب على استخدام ماكينة الخياطة والدرزة والحبكة وتركيب تفاصيل الملابس الأساسية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/sewing-stitching",
    image: sewingStitchingImg,
    rating: null,
    reviewsCount: null,
    duration: t("30 ساعة تدريبية"),
    hours: t("30 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 30,
    totalSessions: null,
    highlights: [
      t("الماكينة والدرزة والحبكة"),
      t("السحابات والكمرات"),
      t("الجيوب والأكمام والقبّات"),
      t("تشطيب الملابس"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("الماكينة والدرزة والحبكة"),
        topics: [
          t("التعرف على الماكينة واستخدامها"),
          t("التدريب على الدرزة والحبكة"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("السحابات والكمرات"),
        topics: [t("أنواع السحابات"), t("أنواع الكمرات")],
      },
      {
        unit: t("المحور الثالث"),
        title: t("الجيوب والأكمام والقبّات"),
        topics: [t("أنواع الجيوب مع الموديلات"), t("تركيب الكم والقبّة")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("تشطيب الملابس"),
        topics: [t("فتحة البولو بأنواعها")],
      },
    ],
    careerOpportunities: [t("مساعدة خياط"), t("العمل في مشاغل الألبسة")],
  },
  {
    id: 44,
    slug: "administrative-leadership",
    categoryId: "business",
    categoryLabel: t("إدارة الأعمال"),
    department: t("إدارة الأعمال"),
    badge: t("دورة تدريبية"),
    title: t("إدارة الأعمال – القيادة الإدارية"),
    subtitle: "Administrative Leadership",
    description:
      t("دورة في وظائف الإدارة والقيادة والتحفيز وخدمة الزبائن والتسويق والتطور المهني."),
    linkText: t("استكشف الدورة"),
    path: "/courses/administrative-leadership",
    image: administrativeLeadershipImg,
    rating: null,
    reviewsCount: null,
    duration: t("46 ساعة تدريبية"),
    hours: t("46 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 46,
    totalSessions: null,
    highlights: [
      t("أساسيات الإدارة ووظائفها"),
      t("القيادة والتدريب والتحفيز"),
      t("خدمة الزبائن"),
      t("التسويق والتسويق الإلكتروني"),
      t("التطور المهني والتقييم"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الإدارة ووظائفها"),
        topics: [
          t("مفهوم الإدارة والمنظمة والأقسام الإدارية ومهام المدير"),
          t("التخطيط والتنظيم والقيادة والرقابة وصنع القرار"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("القيادة والتدريب والتحفيز"),
        topics: [
          t("مهارات المدير لأول مرة وCoaching مع تطبيق عملي"),
          t("أنواع القيادة والموظفين والتحفيز"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("خدمة الزبائن"),
        topics: [
          t("مفهوم خدمة الزبائن والمهارات المطلوبة"),
          t("أنواع الزبائن وكيفية التعامل معهم عملياً"),
        ],
      },
      {
        unit: t("المحور الرابع"),
        title: t("التسويق والتسويق الإلكتروني"),
        topics: [
          t("مفهوم التسويق والفرق بين البيع والتسويق والخطة التسويقية"),
          t("التسويق الإلكتروني وكتابة المحتوى الإعلاني"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("التطور المهني والتقييم"),
        topics: [
          t("كتابة السيرة الذاتية والتطور المهني"),
          t("مقابلات العمل وتقييم الأداء"),
        ],
      },
    ],
    careerOpportunities: [
      t("مساعد إداري"),
      t("العمل في خدمة العملاء أو دعم فرق التسويق"),
    ],
  },
  {
    id: 45,
    slug: "human-resources",
    categoryId: "business",
    categoryLabel: t("إدارة الأعمال"),
    department: t("إدارة الأعمال"),
    badge: t("دورة تدريبية"),
    title: t("إدارة الأعمال – الموارد البشرية"),
    subtitle: "Human Resources Management",
    description:
      t("دورة في تخطيط الموارد البشرية والاستقطاب والتعيين وتطوير الموظفين وتقييم أدائهم وإدارتهم."),
    linkText: t("استكشف الدورة"),
    path: "/courses/human-resources",
    image: humanResourcesImg,
    rating: null,
    reviewsCount: null,
    duration: t("36 ساعة تدريبية"),
    hours: t("36 ساعة تدريبية"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: 36,
    totalSessions: null,
    highlights: [
      t("أساسيات الموارد البشرية والتخطيط"),
      t("الاستقطاب والاختيار والتعيين"),
      t("التدريب والتطوير وتقييم الأداء"),
      t("الرواتب والتحفيز والانضباط"),
      t("إنهاء العلاقة الوظيفية والتقييم"),
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الموارد البشرية والتخطيط"),
        topics: [
          t("مفاهيم الإدارة والموارد البشرية وأهميتها"),
          t("تخطيط الموارد البشرية والتحليل والتوصيف الوظيفي"),
        ],
      },
      {
        unit: t("المحور الثاني"),
        title: t("الاستقطاب والاختيار والتعيين"),
        topics: [
          t("استقطاب الموظفين والتعامل مع السير الذاتية"),
          t("مقابلات العمل والاختيار والتعيين نظرياً وعملياً"),
        ],
      },
      {
        unit: t("المحور الثالث"),
        title: t("التدريب والتطوير وتقييم الأداء"),
        topics: [t("تدريب وتطوير الموارد البشرية وأثره"), t("تقييم أداء الموظفين")],
      },
      {
        unit: t("المحور الرابع"),
        title: t("الرواتب والتحفيز والانضباط"),
        topics: [
          t("أنظمة الرواتب والأجور والتعويضات والتحفيز"),
          t("نظام الانضباط والقوانين"),
        ],
      },
      {
        unit: t("المحور الخامس"),
        title: t("إنهاء العلاقة الوظيفية والتقييم"),
        topics: [t("مقابلات الإقالة والفصل والاستقالة"), t("تقييم أداء المتدربين")],
      },
    ],
    careerOpportunities: [t("مساعد موارد بشرية"), t("مساعد توظيف وشؤون موظفين")],
  },
  // محاور مقترحة للدورات الجديدة تُراجع مع المركز.
  {
    id: 46,
    slug: "solar-energy-systems",
    categoryId: "technical",
    categoryLabel: t("دورات فنية"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("أنظمة الطاقة الشمسية"),
    subtitle: "Solar Energy Systems",
    description: t("دورة في مكونات أنظمة الطاقة الشمسية وحساب الأحمال واختيار الألواح والبطاريات والإنفرترات، مع تطبيقات على التوصيل والفحص والصيانة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/solar-energy-systems",
    image: solarEnergySystemsImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("أساسيات الطاقة الشمسية"),
      t("حساب الأحمال واختيار المكونات"),
      t("التوصيل والتركيب"),
      t("الفحص والصيانة")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الطاقة الشمسية"),
        topics: [
          t("مبدأ عمل الخلايا الكهروضوئية وأنواع الألواح"),
          t("مكونات الأنظمة المستقلة والمتصلة بالشبكة والأنظمة الهجينة")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("حساب الأحمال واختيار المكونات"),
        topics: [
          t("تقدير الاستهلاك الكهربائي وتحديد استطاعة النظام"),
          t("اختيار البطاريات والإنفرتر ومنظم الشحن وفق متطلبات الأحمال")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("التوصيل والتركيب"),
        topics: [
          t("توصيل الألواح والبطاريات وقراءة مخططات النظام"),
          t("قواعد السلامة والحماية الكهربائية والتأريض")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الفحص والصيانة"),
        topics: [
          t("قياس أداء النظام وتشخيص الأعطال الشائعة"),
          t("إعداد خطة صيانة دورية وتطبيق عملي على نظام تدريبي")
        ]
      }
    ],
    careerOpportunities: [
      t("مساعد فني تركيب أنظمة الطاقة الشمسية"),
      t("مساعد فني صيانة أنظمة الطاقة الشمسية")
    ]
  },
  {
    id: 47,
    slug: "surveillance-systems",
    categoryId: "tech",
    categoryLabel: t("إلكترونيات وصيانة"),
    department: t("قسم الإلكترونيات"),
    badge: t("دورة تدريبية"),
    title: t("أنظمة المراقبة"),
    subtitle: "CCTV & IP Surveillance Systems",
    description: t("دورة في تركيب كاميرات المراقبة وأنظمة التسجيل وضبط الشبكات والعرض عن بُعد، مع التدريب على التمديدات وتشخيص الأعطال وحماية الوصول."),
    linkText: t("استكشف الدورة"),
    path: "/courses/surveillance-systems",
    image: surveillanceSystemsImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("الكاميرات وأجهزة التسجيل"),
      t("التركيب والتمديدات"),
      t("إعداد النظام والشبكة"),
      t("الحماية والصيانة")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("الكاميرات وأجهزة التسجيل"),
        topics: [
          t("التعرف على كاميرات المراقبة التناظرية وكاميرات IP"),
          t("اختيار أجهزة DVR وNVR والتخزين بحسب متطلبات الموقع")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("التركيب والتمديدات"),
        topics: [
          t("تحديد مواقع الكاميرات ومجالات الرؤية"),
          t("تمديد الكابلات وتوصيل التغذية والتعرف على تقنية PoE")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("إعداد النظام والشبكة"),
        topics: [
          t("ضبط العناوين وإعداد التسجيل والتنبيهات"),
          t("تهيئة المشاهدة عن بُعد وإدارة المستخدمين والصلاحيات")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الحماية والصيانة"),
        topics: [
          t("حماية الحسابات وتحديث الأجهزة وحفظ التسجيلات"),
          t("تشخيص أعطال الصورة والاتصال والتخزين")
        ]
      }
    ],
    careerOpportunities: [
      t("مساعد فني تركيب كاميرات المراقبة"),
      t("مساعد فني صيانة أنظمة المراقبة")
    ]
  },
  {
    id: 48,
    slug: "autotronics",
    categoryId: "automotive",
    categoryLabel: t("ميكانيك وكهرباء السيارات"),
    department: t("قسم الدورات الفنية"),
    badge: t("دورة تدريبية"),
    title: t("تقنيات السيارات الحديثة (الأوتوترونك)"),
    subtitle: "Modern Automotive Technology & Autotronics",
    description: t("دورة في الأنظمة الإلكترونية للسيارات الحديثة، تشمل وحدات التحكم والحساسات والمشغلات وشبكات الاتصال، واستخدام أجهزة التشخيص لفحص الأعطال."),
    linkText: t("استكشف الدورة"),
    path: "/courses/autotronics",
    image: autotronicsImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("التحكم الإلكتروني في السيارات"),
      t("أنظمة المحرك والسلامة"),
      t("التشخيص وشبكات الاتصال"),
      t("تطبيقات الفحص العملي")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("التحكم الإلكتروني في السيارات"),
        topics: [
          t("التعرف على وحدات التحكم ECU وقراءة المخططات الكهربائية"),
          t("دراسة الحساسات والمشغلات وطرق فحص إشاراتها")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("أنظمة المحرك والسلامة"),
        topics: [
          t("مبادئ التحكم الإلكتروني بالحقن والإشعال"),
          t("التعرف على أنظمة ABS وESP والوسائد الهوائية وقواعد التعامل الآمن معها")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("التشخيص وشبكات الاتصال"),
        topics: [
          t("استخدام أجهزة OBD-II وقراءة أكواد الأعطال والبيانات الحية"),
          t("مبادئ شبكات CAN وتتبع مشكلات الاتصال بين وحدات التحكم")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("تطبيقات الفحص العملي"),
        topics: [
          t("إعداد خطوات تشخيص الأعطال الكهربائية والإلكترونية"),
          t("توثيق نتائج الفحص والتحقق من أداء النظام بعد الصيانة")
        ]
      }
    ],
    careerOpportunities: [
      t("مساعد فني تشخيص إلكتروني للسيارات"),
      t("مساعد فني كهرباء وأنظمة سيارات حديثة")
    ]
  },
  {
    id: 49,
    slug: "icdl",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("مهارات الحاسوب (ICDL)"),
    subtitle: "ICDL Computer & Office Skills",
    description: t("دورة لتطوير مهارات استخدام الحاسوب وإدارة الملفات والإنترنت والبريد الإلكتروني، وإعداد المستندات والجداول الإلكترونية والعروض التقديمية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/icdl",
    image: icdlImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("أساسيات الحاسوب وإدارة الملفات"),
      t("الإنترنت والتواصل الرقمي"),
      t("معالجة النصوص والعروض التقديمية"),
      t("الجداول الإلكترونية")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الحاسوب وإدارة الملفات"),
        topics: [
          t("التعرف على مكونات الحاسوب ونظام التشغيل"),
          t("إدارة الملفات والمجلدات والتخزين والنسخ الاحتياطي")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("الإنترنت والتواصل الرقمي"),
        topics: [
          t("البحث عبر الإنترنت واستخدام البريد الإلكتروني"),
          t("حماية الحسابات والخصوصية والتعامل الآمن مع الملفات والروابط")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("معالجة النصوص والعروض التقديمية"),
        topics: [
          t("إنشاء مستندات Word وتنسيقها وإعدادها للطباعة"),
          t("تصميم عروض PowerPoint وإضافة العناصر المرئية وتنظيم الشرائح")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الجداول الإلكترونية"),
        topics: [
          t("إدخال البيانات وتنسيقها واستخدام الصيغ والدوال في Excel"),
          t("فرز البيانات وتصفيتها وإنشاء المخططات وتجهيز التقارير")
        ]
      }
    ],
    careerOpportunities: [
      t("موظف إدخال بيانات"),
      t("مساعد إداري يستخدم التطبيقات المكتبية")
    ]
  },
  {
    id: 50,
    slug: "ccna-network-administration",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("إدارة الشبكات (CCNA)"),
    subtitle: "CCNA Network Administration",
    description: t("دورة في أساسيات شبكات الحاسوب وعناوين IP وإعداد المبدلات والموجهات، مع تطبيقات على التوجيه وخدمات الشبكة والحماية واستكشاف الأعطال."),
    linkText: t("استكشف الدورة"),
    path: "/courses/ccna-network-administration",
    image: ccnaNetworkAdministrationImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("أساسيات الشبكات وعناوين IP"),
      t("إعداد المبدلات والشبكات المحلية"),
      t("التوجيه وخدمات الشبكة"),
      t("الأمان واستكشاف الأعطال")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات الشبكات وعناوين IP"),
        topics: [
          t("نماذج OSI وTCP/IP وأجهزة الشبكات ووسائط الاتصال"),
          t("عنونة IPv4 وIPv6 وتقسيم الشبكات إلى شبكات فرعية")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("إعداد المبدلات والشبكات المحلية"),
        topics: [
          t("إعداد المبدلات وإنشاء VLAN وربطها"),
          t("مبادئ STP وتجميع الروابط والتعرف على الشبكات اللاسلكية")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("التوجيه وخدمات الشبكة"),
        topics: [
          t("التوجيه الثابت وأساسيات OSPF"),
          t("خدمات DHCP وDNS وNAT ومزامنة الوقت")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الأمان واستكشاف الأعطال"),
        topics: [
          t("قوائم التحكم بالوصول وتأمين إدارة أجهزة الشبكة"),
          t("تطبيقات على المحاكاة وتشخيص الاتصال ومقدمة في أتمتة الشبكات")
        ]
      }
    ],
    careerOpportunities: [
      t("فني دعم شبكات مبتدئ"),
      t("مساعد مسؤول شبكات")
    ]
  },
  {
    id: 51,
    slug: "html-css-javascript",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("تطوير واجهات الويب (HTML - CSS - JS)"),
    subtitle: "HTML, CSS & JavaScript Web Development",
    description: t("دورة لبناء صفحات ويب متجاوبة وتفاعلية باستخدام HTML وCSS وJavaScript، من تنظيم المحتوى وتنسيقه إلى التعامل مع الأحداث والبيانات وتنفيذ مشروع موقع."),
    linkText: t("استكشف الدورة"),
    path: "/courses/html-css-javascript",
    image: htmlCssJavascriptImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("بناء الصفحات باستخدام HTML"),
      t("تنسيق الواجهات باستخدام CSS"),
      t("أساسيات JavaScript والتفاعل"),
      t("مشروع ويب تطبيقي")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("بناء الصفحات باستخدام HTML"),
        topics: [
          t("العناصر الدلالية وتنظيم العناوين والنصوص والروابط والصور"),
          t("إنشاء النماذج والجداول ومبادئ إتاحة المحتوى")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("تنسيق الواجهات باستخدام CSS"),
        topics: [
          t("المحددات والألوان والخطوط ونموذج الصندوق"),
          t("تخطيط الصفحات باستخدام Flexbox وGrid والتصميم المتجاوب")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("أساسيات JavaScript والتفاعل"),
        topics: [
          t("المتغيرات والدوال والشروط والحلقات والمصفوفات"),
          t("التعامل مع DOM والأحداث والتحقق من إدخال النماذج")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("مشروع ويب تطبيقي"),
        topics: [
          t("جلب البيانات باستخدام Fetch والتعامل مع الأخطاء"),
          t("بناء موقع متجاوب واختباره ونشره")
        ]
      }
    ],
    careerOpportunities: [
      t("مطور واجهات ويب مبتدئ"),
      t("منفذ صفحات ومواقع ويب")
    ]
  },
  {
    id: 52,
    slug: "php-mysql",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("برمجة الويب وقواعد البيانات (PHP - MySQL)"),
    subtitle: "PHP & MySQL Web Development",
    description: t("دورة في تطوير مواقع الويب الديناميكية باستخدام PHP وقواعد بيانات MySQL، تشمل معالجة النماذج وإدارة البيانات والجلسات وبناء تطبيق عملي."),
    linkText: t("استكشف الدورة"),
    path: "/courses/php-mysql",
    image: phpMysqlImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("أساسيات PHP"),
      t("قواعد بيانات MySQL"),
      t("ربط التطبيق بقاعدة البيانات"),
      t("الأمان والمشروع التطبيقي")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات PHP"),
        topics: [
          t("إعداد بيئة التطوير والمتغيرات والأنواع والدوال"),
          t("الشروط والحلقات والمصفوفات وتنظيم ملفات المشروع")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("قواعد بيانات MySQL"),
        topics: [
          t("تصميم الجداول والمفاتيح والعلاقات بين البيانات"),
          t("كتابة استعلامات SQL والإضافة والتعديل والحذف والربط بين الجداول")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("ربط التطبيق بقاعدة البيانات"),
        topics: [
          t("استخدام PDO والاستعلامات المُعلَّمة لمعالجة البيانات"),
          t("التعامل مع النماذج والجلسات والتحقق من صحة المدخلات")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الأمان والمشروع التطبيقي"),
        topics: [
          t("تجزئة كلمات المرور وإدارة صلاحيات المستخدمين"),
          t("بناء تطبيق لإدارة البيانات واختبار الأخطاء الشائعة")
        ]
      }
    ],
    careerOpportunities: [
      t("مطور PHP مبتدئ"),
      t("مساعد مطور تطبيقات ويب وقواعد بيانات")
    ]
  },
  {
    id: 53,
    slug: "laravel",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("تطوير تطبيقات الويب باستخدام Laravel"),
    subtitle: "Laravel Web Application Development",
    description: t("دورة لتطوير تطبيقات ويب باستخدام Laravel، تشمل تنظيم المشروع وفق MVC وإدارة قواعد البيانات والمصادقة والصلاحيات وبناء واجهات API."),
    linkText: t("استكشف الدورة"),
    path: "/courses/laravel",
    image: laravelImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("بيئة Laravel وبنية المشروع"),
      t("قواعد البيانات وEloquent"),
      t("الواجهات والمستخدمون"),
      t("واجهات API والمشروع التطبيقي")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("بيئة Laravel وبنية المشروع"),
        topics: [
          t("إعداد المشروع باستخدام Composer والتعرف على أدوات Artisan"),
          t("مفهوم MVC وتنظيم المسارات وControllers وMiddleware")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("قواعد البيانات وEloquent"),
        topics: [
          t("إنشاء Migrations وSeeders وتنظيم نماذج البيانات"),
          t("إدارة العلاقات والاستعلامات باستخدام Eloquent")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("الواجهات والمستخدمون"),
        topics: [
          t("بناء القوالب باستخدام Blade ومعالجة النماذج والتحقق من البيانات"),
          t("إدارة تسجيل الدخول وسياسات الوصول والصلاحيات")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("واجهات API والمشروع التطبيقي"),
        topics: [
          t("إنشاء واجهات REST وتنظيم الاستجابات ومعالجة الأخطاء"),
          t("اختبار تطبيق متكامل وتهيئة الإعدادات للنشر")
        ]
      }
    ],
    careerOpportunities: [
      t("مطور Laravel مبتدئ"),
      t("مساعد مطور تطبيقات ويب")
    ]
  },
  {
    id: 54,
    slug: "flutter",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("تطوير تطبيقات الموبايل باستخدام Flutter"),
    subtitle: "Flutter Mobile App Development",
    description: t("دورة لبناء تطبيقات موبايل باستخدام Flutter ولغة Dart، تشمل تصميم الواجهات والتنقل وإدارة الحالة وربط البيانات واختبار التطبيق."),
    linkText: t("استكشف الدورة"),
    path: "/courses/flutter",
    image: flutterImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("أساسيات Dart وبيئة التطوير"),
      t("تصميم الواجهات والتنقل"),
      t("إدارة الحالة والبيانات"),
      t("مشروع تطبيق موبايل")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("أساسيات Dart وبيئة التطوير"),
        topics: [
          t("إعداد Flutter والمحاكي وتشغيل المشروع"),
          t("المتغيرات والدوال والكائنات والعمليات غير المتزامنة في Dart")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("تصميم الواجهات والتنقل"),
        topics: [
          t("استخدام Widgets وتنظيم التخطيطات المتجاوبة"),
          t("التنقل بين الشاشات ومعالجة النماذج وإدخال المستخدم")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("إدارة الحالة والبيانات"),
        topics: [
          t("مبادئ إدارة الحالة وتحديث الواجهات"),
          t("استهلاك واجهات API والتخزين المحلي ومعالجة حالات التحميل والأخطاء")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("مشروع تطبيق موبايل"),
        topics: [
          t("بناء تطبيق متعدد الشاشات وربط وظائفه"),
          t("اختبار التطبيق وتحسين عرضه وتجهيز نسخة للتوزيع")
        ]
      }
    ],
    careerOpportunities: [
      t("مطور Flutter مبتدئ"),
      t("مساعد مطور تطبيقات موبايل")
    ]
  },
  {
    id: 55,
    slug: "cybersecurity",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("الأمن السيبراني"),
    subtitle: "Cybersecurity Fundamentals",
    description: t("دورة تأسيسية في حماية الأنظمة والشبكات والبيانات، تشمل فهم التهديدات وإدارة الوصول وتأمين الأجهزة ومراقبة الأحداث والاستجابة للحوادث ضمن بيئة تدريبية."),
    linkText: t("استكشف الدورة"),
    path: "/courses/cybersecurity",
    image: cybersecurityImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("مفاهيم الأمن السيبراني"),
      t("حماية الأنظمة والحسابات"),
      t("أمن الشبكات والمراقبة"),
      t("تقييم الحماية والاستجابة")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("مفاهيم الأمن السيبراني"),
        topics: [
          t("سرية المعلومات وسلامتها وتوافرها وإدارة المخاطر"),
          t("التعرف على التصيد والبرمجيات الخبيثة وأساليب الوقاية")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("حماية الأنظمة والحسابات"),
        topics: [
          t("إدارة الصلاحيات والمصادقة متعددة العوامل"),
          t("تحديث الأنظمة وتأمين الإعدادات والنسخ الاحتياطي")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("أمن الشبكات والمراقبة"),
        topics: [
          t("مبادئ الجدران النارية وتقسيم الشبكات وحماية الاتصال"),
          t("قراءة السجلات ومراقبة الأحداث والتعرف على مؤشرات الحوادث")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("تقييم الحماية والاستجابة"),
        topics: [
          t("تقييم الثغرات في مختبر مصرح به وتحديد أولويات المعالجة"),
          t("إعداد خطة استجابة للحوادث وتوثيق النتائج والاستعادة")
        ]
      }
    ],
    careerOpportunities: [
      t("مساعد دعم أمن معلومات"),
      t("التمهيد للتخصص في تحليل أمن الأنظمة والشبكات")
    ]
  },
  {
    id: 56,
    slug: "windows-server",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("إدارة الخوادم باستخدام Windows Server"),
    subtitle: "Windows Server Administration",
    description: t("دورة في إعداد وإدارة خوادم Windows Server، تشمل خدمات الدليل والمستخدمين وسياسات المجموعة وخدمات الشبكة ومشاركة الملفات والنسخ الاحتياطي."),
    linkText: t("استكشف الدورة"),
    path: "/courses/windows-server",
    image: windowsServerImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("إعداد الخادم وإدارته"),
      t("خدمات الدليل والمستخدمون"),
      t("سياسات المجموعة وخدمات الشبكة"),
      t("الملفات والحماية والاستعادة")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("إعداد الخادم وإدارته"),
        topics: [
          t("تثبيت Windows Server وضبط الإعدادات الأساسية"),
          t("إدارة الأدوار والميزات ومقدمة في PowerShell")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("خدمات الدليل والمستخدمون"),
        topics: [
          t("إعداد Active Directory Domain Services وتنظيم الوحدات"),
          t("إدارة المستخدمين والمجموعات وضم الأجهزة إلى النطاق")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("سياسات المجموعة وخدمات الشبكة"),
        topics: [
          t("تطبيق Group Policy وإدارة إعدادات الأجهزة والمستخدمين"),
          t("إعداد خدمات DNS وDHCP وتشخيص مشكلات الاتصال")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الملفات والحماية والاستعادة"),
        topics: [
          t("إدارة مشاركات الملفات وصلاحيات NTFS"),
          t("مراقبة الخادم وتحديثه وتنفيذ النسخ الاحتياطي والاستعادة")
        ]
      }
    ],
    careerOpportunities: [
      t("مساعد مسؤول أنظمة Windows"),
      t("فني دعم خوادم وشبكات مبتدئ")
    ]
  },
  {
    id: 57,
    slug: "autocad",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("الرسم الهندسي باستخدام AutoCAD"),
    subtitle: "AutoCAD Technical Drafting",
    description: t("دورة في إعداد الرسومات والمخططات الهندسية باستخدام AutoCAD، تشمل أوامر الرسم والتعديل والطبقات والأبعاد والبلوكات وإخراج اللوحات للطباعة."),
    linkText: t("استكشف الدورة"),
    path: "/courses/autocad",
    image: autocadImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("بيئة AutoCAD وأساسيات الرسم"),
      t("تحرير الرسومات وتنظيمها"),
      t("الأبعاد والبلوكات والمراجع"),
      t("إخراج المخططات")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("بيئة AutoCAD وأساسيات الرسم"),
        topics: [
          t("التعرف على الواجهة وضبط الوحدات والإحداثيات"),
          t("رسم الخطوط والأشكال واستخدام أدوات الدقة والالتقاط")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("تحرير الرسومات وتنظيمها"),
        topics: [
          t("أوامر التعديل والنسخ والإزاحة والقص"),
          t("إدارة الطبقات وخصائص العناصر وأنماط الخطوط")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("الأبعاد والبلوكات والمراجع"),
        topics: [
          t("إضافة الأبعاد والنصوص والتهشير وضبط أنماطها"),
          t("إنشاء البلوكات واستخدام المراجع الخارجية")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("إخراج المخططات"),
        topics: [
          t("إعداد Layouts ومقاييس الرسم وإعدادات الطباعة"),
          t("تنفيذ مخطط تطبيقي وتصديره إلى PDF")
        ]
      }
    ],
    careerOpportunities: [
      t("رسام مخططات باستخدام AutoCAD"),
      t("مساعد إعداد رسومات هندسية")
    ]
  },
  {
    id: 58,
    slug: "3ds-max",
    categoryId: "computer",
    categoryLabel: t("كمبيوتر وتصميم ومحاسبة"),
    department: t("قسم الكمبيوتر"),
    badge: t("دورة تدريبية"),
    title: t("التصميم ثلاثي الأبعاد باستخدام 3ds Max"),
    subtitle: "3ds Max Modeling & Visualization",
    description: t("دورة في النمذجة والإظهار ثلاثي الأبعاد باستخدام 3ds Max، تشمل بناء المجسمات وإعداد الخامات والإضاءة والكاميرات وإنتاج مشهد نهائي."),
    linkText: t("استكشف الدورة"),
    path: "/courses/3ds-max",
    image: threeDsMaxImg,
    rating: null,
    reviewsCount: null,
    duration: t("غير محددة"),
    hours: t("غير محدد"),
    sessions: t("غير محدد"),
    level: t("غير محدد"),
    certificate: t("غير محددة"),
    practicalPercentage: t("غير محددة"),
    totalHours: null,
    totalSessions: null,
    highlights: [
      t("بيئة العمل وبناء المجسمات"),
      t("تقنيات النمذجة"),
      t("الخامات والإضاءة والكاميرات"),
      t("الإظهار والمشروع النهائي")
    ],
    syllabus: [
      {
        unit: t("المحور الأول"),
        title: t("بيئة العمل وبناء المجسمات"),
        topics: [
          t("إعداد المشهد والوحدات والتنقل داخل المساقط"),
          t("إنشاء المجسمات الأساسية والتحويلات وتنظيم العناصر")
        ]
      },
      {
        unit: t("المحور الثاني"),
        title: t("تقنيات النمذجة"),
        topics: [
          t("تحرير المجسمات باستخدام Editable Poly وأدوات التعديل"),
          t("استخدام Splines وModifiers لبناء عناصر المشهد")
        ]
      },
      {
        unit: t("المحور الثالث"),
        title: t("الخامات والإضاءة والكاميرات"),
        topics: [
          t("إعداد الخامات والإكساء وضبط إحداثيات UV"),
          t("توزيع الإضاءة وتحديد الكاميرات وتكوين اللقطة")
        ]
      },
      {
        unit: t("المحور الرابع"),
        title: t("الإظهار والمشروع النهائي"),
        topics: [
          t("ضبط إعدادات الرندر وجودة الصورة"),
          t("تنفيذ مشهد داخلي أو منتج وإخراج صور نهائية")
        ]
      }
    ],
    careerOpportunities: [
      t("مصمم مجسمات ثلاثية الأبعاد مبتدئ"),
      t("مساعد إظهار معماري وتصميم داخلي")
    ]
  },
];
