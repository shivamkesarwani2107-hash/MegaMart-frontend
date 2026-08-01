export default function Contact() {
    return (

        <div className="max-w-5xl mx-auto px-6 py-12">

            <h1 className="text-4xl font-bold text-center mb-3">
                Contact Us
            </h1>

            <p className="text-gray-500 text-center mb-10">
                We'd love to hear from you. Feel free to contact us anytime.
            </p>

            <div className="bg-white shadow-lg rounded-2xl p-8">

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Info */}

                    <div>

                        <h2 className="text-2xl font-semibold mb-6">
                            Get In Touch
                        </h2>

                        <p className="mb-4">
                            📍 <span className="font-medium">Address:</span><br />
                            Prayagraj, Uttar Pradesh
                        </p>

                        <p className="mb-4">
                            📞 <span className="font-medium">Phone:</span><br />
                            +91 9336991973
                        </p>

                        <p className="mb-4">
                            📧 <span className="font-medium">Email:</span><br />
                            support@megamart.com
                        </p>

                        <p>
                            🕒 <span className="font-medium">Working Hours:</span><br />
                            Monday - Sunday (8:00 AM - 10:00 PM)
                        </p>

                    </div>

                    {/* Contact Form */}

                    <div>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3 mb-4 outline-none focus:border-green-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-lg p-3 mb-4 outline-none focus:border-green-500"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border rounded-lg p-3 mb-4 outline-none focus:border-green-500"
                        ></textarea>

                        <button
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 duration-300">
                            Send Message
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}