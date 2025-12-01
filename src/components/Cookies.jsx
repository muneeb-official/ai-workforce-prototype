import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white text-left flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[450px] bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-[2rem] md:text-[4.5rem] font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600">Last Updated: November 26, 2025</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website uses cookies and similar technologies to improve
            performance and enhance your user experience. Cookies are small text
            files that are downloaded to your computer or mobile device when you
            visit a website, and they serve various purposes such as making the
            website work more efficiently and providing information to site
            owners.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In this Cookie Policy, the term <strong>"cookies"</strong> refers to
            cookies and all similar tracking technologies that collect
            information automatically when you use our site. By using our
            website, you acknowledge that we will place cookies on your device
            as explained in this policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you do not agree to the use of certain cookies, you have the
            option to disable them as described below -- however, please note
            this may affect some site functionalities.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Types of Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Cookies We Use
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use both first-party and third-party cookies on our website. Some
            cookies are placed by us (first-party cookies), and others are set
            by external services we use (third-party cookies). These cookies can
            be categorized into two main types:{" "}
            <strong>Essential Cookies</strong> and{" "}
            <strong>Analytics Cookies</strong>. Below is an overview of each
            category and why we use them:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Essential Cookies (Strictly Necessary):</strong> These
                cookies are necessary for the basic operation of our website.
                They enable core functions like page navigation, security, and
                access to certain features (for example, keeping you logged in
                to your account or remembering items in a shopping cart).
                Without these cookies, services you have asked for (such as
                logging into secure areas of the site) cannot be provided.
                Because they are essential for the website to function, they do
                not require your consent.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Analytics Cookies (Performance):</strong> We use
                performance/analytics cookies to understand how visitors
                interact with our website and to help us improve it. In
                particular, our site uses <strong>Google Analytics</strong> and{" "}
                <strong>Hotjar</strong> cookies. These third-party analytics
                tools use cookies to collect information about your use of the
                site -- for example, which pages you visit, how long you stay,
                how you arrived at our site, and how you interact with content.
                We use this information to compile reports and to help us
                improve the website's design, features, and user experience. The
                data gathered by Google Analytics and Hotjar is aggregated and{" "}
                <strong>does not identify you personally</strong>; it mainly
                provides statistics and trends (such as total number of
                visitors, popular pages, etc.). For instance, Google Analytics
                cookies (_ga, _gid, etc.) help us count unique visitors and
                understand user behavior, while Hotjar cookies (_hjSessionUser,
                _hjSession, etc.) help us analyze user feedback and engagement
                patterns on our pages. These analytics cookies are{" "}
                <strong>not essential</strong> to the site's basic functioning,
                and thus we will only use them with your consent.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            <em>
              At this time, we do not use cookies for advertising or targeting
              purposes.
            </em>{" "}
            If that changes in the future, we will update this Cookie Policy
            accordingly. We also do not use any cookies to store sensitive
            personal data. For more information about how we handle personal
            data collected via cookies, please see our Privacy Policy (linked on
            our site).
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Cookie Consent Banner */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cookie Consent Banner and Your Choices
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To comply with privacy laws and respect your preferences, we operate
            an explicit <strong>cookie consent banner</strong> on our website.
            When you first visit our site, you will see a banner or pop-up
            asking you to consent to our use of non-essential cookies (such as
            the analytics cookies mentioned above). We will not set analytics or
            other non-essential cookies on your browser until you actively{" "}
            <strong>opt in</strong> (for example, by clicking "Accept" or
            selecting your cookie preferences on the banner). This approach
            follows the principle of "no consent, no cookies" that is required
            in many jurisdictions, including the EU and UK.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            On our cookie banner, you will typically have the option to either{" "}
            <strong>accept all cookies</strong>,{" "}
            <strong>reject non-essential cookies</strong>, or customize your
            preferences (for example, choosing which categories of cookies to
            allow). If you choose to decline analytics cookies, we will honor
            that choice and <strong>only essential cookies</strong> will be used
            moving forward. Your consent (or refusal) will be remembered so that
            the banner does not continually appear on every visit; however, note
            that if you clear your cookies or use a different browser/device,
            you may be asked for consent again.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Importantly, even if you initially consent, you remain in control of
            your cookie preferences. You can change your mind at any time -- see
            the next section on how to manage or withdraw your consent.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Managing and Disabling Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Managing and Disabling Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the right to control how cookies are used on your devices.
            Here are ways you can manage or disable cookies at any time:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Using Our Website Settings:</strong> If our site offers
                a <strong>"Cookie Settings"</strong> preference center (or if
                the original consent banner can be re-accessed), you can use it
                to adjust your cookie preferences. This may allow you to revoke
                consent for analytics cookies (e.g., turn off Google Analytics
                and Hotjar) or change which types of cookies are active. We will
                always respect the latest preferences you save.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Browser Settings:</strong> Most web browsers provide
                settings that let you <strong>block or delete cookies</strong>.
                You can typically find these options in your browser's "Options"
                or "Preferences" menu under sections titled Privacy or Security.
                For example, you can configure your browser to refuse all
                cookies or to delete specific cookies. To find out more about
                how to manage cookies on popular browsers, you can visit
                educational resources like <strong>AllAboutCookies.org</strong>{" "}
                which offer up-to-date guides. Please note that if you disable
                cookies in your browser, some essential features of our site may
                not work properly -- for instance, you might not be able to log
                in or use some interactive features if those rely on cookies.{" "}
                <strong>Important:</strong> If you choose to refuse cookies
                altogether, it may limit the functionality and experience of our
                website.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Opting Out of Google Analytics:</strong> If you want to
                opt out of Google Analytics tracking across <strong>all</strong>{" "}
                websites (not just ours), Google provides an official browser
                add-on for this purpose. You can download and install the Google
                Analytics Opt-out Browser Add-on to prevent Google Analytics
                from collecting your data on any site. This add-on is available
                for most major browsers via Google's tools site.{" "}
                <em>
                  (Note: Using this tool is optional and it's provided by
                  Google; we are mentioning it for your convenience.)
                </em>
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Hotjar Opt-Out:</strong> Similarly, if you wish to
                prevent Hotjar from collecting your data on any site that uses
                Hotjar (including ours), you can use Hotjar's opt-out mechanism.
                To do this, you can visit Hotjar's website and follow their
                instructions to disable tracking (Hotjar offers a "Do Not Track"
                header option or you can decline Hotjar cookies via our own
                site's banner). More details are available on Hotjar's help
                pages if needed.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Keep in mind that any cookie settings are browser-specific. If you
            use multiple browsers or devices, you may need to adjust settings on
            each. Also, if you delete all cookies, this will typically remove
            any preferences you've set (including opt-out cookies), so you may
            need to set them again upon your next visit.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Compliance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Compliance with UK/EU Law and Global Scope
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We primarily design our cookie practices to comply with the strict
            requirements of{" "}
            <strong>United Kingdom and European Union privacy laws</strong>, and
            we extend the same standards to all our users globally. Laws such as
            the EU's ePrivacy Directive (and GDPR) and the UK's Privacy and
            Electronic Communications Regulations mandate that we obtain user
            consent before setting non-essential cookies like analytics or
            tracking cookies. In accordance with these laws, we do{" "}
            <strong>not</strong> deploy Google Analytics, Hotjar, or any similar
            cookies on your device unless you have given consent via our banner.
            Users must be able to refuse cookies as easily as accept them, and
            our implementation reflects that (for example, by providing a clear
            "reject" option on the banner, in line with regulatory guidance).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Even if you are visiting our site from outside the UK or EU, you
            will benefit from the same high standard of privacy protection.
            Around the world, many countries have enacted similar cookie and
            data privacy regulations (in fact, over 50 countries enforce some
            form of "no consent, no cookies" rule). We therefore choose to{" "}
            <strong>apply a uniform approach</strong>: all visitors, regardless
            of location, are given the opportunity to consent or decline
            non-essential cookies. By doing so, we ensure compliance with
            applicable laws in the UK/EU and demonstrate our commitment to user
            privacy on a global level.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please note that <strong>essential cookies</strong> (as defined
            above) may be used regardless of consent, since certain
            functionality you request (such as logging in or saving settings)
            cannot be provided without them. These are permitted by law as long
            as they truly are necessary for the service. We regularly review our
            use of cookies to ensure we maintain compliance and transparency. If
            regulations or our practices change, we will update this policy and
            our cookie consent mechanism accordingly.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about this Cookie Policy or
            our use of cookies and similar technologies, please{" "}
            <strong>contact us</strong>. You can reach out via email at{" "}
            <a
              href="mailto:team@aiworkforce.co.uk"
              className="text-indigo-600 hover:underline"
            >
              team@aiworkforce.co.uk
            </a>{" "}
            or through the contact form on our website. We will be happy to
            assist you and provide any additional information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time (for example, to
            reflect changes in the cookies we use or legal requirements). We
            encourage you to review this page periodically for the latest
            information on our cookie practices. If we make significant changes,
            we may also notify you through a notice on our website.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cookies;
