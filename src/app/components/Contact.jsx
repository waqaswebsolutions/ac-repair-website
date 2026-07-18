'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mt-3">
            Have questions or need service? Reach out to us — we're here to help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-primary/5">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-cool/60" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-primary/10 focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/20 outline-none transition-all bg-bg-light"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-cool/60" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-primary/10 focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/20 outline-none transition-all bg-bg-light"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative mt-4 sm:mt-6">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-cool/60" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-primary/10 focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/20 outline-none transition-all bg-bg-light"
              />
            </div>

            {/* Message */}
            <div className="relative mt-4 sm:mt-6">
              <FaComment className="absolute left-4 top-5 text-accent-cool/60" />
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-primary/10 focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/20 outline-none transition-all bg-bg-light resize-y min-h-[120px]"
              />
            </div>

            {/* Status Message */}
            {status.message && (
              <div className={`mt-4 p-3 rounded-xl text-sm font-medium ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-4 sm:mt-6 bg-accent-cool hover:bg-accent-cool-hover text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-glow-cool flex items-center justify-center gap-2 cursor-pointer ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <FaPaperPlane />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}