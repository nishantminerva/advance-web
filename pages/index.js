import Head from "next/head";

const APP_URL = "https://app.advancetouring.app";
const SIGN_IN_URL = `${APP_URL}/sign-in`;
const GET_STARTED_URL = `${APP_URL}/get-started`;

// Store listings aren't public yet. Fill these in when they are and the badges
// become links; until then they render as "coming soon".
const APP_STORE_URL = null;
const GOOGLE_PLAY_URL = null;

const STEPS = [
  {
    n: "01",
    t: "Send it in",
    b: "Forward confirmations to the artist's own inbox address, or upload them from your phone.",
    shot: "step-upload",
    crop: "bottom",
  },
  {
    n: "02",
    t: "Accept what it found",
    b: "Each document is read and its details offered back to you. Accept, correct or discard them.",
    shot: "step-proposal",
    crop: "top",
  },
  {
    n: "03",
    t: "The day is ready",
    b: "Accepted items land on their date, shared with everyone who should see them.",
    shot: "step-show",
    crop: "top",
  },
];

const INBOX_POINTS = [
  {
    t: "One address per artist",
    b: "Travel agents, hotels, venues and promoters can all send to it directly.",
  },
  {
    t: "Traced to the sentence",
    b: "Every extracted value remembers the document, the page and the words it came from.",
  },
  {
    t: "Nothing goes in unasked",
    b: "Machine-read values stay marked until a person verifies or corrects them.",
  },
];

const CHECKLIST = [
  { icon: "speaker", t: "Backline", d: "What the venue supplies" },
  { icon: "sliders-horizontal", t: "Production", d: "PA, monitors, power" },
  { icon: "coffee", t: "Hospitality", d: "Rider requests" },
  { icon: "list-checks", t: "Guest list", d: "Requested, approved, sent" },
  { icon: "receipt-text", t: "Settlement", d: "Admins only" },
];

// App screens are captured from the design at 2x, in a light and a dark cut;
// the browser picks the one matching the visitor's colour scheme.
function Shot({ name, width, height, alt = "", eager = false, className }) {
  return (
    <picture className={className}>
      <source
        srcSet={`/images/site/${name}-dark.webp`}
        media="(prefers-color-scheme: dark)"
      />
      <img
        src={`/images/site/${name}-light.webp`}
        width={width}
        height={height}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}

function StoreBadge({ href, icon, small, big }) {
  const body = (
    <>
      <img src={`/images/icons/${icon}.svg`} width="24" height="24" alt="" />
      <span className="h-store-text">
        <span className="h-store-small">{small}</span>
        <span className="h-store-big">{big}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <a className="h-store" href={href}>
        {body}
      </a>
    );
  }
  return (
    <span className="h-store is-soon" aria-label={`${big}, coming soon`}>
      {body}
    </span>
  );
}

function Logo({ size }) {
  return (
    <img
      src="/images/site/logo.png"
      alt=""
      width={size}
      height={size}
      className="h-logo-mark"
    />
  );
}

export default function Home() {
  const storesLive = APP_STORE_URL || GOOGLE_PLAY_URL;

  return (
    <>
      <Head>
        <title>Advance</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0f1118" />
        <link rel="icon" type="image/png" href="/images/site/logo.png" />
      </Head>

      <div className="adv-home">
        <div className="h-hero">
          <header className="h-header">
            <a href="#top" className="h-brand">
              <Logo size={28} />
              advance
            </a>
            <nav className="h-nav" aria-label="Sections">
              <a href="#how">How it works</a>
              <a href="#inbox">Inbox</a>
              <a href="#advancing">Advancing</a>
              <a href="#app">Get the app</a>
            </nav>
            <span className="h-header-actions">
              <a href={SIGN_IN_URL} className="h-btn h-btn-glass">
                <img src="/images/icons/log-in.svg" width="16" height="16" alt="" />
                Log in
              </a>
              <a href={GET_STARTED_URL} className="h-btn h-btn-lime h-hide-narrow">
                Get started
              </a>
            </span>
          </header>

          <section id="top" className="h-hero-body">
            <div className="h-hero-grid">
              <div className="h-hero-copy">
                <span className="h-pill">
                  <span className="h-pill-dot" />
                  Built for advancing, on the road
                </span>
                <h1>What&apos;s happening today, and what&apos;s left to do.</h1>
                <p>
                  Flights, hotels, cars, soundchecks, contacts and files land on
                  the date they belong to. The tour manager, the band and the
                  crew all read the same day.
                </p>
                <div className="h-hero-ctas">
                  <a href={GET_STARTED_URL} className="h-btn h-btn-lime h-btn-lg">
                    Set up an artist
                  </a>
                  <a href={SIGN_IN_URL} className="h-btn h-btn-glass h-btn-lg">
                    <img src="/images/icons/log-in.svg" width="18" height="18" alt="" />
                    Log in to your account
                  </a>
                </div>
              </div>
              <div className="h-hero-phones" aria-hidden="true">
                <Shot
                  name="hero-queue"
                  width={390}
                  height={844}
                  eager
                  className="h-phone h-phone-back"
                />
                <Shot
                  name="hero-show"
                  width={390}
                  height={844}
                  eager
                  className="h-phone h-phone-front"
                />
              </div>
            </div>
          </section>
        </div>

        <main>
          <section id="how" className="h-section">
            <div className="h-wrap h-stack-lg">
              <div className="h-how-head">
                <h2 className="h-h2">From a forwarded email to a finished day.</h2>
                <p className="h-lede">
                  Information arrives over weeks, out of order, from a dozen
                  senders. Advance collects it, reads it, and asks you before
                  anything goes on the itinerary.
                </p>
              </div>
              <div className="h-steps">
                {STEPS.map((s) => (
                  <div key={s.n} className="h-step">
                    <span className="h-step-text">
                      <span className="h-step-n">{s.n}</span>
                      <span className="h-step-t">{s.t}</span>
                      <span className="h-step-b">{s.b}</span>
                    </span>
                    <div className={`h-step-frame crop-${s.crop}`} aria-hidden="true">
                      <Shot name={s.shot} width={390} height={844} className="h-step-phone" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="inbox" className="h-section h-section-flush-top">
            <div className="h-wrap h-stack-md">
              <div className="h-inbox-head">
                <span className="h-eyebrow">The inbox</span>
                <h2 className="h-h2">
                  It reads the mail. You decide what goes on the itinerary.
                </h2>
              </div>
              <Shot
                name="inbox-review"
                width={1220}
                height={980}
                alt="The Advance review screen: extracted flight details beside the highlighted source document."
                className="h-wide-shot"
              />
              <div className="h-points">
                {INBOX_POINTS.map((p) => (
                  <div key={p.t} className="h-point">
                    <span className="h-point-t">{p.t}</span>
                    <span className="h-point-b">{p.b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="advancing" className="h-section h-section-card">
            <div className="h-wrap h-advancing">
              <div className="h-advancing-copy">
                <span className="h-eyebrow">Show advancing</span>
                <h2 className="h-h2 h-h2-sm">Every show, ready before you walk in.</h2>
                <p className="h-lede">
                  Track what the venue supplies, what you bring, and what&apos;s
                  still open. Advance produces the rider and the paperwork
                  promoters and venues act on. They never need an account.
                </p>
                <div className="h-checklist">
                  {CHECKLIST.map((c) => (
                    <div key={c.t} className="h-check">
                      <img src={`/images/icons/${c.icon}.svg`} width="18" height="18" alt="" />
                      <span className="h-check-t">{c.t}</span>
                      <span className="h-check-d">{c.d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Shot
                name="advancing-spec"
                width={1220}
                height={897}
                alt="An artist's show spec in Advance: backline, production and rider items with their status."
                className="h-wide-shot"
              />
            </div>
          </section>

          <section id="app" className="h-section h-app">
            <h2 className="h-h2-app">Get the app</h2>
            <div className="h-stores">
              <StoreBadge
                href={APP_STORE_URL}
                icon="apple"
                small="Download on the"
                big="App Store"
              />
              <StoreBadge
                href={GOOGLE_PLAY_URL}
                icon="google-play"
                small="GET IT ON"
                big="Google Play"
              />
            </div>
            {!storesLive && (
              <p className="h-app-note">
                Coming soon to iPhone and Android. Until then,{" "}
                <a href={APP_URL}>use Advance in your browser</a>.
              </p>
            )}
          </section>
        </main>

        <footer className="h-footer">
          <span className="h-footer-brand">
            <Logo size={22} />
            advance
          </span>
          <span>© {new Date().getFullYear()} Advance</span>
          <span className="h-footer-links">
            <a href={SIGN_IN_URL}>Log in</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Contact</a>
          </span>
        </footer>
      </div>
    </>
  );
}
