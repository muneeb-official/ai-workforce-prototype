import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white text-left flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[450px] bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-[2rem] md:text-[4.5rem] font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last Updated: November 26, 2025</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Introduction */}
        <div className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            AI Workforce ("<strong>we</strong>", "<strong>us</strong>" or "
            <strong>our</strong>") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your personal data when you use our AI Workforce platform. Our
            platform provides a "digital workforce" of AI-driven agents that
            assist with tasks like sales outreach, marketing content creation,
            and business process automation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We operate primarily in the United Kingdom and adhere to the UK
            General Data Protection Regulation (UK GDPR) and other applicable
            data protection laws. Please read this policy carefully to
            understand our practices. By using our services, you agree to the
            collection and use of information in accordance with this Privacy
            Policy.
          </p>
        </div>

        <hr className="border-gray-200 my-10" />

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. Types of Data We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect <strong>personal data</strong> that you provide directly
            to us, data generated through your use of our platform, and some
            data from third-party sources. We do <strong>not</strong> collect
            any sensitive personal information such as health data or personal
            financial account information. The categories of data we collect
            include:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Identifiers and Contact Information:</strong>{" "}
                Information that identifies you, such as your name, company
                name, job title, email address, telephone number, and other
                contact details. This also includes account credentials -- for
                example, when you create an account, we collect your login
                details like username and password.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Business and Account Data:</strong> Information related
                to your business or role, such as your company's name, industry,
                and your professional title or role. We also maintain your
                account information and preferences (e.g. contact preferences or
                notification settings) to manage your user profile.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Content and Communications:</strong> Any content you
                submit or create on the platform, such as the information you
                input for our AI agents to process, and communications you send
                to us (for example, customer support inquiries). If you
                integrate external accounts (like email or CRM systems) with our
                platform, we will process data from those sources{" "}
                <strong>only</strong> as needed to perform the services (e.g.
                reading contact lists or emails you direct the AI to handle).{" "}
                <strong>
                  We do not use data from your connected accounts for any
                  purposes other than providing the requested services to you.
                </strong>
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Usage Data and Analytics:</strong> Information collected
                automatically about how you use our website and platform. This
                includes technical data like your Internet Protocol (IP)
                address, browser type, device type, operating system, unique
                device identifiers, and location (country/region) from which you
                access the service. We also log usage details such as pages or
                features you access, the dates/times of visits, clicks and other
                actions on the platform, error logs, and other behavioral data.
                This usage data helps us maintain security and improve
                performance. Like many companies, we use cookies and similar
                tracking technologies to collect some of this data (see{" "}
                <strong>Cookies and Tracking Technologies</strong> below).
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Third-Party Data (Integrations):</strong> We may receive
                information about you from integrated third-party services. For
                example, if you choose to connect your calendar, email, customer
                relationship management (CRM) system, or social media accounts
                to AI Workforce, our platform will access information from those
                services as needed -- such as retrieving calendar events,
                contact details, or social profile information --{" "}
                <strong>solely</strong> to enable the AI agents to perform tasks
                you've requested. Our platform also utilizes reputable
                third-party data providers via secure APIs to{" "}
                <strong>enrich data</strong> (for instance, to find business
                contact details or validate email addresses as part of your
                outreach campaigns). These integrations allow our AI agents to
                work seamlessly within your workflow. We do <strong>not</strong>{" "}
                share any of your personal data with those third-party providers
                for their own use; they act under our instructions to provide
                services to you.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            <strong>No Special Category Data:</strong> We do{" "}
            <strong>not</strong> collect any "special" categories of personal
            data about you (such as personal data revealing racial or ethnic
            origin, political opinions, religious beliefs, genetic or biometric
            data, health information, or sex life). We also do not collect your
            financial payment instruments or bank account details. If you make a
            purchase or subscription payment on our platform, payment details
            (like credit card numbers) are collected and processed securely by
            our third-party payment processor -- we do not store your full card
            information on our systems. We use Stripe -- please find their
            privacy policy linked here -{" "}
            <a
              href="https://stripe.com/gb/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              https://stripe.com/gb/privacy
            </a>
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website uses cookies, pixels, and similar tracking technologies
            to improve your experience and gather data about how our services
            are used. <strong>Cookies</strong> are small data files placed on
            your device when you visit a website. They help us recognize you,
            remember your preferences, and understand which sections of our site
            are popular. For example, we (and authorized third parties providing
            analytics or content on our site) may use these technologies to
            remember your login session, to analyze web traffic and usage
            patterns, and to tailor content to user interests. The data
            collected through cookies and similar tools may include information
            like your device type, browser, IP address, pages visited, and time
            spent on our site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use both session cookies (which expire when you close your
            browser) and persistent cookies (which stay on your device for a set
            period or until you delete them) for the purposes described in this
            policy. Some cookies are necessary for the platform to function (for
            example, to keep you logged in), while others are optional and help
            us with analytics or advertising. We may also use third-party
            analytics services (like Google Analytics, Hotjar, or similar tools)
            that set their own cookies to collect information on our behalf
            about site performance and user interactions. This information is
            used in aggregate form to help us improve our services and marketing
            efforts. We do <strong>not</strong> use cookies to collect
            personally identifiable information for any third-party advertising
            purposes, and we do not allow third parties to collect your personal
            information for their own advertising through our site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Your Choices:</strong> By using our site, you consent to our
            use of cookies and similar technologies. You can control or delete
            cookies through your browser settings. Most web browsers allow you
            to refuse new cookies, disable existing cookies, or alert you when
            new cookies are being sent. However, note that if you disable or
            reject cookies, some features of our site and services may not
            function properly (for example, you may not be able to stay logged
            in). For more details on our use of cookies or how to manage your
            preferences, please see our Cookies Notice (if available) or contact
            us with any questions. We honor any applicable requirements
            regarding cookie consent.{" "}
            <em>
              (Please note: at this time we do not respond to "Do Not Track"
              signals, due to lack of an industry standard for compliance with
              such signals.)
            </em>
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. How We Use Your Data
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We process personal data for the following purposes, in accordance
            with the law, to operate and improve the AI Workforce platform and
            our business. We will only use your personal information when we
            have a valid legal basis to do so (such as fulfilling a contract
            with you, complying with a legal obligation, or pursuing our
            legitimate interests, as permitted under UK GDPR). The main purposes
            for which we collect and use data are:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Providing and Improving the Service:</strong> We use
                your information to{" "}
                <strong>set up and maintain your user account</strong>,
                authenticate you when you log in, and allow you to access and
                use our platform and AI agents. This includes using your data to
                enable the specific AI agent functionalities you utilize -- for
                example, to generate and send outreach emails, create marketing
                content, manage your schedule, or perform other automated tasks
                on your behalf. We process data you input and data from your
                connected services to carry out these operations as you direct.
                Additionally, we process usage data and feedback to{" "}
                <strong>operate, debug, and improve</strong> our services over
                time. Understanding how users interact with our platform (which
                features are used, where issues occur) helps us refine our
                product, fix bugs, and enhance the user experience.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Account Management and Customer Support:</strong> We use
                personal information to manage our relationship with you as a
                customer. This includes maintaining your account settings,
                sending you important{" "}
                <strong>administrative or service communications</strong> (for
                example, confirming your account creation, notifying about
                platform updates, changes to terms or policies, or security
                alerts), and responding to your inquiries or requests for
                support. If you reach out for help, we will use your contact
                info and any details you provide to assist you and resolve
                issues.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Outreach and Marketing Communications:</strong> With
                your permission or as otherwise allowed, we may use your contact
                information to{" "}
                <strong>send you marketing and promotional messages</strong>{" "}
                about our services, new features, or events that we believe may
                be of interest. For example, we might email updates on AI
                Workforce features, newsletters, or offers. You can opt out of
                marketing emails at any time by clicking the unsubscribe link in
                the message or contacting us. We will not send you promotional
                communications if you tell us not to. (Transactional or
                administrative communications, as noted above, will still be
                sent as needed.) We do <strong>not</strong> sell your data to
                third-party marketers, and we do not share your information with
                third parties for them to market their products to you.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Analytics and Performance:</strong> We process data for
                internal analytics, research, and reporting. This helps us
                understand aggregate trends and user preferences, measure the
                effectiveness of our outreach campaigns, and{" "}
                <strong>identify usage trends</strong> so that we can make
                informed decisions about business strategy. For instance, we
                might analyze how users engage with a new feature to determine
                if improvements are needed. Whenever feasible, we use aggregated
                or de-identified information for these purposes so it does not
                directly identify any individual.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Security and Compliance:</strong> We may use personal
                data as necessary to{" "}
                <strong>ensure the security of our services</strong>, our users,
                and others. This includes monitoring for fraudulent or
                suspicious activity, debugging to identify and repair errors,
                enforcing our terms of service, and protecting our platform and
                users from harm. We also process data to comply with applicable{" "}
                <strong>legal obligations</strong> -- for example, keeping
                required records, preventing illegal activities, responding to
                lawful requests by public authorities, or pursuing or defending
                legal claims. In rare cases where vital interests are at stake
                (such as to prevent serious harm), we might process data on that
                basis.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We will only use your personal data for the purposes we collected it
            for, unless we reasonably consider that we need to use it for a
            related reason that is compatible with the original purpose (and
            where permitted by law). If we need to use your personal information
            for an unrelated purpose, we will notify you and explain the legal
            basis that allows us to do so.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            4. Third-Party Integrations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To provide the AI Workforce services, we integrate with a number of{" "}
            <strong>third-party platforms and service providers</strong>. These
            integrations are designed to enrich our platform's capabilities (for
            example, pulling in data or extending functionality), but we
            carefully manage them to protect your data privacy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For instance, our platform can connect to external tools like{" "}
            <strong>
              CRMs (Customer Relationship Management systems), email and
              calendar services, social media platforms (e.g. LinkedIn), cloud
              storage, voice/telephony APIs, and data enrichment services
            </strong>
            . When you choose to connect a third-party account or enable an
            integration, we will access and use data from that third-party
            service <em>strictly</em> as needed to perform the tasks you've
            authorized. For example: if you connect your Google or Outlook
            calendar, our AI agent will read your meeting times to schedule
            calls or send invites; if you connect a CRM, the agent may update or
            retrieve contact information from it; if you integrate with LinkedIn
            or another network, the agent might view public profile details to
            personalize outreach messages. Similarly, we may use third-party
            data services to lookup business email addresses or phone numbers
            based on information you provide, in order to{" "}
            <strong>enrich your lead lists and automate outreach</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>No Unnecessary Sharing:</strong> We do <strong>not</strong>{" "}
            disclose your personal information to these integrated third-party
            services for their own independent use. In these scenarios, the
            third-party is typically functioning as a tool or processor on our
            behalf. Data flows to or from the third-party service only to the
            minimum extent necessary: either data about you or your leads is
            sent in a query (e.g. sending a company name to retrieve a business
            email), or data is fetched into our platform to serve you. We ensure
            that such partners are under appropriate data protection obligations
            (for example, we have data processing agreements in place where
            required).
          </p>
          <p className="text-gray-700 leading-relaxed">
            However, please note that when you use third-party services through
            our platform,{" "}
            <strong>
              your use of those services is also governed by their own terms and
              privacy policies
            </strong>
            . We do not control third-party providers and cannot be responsible
            for their handling of any information they may collect directly from
            you. For example, if one of our AI agents sends an email via your
            connected email account, the email service (like Gmail or Outlook)
            will process that message as it normally would under its own
            policies. We encourage you to review the privacy policies of any
            third-party services you connect to our platform. That said, we will
            not knowingly integrate with a third-party in a way that compromises
            your data privacy, and we confirm that we do <strong>not</strong>{" "}
            use any data from third-party integrations (such as Google Workspace
            data) to train our own or others' machine learning models beyond
            providing the agreed services (in compliance with those third-party
            policies).
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We treat your personal data with care and confidentiality.{" "}
            <strong>We do not sell your personal information to anyone</strong>{" "}
            for any purpose. We also do not share your personal data with
            unrelated third parties for their marketing or advertising purposes.
            We may share your information only in the following circumstances:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Service Providers (Subprocessors):</strong> We use
                trusted third-party companies to help us operate and support the
                AI Workforce platform. These service providers process data on
                our behalf and under our instructions, and include categories
                such as: cloud hosting and infrastructure services (for data
                storage and servers), email delivery services, customer support
                tools, analytics providers, and other IT or security vendors.
                For example, we might use a cloud computing provider to host our
                application data, or an email/SMS service to send authentication
                codes or notifications. These providers are bound by contracts
                to only use your data for the agreed-upon service and to protect
                it.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Business Partners:</strong> In some cases, we may share
                limited data with partners who work with us to deliver our
                services. For instance, if we collaborate with a reseller or an
                implementation partner, we might share your contact or account
                information with them to support your use of the platform. Such
                partners are also bound to protect your information and use it
                only for the purposes of our collaboration (under
                confidentiality agreements).
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Legal Compliance and Protection:</strong> We may
                disclose personal information if we believe in good faith that
                such action is necessary to comply with a legal obligation or
                request (for example, responding to subpoenas, court orders, or
                regulatory inquiries). We may also share information when we
                believe it's necessary to investigate or enforce our terms and
                conditions, to detect or prevent fraud or security issues, or to
                protect the rights, property, and safety of AI Workforce, our
                users, or others. This could include sharing information with
                law enforcement or government authorities if required by law.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Corporate Transactions:</strong> If AI Workforce is
                involved in a merger, acquisition, investment, financing due
                diligence, reorganization, bankruptcy, receivership, sale of
                company assets, or transition of service to another provider,
                your data may be{" "}
                <strong>
                  transferred to a successor or affiliate as part of that
                  transaction
                </strong>
                . Should such a change in ownership or control of your personal
                data occur, we will ensure that the recipient is bound to
                respect your personal data in a manner consistent with this
                Privacy Policy and applicable law, and we will provide notice to
                users before any personal data becomes subject to a different
                privacy policy.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>With Your Consent:</strong> In any other situation not
                covered above, we will only share your information if you have
                given us explicit consent to do so. For example, if you request
                that we share your information with a third-party advisor or you
                opt-in to a feature that involves sharing data, we will do so
                under the terms you agreed to.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Importantly, any third parties with whom we share personal data in
            the scenarios above are themselves subject to data protection laws
            and are often <strong>contractually obligated</strong> to protect
            your information. We require service providers to implement adequate
            safeguards and not to use the data for anything other than providing
            services to AI Workforce and our users.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6. International Data Transfers and Storage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AI Workforce is based in the United Kingdom.{" "}
            <strong>Geographic scope:</strong> We primarily store and process
            personal data within the UK or other jurisdictions in the European
            Economic Area (EEA). However, some of our service providers or
            partners may be located outside of the UK/EEA. For example, the
            cloud infrastructure or email service we use might operate in data
            centers in the United States or other countries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When we transfer personal data outside of the UK (or EEA), we will
            ensure that <strong>appropriate safeguards</strong> are in place to
            protect it in accordance with the UK GDPR. These safeguards may
            include: relying on a transfer decision by the UK authorities (an
            adequacy regulation, if the destination country is deemed to have
            adequate data protection), or using standard contractual clauses and
            other approved mechanisms to contractually require the recipient to
            provide the same level of protection for personal data as required
            in the UK. In some cases we may also rely on your explicit consent
            for certain cross-border transfers, where permitted by law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can contact us for more information about the safeguards we use
            for international data transfers. By using our services, you
            understand that your personal data may be transferred to and stored
            in countries outside your own, including jurisdictions that may have
            different data protection rules than your country. Regardless of
            where your data is processed, we will take steps to ensure your
            privacy rights continue to be protected as described in this Policy.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            7. Your Data Protection Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under the UK GDPR (and equivalent EU GDPR provisions), you have
            certain rights regarding your personal data. We are committed to
            honoring these rights and have processes in place to enable you to
            exercise them. Your rights include:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right of Access:</strong> You have the right to request
                a copy of the personal data we hold about you, and to obtain
                information about how we process it. This allows you to confirm
                that we are handling your data in accordance with the law.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Rectification:</strong> If any of your personal
                information is inaccurate or incomplete, you have the right to
                ask us to correct or update it. We encourage you to keep your
                account information up-to-date, and you can also correct basic
                details by logging into your account settings.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Erasure:</strong> You can request that we
                delete your personal data under certain circumstances. This
                "right to be forgotten" applies, for example, if the data is no
                longer needed for the purposes it was collected, or if you
                withdraw consent and we have no other legal basis to continue
                processing. Please note that this right is not absolute --
                sometimes we may need to retain certain information for legal or
                legitimate business reasons (we will inform you if so).
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Restrict Processing:</strong> You have the
                right to ask us to limit or suspend the processing of your
                personal data in certain scenarios. For instance, you might
                request restriction if you contest the accuracy of your data
                (for a period enabling us to verify it) or if you object to
                processing and we are determining whether our grounds override
                yours. While processing is restricted, we will store your data
                securely and not use it.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Data Portability:</strong> You have the right
                to obtain your personal data that you provided to us in a
                structured, commonly used, machine-readable format, and to have
                that data transmitted to another controller where technically
                feasible. In practice, this means you can ask for an electronic
                copy of the data you have given us (that we process based on
                your consent or a contract with you), so you can move it to
                another service.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Object:</strong> You have the right to object
                to our processing of your personal data in certain
                circumstances. Notably, you can object at any time to personal
                data processing for direct marketing purposes -- if you do, we
                will stop using your data for marketing. You can also object if
                we are processing your data based on legitimate interests or for
                a task in the public interest, and you believe your rights and
                freedoms outweigh our interests (unless we have compelling
                legitimate grounds or the processing is needed for legal
                claims).
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Withdraw Consent:</strong> Where we rely on
                your consent to process personal data (for example, for optional
                marketing emails), you have the right to withdraw that consent
                at any time. Withdrawing consent will not affect the lawfulness
                of any processing we conducted prior to your withdrawal, and it
                will not affect processing of your personal data under other
                lawful bases. If you withdraw consent, we will cease the
                specific processing for which it was provided.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Exercising Your Rights:</strong> You can exercise any of
            your data protection rights by contacting us using the contact
            details in the <strong>Contact Us</strong> section below. We may
            need to verify your identity before fulfilling certain requests (to
            protect your privacy and security). We will respond to your request
            within one month, or inform you if we need more time. There is
            generally no fee for exercising your rights, but if a request is
            unfounded or excessive, we may charge a reasonable fee or refuse to
            act on it (as permitted by law).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you have concerns about how we handle your data, please contact
            us so we can address them. You also have the right to lodge a
            complaint with the relevant data protection supervisory authority.
            In the UK, that is the Information Commissioner's Office (ICO). We
            would appreciate the chance to deal with your concerns before you
            approach a regulator, so please consider reaching out to us first.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            8. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We take <strong>data security</strong> seriously and have
            implemented reasonable administrative, technical, and physical
            safeguards to protect your personal information from unauthorized
            access, loss, misuse, or alteration. These measures include
            encryption of data in transit (e.g., using HTTPS for our website),
            encryption of sensitive data at rest where applicable, firewalls and
            access controls on our servers, regular security assessments, and
            limiting access to personal data only to those employees and
            contractors who need it to perform their duties. Our staff are
            trained on data protection principles and required to keep your
            information confidential.
          </p>
          <p className="text-gray-700 leading-relaxed">
            While we strive to protect your data, no website, platform, or
            internet transmission is completely secure. Thus, we{" "}
            <strong>cannot guarantee</strong> absolute security of information.
            You should also take steps to keep your account secure: choose a
            strong, unique password and keep it confidential, and notify us
            immediately if you suspect any unauthorized access to your account.
            We continuously monitor for potential vulnerabilities and attacks,
            and we will inform you and the proper authorities of any data
            breaches as required by law.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            9. Updates to this Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update or modify this Privacy Policy from time to time to
            reflect changes in our practices, legal requirements, or for other
            operational reasons. If we make material changes, we will notify you
            by posting a prominent notice on our website or within the platform,
            or by contacting you via email, prior to the change becoming
            effective. The "Last Updated" date at the top of this policy
            indicates when the latest revisions were made. We encourage you to
            review this Privacy Policy periodically to stay informed about how
            we are protecting your information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your continued use of our services after any updates become
            effective will signify acceptance of the revised policy, to the
            extent permitted by law.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            10. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please do not hesitate to
            contact us. We are here to help and will respond to your inquiries
            promptly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:team@aiworkforce.co.uk"
              className="text-indigo-600 hover:underline"
            >
              team@aiworkforce.co.uk
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are happy to address any issues or clarify anything about how we
            handle your personal data. If you need to exercise your data subject
            rights, please email us with the subject line "Data Subject Request"
            and include detail about your request. For general privacy inquiries
            or feedback, just reach out to our team at the email above.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Thank you for trusting AI Workforce. We value your privacy and are
            committed to keeping your personal information safe.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
