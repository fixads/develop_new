// src/components/contact/hebrew/ContactHero.tsx
import React from 'react';
import { ArrowLeft, Building2, Globe2, MapPin, Landmark } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 sm:p-8 lg:p-12">
      {/* רקע דינמי */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div
          className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* תוכן מרכזי */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* כותרת ראשית */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">
          משרד פרסום 
          <span className="block text-yellow-400 mt-1">דיגיטלי</span>
        </h1>

        {/* קופסת מידע: ברלין וגלובליות */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <Building2 className="w-5 h-5 text-yellow-400" />
            <Globe2 className="w-5 h-5 text-yellow-400" />
            <Landmark className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-sm sm:text-base text-blue-50 leading-relaxed">
            ממשרדנו בברלין, מרכז החדשנות האירופי, אנו פותחים דלתות לשווקים בינלאומיים 
            ומעניקים הזדמנויות צמיחה גלובליות לכל עסק השואף לפרוץ קדימה.
          </p>
        </div>

        {/* אזכור בעברית + הסבר איך ממשיכים */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 text-blue-50 text-sm sm:text-base lg:text-lg leading-relaxed">
          <p className="mb-2">
            אנחנו דוברי עברית
          </p>
          <p>
            רוצים להתחיל? השאירו לנו פרטים על העסק שלכם 
            ואנחנו נחזור אליכם בהקדם האפשרי
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;