import Header from "./header";
import Footer from "./footer";

export default function Fresh() {

    return (

        <>

            <Header />

            <div className="max-w-6xl mx-auto px-5 py-10">

                <h1 className="text-4xl font-bold text-center mb-4">
                    🥬 Farm Fresh Products
                </h1>

                <p className="text-center text-gray-500 max-w-3xl mx-auto mb-10">
                    Fresh fruits, vegetables, dairy products and bakery items
                    sourced every day from trusted farms and local suppliers to
                    ensure the best quality and freshness.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🌱 Fresh Every Morning
                        </h2>

                        <p className="text-gray-600">
                            Our fruits and vegetables are collected daily from
                            farms to maintain freshness and natural taste.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🥛 Dairy Products
                        </h2>

                        <p className="text-gray-600">
                            Fresh milk, curd, butter, paneer and cheese from
                            trusted dairy brands with proper cold storage.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🍞 Fresh Bakery
                        </h2>

                        <p className="text-gray-600">
                            Bread, cakes, cookies and bakery products are baked
                            regularly to deliver soft and delicious items.
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            ✅ Quality Checked
                        </h2>

                        <p className="text-gray-600">
                            Every product goes through quality inspection before
                            being packed and delivered to your doorstep.
                        </p>

                    </div>

                </div>

                <div className="bg-green-50 rounded-2xl p-8 mt-10 border">

                    <h2 className="text-3xl font-bold text-green-700 mb-4">
                        Why Choose MegaMart Fresh?
                    </h2>

                    <ul className="space-y-3 text-gray-700">

                        <li>✔ Fresh products sourced every day</li>

                        <li>✔ Hygienic packaging</li>

                        <li>✔ Trusted brands and local farms</li>

                        <li>✔ Affordable prices</li>

                        <li>✔ 15–30 minute delivery</li>

                    </ul>

                </div>

            </div>

            <Footer />

        </>

    );

}