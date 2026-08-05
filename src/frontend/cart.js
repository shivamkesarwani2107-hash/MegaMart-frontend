import Header from "./header";
import Footer from "./footer";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {

    const [cart, setCart] = useState(null);

    const [loading, setLoading] = useState(true);

    const deliveryFee =
        cart && cart.items.length > 0 ? 25 : 0;

    const platformFee =
        cart && cart.items.length > 0 ? 5 : 0;

    const subtotal =
        cart?.items?.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0) || 0;

    const total = subtotal + deliveryFee + platformFee;
    const navigate = useNavigate();

    useEffect(() => {

        getCart();

    }, []);

    const getCart = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            setLoading(false);

            return;

        }

        try {

            const response = await fetch(

                `http://localhost:4000/cart/${user._id}`

            );

            const data = await response.json();

            if (data.success) {

                setCart(data.data);

            }

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    const increaseQuantity = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        try {

            const response = await fetch(

                `http://localhost:4000/cart/increase/${productId}`,

                {

                    method: "PATCH",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        userId: user._id

                    })

                }

            );

            const data = await response.json();

            if (data.success) {

                getCart();

            }

            else {

                toast.success(data.message);

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    const decreaseQuantity = async (productId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        try {

            const response = await fetch(

                `http://localhost:4000/cart/decrease/${productId}`,

                {

                    method: "PATCH",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        userId: user._id

                    })

                }

            );

            const data = await response.json();

            if (data.success) {

                getCart();

            }

            else {

                toast.error(data.message);

            }

        }
        catch (error) {

            console.log(error);

        }

    };

    if (loading) {

        return <h1 className="text-center mt-10">Loading...</h1>;

    }

    return (

        <>

            <Header />

            <div className="max-w-7xl mx-auto py-10 px-5">

                <h1 className="text-4xl font-bold mb-8">

                    My Cart

                </h1>

                {

                    !cart || cart.items.length === 0 ?

                        (

                            <h2 className="text-2xl text-center">

                                Cart Empty

                            </h2>

                        )

                        :

                        (

                            cart.items.map(item => (

                                <div

                                    key={item.product._id}

                                    className="flex items-center justify-between border rounded-xl p-5 mb-5"

                                >

                                    <div className="flex gap-5 items-center">

                                        <img

                                            src={item.product.image}

                                            className="w-24 h-24 object-contain"

                                            alt={item.product.name}

                                        />

                                        <div>

                                            <h2 className="font-bold text-xl">

                                                {item.product.name}

                                            </h2>

                                            <p>

                                                {item.product.weight}

                                            </p>

                                            <h3 className="font-bold text-green-600 mt-2">

                                                ₹{item.product.price}

                                            </h3>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <button

                                            onClick={() => decreaseQuantity(item.product._id)}

                                            className="w-10 h-10 rounded-full bg-red-500 text-white text-xl"

                                        >

                                            -

                                        </button>

                                        <span className="text-xl font-bold">

                                            {item.quantity}

                                        </span>

                                        <button

                                            onClick={() => increaseQuantity(item.product._id)}

                                            className="w-10 h-10 rounded-full bg-green-600 text-white text-xl"

                                        >

                                            +

                                        </button>

                                    </div>
                                </div>

                            ))

                        )

                }
                <div className="mt-10 border rounded-2xl p-6 shadow">

                    <h2 className="text-2xl font-bold mb-6">

                        Order Summary

                    </h2>

                    <div className="flex justify-between mb-4">

                        <span>Subtotal</span>

                        <span>₹{subtotal}</span>

                    </div>

                    <div className="flex justify-between mb-4">

                        <span>Delivery Fee</span>

                        <span>₹{deliveryFee}</span>

                    </div>

                    <div className="flex justify-between mb-4">

                        <span>Platform Fee</span>

                        <span>₹{platformFee}</span>

                    </div>

                    <hr className="my-5" />

                    <div className="flex justify-between text-xl font-bold">

                        <span>Total</span>

                        <span>₹{total}</span>

                    </div>

                    <button
                        onClick={() =>
                            navigate("/payment", {
                                state: {
                                    cart,
                                    subtotal,
                                    deliveryFee,
                                    platformFee,
                                    total,
                                },
                            })
                        }
                        className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                    >
                        Proceed To Checkout
                    </button>

                </div>

            </div>

            <Footer />

        </>

    );

}