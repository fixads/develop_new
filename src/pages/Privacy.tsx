import React from 'react';
import SEO from '../components/layout/SEO';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="FixAds privacy policy and data protection information"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At FixAds, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Personal Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal identification information, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Information you provide in contact forms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. GDPR Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. 
                FixAds aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your 
                Personal Data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your rights under GDPR include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of your personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our Service and 
                hold certain information. You can instruct your browser to refuse all cookies or to indicate 
                when a cookie is being sent. However, if you do not accept cookies, you may not be able to 
                use some portions of our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a 
                  href="mailto:admin@fixads.xyz" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  admin@fixads.xyz
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "effective date" at the top 
                of this Privacy Policy.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;