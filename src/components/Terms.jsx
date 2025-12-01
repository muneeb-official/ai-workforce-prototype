import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white text-left flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[450px] bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-[2rem] md:text-[4.5rem] font-bold text-gray-900 mb-4">
            Terms Of Use
          </h1>
          <p className="text-gray-600">Last Updated: November 26, 2025</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Introduction */}
        <div className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <strong>AI Workforce</strong>. These Terms of Use
            ("Terms") govern your access to and use of the AI Workforce website
            and platform, including any related services, content, and AI agent
            functionalities (collectively, the "Services"). By registering for
            an account or using our Services, you agree to be bound by these
            Terms. If you do not agree with these Terms, do not use the
            Services.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms apply to both individuals and business entities using AI
            Workforce. If you are using the Services on behalf of a company or
            other organization, you represent that you have the authority to
            bind that organization to these Terms. In that case, "you" and
            "your" will refer to the organization (and any authorized users).
          </p>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms from time to time. If we make material
            changes, we will notify you (for example, by email or through the
            platform) and update the "Last Updated" date above. By continuing to
            use the Services after an update, you accept the revised Terms.
          </p>
        </div>

        <hr className="border-gray-200 my-10" />

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. Our Services and Accounts
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Service Description:</strong> AI Workforce provides an
                online platform where you can deploy and manage AI-driven
                "digital workforce" agents to assist with sales, marketing,
                support, and other tasks. The Services are provided entirely
                through our website and cloud-based software – there are no
                physical deliverables. You will access the Services via a secure
                login account on our website. As part of onboarding, our team
                will provide guidance and training on how to use the platform,
                but ongoing use of the Services is digital and self-directed.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Account Registration:</strong> To use AI Workforce, you
                must create an account. When registering, you agree to provide
                accurate, current, and complete information. Keep your login
                credentials confidential and do not share them. You are
                responsible for all activity that occurs under your account. If
                you believe your account has been compromised, notify us
                immediately at{" "}
                <a
                  href="mailto:team@aiworkforce.co.uk"
                  className="text-indigo-600 hover:underline"
                >
                  team@aiworkforce.co.uk
                </a>
                .
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Eligibility:</strong> The Services are intended for
                users who are at least 18 years old. By using the Services, you
                affirm that you are 18 or older. You also affirm that you are
                not barred from using our Services under any applicable laws
                (for example, you are not on any trade sanctions or prohibited
                persons lists).
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Onboarding and Support:</strong> We will make reasonable
                efforts to assist you in getting started with the platform. This
                may include a virtual introduction or demo session and guidance
                on how to configure and use your AI agents. Ongoing support is
                available via email at{" "}
                <a
                  href="mailto:team@aiworkforce.co.uk"
                  className="text-indigo-600 hover:underline"
                >
                  team@aiworkforce.co.uk
                </a>
                . While we help you get started, you are ultimately responsible
                for how you use the platform and configuring the AI agents to
                suit your needs.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Free Trial:</strong> AI Workforce does not generally
                offer free trial periods. Any demonstration or free evaluation
                of the platform (for example, a guided demo during a virtual
                meeting) is provided solely for your evaluation and does not
                constitute granting you a license to use the Services beyond
                that demonstration. Full access to the Services requires
                entering into a paid subscription or purchase as described
                below.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. Purchases, Fees, and Payment
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Subscription Plans:</strong> Access to the core Services
                requires a paid subscription or purchase of a service plan. The
                features, limits, and pricing of your plan will be as outlined
                on our website or in a separate order form or contract. By
                signing up for a paid plan, you agree to pay all applicable fees
                for that plan, as described at the time of purchase.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Billing and Payment:</strong> Fees will be billed in
                advance (e.g., monthly or annually) or as otherwise agreed. You
                must provide a valid payment method (such as credit card or bank
                details) and authorize us (or our payment processor) to charge
                it for the subscription fees and any applicable taxes. If your
                payment method fails or your account is past due, we may suspend
                or terminate your access to the Services after providing notice
                and an opportunity to cure the payment failure. All fees are in
                GBP (British Pounds) unless stated otherwise, and are
                non-refundable except as required by law or expressly provided
                in these Terms.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Changes to Fees:</strong> We may change our subscription
                plans and pricing. Any fee changes will be effective only after
                we provide you notice (e.g., by email or on our site) and will
                apply upon your next renewal or upgrade. If you do not agree
                with fee changes, you may need to cancel your subscription
                before the new fees apply.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Taxes:</strong> Unless stated otherwise, our fees do not
                include any taxes, levies, or duties such as VAT, sales tax, or
                similar governmental charges. You are responsible for any such
                taxes applicable to your purchase, and we may charge tax in
                jurisdictions where we are required to do so.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Refunds:</strong> No free trials are offered, and all
                payments are final. If you cancel your subscription or if we
                terminate it due to your breach of these Terms, you will not be
                entitled to a refund for fees already paid, except where
                required by law. We reserve the right to offer refunds,
                discounts, or credits in select circumstances at our sole
                discretion, but any such case is unique and does not obligate us
                to do so in the future.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. Cancellation and Termination
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Cancellation by You:</strong> You may cancel your
                subscription or account at any time through your account
                settings or by contacting us. Cancellation will take effect at
                the end of your current billing period unless otherwise stated.
                You will retain access to the Services until the end of the
                period for which you have paid, after which your access will be
                downgraded or terminated. Please note that canceling your
                account will generally delete or disable access to the data and
                content in your account (unless we are required to retain it by
                law). Be sure to export or back up your data before canceling if
                you need to preserve it.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Termination or Suspension by Us:</strong> We may suspend
                or terminate your access to the Services (in whole or in part)
                immediately if: (a) you breach any of these Terms; (b) your use
                of the Services violates any law or regulation or is causing
                harm to us or others; or (c) we are required to do so by a court
                order or government request. In non-urgent situations, we will
                aim to provide you with notice of the breach and a reasonable
                opportunity to remedy it before terminating. We may also suspend
                the Services if payment is overdue as described in Section 2.2.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Effect of Termination:</strong> Upon termination of your
                account for any reason, your right to use the Services will
                cease. We will have no further obligation to provide the
                Services to you. Any fees paid in advance are non-refundable
                (except as required by law). Termination of the Services will
                not relieve you of any obligation to pay any accrued fees or
                costs or indemnification obligations, and any provisions of
                these Terms that by their nature should survive termination
                (such as ownership, indemnities, disclaimers, limitations of
                liability, and governing law) shall survive.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            4. Permissible Use and Restrictions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You are granted a limited, non-exclusive, non-transferable right to
            access and use the AI Workforce Services for your internal business
            purposes (or personal use, if you are an individual consumer using
            the Services for personal productivity) and in accordance with these
            Terms and applicable law.{" "}
            <strong>You agree not to misuse the Services.</strong> In
            particular, <strong>you will NOT</strong> do any of the following:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Unauthorized Access:</strong> Attempt to access the
                Services or any accounts or data within the Services that you
                are not authorized to access. You will not probe, scan, or test
                the vulnerability of any system or network used by our Services,
                nor breach any security or authentication measures.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Circumvent or Reverse Engineer:</strong> Decompile,
                disassemble, reverse engineer, or otherwise attempt to discover
                or derive the source code, underlying ideas, algorithms, or
                architecture of the platform. Likewise, you may not copy,
                modify, or create derivative works based on any part of the
                Services, including the user interface, without our prior
                written permission.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Scraping or Data Mining:</strong> Use any robot,
                scraper, crawler, script, or other automated means to collect
                information or data from the platform, or to otherwise
                systematically retrieve data or content from the Services,
                whether to create a collection, database, directory, or
                otherwise. You also agree not to interfere with or disrupt the
                integrity or performance of the platform, for example by
                imposing an unreasonable load through automated usage.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Prohibited Content and Activities:</strong> Use the
                Services to transmit, store, or distribute any content or engage
                in any activity that is illegal, harmful, fraudulent,
                infringing, defamatory, obscene, harassing, or otherwise
                objectionable. This includes (but is not limited to) using the
                platform to send unsolicited mass communications ("spam"), to
                harass or harm individuals or organizations, or to violate
                privacy rights or any law (such as data protection and anti-spam
                laws). You are responsible for ensuring that your use of AI
                Workforce (including any outreach or communications sent by our
                AI agents on your behalf) complies with all applicable laws and
                regulations.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Competitive Use:</strong> Use the Services in any way to
                build a competing product or service, or for any purpose that is
                to our commercial disadvantage. For example, you must not use
                the Services to benchmark our platform or to copy our features,
                design, or user interface for competitive purposes. Similarly,
                you may not resell, lease, or provide access to the Services to
                any third party (other than users authorized under your account)
                without our consent.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Intellectual Property Misuse:</strong> Remove or alter
                any copyright, trademark, or proprietary notices on the
                platform. You must not use, display, or mirror our website or
                Services, or any of their components (including software, text,
                images, or layout) except as allowed by these Terms. You also
                will not upload or introduce any virus, malware, or harmful code
                into the Services.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Impersonation and False Statements:</strong> You will
                not impersonate any person or entity, or misrepresent your
                affiliation with a person or entity, when using the Services.
                You agree not to mislead us or other users, and not to submit
                false reports or complaints to our support channels.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you are unsure whether an intended use or action is permitted,
            please contact us beforehand. We reserve the right to investigate
            any suspected breach of this Section 4 and may suspend or terminate
            your account for any prohibited activities.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5. Intellectual Property Rights
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Our Intellectual Property:</strong> All rights, title,
                and interest in and to the Services, including all software,
                code, technology, inventions, algorithms, database structures,
                user interfaces, contents, logos, trademarks, and service marks
                ("Our IP"), are owned by or licensed to AI Workforce (or its
                parent company, affiliates, and licensors). The structure,
                organization, and underlying data models of the platform and AI
                agents are proprietary to us. Except for the limited use rights
                expressly granted to you in these Terms, we retain all
                Intellectual Property Rights in the Services. Nothing in these
                Terms transfers any ownership of Our IP to you. You may not use
                our trade name "AI Workforce," our logos, or any of our
                trademarks without our prior written consent, except as
                necessary to identify the Services for legitimate purposes or as
                permitted by law.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>License to You:</strong> Subject to your compliance with
                these Terms and payment of any applicable fees, we grant you a
                limited, non-exclusive, non-transferable, non-sublicensable
                license to access and use the Services during the term of your
                subscription, solely for your own internal use and in accordance
                with the intended functionality of the platform. This license
                will terminate upon termination or cancellation of your account.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Your Data and Content:</strong> You retain ownership of
                all content, data, or materials that you upload or submit to the
                Services ("Customer Data"), as well as any results specifically
                generated for you by the AI agents using your Customer Data (for
                example, a contact list generated from your input, or content
                produced based on your training materials), subject to any
                rights of third parties in such output. We do not claim
                ownership of your Customer Data. You represent and warrant that
                you have all necessary rights and permissions to provide the
                Customer Data to us and to use it with the Services, and that
                none of your Customer Data will violate any law or infringe any
                rights of others (for example, you won't upload data that you
                have scraped or obtained illegally, and you won't provide
                copyrighted material that you have no right to use). By using
                the Services, you grant us a permission and license to use,
                process, host, and otherwise handle your Customer Data for the
                purposes of providing the Services to you. This includes, for
                example, storing the data on our systems, analyzing it through
                our AI models as instructed by you, and displaying or
                transmitting results to you. We will only use your Customer Data
                to operate and improve the Services and as otherwise permitted
                by our Privacy Policy or your instructions. We will not share
                your Customer Data with third parties except as needed to
                provide the Services (e.g., cloud hosting providers, integrated
                third-party tools) or as required by law.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>AI Outputs:</strong> The Services involve generative or
                autonomous AI agents that may produce content or take actions on
                your behalf (such as sending emails or making calls, creating
                marketing content, or answering support questions). You are
                responsible for reviewing and overseeing the outputs and actions
                of the AI agents operating in your account. While the AI is
                designed to assist you, it is not infallible. You should
                supervise important communications or decisions made by the AI
                and ensure they meet your requirements and comply with law. We
                do not claim ownership of specific outputs the AI generates for
                you from your inputs or instructions; those outputs are for your
                use. However, note that the AI models and all underlying
                algorithms remain Our IP. We also reserve the right to use any
                general learnings, feedback, or improvements derived from how
                the AI is used (in anonymized form) to improve our Services for
                all users, in accordance with our Privacy Policy.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Feedback:</strong> If you provide us with any
                suggestions, ideas, or feedback about the Services ("Feedback"),
                you agree that we may use and exploit the Feedback freely and
                for any purpose, without restriction or compensation to you.
                Feedback is not considered confidential information, and we may
                incorporate it into our products or services.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6. Privacy and Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your privacy is important to us. Our collection, use, and processing
            of personal information through the Services is described in our{" "}
            <strong>Privacy Policy</strong> (please refer to our separate
            Privacy Policy document, which is hereby incorporated into these
            Terms by reference). By using the Services, you agree to the
            practices in our Privacy Policy, including the transfer of your
            personal data to our servers and third-party processors as needed to
            provide the Services.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are an individual in the UK, European Economic Area (EEA), or
            other regions with data protection laws, we will handle personal
            data from you or your contacts in compliance with applicable data
            protection regulations (such as the UK Data Protection Act and EU
            GDPR). You may need to ensure you have proper consent or another
            legal basis for any personal data of third parties (e.g. contact
            leads) that you have the AI agents process or contact on your
            behalf.{" "}
            <strong>
              You are responsible for the legality of the data you provide
            </strong>{" "}
            to the platform and the messages or content the AI sends out under
            your instruction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your
            data within our Services. However, no system is 100% secure. You are
            responsible for maintaining the security of your account credentials
            and for any actions taken on your account. Please notify us promptly
            of any unauthorized access or suspected breach of your account.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            7. Confidentiality
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            During your use of the Services, either you or AI Workforce may
            disclose or learn information that is confidential ("Confidential
            Information"). For example, your Customer Data, business plans, or
            non-public technical information about our platform could be
            considered Confidential Information. Each party agrees that it will:
            (a) use the other party's Confidential Information only for the
            purpose of providing or using the Services under these Terms, and
            (b) not disclose the other party's Confidential Information to any
            third party without the discloser's consent, except to that party's
            own employees, contractors, or advisors who need to know it for the
            above purpose and are bound by confidentiality obligations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Confidential Information does <strong>not</strong> include
            information that is or becomes publicly available without breach of
            these Terms, is independently developed by the receiving party
            without reference to the confidential info, or is lawfully obtained
            from a third party not under a confidentiality obligation. If we are
            required by law or court order to disclose your Confidential
            Information, we will attempt to give you notice (if legally allowed)
            so you can seek a protective order.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand that our platform may become a critical part of your
            business process and that your data is sensitive. Likewise, you may
            learn details about how our AI system works. Both parties agree to
            handle each other's Confidential Information with reasonable care
            and to take customary steps to prevent unauthorized disclosure.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            8. Third-Party Services and Integrations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AI Workforce integrates with or uses third-party services and data
            sources to function (for example, our platform may connect to your
            LinkedIn, Google, CRM systems, use third-party APIs like RocketReach
            or other databases, etc.).{" "}
            <strong>
              If you choose to connect or use any third-party accounts or
              services through our platform, you are responsible for complying
              with those third parties' terms and policies.
            </strong>{" "}
            We do not control and are not responsible for third-party services
            or content. Your use of third-party features may be subject to
            additional fees or terms (for example, a third-party API might
            require its own subscription).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We cannot guarantee the continued availability of any third-party
            integration and may disable or modify integrations if the third
            party ceases to make the service available or if you or we are in
            violation of the third party's terms. If a third-party service used
            by the platform is discontinued or significantly changes, we will
            try to inform you and work to find alternatives, but we are not
            liable for any loss or damage arising from third-party changes or
            downtime.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our website or Services may also include links to third-party
            websites or resources that are not operated by us. These links are
            provided for your convenience only. We do not endorse and are not
            responsible for the content or practices of any third-party
            websites. If you decide to visit or use any third-party sites or
            services, you do so at your own risk and should review their terms
            of use and privacy policies.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            9. Service Updates and Availability
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Modifications to Service:</strong> We are continually
                improving the AI Workforce platform and Services. We reserve the
                right to add, modify, or remove features or functionalities of
                the Services at any time. We will endeavor to notify you of
                major changes that may significantly impact your use (for
                example, if we discontinue a core feature or change how an AI
                agent works), but minor changes or bug fixes may be deployed
                without notice. Any new features or services that we introduce
                will be subject to these Terms, unless we specify otherwise. We
                also reserve the right to discontinue the Services (in whole or
                in part) or to shut down the platform, but if we do so and you
                are a paying customer, we will provide as much advance notice to
                you as reasonably practicable along with instructions on how to
                retrieve your data.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Downtime and Availability:</strong> We strive to keep
                the Services running smoothly and available 24/7, but we do not
                guarantee uninterrupted service. The platform may occasionally
                be unavailable for scheduled maintenance, upgrades, or emergency
                repairs, or due to failures of equipment or telecommunications.
                We will try to schedule planned maintenance during low-usage
                hours and notify you in advance when possible. However, you
                acknowledge that the Services may be subject to limitations,
                delays, and other problems inherent in the use of the Internet
                and electronic communications. We are not liable for any
                unavailability of the Services, but if we experience extended
                unforeseen downtime, we will work diligently to restore service
                and keep users informed.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Beta Features:</strong> From time to time, we may offer
                you the opportunity to try "beta" or pilot features that are in
                development or testing. Such beta features are provided on an
                experimental basis without any warranties and may be modified or
                discontinued at our discretion. We welcome feedback on beta
                features, but their reliability and performance are not
                guaranteed. We may also impose limits on beta features or
                require you to agree to additional terms before using them.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            10. Disclaimer of Warranties
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." YOUR USE OF
              THE SERVICES IS AT YOUR OWN RISK.
            </strong>{" "}
            To the fullest extent permitted by applicable law, AI Workforce
            disclaims all warranties, express or implied, in connection with the
            Services and your use thereof. This includes, but is not limited to:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Implied Warranties:</strong> We do not make any specific
                promises about the results you may achieve using the Services or
                the accuracy, reliability, or correctness of any outputs
                generated by our AI agents. We specifically disclaim any implied
                warranties of merchantability, fitness for a particular purpose,
                non-infringement, and any warranties arising out of course of
                dealing or usage of trade.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Guarantee of Outcomes:</strong> While our platform
                aims to help you with sales, marketing, support, or other tasks,
                we do not guarantee any particular outcome (for example, we
                cannot guarantee you will achieve any specific number of leads,
                sales, or productivity improvements). Any success stories or
                efficiency gains mentioned in our materials are illustrative
                only.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>AI Limitations:</strong> You acknowledge that AI
                technologies are evolving and may sometimes produce incorrect or
                suboptimal results. AI Workforce does not warrant that the AI
                agents will operate error-free or without interruption, or that
                they will meet all of your expectations. It is your
                responsibility to supervise and review important communications
                or content produced by the AI agents.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Technical Warranty:</strong> We do not warrant that
                the Services will be secure, uninterrupted, always available, or
                free of errors, viruses, or other harmful components. While we
                have implemented security measures and will try to promptly
                address any issues, we cannot guarantee that no bugs or
                vulnerabilities will occur.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Third-Party Services:</strong> We make no warranty or
                guarantee regarding any third-party services, websites, or
                content that you access through our platform. We merely
                facilitate connections or integrations for your convenience and
                do not endorse or assume any liability for third-party actions
                or content.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Some jurisdictions do not allow the exclusion of certain warranties.{" "}
            <strong>
              If you have rights under local law that cannot be waived or
              disclaimed, nothing in these Terms will affect those mandatory
              rights.
            </strong>{" "}
            In such cases, our warranty disclaimers apply to the maximum extent
            permitted by law.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 11 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            11. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the extent permitted by law,{" "}
            <strong>AI Workforce's liability to you is limited.</strong> We (and
            our directors, officers, employees, agents, and affiliates) will{" "}
            <strong>not be liable</strong> for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits,
            revenue, business, goodwill, data, or use, arising out of or related
            to your use of (or inability to use) the Services, even if we have
            been advised of the possibility of such damages. This disclaimer of
            liability applies to any damages resulting from:
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                Your use or misuse of the Services,
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                Any interruption, suspension, or termination of the Services,
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                Any errors or inaccuracies in the Services or outputs,
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                Unauthorized access to or alteration of your data or
                transmissions,
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                Or any other matter relating to the Services.
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Our total aggregate liability</strong> for any and all
            claims arising under or related to these Terms or your use of the
            Services shall be{" "}
            <strong>
              limited to the amount you have paid us for the Services in the
              twelve (12) months prior to the claim
            </strong>{" "}
            (or, if greater, GBP £100). If you have not paid any amount (for
            example, if you are using a free or demo service when applicable),
            our total liability shall not exceed GBP £100.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Nothing in these Terms shall limit or exclude our liability for
            gross negligence, willful misconduct, fraud, or any other liability
            that cannot be excluded or limited under applicable law (such as
            liability for death or personal injury caused by our negligence, in
            jurisdictions that do not allow such exclusion).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Because some jurisdictions do not allow the exclusion or limitation
            of liability for certain damages,{" "}
            <strong>the above limitations may not apply to you fully.</strong>{" "}
            In such cases, our liability is limited to the greatest extent
            permitted by law.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 12 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            12. Indemnification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to{" "}
            <strong>indemnify, defend, and hold harmless AI Workforce</strong>{" "}
            and its officers, directors, employees, and agents, from and against
            any and all third-party claims, liabilities, damages, losses, or
            expenses (including reasonable legal fees) that arise out of or
            relate to: (a) <strong>your use of the Services</strong> (including
            any actions taken by your AI agents or content generated at your
            instruction); (b) <strong>your breach of these Terms</strong> or
            violation of any applicable law or regulation; (c){" "}
            <strong>
              your Customer Data or any content you or your AI agents send or
              create
            </strong>
            , including claims that such data or content infringes or
            misappropriates the intellectual property, privacy, or other rights
            of a third party; or (d){" "}
            <strong>your negligence or willful misconduct</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right, at our own expense, to assume the exclusive
            defense and control of any matter otherwise subject to
            indemnification by you (without limiting your indemnification
            obligations). In that case, you agree to cooperate with our defense
            of those claims and you may not settle any such claim without our
            prior written consent.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This indemnity obligation will survive any termination of your
            account or these Terms.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 13 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            13. Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms and any dispute or claim (including non-contractual
            disputes or claims) arising out of or in connection with them or
            their subject matter shall be governed by and construed in
            accordance with the laws of <strong>England and Wales</strong>{" "}
            (United Kingdom), without regard to its conflict of law principles.
            We choose UK law as our governing law because AI Workforce is based
            in the UK, even though we plan to offer our Services globally.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>International Use:</strong> We make no representation that
            the Services are appropriate or available for use in all locations.
            If you choose to access or use the Services from outside the UK, you
            do so at your own initiative and are responsible for compliance with
            any local laws. You must not use the Services if such use would be
            illegal in your jurisdiction.{" "}
            <strong>
              You are responsible for obeying all applicable laws in your
              jurisdiction
            </strong>{" "}
            while using our Services, including but not limited to privacy, data
            protection, and communication laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Consumer Rights:</strong> If you are using the Services as a
            consumer (not in the course of a business) in a jurisdiction that
            provides you certain mandatory rights (such as consumer protection
            laws in the UK, EU, or certain U.S. states), some of the provisions
            in these Terms may be limited in their applicability to you.{" "}
            <strong>
              Nothing in these Terms is meant to limit your non-waivable
              statutory rights.
            </strong>{" "}
            For example, UK consumers may have certain cancellation or warranty
            rights that cannot be excluded; these Terms operate in addition to
            those rights and not in place of them.
          </p>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 14 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            14. Dispute Resolution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We encourage you to contact us first if you have any issue with the
            Services, as most concerns can be resolved quickly and informally.
            You can reach our support team at{" "}
            <a
              href="mailto:team@aiworkforce.co.uk"
              className="text-indigo-600 hover:underline"
            >
              team@aiworkforce.co.uk
            </a>{" "}
            to discuss any complaints or disputes.
          </p>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Negotiation:</strong> In the event of any dispute
                arising between you and AI Workforce, we both agree to attempt
                in good faith to resolve the dispute informally by notifying the
                other party of the dispute and discussing it via email or phone.
                If we cannot resolve the dispute within a reasonable time (not
                to exceed 30 days), then either party may pursue formal legal
                action as outlined below.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Jurisdiction:</strong> Subject to any mandatory
                arbitration clause or applicable consumer law, the courts of{" "}
                <strong>England and Wales</strong> shall have exclusive
                jurisdiction to settle any dispute or claim arising out of or in
                connection with these Terms or your use of the Services. You and
                we each consent to the personal jurisdiction of such courts. If
                you are a consumer residing outside the UK, you may also be
                entitled to bring actions in your local courts under applicable
                consumer protection laws.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 15 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            15. Miscellaneous
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Entire Agreement:</strong> These Terms (along with any
                Order Form or subscription agreement and our Privacy Policy)
                constitute the entire agreement between you and AI Workforce
                regarding the Services and supersede any prior agreements or
                understandings (whether written or oral) relating to the same
                subject matter. Any additional or different terms proposed by
                you (for example, in a purchase order) are rejected unless
                expressly agreed to in writing by an authorized representative
                of AI Workforce.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Changes to Terms:</strong> We may modify these Terms as
                stated in the introduction. If you object to any changes, your
                sole remedy is to stop using the Services and cancel your
                account. The most current version of the Terms will be available
                on our website, and it is your responsibility to review them
                periodically.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Waiver:</strong> Our failure to enforce any provision
                of these Terms shall not be deemed a waiver of that provision or
                of the right to enforce it in the future. Any waiver of any term
                must be in a signed writing by an authorized representative of
                AI Workforce to be effective.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Severability:</strong> If any provision of these Terms
                is held by a court of competent jurisdiction to be invalid,
                illegal, or unenforceable, that provision will be enforced to
                the maximum extent permissible and the remaining provisions of
                these Terms will remain in full force and effect. The invalid
                provision shall be deemed modified to the least degree necessary
                to remedy the invalidity while retaining as much of the parties'
                intent as possible.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Assignment:</strong> You may not assign or transfer
                these Terms or any of your rights or obligations under them,
                whether by operation of law or otherwise, without our prior
                written consent. We may assign or transfer these Terms (in whole
                or in part), including any rights and obligations, to an
                affiliate or in connection with a merger, acquisition, corporate
                reorganization, or sale of all or substantially all of our
                assets relating to the Services, and you consent to such
                assignment. These Terms will bind and inure to the benefit of
                the parties, their successors, and permitted assigns.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No Third-Party Beneficiaries:</strong> These Terms do
                not create any third-party beneficiary rights. No person or
                entity other than you and AI Workforce (and permitted
                successors/assigns) shall have any right to enforce any term of
                this agreement.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Relationship of the Parties:</strong> You and AI
                Workforce are independent contractors, and nothing in these
                Terms shall be construed to create a partnership, joint venture,
                franchise, or agency relationship. You do not have any authority
                to bind AI Workforce in any way.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Force Majeure:</strong> We will not be liable for any
                failure or delay in our performance of any obligation under
                these Terms if the failure or delay is due to events beyond our
                reasonable control, such as natural disasters, acts of
                government, war, terrorism, labor disputes, internet or utility
                failures, or any other force majeure event.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1.5">•</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Communications and Notices:</strong> AI Workforce may
                send you information and notices about the Services (such as
                changes, updates, or alerts) electronically, for example via
                email to the address associated with your account or by posting
                on our website or within your account dashboard. You are deemed
                to have received these notices at the time they are sent or
                posted. If you have any questions or need to send us legal
                notices or other communications, please contact us at{" "}
                <a
                  href="mailto:team@aiworkforce.co.uk"
                  className="text-indigo-600 hover:underline"
                >
                  team@aiworkforce.co.uk
                </a>
                . We may also provide an address for physical mail upon request
                for formal legal notices.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 my-10" />

        {/* Section 16 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            16. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms or the Services, or need
            to reach out to AI Workforce for any reason, you can contact our
            support team at{" "}
            <a
              href="mailto:team@aiworkforce.co.uk"
              className="text-indigo-600 hover:underline"
            >
              team@aiworkforce.co.uk
            </a>
            . We will be happy to assist you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using or continuing to use AI Workforce, you acknowledge that you
            have read, understood, and agree to these Terms of Use. Thank you
            for trusting AI Workforce as your AI-powered digital workforce
            platform. We look forward to helping you augment your team with our
            AI agents in a secure and compliant manner.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Terms;
