import Header from "./header";
import Footer from "./footer";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {

    const navigate = useNavigate();

    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWishlist();
    }, []);

    const getWishlist = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            navigate("/login");
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:4000/wishlist/${user._id}`
            );

            const data = await response.json();

            if (data.success) {
                setWishlist(data.data);
            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const removeWishlist = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

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

        getWishlist();

    };

    const moveToCart = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        await fetch(

            "http://localhost:4000/cart/add",

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

        toast.success("Moved To Cart");

        getWishlist();

    };

    if (loading) {

        return (
            <h1 className="text-center text-2xl mt-20">
                Loading...
            </h1>
        );

    }

    return (

        <>

            <Header />

            <div className="max-w-7xl mx-auto py-10 px-5">

                <h1 className="text-4xl font-bold mb-10">
                    ❤️ My Wishlist
                </h1>

                {

                    wishlist.filter(item => item.product).length === 0 ?

                        (

                            <div className="text-center py-24">

                                <div className="text-8xl mb-5">
                                    ❤️
                                </div>

                                <h2 className="text-4xl font-bold">

                                    No Products In Wishlist

                                </h2>

                                <p className="text-gray-500 mt-3">

                                    Save your favourite products here.

                                </p>

                                <button

                                    onClick={() => navigate("/")}

                                    className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"

                                >

                                    Browse Products

                                </button>

                            </div>

                        )

                        :

                        (

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                                {

                                    wishlist

                                        .filter(item => item.product)

                                        .map(item => (

                                            <div

                                                key={item._id}

                                                className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 p-5"

                                            >

                                                <img

                                                    src={item.product.image}

                                                    alt={item.product.name}

                                                    className="w-full h-52 object-contain"

                                                />

                                                <p className="text-green-600 text-sm mt-2">

                                                    ⏱ {item.product.deliveryTime} MINS

                                                </p>

                                                <h2 className="font-bold mt-2">

                                                    {item.product.name}

                                                </h2>

                                                <p className="text-gray-500">

                                                    {item.product.weight}

                                                </p>

                                                <div className="mt-3">

                                                    <h3 className="font-bold text-xl">

                                                        ₹{item.product.price}

                                                    </h3>

                                                    <p className="line-through text-gray-400">

                                                        ₹{item.product.originalPrice}

                                                    </p>

                                                </div>

                                                <div className="flex gap-2 mt-5">

                                                    <button

                                                        onClick={() => moveToCart(item.product._id)}

                                                        className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"

                                                    >

                                                        Add To Cart

                                                    </button>

                                                    <button

                                                        onClick={() => removeWishlist(item.product._id)}

                                                        className="bg-red-500 text-white px-4 rounded-lg hover:bg-red-600"

                                                    >

                                                        ✕

                                                    </button>

                                                </div>

                                            </div>

                                        ))

                                }

                            </div>

                        )

                }

            </div>

            <Footer />

        </>

    );

}