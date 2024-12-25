import React from 'react';
import { 
  BarChart, 
  Shield, 
  Bot, 
  DollarSign, 
  Layout, 
  Settings 
} from 'lucide-react';

const features = [
  {
    icon: <BarChart className="w-5 h-5" />,
    title: 'Marketing',
    description: 'Our team specializes in planning, creating, and launching seamless marketing campaigns across Google Ads, Microsoft Ads, and Meta, ensuring your goals are met every month. Data-driven strategies lead to measurable results and consistent growth.',
    link: 'https://www.google.com/partners/agency?id=6132910524'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Legal',
    description: 'Safeguarding your organization while staying GDPR-compliant is critical to us. We provide tailored workflows and custom permissions, ensuring adherence to European data protection regulations while minimizing risks and keeping your business secure and efficient.'
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Business Automation',
    description: 'Enhancing operational efficiency is at the core of what we do. By leveraging tools like WhatsApp bots, Klaviyo, and other optimized platforms, we enhance customer engagement, improve processes, and boost marketing performance.'
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: 'Finance',
    description: 'Audit-proof financial solutions are essential for smooth operations. Our software streamlines crucial financial tasks like month-end close and quarterly budgeting. We provide detailed monthly reports and integrate payment tools such as PayPal and Stripe for seamless transactions and financial efficiency.'
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: 'Enterprise Design',
    description: 'At our digital agency company, we specialize in enterprise design, creating beautiful and delightful experiences for both marketing and product while fostering real cross-company collaboration to drive business success.'
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: 'Operations',
    description: 'Customizable, data-driven workflows are our specialty. We craft structured processes that foster efficiency and scalability, enabling teams to achieve measurable success and drive sustainable business growth.'
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Build your business with
            <span className="text-blue-600"> FixAds</span>
          </h2>
          <p className="text-xl text-gray-600">
            We leverage cutting-edge technology and proven strategies to ensure your success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 group-hover:bg-primary-main group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.link ? (
                  <>
                    {feature.description.split(feature.link)[0]}
                    <a 
                      href={feature.link} 
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Ads
                    </a>
                    {feature.description.split(feature.link)[1]}
                  </>
                ) : (
                  feature.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;