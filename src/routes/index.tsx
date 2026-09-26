import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpLeft, Keyboard, MapPin, Menu, Monitor, Mouse, Phone, X, Gamepad2, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactLinks, site } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "المتجر الذكي | كماليات وإكسسوارات الحاسب" },
    { name: "description", content: "المتجر الذكي، محل ليبي لكماليات الحاسب وإكسسوارات الكمبيوتر وملحقات الألعاب. تواصل معنا للتعرف على ما نقدمه." },
    { property: "og:title", content: "المتجر الذكي | كماليات وإكسسوارات الحاسب" },
    { property: "og:description", content: "كماليات وإكسسوارات الحاسب بتجربة بسيطة وسهلة." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "ما نقدمه", href: "#offers" },
  { label: "تواصل معنا", href: "#contact" },
];

const offers = [
  { title: "كماليات الحاسب", description: "تفاصيل صغيرة تجعل استخدام حاسوبك أسهل كل يوم.", icon: Monitor },
  { title: "إكسسوارات الكمبيوتر", description: "لوحات مفاتيح وفأرات تناسب احتياجاتك المختلفة.", icon: Mouse },
  { title: "ملحقات الألعاب", description: "أدوات تضيف لمسة أفضل إلى وقت اللعب.", icon: Gamepad2 },
  { title: "مستلزمات الكمبيوتر", description: "الأساسيات التي تحتاجها لتجهيز مساحتك.", icon: Keyboard },
];

function Brand() {
  return <a href="#home" className="inline-flex items-center gap-3 shrink-0" aria-label={`${site.name}، الرئيسية`}>
    <img src={site.logo} width="43" height="43" alt="شعار المتجر الذكي" className="h-11 w-11 rounded-[11px]" />
    <span className="text-xl font-bold text-foreground">{site.name}</span>
  </a>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <Brand />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="التنقل الرئيسي">
          {navItems.map(item => <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{item.label}</a>)}
        </nav>
        <Button asChild variant="site" className="hidden h-10 px-5 lg:inline-flex"><a href="#contact">تواصل معنا <ArrowLeft /></a></Button>
        <Button type="button" variant="ghost" size="icon" className="h-11 w-11 lg:hidden" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="border-t border-border bg-card px-5 py-3 lg:hidden" aria-label="التنقل على الهاتف">
        <div className="site-container flex flex-col">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-border py-3.5 text-base font-medium last:border-0">{item.label}</a>)}</div>
      </nav>}
    </header>

    <main>
      <section id="home" className="relative overflow-hidden border-b border-border bg-card">
        <div className="site-container grid items-center gap-7 pb-10 pt-14 md:min-h-[570px] md:grid-cols-2 md:gap-10 md:py-16 lg:min-h-[620px]">
          <div className="hero-copy relative z-10 max-w-[580px]">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-primary sm:text-sm"><span className="h-1.5 w-1.5 rounded-full bg-primary" />كماليات الحاسب وملحقاته</span>
            <h1 className="text-[clamp(2rem,5vw,4.25rem)] font-bold leading-[1.35] text-foreground md:leading-[1.3]">كل ما تحتاجه لحاسوبك، <span className="text-primary">في مكان واحد.</span></h1>
            <p className="mt-5 max-w-[440px] text-base leading-8 text-muted-foreground md:mt-7 md:text-lg">كماليات وإكسسوارات الحاسب بتجربة بسيطة وسهلة.</p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Button asChild variant="site" className="h-12 min-w-[138px] px-6 text-sm"><a href="#contact">تواصل معنا <ArrowLeft /></a></Button>
              <Button asChild variant="siteOutline" className="h-12 min-w-[138px] px-6 text-sm"><a href="#about">تعرف علينا</a></Button>
            </div>
          </div>
          <div className="hero-visual relative mx-auto w-full max-w-[500px] md:max-w-none">
            <div className="absolute inset-[8%] rounded-full bg-secondary/60 blur-3xl" aria-hidden="true" />
            <img src={site.heroImage} alt="يد تحكم ألعاب من كماليات الحاسب" width={1024} height={1024} fetchPriority="high" className="hero-float relative z-10 aspect-square w-full rounded-[8px] object-cover" />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-b border-border py-20 md:py-28">
        <div className="site-container grid gap-5 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div><span className="section-kicker">تعرف علينا</span><h2 className="section-title mt-3">من نحن</h2></div>
          <div className="max-w-[630px]"><p className="text-lg leading-9 text-muted-foreground">المتجر الذكي مشروع محلي في ليبيا يهتم بكماليات الحاسب وإكسسوارات الكمبيوتر وملحقات الألعاب. نحب أن تجد ما يناسب احتياجك بسهولة، وبطريقة واضحة وبسيطة.</p><a href="#offers" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-transform hover:-translate-x-1">تعرّف على ما نقدمه <ArrowLeft className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section id="offers" className="scroll-mt-20 bg-card py-20 md:py-28">
        <div className="site-container">
          <span className="section-kicker">ما تحتاجه، ببساطة</span>
          <h2 className="section-title mt-3">ما نقدمه</h2>
          <p className="mt-4 text-muted-foreground">اختيارات متنوعة لحاسوبك ومساحة لعبك.</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map(({ title, description, icon: Icon }) => <div key={title} className="offer-card border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-sm active:scale-[0.99]">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary"><Icon className="h-6 w-6" strokeWidth={1.7} /></div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border py-20 md:py-28" aria-labelledby="products-title">
        <div className="site-container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">من عالم الحاسب</span><h2 id="products-title" className="section-title mt-3">تفاصيل تصنع الفرق</h2></div><p className="max-w-[370px] text-sm leading-7 text-muted-foreground">لمحة عن أنواع الكماليات والإكسسوارات التي نهتم بها.</p></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {site.products.map(product => <figure key={product.title} className="overflow-hidden rounded-[6px] border border-border bg-card"><div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={product.image} alt={product.title} width={816} height={816} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]" /></div><figcaption className="px-5 py-4 text-sm font-semibold">{product.title}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-card py-20 md:py-28">
        <div className="site-container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div><span className="section-kicker">نسعد بتواصلك</span><h2 className="section-title mt-3">تواصل معنا</h2><p className="mt-5 max-w-[390px] leading-8 text-muted-foreground">عندك سؤال عن كماليات الحاسب؟ تواصل معنا بالطريقة التي تناسبك.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "واتساب", sub: "راسلنا مباشرة", href: contactLinks.whatsapp, icon: MessageCircle },
              { label: "الهاتف", sub: "اتصل بنا", href: contactLinks.phone, icon: Phone },
              { label: "فيسبوك", sub: "تابع صفحتنا", href: contactLinks.facebook, icon: Facebook },
              { label: "الموقع", sub: "اعرض الموقع على الخريطة", href: contactLinks.map, icon: MapPin },
            ].map(({ label, sub, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="contact-link group flex min-h-28 items-center gap-4 border border-border p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary"><Icon className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block font-bold">{label}</span><span className="mt-1 block text-sm text-muted-foreground">{sub}</span></span><ArrowUpLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" /></a>)}
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-border bg-background py-10">
      <div className="site-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div><Brand /><p className="mt-3 max-w-[300px] text-sm leading-7 text-muted-foreground">كماليات وإكسسوارات الحاسب بتجربة بسيطة وسهلة.</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><a className="hover:text-primary" href={contactLinks.whatsapp}>واتساب</a><a className="hover:text-primary" href={contactLinks.phone}>الهاتف</a><a className="hover:text-primary" href={contactLinks.facebook} target="_blank" rel="noopener noreferrer">فيسبوك</a><a className="hover:text-primary" href={contactLinks.map} target="_blank" rel="noopener noreferrer">الموقع</a></div>
      </div>
      <div className="site-container mt-8 border-t border-border pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}. جميع الحقوق محفوظة.</div>
    </footer>
  </div>;
}