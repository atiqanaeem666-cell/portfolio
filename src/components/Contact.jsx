import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:atiqanaeem666@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 bg-[#ff4d6d] p-10 rounded-3xl shadow-lg border border-transparent">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 bg-black/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-white/70 placeholder:text-white/70"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 bg-black/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-white/70 placeholder:text-white/70"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-4 bg-black/10 text-white rounded-xl h-32 outline-none focus:ring-2 focus:ring-white/70 placeholder:text-white/70"
          ></textarea>
          <button type="submit" className="w-full py-4 text-white font-bold rounded-xl hover:opacity-90 transition bg-black/10">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
