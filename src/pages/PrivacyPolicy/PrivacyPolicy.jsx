import React from "react";
import "./PrivacyPolicy.scss";
import privacy from "../../assets/privacy.svg";

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy">
      <section className="Policy__holder">
        <img src={privacy} alt="privacy icon" />
        <h1 className="Policy__header">Privacy Policy</h1>
        <article className="Policy__container">
          <div className="Policy__title">
            <strong>Non-Personally Identifiable Information</strong>
            <p className="Policy__descriptions">
              In order to upgrade our website and better serve the needs of
              visitors, we collect certain pieces of information that cannot be
              used to identify our users. This information includes but is not
              limited to browser type, referring page, pages viewed while on the
              site, and the date and time of visit.
            </p>
          </div>
        </article>
        <div className="Policy__title">
          <strong>Personally Identifiable Information</strong>
          <p className="Policy__descriptions">
            BespokeCyber may also collect personally identifiable information.
            This information is provided solely by you, voluntarily. We will
            never collect it automatically or without your knowledge. This
            information includes but is not limited to name, email address, and
            phone number, and is collected for the purpose of fulfilling certain
            functions on the BespokeCyber website. You may choose not to provide
            this information, but refusing to do so may inhibit your enjoyment
            of this site.
          </p>
        </div>
        <article className="Policy__container">
          <div className="Policy__title">
            <strong>Security of Information</strong>
            <p className="Policy__descriptions">
              BespokeCyber is dedicated to protecting the privacy of its users.
              To that end, we implement data security procedures and
              technologies consistent with industry standards and enact upgrades
              to maintain that level of security. Only select BespokeCyber
              employees have access to information collected through the
              website.
            </p>
          </div>
        </article>
        <div className="Policy__title">
          <strong>Use of Your Information</strong>
          <p className="Policy__descriptions">
            At BespokeCyber, we do not make your information available to third
            parties without your consent, except for cases in which such
            disclosure is required by law.
          </p>
        </div>
        <article className="Policy__container">
          <div className="Policy__title">
            <strong>Use of Cookies</strong>
            <p className="Policy__descriptions">
              Cookies are small data files placed on your computer after
              visiting a website. These files can be either permanent or
              temporary cookies. Permanent cookies are stored on the computer’s
              hard drive, while temporary or "session" cookies expire at the
              close of the browsing session. These files are helpful in
              streamlining user experiences on the site and providing
              BespokeCyber with personally non-identifiable information about
              how visitors are interacting with our website.
              <br />
              You can refuse to accept cookies by implementing this preference
              in your web browser. Please note, however, that this may prevent
              your ability to take certain actions or enjoy certain features
              while on our site.
            </p>
          </div>
        </article>
        <div className="Policy__title">
          <strong>Links to External Sites</strong>
          <p className="Policy__descriptions">
            The presence of links on the BespokeCyber website to external sites
            does not constitute an endorsement of these external sites.
            BespokeCyber does not maintain these external sites and is not
            responsible for the content or privacy measures on them.
          </p>
        </div>
        <article className="Policy__container">
          <div className="Policy__title">
            <strong>Updates to This Policy</strong>
            <p className="Policy__descriptions">
              We reserve the right to amend this policy for any reason without
              express prior notice. Please refer to this page whenever you visit
              our site to ensure you are fully up to date on our privacy policy.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
