import Header from "./header";
import Footer from "./footer";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function SubCategoryProducts() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        getWishlist();
    }, []);

    const getWishlist = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const response = await fetch(

            `http://localhost:4000/wishlist/${user._id}`

        );

        const data = await response.json();

        if (data.success) {

            setWishlist(
                data.data.map(item => item.product._id)
            );

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
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        userId: user._id
                    })
                }

            );

        }

        else {

            await fetch(

                "http://localhost:4000/wishlist/add",

                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        userId: user._id,

                        productId

                    })

                }

            );

        }

        getWishlist();

    };

    const getProducts = async () => {

        const response = await fetch(

            `http://localhost:4000/product/subcategory/${id}`

        );

        const data = await response.json();

        return data.data;

    };

    const {

        data: products = [],
        isLoading,

    } = useQuery({

        queryKey: ["products", id],

        queryFn: getProducts

    });

    if (isLoading) {

        return <h1>Loading...</h1>

    }

    const addToCart = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            alert("Please Login First");

            navigate("/login");

            return;

        }

        try {

            const response = await fetch(
                "http://localhost:4000/cart/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: user._id,
                        productId
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

        } catch (error) {

            console.log(error);

        }

    };



    return (

        <>

            <Header />

            <div className="max-w-7xl mx-auto py-10">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {

                        products.map(item => (

                            <div

                                key={item._id}

                                className="bg-white rounded-xl shadow p-4"

                            >

                                <div className="relative">

                                    <img

                                        src={item.image}

                                        className="w-full h-48 object-contain"

                                    />

                                    <button

                                        onClick={() => toggleWishlist(item._id)}

                                        className="absolute top-3 right-3 bg-white rounded-full p-3 shadow"

                                    >

                                        {

                                            wishlist.includes(item._id)

                                                ?

                                                <FaHeart className="text-red-500 text-xl" />

                                                :

                                                <FaRegHeart className="text-gray-500 text-xl" />

                                        }

                                    </button>

                                </div>

                                <p className="text-green-600 mt-2">

                                    ⏱ {item.deliveryTime} MINS

                                </p>

                                <h2 className="font-semibold mt-2">

                                    {item.name}

                                </h2>

                                <p>

                                    {item.weight}

                                </p>

                                <h3 className="font-bold mt-2">

                                    ₹{item.price}

                                </h3>

                                <button

                                    onClick={() => addToCart(item._id)}

                                    className="mt-3 w-full border border-green-600 py-2 rounded-lg"

                                >

                                    ADD

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

            <Footer />

        </>

    );

}