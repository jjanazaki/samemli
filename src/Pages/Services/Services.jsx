import React from "react";
import "./Services.css";

import {
  FaCode,
  FaPaintBrush,
  FaTools,
  FaBug,
  FaRocket,
  FaBolt,
  FaCheckCircle
} from "react-icons/fa";

import heroImage from "../../assets/services-hero.png"; // Replace with your mockup image
import textLogo from "../../assets/text-logo.png";

const services = [
  {
    icon: <FaCode />,
    title: "تصميم مواقع إلكترونية مخصصة",
    description:
      "نُنشئ موقعًا إلكترونيًا متكاملًا ومصممًا خصيصًا لاحتياجات عملك وأهدافك.",
    features: [
      "تصميم متجاوب",
      "واجهة مخصصة",
      "جاهز لتحسين SEO"
    ],
    price: "يبدأ من 399$"
  },

  {
    icon: <FaPaintBrush />,
    title: "إعادة تصميم المواقع",
    description:
      "حوّل موقعك القديم إلى تجربة حديثة ومريحة وسهلة الاستخدام.",
    features: [
      "واجهة حديثة",
      "تجربة مستخدم أفضل",
      "متجاوب مع الجوال"
    ],
    price: "يبدأ من 249$"
  },

  {
    icon: <FaTools />,
    title: "صيانة المواقع",
    description:
      "أبقِ موقعك آمنًا ومُحدّثًا ويعمل بأفضل أداء له.",
    features: [
      "تحديثات دورية",
      "فحوصات أمنية",
      "نسخ احتياطي أسبوعي"
    ],
    price: "يبدأ من 49$/شهر"
  },

  {
    icon: <FaBug />,
    title: "إصلاح الأخطاء",
    description:
      "أصلح الصفحات المعطلة ومشكلات التوافق وأي مشاكل فنية بسرعة.",
    features: [
      "إصلاح الأخطاء",
      "مشكلات الاستجابة",
      "تحسين الأداء"
    ],
    price: "يبدأ من 39$"
  },

  {
    icon: <FaRocket />,
    title: "تصميم صفحات هبوط",
    description:
      "صفحات هبوط عالية التحويل للمنتجات والشركات الناشئة والحملات التسويقية.",
    features: [
      "سرعة تحميل عالية",
      "تصميم حديث",
      "تحويل أعلى"
    ],
    price: "يبدأ من 199$"
  },

  {
    icon: <FaBolt />,
    title: "تحسين الأداء",
    description:
      "عزز سرعة موقعك وجاهزيته لتحسين SEO وأدائه العام.",
    features: [
      "تحسين السرعة",
      "تحسينات SEO",
      "مقاييس الويب الأساسية"
    ],
    price: "يبدأ من 99$"
  }
];

const Services = () => {

  return (

    <main className="services-page" dir="rtl">

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <div className="hero-left">

          <span className="hero-badge">
            حلول ويب احترافية
          </span>

          <h1>
            خدماتنا في
            <br />
            <span>تطوير المواقع</span>
          </h1>

          <p>
            سواء كنت تحتاج إلى موقع جديد بالكامل أو إعادة تصميم لموقعك الحالي
            أو صيانة مستمرة، نقدم لك حلولًا موثوقة ومصممة وفق أهداف عملك.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              ابدأ مشروعك
            </button>

            <button className="secondary-btn">
              تواصل معنا
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Website Mockup"
            className="hero-image"
          />

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-grid-section">

        <div className="section-title">

          <h2>استكشف خدماتنا</h2>

          <p>
            اختر الخدمة الأنسب لمشروعك وأهدافك.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>
                {service.description}
              </p>

              <div className="divider"></div>

              <div className="service-features">

                {service.features.map((feature, i) => (

                  <div
                    className="feature"
                    key={i}
                  >
                    <FaCheckCircle />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <div className="divider"></div>

              <div className="service-footer">

                <h4>{service.price}</h4>

                <button>
                  اعرف المزيد ←
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
      
            {/* ================= COMPARISON ================= */}

      <section className="comparison-section">

        <div className="section-title">

          <h2>ما الخدمة الأنسب لك؟</h2>

          <p>
            قارن بين خدماتنا واختر ما يناسب احتياجات مشروعك الأفضل.
          </p>

        </div>

        <div className="comparison-table">

          <div className="table-header">

            <div>الخدمة</div>
            <div>الأفضل لها</div>
            <div>المدة</div>
            <div>السعر المبدئي</div>

          </div>

          <div className="table-row">

            <div>تطوير المواقع</div>
            <div>الأعمال الجديدة</div>
            <div>2–4 أسابيع</div>
            <div>من 399$</div>

          </div>

          <div className="table-row">

            <div>إعادة تصميم المواقع</div>
            <div>المواقع الحالية</div>
            <div>1–3 أسابيع</div>
            <div>من 249$</div>

          </div>

          <div className="table-row">

            <div>صيانة المواقع</div>
            <div>العملاء الحاليون</div>
            <div>شهريًا</div>
            <div>من 49$/شهر</div>

          </div>

          <div className="table-row">

            <div>إصلاح الأخطاء</div>
            <div>المشكلات الصغيرة</div>
            <div>1–3 أيام</div>
            <div>من 39$</div>

          </div>

          <div className="table-row">

            <div>صفحات الهبوط</div>
            <div>الحملات التسويقية</div>
            <div>3–7 أيام</div>
            <div>من 199$</div>

          </div>

          <div className="table-row">

            <div>تحسين الأداء</div>
            <div>المواقع البطيئة</div>
            <div>2–5 أيام</div>
            <div>من 99$</div>

          </div>

        </div>

      </section>

      {/* ================= WHY WORK WITH US ================= */}

      <section className="why-us">

        <div className="section-title">

          <h2>لماذا تعمل معنا؟</h2>

          <p>
            نركز على تقديم مواقع عالية الجودة مع تجربة سلسة وشفافة ومهنية من البداية إلى النهاية.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              💡
            </div>

            <h3>حلول مخصصة</h3>

            <p>
              كل مشروع يُبنى من الصفر وفقًا لاحتياجات عملك وأهدافك والجمهور المستهدف.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              👨‍💻
            </div>

            <h3>مطورون خبراء</h3>

            <p>
              نستخدم أحدث التقنيات وكودًا نظيفًا وبنية قابلة للتطوير لضمان النجاح على المدى الطويل.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              🔒
            </div>

            <h3>مدفوعات آمنة</h3>

            <p>
              أسعار شفافة مع وسائل دفع آمنة ومراحل واضحة خلال المشروع.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              🤝
            </div>

            <h3>دعم مستمر</h3>

            <p>
              نحن هنا بعد الإطلاق مع الصيانة والتحديثات والدعم الفني عندما تحتاجه.
            </p>

          </div>

        </div>

      </section>

            {/* ================= HOW IT WORKS ================= */}

      <section className="how-it-works">

        <div className="section-title">

          <h2>كيف تعمل العملية؟</h2>

          <p>
            عملية العمل لدينا بسيطة وشفافة ومصممة لتجعل مشروعك خاليًا من التوتر من البداية إلى النهاية.
          </p>

        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-number">1</div>

            <h3>اختر الخدمة</h3>

            <p>
              تصفح خدماتنا واختر ما يناسب مشروعك وأهدافك.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-number">2</div>

            <h3>أخبرنا باحتياجاتك</h3>

            <p>
              شارك أفكارك وأهدافك ومواقع مرجعية وتفاصيل مشروعك.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-number">3</div>

            <h3>استلم عرض سعر</h3>

            <p>
              سنراجع طلبك ونرسل لك عرضًا مفصلًا يتضمن الأسعار.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-number">4</div>

            <h3>ادفع الدفعة المبدئية</h3>

            <p>
              بعد الموافقة، تدفع الدفعة المبدئية ونبدأ العمل.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-number">5</div>

            <h3>نقوم ببناء موقعك</h3>

            <p>
              يبني مطورونا رؤيتك ويحرصون على إبقاءك على اطلاع خلال كل خطوة.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-number">6</div>

            <h3>المراجعة والإطلاق</h3>

            <p>
              بعد المراجعات والموافقة، نطلق موقعك بنجاح.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq">

        <div className="section-title">

          <h2>الأسئلة الشائعة</h2>

          <p>
            كل ما تحتاج إلى معرفته قبل البدء في مشروعك.
          </p>

        </div>

        <div className="faq-container">

          <div className="faq-item">

            <h3>
              كم يستغرق بناء موقع إلكتروني؟
            </h3>

            <p>
              يتم إنجاز معظم المواقع خلال 2–4 أسابيع حسب حجم المشروع وتعقيده.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              هل أحتاج إلى استضافة قبل التواصل معكم؟
            </h3>

            <p>
              لا. إذا لم تكن لديك استضافة أو نطاق مسبقًا، سنساعدك في اختيار الحل الأنسب.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              هل يمكنك إعادة تصميم موقعي الحالي؟
            </h3>

            <p>
              بالتأكيد. يمكننا تحديث التصميم وتحسين الأداء وتعزيز تجربة المستخدم.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              هل تقدمون صيانة بعد الإطلاق؟
            </h3>

            <p>
              نعم! نقدم خطط صيانة تشمل التحديثات والنسخ الاحتياطي ومراقبة الأمان والدعم الفني.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="services-cta">

        <div className="cta-content">

          <h2>هل أنت جاهز لبدء موقعك؟</h2>

          <p>
            سواء كنت تطلق مشروعًا جديدًا أو تحسن موقعًا حاليًا، فنحن هنا لنساعدك في بناء شيء رائع معًا.
          </p>

          <button className="primary-btn">
            ابدأ مشروعك
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-grid">

          <div className="footer-column">

            <img
              src={textLogo}
              alt="شعار SAMEMLY"
              className="footer-logo"
            />

            <p>
              خدمات احترافية لتطوير الويب تساعد الشركات الناشئة ورواد الأعمال
              والمبدعين على إطلاق مواقع جميلة وسريعة وموثوقة.
            </p>

          </div>

          <div className="footer-column">

            <h4>روابط سريعة</h4>

            <a href="/">الرئيسية</a>
            <a href="/services">الخدمات</a>
            <a href="/portfolio">البورتفوليو</a>
            <a href="/about">من نحن</a>
            <a href="/contact">اتصل بنا</a>

          </div>

          <div className="footer-column">

            <h4>الخدمات</h4>

            <a href="/">تصميم المواقع</a>
            <a href="/">تطوير المواقع</a>
            <a href="/">حل مشاكل الموقع</a>
            <a href="/">الصيانة</a>

          </div>

          <div className="footer-column">

            <h4>التواصل</h4>

            <p>hello@samemly.com</p>

            <p>+20 100 000 0000</p>

            <div className="social-links">

              <a href="/">فيسبوك</a>
              <a href="/">إنستجرام</a>
              <a href="/">لينكدإن</a>
              <a href="/">إكس</a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 SAMEMLY. جميع الحقوق محفوظة.
          </p>

        </div>

      </footer>

          </main>

  );

};

export default Services;