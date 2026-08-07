import Header from "./header";
import Footer from "./footer";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function CategoryProducts() {

    const navigate = useNavigate();
    const { route } = useParams();

    const [wishlist, setWishlist] = useState([]);

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

    useEffect(() => {
        getWishlist();
    }, []);


    const toggleWishlist = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            toast.warning("Please Login First");
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

        } else {

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

    const addToCart = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            toast.warning("Please Login First");
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

            if (data.success) {

                toast.success(data.message);

            } else {

                toast.error(data.message);

            }

        } catch (error) {

            console.log(error);
            toast.error("Something Went Wrong");

        }

    };


    const getCategoryDetails = async () => {

        const response = await fetch(

            `http://localhost:4000/category/details/${route}`

        );

        const data = await response.json();

        return data;

    };

    const {

        data,
        isLoading,

    } = useQuery({

        queryKey: ["category-details", route],

        queryFn: getCategoryDetails,

    });

    if (isLoading) {

        return <h1>Loading...</h1>

    }

    return (

        <>

            <Header />

            <div className="max-w-7xl mx-auto py-8 px-5">

                <h1 className="text-4xl font-bold mb-8">

                    {data.category.name}

                </h1>


                <div className="flex gap-4 overflow-x-auto pb-6 mb-10">

                    {

                        data.data.map((subCategory) => (

                            <div

                                key={subCategory._id}

                                onClick={() => navigate(`/subcategory/${subCategory._id}`)}

                                className="min-w-[130px] bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg"

                            >

                                <img

                                    src={subCategory.image}

                                    className="w-20 h-20 object-contain mx-auto"

                                    alt={subCategory.name}

                                />

                                <h2 className="text-center mt-3 font-semibold">

                                    {subCategory.name}

                                </h2>

                            </div>

                        ))

                    }

                </div>

                {

                    data.data.map((subCategory) => (

                        <div

                            key={subCategory._id}

                            className="mb-14"

                        >

                            <div className="flex justify-between items-center mb-5">

                                <h2 className="text-3xl font-bold">

                                    {subCategory.name}

                                </h2>

                                <button

                                    onClick={() =>

                                        navigate(`/subcategory/${subCategory._id}`)

                                    }

                                    className="text-green-600 font-semibold"

                                >

                                    See All →

                                </button>

                            </div>

                            <div className="flex gap-5 overflow-x-auto pb-3">

                                {

                                    subCategory.products.map((product) => (

                                        <div

                                            key={product._id}

                                            className="min-w-[220px] bg-white rounded-xl shadow p-4"

                                        >

                                            <div className="relative">

                                                <img
                                                    src={product.image}
                                                    className="w-full h-40 object-contain"
                                                    alt={product.name}
                                                />

                                                <button
                                                    onClick={() => toggleWishlist(product._id)}
                                                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
                                                >

                                                    {
                                                        wishlist.includes(product._id)
                                                            ? <FaHeart className="text-red-500" />
                                                            : <FaRegHeart className="text-gray-500" />
                                                    }

                                                </button>

                                            </div>

                                            <p className="text-green-600 mt-2">

                                                ⏱ {product.deliveryTime} mins

                                            </p>

                                            <h3 className="font-semibold mt-2">

                                                {product.name}

                                            </h3>

                                            <p className="text-gray-500">

                                                {product.weight}

                                            </p>

                                            <div className="flex justify-between items-center mt-3">

                                                <span className="font-bold">

                                                    ₹{product.price}

                                                </span>

                                                <button
                                                    onClick={() => addToCart(product._id)}
                                                    className="border border-green-600 px-5 py-2 rounded-lg text-green-600"
                                                >
                                                    ADD
                                                </button>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

            <Footer />

        </>

    );

}