import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export default function Home() {

    const navigate = useNavigate();

    const getCategory = async () => {

        const response = await fetch("http://localhost:4000/category");

        const data = await response.json();

        return data.data;

    };

    const {

        data: category = [],
        isLoading,
        error,

    } = useQuery({

        queryKey: ["category"],

        queryFn: getCategory,

    });

    if (isLoading) {

        return <h1>Loading...</h1>;

    }

    if (error) {

        return <h1>Something Went Wrong</h1>;

    }

    return (

        <>

            <Header />

            <div className="max-w-7xl mx-auto px-4 py-6">

                <div className="overflow-hidden rounded-3xl shadow-md">

                    <img
                        className="w-full cursor-pointer"
                        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2160/layout-engine/2026-01/Frame-1437256605-2-2.jpg"
                        alt="banner"
                    />

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-12">

                    <img
                        className="rounded-2xl shadow hover:shadow-xl hover:scale-105 duration-300 cursor-pointer"
                        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
                        alt="Pharmacy"
                        onClick={() => navigate("/category/pharma")}
                    />

                    <img
                        className="rounded-2xl shadow hover:shadow-xl hover:scale-105 duration-300 cursor-pointer"
                        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png"
                        alt="Pet Care"
                        onClick={() => navigate("/category/pet")}
                    />

                    <img
                        className="rounded-2xl shadow hover:shadow-xl hover:scale-105 duration-300 cursor-pointer"
                        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png"
                        alt="Baby Care"
                        onClick={() => navigate("/category/baby")}
                    />

                </div>

                <h2 className="text-3xl font-bold mb-6">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                    {
                        category.map((item) => (

                            <div
                                key={item._id}
                                onClick={() => navigate(`/category/${item.route}`)}
                                className="bg-white rounded-2xl p-3 shadow hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer"
                            >

                                <img
                                    className="w-full"
                                    src={item.image}
                                    alt={item.name}
                                />

                                <h3 className="text-center font-semibold mt-2">
                                    {item.name}
                                </h3>

                            </div>

                        ))
                    }

                </div>

                <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl p-10 mt-20 border">

                    <div className="text-center mb-10">

                        <h2 className="text-4xl font-bold text-gray-800">
                            MegaMart – India's Smart Grocery Store
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-4xl mx-auto text-lg">
                            MegaMart brings fresh groceries, daily essentials, beverages,
                            snacks, personal care products, baby care, pet supplies and much
                            more to your doorstep. Shop from trusted brands at affordable
                            prices with lightning-fast delivery.
                        </p>

                    </div>

                    {/* Stats */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h2 className="text-4xl font-bold text-green-600">
                                15+
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Categories
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h2 className="text-4xl font-bold text-green-600">
                                1000+
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Products
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h2 className="text-4xl font-bold text-green-600">
                                15 Min
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Delivery
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h2 className="text-4xl font-bold text-green-600">
                                100%
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Fresh Products
                            </p>

                        </div>

                    </div>

                    {/* Features */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl duration-300">

                            <div className="text-5xl mb-4">
                                🚚
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Fast Delivery
                            </h3>

                            <p className="text-gray-500">
                                Groceries delivered to your doorstep within
                                <span className="font-semibold text-green-600">
                                    {" "}15–30 minutes.
                                </span>
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl duration-300">

                            <div className="text-5xl mb-4">
                                🥬
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Farm Fresh
                            </h3>

                            <p className="text-gray-500">
                                Fresh fruits, vegetables, dairy products and bakery items
                                sourced every day.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl duration-300">

                            <div className="text-5xl mb-4">
                                🛒
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Huge Collection
                            </h3>

                            <p className="text-gray-500">
                                Thousands of grocery essentials and branded products
                                available in one place.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl duration-300">

                            <div className="text-5xl mb-4">
                                🔒
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Secure Shopping
                            </h3>

                            <p className="text-gray-500">
                                Safe payments, reliable service and hassle-free
                                shopping experience.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}