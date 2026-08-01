import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (

        <footer className="bg-gray-900 text-white mt-16">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Logo */}

                    <div>

                        <h1 className="text-3xl font-bold text-green-400">
                            MegaMart
                        </h1>

                        <p className="text-gray-400 mt-4">
                            Grocery delivered to your doorstep in minutes.
                            Fresh products at the best prices.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h2 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h2>

                        <ul className="space-y-2 text-gray-400">

                            <li
                                onClick={() => navigate("/")}
                                className="hover:text-green-400 cursor-pointer">
                                Home
                            </li>

                            <li
                                onClick={() => navigate("/products")}
                                className="hover:text-green-400 cursor-pointer">
                                Products
                            </li>

                            <li
                                onClick={() => navigate("/cart")}
                                className="hover:text-green-400 cursor-pointer">
                                Cart
                            </li>

                            <li
                                onClick={() => navigate("/help")}
                                className="hover:text-green-400 cursor-pointer">
                                Help
                            </li>

                            <li
                                onClick={() => navigate("/contact")}
                                className="hover:text-green-400 cursor-pointer">
                                Contact
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h2 className="text-xl font-semibold mb-4">
                            Contact
                        </h2>

                        <p className="text-gray-400">
                            📍 Prayagraj, Uttar Pradesh
                        </p>

                        <p className="text-gray-400 mt-2">
                            📧 support@megamart.com
                        </p>

                        <p className="text-gray-400 mt-2">
                            📞 +91 9336991973
                        </p>

                    </div>

                </div>

                <hr className="border-gray-700 my-8" />

                <div className="text-center text-gray-400">

                    © 2026 <span className="text-green-400 font-semibold">
                        MegaMart
                    </span>. All Rights Reserved.

                </div>

            </div>

        </footer>

    );
}