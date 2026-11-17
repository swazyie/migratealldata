import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const basinEndpoint = process.env.NEXT_PUBLIC_BASIN_FORM_ENDPOINT;

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Migrate All Data home">
          <span className="wordmark-symbol" aria-hidden="true"><span /><span /><span /></span>
          <span>Migrate <strong>All Data</strong></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Legal data</a>
          <a href="#approach">Our process</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src="/migration-team.jpg"
            alt="A team working together around a table"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" /> Legal data migration specialists</p>
            <h1 id="hero-title">Complex data. Controlled migration.</h1>
            <div className="hero-bottom">
              <a className="button button-lime" href="#contact">
                Discuss your migration <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-coordinate" aria-hidden="true">PLANNED <span>·</span> CONTROLLED <span>·</span> VERIFIED</div>
          <a className="hero-scroll" href="#services" aria-label="Scroll to legal data">
            <ArrowDownRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </section>

        <section className="intro-strip" aria-label="Service summary">
          <div className="intro-points">
            <span><Check size={15} aria-hidden="true" /> One accountable team</span>
            <span><Check size={15} aria-hidden="true" /> Matter-level structure</span>
            <span><Check size={15} aria-hidden="true" /> Reconciled before handover</span>
          </div>
        </section>

        <section className="personal-section" aria-labelledby="personal-title">
          <Image
            className="adrian-portrait"
            src="/adrian.jpeg"
            alt="Adrian Figueroa, Solutions Engineer"
            width={164}
            height={164}
            sizes="164px"
          />
          <div className="personal-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> Your solutions engineer</p>
            <h2 id="personal-title">Adrian will see your move through.</h2>
            <p>One technical lead, from discovery and data mapping through migration and reconciliation.</p>
          </div>
          <a className="personal-link" href="https://www.linkedin.com/in/adrianrfigueroa/" target="_blank" rel="noreferrer">
            Meet Adrian <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <section className="approach section-wrap" id="approach" aria-labelledby="approach-title">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-mark" /> A controlled transition</p>
            <h2 id="approach-title">A clear path from<br /><em>old system</em> to new.</h2>
          </div>
          <div className="approach-copy">
              <p>Documented mappings. Controlled execution. Reconciliation before handover. A clear record of what moved and how it was checked.</p>
            <a className="text-link" href="#contact">Plan your move <MoveRight size={17} aria-hidden="true" /></a>
          </div>
        </section>

        {/* <section className="services section-wrap" id="services" aria-labelledby="services-title">
          <div className="services-heading">
            <p className="eyebrow"><span className="eyebrow-mark" /> Your legal data</p>
            <h2 id="services-title">Nothing important<br />left <em>behind.</em></h2>
          </div>
          <div className="service-list">
            <article className="service-row">
              <span className="service-icon"><FileSearch size={21} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Matters &amp; client records</h3><p>Core matter details, contacts, custom fields and relationships.</p></div>
              <span className="service-number">01</span>
            </article>
            <article className="service-row">
              <span className="service-icon"><Workflow size={21} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Documents &amp; correspondence</h3><p>Files, emails and folder structures, kept connected to the right matter.</p></div>
              <span className="service-number">02</span>
            </article>
            <article className="service-row">
              <span className="service-icon"><ShieldCheck size={21} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Time, billing &amp; history</h3><p>Where supported, financial records and matter history move with the file.</p></div>
              <span className="service-number">03</span>
            </article>
          </div>
        </section> */}

        {/* <section className="migration-note" aria-label="A careful migration">
          <div className="note-topline"><span>A CONTROLLED MIGRATION</span><span>PLANNED WITH YOUR TEAM</span></div>
          <div className="migration-flow">
            <div className="flow-node"><span className="flow-icon"><Database size={21} strokeWidth={1.5} aria-hidden="true" /></span><span className="flow-label">Current system</span></div>
            <div className="flow-line"><span>MAP · MIGRATE · RECONCILE</span><i /></div>
            <div className="flow-node flow-node-destination"><span className="flow-icon"><Check size={21} strokeWidth={1.7} aria-hidden="true" /></span><span className="flow-label">New system</span></div>
          </div>
        </section> */}

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-mark" /> Start with a conversation</p>
              <h2 id="contact-title">Let&apos;s plan<br />your move.</h2>
              <p className="contact-description">Tell us what you&apos;re moving. We&apos;ll come back with a clear next step.</p>
              <div className="contact-aside"><span className="aside-rule" />One point of contact. A considered plan.</div>
            </div>
            <ContactForm endpoint={basinEndpoint} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-symbol" aria-hidden="true"><span /><span /><span /></span>
          <span>Migrate <strong>All Data</strong></span>
        </a>
        <span className="footer-note">Legal data migration, managed end to end.</span>
        <a className="back-to-top" href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
      </footer>
    </>
  );
}
