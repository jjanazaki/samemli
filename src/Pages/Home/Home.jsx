import "./Home.css";

import heroLogo from "../../assets/logo-big.png";
import heroImage from "../../assets/hero-illustration.png";
import textLogo from "../../assets/text-logo.png";

import service1 from "../../assets/web-design.png";
import service2 from "../../assets/development.png";
import service3 from "../../assets/bug-fix.png";
import service4 from "../../assets/maintenance.png";
import fullLogo from "../../assets/logo-big.png";

const Home = () => {
  return (
    <main className="home">
      {/* TOP IMAGE */}
      <section className="top-image">
        <img
          src={fullLogo}
          alt="صورة توضيحية أعلى الصفحة"
        />
      </section>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            ابنِ موقعًا إلكترونيًا
            <span> ينمّي عملك</span>
          </h1>

          <p>
            سواء كنت تحتاج إلى موقع جديد بالكامل، أو تحديث لموقعك الحالي،
            أو صيانة مستمرة، فريقنا يربطك بمطوّرين خبراء جاهزين لتحويل
            رؤيتك إلى واقع.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              ابدأ مشروعك
            </button>

            <button className="secondary-btn">
              تصفّح الخدمات
            </button>

          </div>

          <div className="hero-features">

            <div>⚡ تسليم سريع</div>

            <div>🛡 مدفوعات آمنة</div>

            <div>💻 مطوّرون محترفون</div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="رسم توضيحي للموقع الإلكتروني"
            className="hero-image"
          />

        </div>

      </section>

      {/* ================= TRUSTED ================= */}

      <section className="trusted">

        <h3>
          موثوق من قِبل الشركات الناشئة وصنّاع المحتوى والشركات الصغيرة
        </h3>

        <div className="trusted-logos">

          <span>الشعار</span>
          <span>الشعار</span>
          <span>الشعار</span>
          <span>الشعار</span>
          <span>الشعار</span>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-preview">

        <div className="section-title">

          <h2>خدماتنا</h2>

          <p>
            كل ما تحتاجه لإطلاق موقعك، وتحسينه، أو الحفاظ عليه.
          </p>

        </div>

        <div className="services-grid">

          <div className="service-card">

            <img src={service1} alt="" />

            <h3>تصميم المواقع</h3>

            <p>
              مواقع جميلة ومتجاوبة مع كل الأجهزة، مصممة وفقًا لهويتك.
            </p>

            <span>بدءًا من 99$</span>

            <button>اعرف المزيد</button>

          </div>

          <div className="service-card">

            <img src={service2} alt="" />

            <h3>تطوير المواقع</h3>

            <p>
              مواقع مخصّصة بالكامل باستخدام تقنيات تطوير حديثة.
            </p>

            <span>بدءًا من 149$</span>

            <button>اعرف المزيد</button>

          </div>

          <div className="service-card">

            <img src={service3} alt="" />

            <h3>حل مشاكل الموقع</h3>

            <p>
              إصلاح الأخطاء في التصميم، وتحسين سرعة التحميل، ومعالجة مشكلات الكود.
            </p>

            <span>بدءًا من 29$</span>

            <button>اعرف المزيد</button>

          </div>

          <div className="service-card">

            <img src={service4} alt="" />

            <h3>الصيانة</h3>

            <p>
              تحديثات شهرية، نسخ احتياطي، فحوصات أمنية ودعم مستمر.
            </p>

            <span>بدءًا من 19$/شهريًا</span>

            <button>اعرف المزيد</button>

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-us">

        <div className="section-title">

          <h2>لماذا اختر SAMEMLY؟</h2>

          <p>
            نجعل بناء موقعك أمرًا بسيطًا وشفافًا وخاليًا من التوتر.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <h3>⚡ تسليم سريع</h3>

            <p>
              نلتزم بالمواعيد ونبقي مشروعك يتحرك دون تأخير.
            </p>

          </div>

          <div className="why-card">

            <h3>🛡 مدفوعات آمنة</h3>

            <p>
              ابدأ بدفعة مقدمة ثم ادفع الباقي بعد مراجعة العمل.
            </p>

          </div>

          <div className="why-card">

            <h3>💻 مطورون مهرة</h3>

            <p>
              مطورون ذوو خبرة يستخدمون تقنيات حديثة وأفضل الممارسات.
            </p>

          </div>

          <div className="why-card">

            <h3>💬 تواصل واضح</h3>

            <p>
              احصل على تحديثات منتظمة وكن على اطلاع خلال كل مرحلة.
            </p>

          </div>

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="how-it-works">

        <div className="section-title">

          <h2>كيف يعمل ذلك؟</h2>

          <p>
            لم يكن بناء موقعك أسهل من أي وقت مضى.
          </p>

        </div>

        <div className="steps">

          <div className="step-card">
            <div className="step-number">1</div>
            <h3>اختر خدمة</h3>
            <p>
              تصفح خدماتنا واختر الخدمة الأنسب لمشروعك.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>أرسل المتطلبات</h3>
            <p>
              أخبرنا عن نشاطك وأهدافك وارفع أي ملفات لديك.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>ادفع الدفعة المقدمة</h3>
            <p>
              ثبّت طلبك ودع مطورينا يبدأون العمل.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>التطوير</h3>
            <p>
              يتم تصميم موقعك وترميزه واختباره مع تحديثات تقدم منتظمة.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">5</div>
            <h3>المراجعة والتعديلات</h3>
            <p>
              راجع المشروع واطلب التعديلات حتى تصبح راضيًا تمامًا.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">6</div>
            <h3>الإطلاق</h3>
            <p>
              ستحصل على موقعك المكتمل مع جميع الملفات اللازمة.
            </p>
          </div>

        </div>

      </section>

      {/* ================= PORTFOLIO ================= */}

      <section className="portfolio">

        <div className="section-title">

          <h2>مشاريعنا الأخيرة</h2>

          <p>
            لمحة عن مواقع ساعدناك في إنشائها أو تحسينها.
          </p>

        </div>

        <div className="portfolio-grid">

          <div className="portfolio-card">

            <img
              src="https://placehold.co/600x400"
              alt="مشروع"
            />

            <div className="portfolio-content">

              <h3>موقع مطعم</h3>

              <span>تصميم ويب</span>

              <p>
                موقع حديث ومتجاوب مع حجوزات عبر الإنترنت وقائمة طعام.
              </p>

            </div>

          </div>

          <div className="portfolio-card">

            <img
              src="https://placehold.co/600x400"
              alt="مشروع"
            />

            <div className="portfolio-content">

              <h3>متجر أزياء</h3>

              <span>متجر إلكتروني</span>

              <p>
                متجر ملابس عبر الإنترنت مع دفع آمن ونظام لإدارة المخزون.
              </p>

            </div>

          </div>

          <div className="portfolio-card">

            <img
              src="https://placehold.co/600x400"
              alt="مشروع"
            />

            <div className="portfolio-content">

              <h3>بورتفوليو مطوّر</h3>

              <span>موقع شخصي</span>

              <p>
                بورتفوليو تفاعلي يبرز المشاريع والخبرة.
              </p>

            </div>

          </div>

        </div>

        <button className="portfolio-btn">
          عرض البورتفوليو بالكامل
        </button>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonials">

        <div className="section-title">

          <h2>ماذا يقول عملاؤنا؟</h2>

          <p>
            نفخر بمساعدتك الشركات على بناء حضور أقوى على الإنترنت.
          </p>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <img
              src="https://placehold.co/100"
              alt="عميل"
            />

            <h3>أحمد حسن</h3>

            <span>صاحب مشروع صغير</span>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              سلّم الفريق موقعي قبل الموعد المحدد. كان كل شيء سلسًا، وكان التواصل ممتازًا.
            </p>

          </div>

          <div className="testimonial-card">

            <img
              src="https://placehold.co/100"
              alt="عميل"
            />

            <h3>سارة محمد</h3>

            <span>مؤسسة شركة ناشئة</span>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              أعادوا تصميم موقعنا القديم وزادت سرعته بشكل كبير. أنصح به بشدة.
            </p>

          </div>

          <div className="testimonial-card">

            <img
              src="https://placehold.co/100"
              alt="عميل"
            />

            <h3>عمر علي</h3>

            <span>مستقل</span>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              مطورون محترفون، تصميم جميل ودعم ممتاز بعد إنهاء المشروع.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq">

        <div className="section-title">

          <h2>الأسئلة الشائعة</h2>

          <p>
            لديك أسئلة؟ لقد أجبنا عن أكثر ما نسأل عنه.
          </p>

        </div>

        <div className="faq-container">

          <div className="faq-item">
            <h3>كم يستغرق بناء موقع إلكتروني؟</h3>
            <p>
              عادةً يتم إنجاز أغلب المواقع خلال 3–14 يومًا حسب تعقيد المشروع
              والميزات المطلوبة.
            </p>
          </div>

          <div className="faq-item">
            <h3>هل يمكنكم إصلاح موقعي الحالي؟</h3>
            <p>
              بالتأكيد! يمكننا إصلاح الأخطاء، وإعادة تصميم الصفحات، وتحسين السرعة،
              وتحسين SEO وإضافة ميزات جديدة إلى موقعك الحالي.
            </p>
          </div>

          <div className="faq-item">
            <h3>هل أدفع كل شيء قبل بدء العمل؟</h3>
            <p>
              لا. نطلب عادةً دفعة مقدمة فقط لبدء العمل. يتم دفع باقي المبلغ بعد
              أن تراجع المشروع وتوافق عليه.
            </p>
          </div>

          <div className="faq-item">
            <h3>هل تقدمون صيانة بعد التسليم؟</h3>
            <p>
              نعم! نوفر خطط صيانة مستمرة تشمل التحديثات والنسخ الاحتياطي
              والمراقبة الأمنية والدعم الفني.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="cta-content">

          <h2>جاهز لبناء موقعك التالي؟</h2>

          <p>
            سواء كنت تبدأ من الصفر أو تعمل على تحسين موقع موجود، نحن هنا لنساعدك
            في تحويل أفكارك إلى واقع.
          </p>

          <div className="cta-buttons">

            <button className="primary-btn">
              ابدأ مشروعك
            </button>

            <button className="secondary-btn">
              تواصل معنا
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-grid">

          {/* Company */}

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

          {/* Links */}

          <div className="footer-column">

            <h4>روابط سريعة</h4>

            <a href="/">الرئيسية</a>
            <a href="/services">الخدمات</a>
            <a href="/portfolio">البورتفوليو</a>
            <a href="/about">من نحن</a>
            <a href="/contact">اتصل بنا</a>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h4>الخدمات</h4>

            <a href="/">تصميم المواقع</a>
            <a href="/">تطوير المواقع</a>
            <a href="/">حل مشاكل الموقع</a>
            <a href="/">الصيانة</a>

          </div>

          {/* Contact */}

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

export default Home;