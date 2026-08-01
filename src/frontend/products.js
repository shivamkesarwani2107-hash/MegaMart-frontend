import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {

        try {

            const response = await fetch("http://localhost:4000/product");

            const data = await response.json();

            setProducts(data.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <>

            <Header />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold text-center mb-10">
                    All Products
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {

                        products.map((item) => (

                            <div
                                key={item._id}
                                className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 p-4"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-52 object-contain"
                                />

                                <p className="text-xs text-green-600 font-semibold mt-2">
                                    ⏱ {item.deliveryTime} MINS
                                </p>

                                <h2 className="font-semibold mt-2">
                                    {item.name}
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    {item.weight}
                                </p>

                                <div className="flex justify-between items-center mt-4">

                                    <div>

                                        <h3 className="font-bold">
                                            ₹{item.price}
                                        </h3>

                                        <p className="text-gray-400 line-through text-sm">
                                            ₹{item.originalPrice}
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => navigate("/cart")}
                                        className="border border-green-600 text-green-600 px-5 py-2 rounded-lg hover:bg-green-600 hover:text-white duration-300"
                                    >
                                        ADD
                                    </button>

                                </div>

                                <p className="text-sm text-gray-500 mt-3">
                                    {item.brand}
                                </p>

                                <p className="text-xs text-gray-400 mt-1">
                                    {item.category?.name}
                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

            <Footer />

        </>

    );

}