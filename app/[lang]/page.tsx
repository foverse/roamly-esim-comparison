import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Globe2, Menu, Plane, Search, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { ComparisonExplorer } from "@/components/comparison-explorer";
import { destinations, plans } from "@/lib/plans";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href={`/${lang}`} aria-label="Roamly home">
            <span className="brand-mark" aria-hidden="true"><Globe2 size={22} strokeWidth={2.25} /></span>
            <span>roamly</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#compare">{dictionary.nav.compare}</a>
            <a href="#how">{dictionary.nav.how}</a>
            <a href="#guides">{dictionary.nav.guide}</a>
          </nav>
          <div className="nav-actions">
            <details className="language-menu">
              <summary aria-label="Select language"><Globe2 size={18} /> {lang.toUpperCase()} <ChevronDown size={15} /></summary>
              <div className="language-options">
                {locales.map((locale) => <Link key={locale} href={`/${locale}`} lang={locale}>{locale.toUpperCase()}</Link>)}
              </div>
            </details>
            <details className="mobile-menu">
              <summary aria-label="Open navigation"><Menu /></summary>
              <nav aria-label="Mobile navigation">
                <a href="#compare">{dictionary.nav.compare}</a>
                <a href="#how">{dictionary.nav.how}</a>
                <a href="#guides">{dictionary.nav.guide}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="route-field" aria-hidden="true">
            <svg viewBox="0 0 1200 520" preserveAspectRatio="none">
              <path d="M-30 405 C 190 220, 355 510, 580 230 S 940 80, 1240 205" />
              <path d="M80 25 C 210 170, 360 80, 460 190 S 770 460, 1160 375" />
            </svg>
            <span className="route-dot route-dot-one" />
            <span className="route-dot route-dot-two" />
          </div>
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={15} /> {dictionary.hero.eyebrow}</p>
              <h1>{dictionary.hero.titleStart}<br /><em>{dictionary.hero.titleEnd}</em></h1>
              <p className="hero-body">{dictionary.hero.body}</p>
              <div className="hero-trust">
                <span><Check size={16} /> {dictionary.hero.noFees}</span>
                <span><Check size={16} /> {dictionary.hero.travellers}</span>
              </div>
            </div>

            <div className="search-card">
              <div className="stamp" aria-label={dictionary.hero.proof}>
                <Plane size={18} />
                <span>{dictionary.hero.proof}</span>
              </div>
              <form action="#compare">
                <label htmlFor="hero-destination">{dictionary.hero.label}</label>
                <div className="hero-search-row">
                  <div className="select-with-icon">
                    <Search size={20} />
                    <select id="hero-destination" name="destination" defaultValue="japan">
                      {Object.entries(destinations).map(([key, destination]) => (
                        <option key={key} value={key}>{destination.code} · {destination[lang]}</option>
                      ))}
                    </select>
                    <ChevronDown size={17} />
                  </div>
                  <button type="submit">{dictionary.hero.cta}<ArrowRight size={19} /></button>
                </div>
              </form>
              <div className="mini-network">
                <span className="network-pulse"><Wifi size={16} /></span>
                <span><strong>4G / 5G</strong><small>Local partner networks</small></span>
              </div>
            </div>
          </div>
        </section>

        <ComparisonExplorer dictionary={dictionary.explorer} locale={lang} plans={plans} destinations={destinations} />

        <section className="how-section" id="how">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">{dictionary.how.eyebrow}</p>
              <h2>{dictionary.how.title}</h2>
            </div>
            <div className="steps-grid">
              {dictionary.how.steps.map((step, index) => (
                <article key={step[0]} className="step-card">
                  <span className="step-number">0{index + 1}</span>
                  <div className="step-icon" aria-hidden="true">
                    {index === 0 ? <Plane /> : index === 1 ? <Search /> : <Wifi />}
                  </div>
                  <h3>{step[0]}</h3>
                  <p>{step[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section" id="guides">
          <div className="shell trust-panel">
            <div className="trust-seal"><ShieldCheck size={34} /><span>ROAMLY<br />VERIFIED</span></div>
            <div className="trust-copy">
              <h2>{dictionary.trust.title}</h2>
              <p>{dictionary.trust.body}</p>
            </div>
            <ul>
              {dictionary.trust.items.map((item) => <li key={item}><Check size={18} />{item}</li>)}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-top">
          <Link className="brand brand-light" href={`/${lang}`}><span className="brand-mark"><Globe2 size={22} /></span><span>roamly</span></Link>
          <p>{dictionary.footer.line}</p>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Roamly</span><span>{dictionary.footer.legal}</span></div>
      </footer>
    </>
  );
}
