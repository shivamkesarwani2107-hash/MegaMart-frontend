import Header from "./header";
import Footer from "./footer";

export default function Collection() {

    return (

        <>

            <Header />

            <div className="max-w-6xl mx-auto px-5 py-10">

                <h1 className="text-4xl font-bold text-center mb-4">
                    🛒 Huge Collection
                </h1>

                <p className="text-center text-gray-500 max-w-3xl mx-auto mb-10">
                    Explore thousands of grocery essentials, daily needs,
                    beverages, snacks, personal care products, baby care,
                    pet supplies and premium branded products all in one place.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🥦 Grocery Essentials
                        </h2>

                        <p className="text-gray-600">
                            Rice, flour, pulses, cooking oil, spices, sugar,
                            tea, coffee and all daily household essentials.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🥤 Beverages & Snacks
                        </h2>

                        <p className="text-gray-600">
                            Soft drinks, juices, biscuits, chips, chocolates,
                            cookies and healthy snacks from top brands.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🧴 Personal Care
                        </h2>

                        <p className="text-gray-600">
                            Soap, shampoo, toothpaste, skincare, hair care,
                            cosmetics and hygiene products.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🍼 Baby & Pet Care
                        </h2>

                        <p className="text-gray-600">
                            Baby food, diapers, toys, pet food, grooming and
                            healthcare essentials for your family.
                        </p>

                    </div>

                </div>

                <div className="bg-green-50 rounded-2xl border p-8 mt-10">

                    <h2 className="text-3xl font-bold text-green-700 mb-5">
                        Why Shop With MegaMart?
                    </h2>

                    <ul className="space-y-3 text-gray-700">

                        <li>✔ Thousands of products available</li>

                        <li>✔ Trusted national & international brands</li>

                        <li>✔ Affordable prices and exciting offers</li>

                        <li>✔ Fresh stock updated regularly</li>

                        <li>✔ Fast doorstep delivery</li>

                    </ul>

                </div>

            </div>

            <Footer />

        </>

    );

}