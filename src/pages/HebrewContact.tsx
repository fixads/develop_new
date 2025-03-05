import React from 'react';
import SEO from '../components/layout/SEO';
import ContactHero from '../components/contact/hebrew/ContactHero';
import LeadForm from '../components/contact/hebrew/LeadForm';
import SuccessStory from '../components/contact/hebrew/SuccessStory';
import StatsGrid from '../components/contact/hebrew/StatsGrid';
import { CheckCircle, Clock } from 'lucide-react';

const HebrewContact = () => {
  return (
    <>
      <SEO 
        title="צור קשר | FixAds" 
        description="צור קשר עם FixAds לפתרונות שיווק דיגיטלי חדשניים ואסטרטגיות צמיחה עסקית"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4" dir="rtl">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-12">
            <ContactHero />
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                התחל את סיפור ההצלחה שלך
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                הצטרף למאות העסקים שכבר שינו את הנוכחות הדיגיטלית שלהם עם FixAds.
                קבל את האסטרטגיה המותאמת אישית שלך עוד היום!
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-sm text-green-600 font-medium">
                  מובטחת תגובה מהירה
                </span>
                <Clock className="w-5 h-5 text-green-500" />
              </div>

              <LeadForm />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {['GDPR תואם', 'מידע מאובטח', 'תמיכה 24/7', 'ללא התחייבות'].map((item, index) => (
                    <div key={index} className="text-sm text-gray-500">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-12">
            <SuccessStory />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <StatsGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default HebrewContact;