import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [cartMap, setCartMap] = useState({});
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        getProducts();
        getCart();
        getWishlist();
    }, []);

    const getProducts = async () => {

        try {

            const response = await fetch("http://localhost:4000/product");

            const data = await response.json();

            setProducts(data.data);

        } catch (error) {

            console.log(error);

        }

    };

    const getCart = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const response = await fetch(`http://localhost:4000/cart/${user._id}`);

        const data = await response.json();

        if (!data.success) {

            setCartMap({});
            return;

        }

        const map = {};

        data.data.items.forEach((item) => {

            map[item.product._id] = item.quantity;

        });

        setCartMap(map);

    };

    const addToCart = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            alert("Please Login First");
            navigate("/login");
            return;

        }

        try {

            console.log("User :", user);
            console.log("Product :", productId);

            const response = await fetch(

                "http://localhost:4000/wishlist/add",

                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        userId: user._id,
                        productId,

                    }),

                }

            );

            const data = await response.json();

            if (!response.ok) {

                alert(data.message);
                return;

            }

            await getWishlist();
            await getCart();
            alert("Product Added Successfully");

        } catch (error) {

            console.log(error);
            alert("Something Went Wrong");

        }

    };

    const getWishlist = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const response = await fetch(
            `http://localhost:4000/wishlist/${user._id}`
        );

        const data = await response.json();

        if (data.success) {

            setWishlist(data.data.map(item => item.product._id));

        }

    };

    const toggleWishlist = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            alert("Please Login First");
            navigate("/login");
            return;

        }

        if (wishlist.includes(productId)) {

            await fetch(

                `http://localhost:4000/wishlist/remove/${productId}`,

                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user._id,
                    }),
                }

            );

        }

        else {

            await fetch(

                "http://localhost:4000/wishlist/add",

                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        userId: user._id,
                        productId,

                    }),

                }

            );

        }

        getWishlist();

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
                        products.map((item) => {
                            const quantity = cartMap[item._id] || 0;
                            return (

                                <div
                                    key={item._id}
                                    className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 p-4"
                                >

                                    <div className="relative">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-52 object-contain"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => toggleWishlist(item._id)}
                                            className="absolute top-3 right-3 z-20 bg-white rounded-full p-3 shadow-lg"
                                        >

                                            {

                                                wishlist.includes(item._id)

                                                    ?

                                                    <FaHeart className="text-red-500 text-2xl" />

                                                    :

                                                    <FaRegHeart className="text-gray-500 text-2xl" />

                                            }

                                        </button>

                                    </div>

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

                                        {
                                            quantity > 0 ? (

                                                <div className="flex items-center border border-green-600 rounded-lg">

                                                    <button
                                                        className="px-3 py-2 font-bold"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="px-3">
                                                        {quantity}
                                                    </span>

                                                    <button
                                                        className="px-3 py-2 font-bold"
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            ) : (

                                                <button
                                                    onClick={() => addToCart(item._id)}
                                                    className="border border-green-600 px-5 py-2 rounded-lg"
                                                >
                                                    ADD
                                                </button>

                                            )
                                        }

                                    </div>

                                    <p className="text-sm text-gray-500 mt-3">
                                        {item.brand}
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        {item.subCategory?.category?.name}
                                    </p>

                                </div>

                            );

                        })
                    }

                </div>

            </div>

            <Footer />

        </>

    );

}