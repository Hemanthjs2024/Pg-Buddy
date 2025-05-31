import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl mb-8">
                Get in touch with our team for any questions or support
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start group hover:bg-purple-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300 group-hover:scale-110">
                      <Mail className="h-6 w-6 text-purple-700 group-hover:text-purple-800" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-purple-700 transition-colors duration-300">Email</h3>
                      <p className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">support@pgbuddy.com</p>
                      <p className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">info@pgbuddy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-teal-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                    <div className="bg-teal-100 p-3 rounded-full mr-4 group-hover:bg-teal-200 transition-colors duration-300 group-hover:scale-110">
                      <Phone className="h-6 w-6 text-teal-700 group-hover:text-teal-800" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-teal-700 transition-colors duration-300">Phone</h3>
                      <p className="text-gray-600 group-hover:text-teal-600 transition-colors duration-300">+91 1234567890</p>
                      <p className="text-gray-600 group-hover:text-teal-600 transition-colors duration-300">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-amber-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                    <div className="bg-amber-100 p-3 rounded-full mr-4 group-hover:bg-amber-200 transition-colors duration-300 group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-amber-700 group-hover:text-amber-800" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-amber-700 transition-colors duration-300">Address</h3>
                      <p className="text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                        123 PG Buddy Street<br />
                        Tech Park, Bangalore<br />
                        Karnataka, India - 560001
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between items-center hover:text-gray-800 transition-colors duration-300">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between items-center hover:text-gray-800 transition-colors duration-300">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between items-center hover:text-gray-800 transition-colors duration-300">
                      <span>Sunday</span>
                      <span className="text-red-500">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-purple-600 transition-colors duration-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:bg-purple-50/30"
                        placeholder="John Doe"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300 group-focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-purple-600 transition-colors duration-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:bg-purple-50/30"
                        placeholder="john@example.com"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300 group-focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-purple-600 transition-colors duration-300">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:bg-purple-50/30"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300 group-focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-purple-600 transition-colors duration-300">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:bg-purple-50/30"
                        placeholder="How can we help you?"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300 group-focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 