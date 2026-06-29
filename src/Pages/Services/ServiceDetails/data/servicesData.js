const services = [
  {
    id: 'custom-website-development',
    title: 'تصميم مواقع إلكترونية مخصصة',
    shortDescription:
      'نُنشئ موقعًا إلكترونيًا متكاملًا ومصممًا خصيصًا لاحتياجات عملك وأهدافك.',
    about:
      'نقدم موقعًا احترافيًا من الصفر مع تصميم مخصص، أداء عالي، وواجهة سهلة الاستخدام.',
    heroImage: 'https://placehold.co/800x600',
    aboutImage: 'https://placehold.co/600x400',
    delivery: '2-4 أسابيع',
    revisions: '2 مراجعات',
    rating: '4.9/5',
    included: [
      'تصميم مخصص',
      'تصميم متجاوب',
      'أداء سريع',
      'جاهز لتحسين SEO',
      'نماذج تواصل',
      'تكامل وسائل التواصل',
    ],
    technologies: [
      { name: 'React', image: 'https://placehold.co/120x120' },
      { name: 'Vite', image: 'https://placehold.co/120x120' },
      { name: 'CSS', image: 'https://placehold.co/120x120' },
    ],
    packages: [
      { name: 'Basic', price: '$399', pages: '3 Pages' },
      { name: 'Standard', price: '$699', pages: '6 Pages' },
      { name: 'Premium', price: '$999', pages: 'Unlimited' },
    ],
  },
  {
    id: 'website-redesign',
    title: 'إعادة تصميم المواقع',
    shortDescription:
      'حوّل موقعك القديم إلى تجربة حديثة ومريحة وسهلة الاستخدام.',
    about:
      'نحوّل واجهات المواقع القديمة إلى حلول حديثة تعزز الثقة وتجربة المستخدم.',
    heroImage: 'https://placehold.co/800x600',
    aboutImage: 'https://placehold.co/600x400',
    delivery: '1-3 أسابيع',
    revisions: '2 مراجعات',
    rating: '4.7/5',
    included: [
      'تصميم حديث',
      'تحسين تجربة المستخدم',
      'استجابة ممتازة للجوال',
      'تحسين السرعة',
    ],
    technologies: [
      { name: 'React', image: 'https://placehold.co/120x120' },
      { name: 'Tailwind', image: 'https://placehold.co/120x120' },
    ],
    packages: [
      { name: 'Basic', price: '$249', pages: '1 Page' },
      { name: 'Standard', price: '$499', pages: '3 Pages' },
      { name: 'Premium', price: '$799', pages: 'Unlimited' },
    ],
  },
  {
    id: 'website-maintenance',
    title: 'صيانة المواقع',
    shortDescription:
      'أبقِ موقعك آمنًا ومُحدّثًا ويعمل بأفضل أداء له.',
    about:
      'نقدم صيانة دورية تشمل التحديثات، النسخ الاحتياطي، والفحوصات الأمنية.',
    heroImage: 'https://placehold.co/800x600',
    aboutImage: 'https://placehold.co/600x400',
    delivery: '1-2 أسابيع',
    revisions: '1 مراجعة',
    rating: '4.8/5',
    included: ['تحديثات دورية', 'فحوصات أمنية', 'نسخ احتياطي أسبوعي'],
    technologies: [
      { name: 'Node.js', image: 'https://placehold.co/120x120' },
      { name: 'Vercel', image: 'https://placehold.co/120x120' },
    ],
    packages: [
      { name: 'Basic', price: '$49/month', pages: '1 Page' },
      { name: 'Standard', price: '$99/month', pages: '3 Pages' },
      { name: 'Premium', price: '$199/month', pages: 'Unlimited' },
    ],
  },
  {
    id: 'bug-fixes',
    title: 'إصلاح الأخطاء',
    shortDescription:
      'أصلح الصفحات المعطلة ومشكلات التوافق وأي مشاكل فنية بسرعة.',
    about:
      'نركز على إصلاح المشاكل التقنية بسرعة مع تقليل التأثير على تجربة المستخدم.',
    heroImage: 'https://placehold.co/800x600',
    aboutImage: 'https://placehold.co/600x400',
    delivery: '1-3 أيام',
    revisions: '1 مراجعة',
    rating: '4.8/5',
    included: ['إصلاح الأخطاء', 'مشكلات الاستجابة', 'تحسين الأداء'],
    technologies: [{ name: 'Debugging', image: 'https://placehold.co/120x120' }],
    packages: [
      { name: 'Basic', price: '$39', pages: '1 Fix' },
      { name: 'Standard', price: '$79', pages: '3 Fixes' },
      { name: 'Premium', price: '$149', pages: 'Unlimited' },
    ],
  },
  {
    id: 'landing-page-development',
    title: 'تصميم صفحات هبوط',
    shortDescription:
      'صفحات هبوط عالية التحويل للمنتجات والشركات الناشئة والحملات التسويقية.',
    about:
      'نُنشئ صفحات هبوط مصممة للتسويق والانتقال السريع من الزائر إلى العميل.',
    heroImage: 'https://placehold.co/800x600',
    aboutImage: 'https://placehold.co/600x400',
    delivery: '3-7 أيام',
    revisions: '2 مراجعات',
    rating: '4.9/5',
    included: ['سرعة تحميل عالية', 'تصميم حديث', 'تحويل أعلى'],
    technologies: [
      { name: 'Framer', image: 'https://placehold.co/120x120' },
      { name: 'GSAP', image: 'https://placehold.co/120x120' },
    ],
    packages: [
      { name: 'Basic', price: '$199', pages: '1 Page' },
      { name: 'Standard', price: '$349', pages: '3 Pages' },
      { name: 'Premium', price: '$599', pages: 'Unlimited' },
    ],
  },
  {
    id: 'performance-optimization',
    title: 'تحسين الأداء',
    shortDescription:
      'عزز سرعة موقعك وجاهزيته لتحسين SEO وأدائه العام.',
    about:
      'نحسّن أداء الموقع عبر تقليل الحمل، تحسين الصور، وتحسين سرعة التحميل.',
    heroImage: 'https://placehold.co/800x600',
    aboutImage: 'https://placehold.co/600x400',
    delivery: '2-5 أيام',
    revisions: '1 مراجعة',
    rating: '4.8/5',
    included: ['تحسين السرعة', 'تحسينات SEO', 'مقاييس الويب الأساسية'],
    technologies: [{ name: 'Lighthouse', image: 'https://placehold.co/120x120' }],
    packages: [
      { name: 'Basic', price: '$99', pages: '1 Audit' },
      { name: 'Standard', price: '$199', pages: '3 Audits' },
      { name: 'Premium', price: '$399', pages: 'Unlimited' },
    ],
  },
];

export default services;