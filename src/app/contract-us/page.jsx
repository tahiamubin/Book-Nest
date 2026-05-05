'use client'
const Contact = () => {
  const handleSubmit = () => {
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">📩 Contact Us</h2>
        <p className="text-center text-gray-500 mb-8">Have any questions? We'd love to hear from you!</p>

        {/* Form */}
        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message..."
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>

        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-500 space-y-2">
          <p>📧 support@bookstore.com</p>
          <p>📞 +1 (800) 123-4567</p>
          <p>📍 123 Book Street, Reading City, Bangladesh</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;