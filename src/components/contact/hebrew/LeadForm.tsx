import React, { useState, useEffect } from 'react';
import { sendLeadEmail } from '../../../utils/email';
import { validateEmail } from '../../../utils/validation';
import type { Lead } from '../../../types/lead';

const LeadForm = () => {
  const [formData, setFormData] = useState<Lead>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  useEffect(() => {
    if (touched.email) {
      if (!formData.email) {
        setEmailError('נא להזין כתובת אימייל');
      } else if (!validateEmail(formData.email)) {
        setEmailError('נא להזין כתובת אימייל תקינה');
      } else {
        setEmailError('');
      }
    }
  }, [formData.email, touched.email]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('שם הוא שדה חובה');
      return false;
    }
    if (!formData.email.trim()) {
      setEmailError('נא להזין כתובת אימייל');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('נא להזין כתובת אימייל תקינה');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('הודעה היא שדה חובה');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setEmailError('');
    
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    
    try {
      const success = await sendLeadEmail(formData);
      
      if (success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
        setTouched({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('שליחת ההודעה נכשלה. אנא נסה שוב מאוחר יותר.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrorMessage('');
  };

  if (status === 'success') {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-2">תודה רבה!</h3>
        <p className="text-green-700">הודעתך נשלחה בהצלחה. ניצור איתך קשר בהקדם.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            שם מלא *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="הזן את שמך המלא"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            כתובת אימייל *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? "email-error" : undefined}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              emailError ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="הזן את כתובת האימייל שלך"
          />
          {emailError && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            שם החברה
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="הזן את שם החברה שלך"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            מספר טלפון
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="הזן את מספר הטלפון שלך"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            הודעה *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="כתוב את הודעתך כאן"
          />
        </div>

        {errorMessage && (
          <p className="text-red-600 text-sm" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting' || Boolean(emailError)}
          className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'שולח...' : 'שלח הודעה'}
        </button>
      </div>
    </form>
  );
};

export default LeadForm;