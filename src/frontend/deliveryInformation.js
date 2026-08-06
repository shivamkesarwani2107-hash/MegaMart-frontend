import Header from "./header";
import Footer from "./footer";

export default function DeliveryInformation() {

    return (
        
        <>
            <Header />

            <div className="max-w-4xl mx-auto py-10 px-5">

                <h1 className="text-4xl font-bold mb-8">
                    Delivery Information
                </h1>

                <div className="bg-white rounded-2xl shadow p-8 space-y-8">

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            📍 Delivery Address
                        </h2>

                        <p>Shivam Kesarwani</p>
                        <p>Civil Lines</p>
                        <p>Prayagraj, Uttar Pradesh</p>
                        <p>211001</p>
                    </div>

                    <hr />

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            🚚 Delivery Details
                        </h2>

                        <p><b>Delivery Time :</b> 10-15 Minutes</p>

                        <p className="mt-2">
                            <b>Delivery Charges :</b> ₹25
                        </p>

                        <p className="mt-2">
                            <b>Delivery Type :</b> Express Delivery
                        </p>
                    </div>

                    <hr />

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            📦 Delivery Instructions
                        </h2>

                        <ul className="list-disc pl-5 space-y-2 text-gray-600">

                            <li>Please keep your phone reachable.</li>

                            <li>Check the products at delivery.</li>

                            <li>Contact support for damaged items.</li>

                            <li>Delivery partner may call before arrival.</li>

                        </ul>

                    </div>

                    <hr />

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            📞 Support
                        </h2>

                        <p>Email : support@megamart.com</p>

                        <p>Phone : +91 9336991973</p>
                    </div>

                </div>

            </div>

            <Footer />
        </>

    );

}