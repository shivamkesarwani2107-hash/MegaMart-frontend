import Header from "./header";
import Footer from "./footer";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {

    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {

        return (
            <>
                <Header />

                <h1 className="text-center text-3xl mt-20">
                    No Order Found
                </h1>

                <Footer />
            </>
        );

    }

    const {
        cart,
        subtotal,
        deliveryFee,
        platformFee,
        total,
    } = state;

    const handlePayment = async () => {

        try {

            const response = await fetch(
                "http://localhost:4000/payment/create-order",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: total,
                    }),
                }
            );

            const data = await response.json();

            if (!data.success) {

                toast.error("Order Create Failed");
                return;

            }

            const user = JSON.parse(localStorage.getItem("user"));

            const options = {

                key: "rzp_test_TFjzBqCubiX75P",

                amount: data.order.amount,

                currency: data.order.currency,

                name: "MegaMart",

                description: "MegaMart Payment",

                order_id: data.order.id,

                handler: async function (response) {

                    try {

                        const orderResponse = await fetch(
                            "http://localhost:4000/payment/success",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({

                                    userId: user._id,

                                    paymentId:
                                        response.razorpay_payment_id,

                                    orderId:
                                        response.razorpay_order_id,

                                    subtotal,

                                    deliveryFee,

                                    platformFee,

                                    total,

                                }),
                            }
                        );

                        const orderData = await orderResponse.json();

                        if (orderData.success) {

                            toast.success("Order Placed Successfully ✅");

                            navigate("/thankyou");

                        } else {

                            toast.error(orderData.message); 

                        }

                    } catch (error) {

                        console.log(error);

                        toast.error("Order Save Failed");

                    }

                },

                prefill: {

                    name: user?.name,

                    email: user?.email,

                },

                theme: {

                    color: "#16a34a",

                },

            };

            const razorpay = new window.Razorpay(options);

            razorpay.open();

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <>
            <Header />

            <div className="max-w-5xl mx-auto py-10 px-5">

                <h1 className="text-4xl font-bold mb-10">
                    Checkout
                </h1>

                <div className="grid md:grid-cols-2 gap-8">

                    <div>

                        <h2 className="text-2xl font-bold mb-5">
                            Order Items
                        </h2>

                        {cart.items.map((item) => (

                            <div
                                key={item.product._id}
                                className="flex justify-between items-center border rounded-xl p-4 mb-4"
                            >

                                <div className="flex gap-4">

                                    <img
                                        src={item.product.image}
                                        className="w-20 h-20 object-contain"
                                        alt=""
                                    />

                                    <div>

                                        <h3 className="font-bold">
                                            {item.product.name}
                                        </h3>

                                        <p>{item.product.weight}</p>

                                        <p>
                                            Qty : {item.quantity}
                                        </p>

                                    </div>

                                </div>

                                <h3 className="font-bold">
                                    ₹{item.product.price * item.quantity}
                                </h3>

                            </div>

                        ))}

                    </div>

                    <div className="border rounded-2xl p-6 shadow h-fit">

                        <h2 className="text-2xl font-bold mb-6">
                            Payment Summary
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
                            onClick={handlePayment}
                            className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl"
                        >
                            Pay ₹{total}
                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>

    );

}