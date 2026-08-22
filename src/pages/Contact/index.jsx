import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const form = new FormData();

  form.append("access_key", "a80dc4c2-08b7-4567-8bbd-dde5d1e2189d");

  form.append("firstName", formData.firstName);
  form.append("lastName", formData.lastName);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("service", formData.service);
  form.append("message", formData.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form,
  });

  const result = await response.json();

  setLoading(false);

  if (result.success) {
    setSuccess(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  } else {
    alert("Something went wrong.");
  }
};
  return (
    <>
      <Helmet>
        <title>Contact Us | LED4U – Trinayan Corporation</title>
        <meta name="description" content="Contact LED4U for premium government, industrial, and commercial LED lighting solutions in Gujarat and across India." />
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-black relative">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Let's build <br /><span className="text-primary">infrastructure</span> together.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Whether you have a government tender, an industrial requirement, or need lighting consultation, our engineering team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-surface p-8 md:p-12 border border-white/5 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <h3 className="text-2xl font-display font-bold text-white mb-8">Send an Inquiry</h3>
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="Government Tender/Project">Government Tender/Project</option>
                    <option value="Industrial Lighting Supply">Industrial Lighting Supply</option>
                    <option value="Commercial/Decorative Lighting">Commercial/Decorative Lighting</option>
                    <option value="Lighting Consultancy">Lighting Consultancy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-glow transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Headquarters</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        LED4U – Trinayan Corporation
                        FF - 5&6, Sai Dham Complex, opp. Maruti True Value,
                        ABC Chowkdi,Bholav,Bharuch, Gujarat 393015
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Phone</h4>
                      <p className="text-gray-400 text-sm flex flex-col gap-1">
                        <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98241 92708</a>
                        <a href="tel:+919876543211" className="hover:text-primary transition-colors">+91 94271 16700</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Email</h4>
                      <p className="text-gray-400 text-sm flex flex-col gap-1">
                        <a href="mailto:info@led4u.in" className="hover:text-primary transition-colors">trinayan.corporation@gmail.com</a>
                        {/* <a href="mailto:sales@led4u.in" className="hover:text-primary transition-colors">sales@led4u.in</a> */}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Business Hours</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Monday - Saturday<br />
                        9:30 AM - 7:30 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 w-full bg-surface border border-white/5 rounded-sm overflow-hidden grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.455200984029!2d73.00294477505189!3d21.723871580105094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a7d145fecd%3A0x6238cdef0827556e!2sLed4U%20Trinayan%20Corporation!5e0!3m2!1sen!2sin!4v1786027258020!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LED4U Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
