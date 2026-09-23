import Head from "next/head";
import { useEffect } from "react";

const SUPPORT_EMAIL = "support@advancetouring.app";

export default function Support() {
  useEffect(() => {
    document.body.classList.add("legal-page");
    return () => document.body.classList.remove("legal-page");
  }, []);

  return (
    <>
      <Head>
        <title>Support — Advance</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Support</h1>
        <div className="terms-content">
          <p>
            Need help with <strong>Advance</strong>? Email{" "}
            <a className="eula-link" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            and we&apos;ll reply within two business days.
          </p>

          <h2>How do I join my team&apos;s tour?</h2>
          <p>
            Open the invitation email on your phone and tap the link, or enter
            the invite code in the app when you sign up.
          </p>

          <h2>How does the inbox work?</h2>
          <p>
            Each artist has its own inbox address, shown on the Inbox tab. Forward
            flight, hotel and venue emails to it, or upload a PDF with{" "}
            <strong>Upload document</strong>. Advance reads them and proposes
            itinerary changes for an admin to approve.
          </p>

          <h2>Why can&apos;t I see the Inbox?</h2>
          <p>
            The Inbox is available to artist admins. Ask your tour manager to
            change your permission level.
          </p>

          <h2>I&apos;m not getting notifications</h2>
          <p>
            Check <strong>Settings → Notifications → Advance</strong> on your
            phone, then the notification settings in your Advance profile.
          </p>

          <h2>How do I delete my account?</h2>
          <p>
            In the app, go to <strong>Profile → Delete Account</strong>. See{" "}
            <a className="eula-link" href="/delete-account">
              Account &amp; Data Deletion
            </a>{" "}
            for what is removed and how to request deletion by email.
          </p>

          <h2>Legal</h2>
          <p>
            <a className="eula-link" href="/privacy">Privacy Policy</a> ·{" "}
            <a className="eula-link" href="/terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </>
  );
}
