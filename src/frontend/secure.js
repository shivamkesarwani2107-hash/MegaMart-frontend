import Header from "./header";
import Footer from "./footer";

export default function Secure() {

    return (

        <>

            <Header />

            <div className="max-w-6xl mx-auto px-5 py-10">

                <h1 className="text-4xl font-bold text-center mb-4">
                    🔒 Secure Shopping
                </h1>

                <p className="text-center text-gray-500 max-w-3xl mx-auto mb-10">
                    Shop with complete confidence. MegaMart provides secure
                    payments, reliable service and a hassle-free shopping
                    experience for every customer.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🔐 Secure Payments
                        </h2>

                        <p className="text-gray-600">
                            Your online payments are protected with trusted
                            payment gateways and advanced encryption to keep
                            your information safe.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            ✅ Trusted Service
                        </h2>

                        <p className="text-gray-600">
                            We deliver quality products from trusted brands
                            with reliable customer support whenever you need
                            assistance.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🚚 Hassle-Free Delivery
                        </h2>

                        <p className="text-gray-600">
                            Enjoy quick doorstep delivery, easy order tracking
                            and a smooth shopping experience from checkout to
                            delivery.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            💬 Customer Support
                        </h2>

                        <p className="text-gray-600">
                            Our support team is always available to help with
                            orders, payments, returns and any shopping-related
                            queries.
                        </p>

                    </div>

                </div>

                <div className="bg-green-50 border rounded-2xl p-8 mt-10">

                    <h2 className="text-3xl font-bold text-green-700 mb-5">
                        Why Customers Trust MegaMart
                    </h2>

                    <ul className="space-y-3 text-gray-700">

                        <li>✔ 100% Secure Online Payments</li>

                        <li>✔ Trusted & Verified Products</li>

                        <li>✔ Safe Checkout Process</li>

                        <li>✔ Fast & Reliable Delivery</li>

                        <li>✔ Easy Returns & Customer Support</li>

                    </ul>

                </div>

            </div>

            <Footer />

        </>

    );

}