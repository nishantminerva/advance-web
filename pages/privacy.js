import Head from "next/head";
import { useEffect } from "react";

const SUPPORT_EMAIL = "support@advancetouring.app";
// Add the registered postal address beside OPERATOR once the client supplies it.
const OPERATOR = "Advance Touring";

export default function Privacy() {
  useEffect(() => {
    document.body.classList.add("legal-page");
    return () => document.body.classList.remove("legal-page");
  }, []);

  const mail = (
    <a className="eula-link" href={`mailto:${SUPPORT_EMAIL}`}>
      {SUPPORT_EMAIL}
    </a>
  );

  return (
    <>
      <Head>
        <title>Privacy Policy — Advance</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Privacy Policy</h1>
        <div className="terms-content">
          <p>
            <strong>Last updated:</strong> September 2026
          </p>
          <p>
            Advance (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by {OPERATOR}. Advance helps artists, tour managers and touring
            crews plan and share tour itineraries. This policy explains what we
            collect, why, who processes it, and how you can delete it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Account details:</strong> your name, email address, phone
              number, address, role and profile photo.
            </li>
            <li>
              <strong>Travel profile (optional):</strong> legal name, date of
              birth, nationality, passport and driver-licence details, seat and
              dietary preferences, loyalty programme numbers, emergency contacts,
              and copies of travel documents you upload (for example passport,
              visa or vaccination certificates).
            </li>
            <li>
              <strong>Tour information:</strong> itinerary days, venues,
              schedules, flights, hotels, transfers, contacts, guest lists, notes
              and files that you or your team add.
            </li>
            <li>
              <strong>Forwarded emails and documents:</strong> emails sent to an
              artist&apos;s Advance inbox address (sender, subject, body and
              attachments) and documents uploaded in the app.
            </li>
            <li>
              <strong>Device information:</strong> a push-notification token for
              each device you sign in on.
            </li>
          </ul>
          <p>
            We don&apos;t show ads, we don&apos;t track you across other apps or
            websites, and we don&apos;t sell your data.
          </p>

          <h2>How we use it</h2>
          <p>
            Only to run Advance: to show your itinerary, share it with the team
            members you&apos;ve invited, send invitations, notifications and
            reminders, and turn forwarded emails and documents into proposed
            itinerary changes that an admin approves.
          </p>

          <h2>Who can see it</h2>
          <p>
            Tour information is visible only to members of that artist&apos;s
            team, according to the permissions an admin sets. Travel-profile
            details are shared only with the artists you belong to, for the
            people who handle your bookings.
          </p>

          <h2>Service providers</h2>
          <p>We use these providers to operate Advance. They process data on our behalf:</p>
          <ul>
            <li><strong>Supabase</strong> (hosted on Amazon Web Services): database, sign-in and file storage</li>
            <li>
              <strong>OpenAI:</strong> reads forwarded emails and uploaded
              documents to extract booking details. Under OpenAI&apos;s API terms
              this content isn&apos;t used to train their models.
            </li>
            <li><strong>Resend</strong> and <strong>Postmark</strong>: sending and receiving email</li>
            <li><strong>Expo</strong> and <strong>Apple Push Notification service</strong>: push notifications</li>
            <li><strong>Google Maps Platform</strong>: address search and travel times</li>
            <li><strong>Spotify</strong>: artist names and images for search</li>
          </ul>

          <h2>Retention and deletion</h2>
          <p>
            We keep your data while your account is active. You can delete your
            account at any time in the app under{" "}
            <strong>Profile → Delete Account</strong>. This permanently deletes
            your account, profile, travel profile and the files you uploaded.
            Tour information you added to a shared artist stays with that
            artist&apos;s team. Residual copies in encrypted backups are purged
            within 30 days. See{" "}
            <a className="eula-link" href="/delete-account">Account &amp; Data Deletion</a>{" "}
            for details, or email {mail} to request deletion or a copy of your
            data.
          </p>

          <h2>Security</h2>
          <p>
            Data is encrypted in transit (HTTPS) and at rest by our hosting
            provider. Access is restricted by per-team permissions.
          </p>

          <h2>Children</h2>
          <p>Advance is a professional tool and isn&apos;t directed at children under 16.</p>

          <h2>Your rights</h2>
          <p>
            Depending on where you live (for example the EU or UK under GDPR,
            Australia under the Privacy Act, or California under the CCPA), you
            may have the right to access, correct, delete or export your data, or
            to object to processing. Email {mail} to exercise these rights.
          </p>

          <h2>Changes</h2>
          <p>We&apos;ll update this page and the date above if this policy changes.</p>

          <h2>Contact</h2>
          <p>
            {mail} · {OPERATOR}
          </p>
        </div>
      </div>
    </>
  );
}
