import React from 'react';
import SEO from '../components/layout/SEO';

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service" 
        description="FixAds terms of service and legal information"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing our website https://fixads.xyz ("Website") or using any of our services, 
                you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                If you do not agree with any part of these Terms, you must not use our Service.
              </p>
              <p>
                You represent and warrant that you are at least 18 years old and legally capable of 
                entering into a binding contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Services</h2>
              <p className="mb-4">
                FixAds is a digital agency offering advertising, marketing solutions, and related 
                consultancy services. Our offerings include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Digital marketing and advertising campaigns</li>
                <li>Search engine optimization (SEO)</li>
                <li>Social media advertising</li>
                <li>Web design and development</li>
                <li>Performance analytics and reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Obligations</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality available through our Service are the exclusive 
                property of FixAds or its licensors and are protected by copyright, trademark, and other 
                intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
              <p className="mb-4">
                Your use of our Service is also governed by our{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, FixAds shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising out of or related to 
                your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at:{' '}
                <a 
                  href="mailto:admin@fixads.xyz" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  admin@fixads.xyz
                </a>
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

export default Terms;