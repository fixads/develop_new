import React from 'react';
import SEO from '../components/layout/SEO';

const Cookies = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy" 
        description="FixAds cookie policy and tracking information"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They are widely used to make websites work more efficiently and provide useful 
                information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use different types of cookies for various purposes:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function properly. They cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    Help us understand how visitors interact with our website, helping us improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use our cookie consent manager to customize your preferences</li>
                <li>Modify your browser settings to accept or reject cookies</li>
                <li>Delete cookies that have already been stored on your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We use these 
                services to enhance your experience on our website. You can manage third-party cookies 
                through your browser settings or our cookie consent manager.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. Please check back periodically to stay informed about our use 
                of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us at:{' '}
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

export default Cookies;