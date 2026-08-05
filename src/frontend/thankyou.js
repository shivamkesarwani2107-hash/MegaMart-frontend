import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

export default function ThankYou() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-green-50 flex items-center justify-center px-5">

            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center">

                <FaCheckCircle className="text-green-600 text-8xl mx-auto mb-6" />

                <h1 className="text-5xl font-bold text-green-700">

                    Thank You!

                </h1>

                <p className="text-2xl mt-5 font-semibold">

                    Your Order Has Been Placed Successfully 🎉

                </p>

                <p className="text-gray-500 mt-4 leading-7">

                    Thank you for shopping with <span className="font-bold text-green-600">MegaMart</span>.
                    Your payment has been received successfully and your order
                    is now being processed.

                </p>

                <div className="bg-green-100 rounded-2xl p-6 mt-8">

                    <div className="flex justify-between mb-4">

                        <span className="font-semibold">

                            Payment Status

                        </span>

                        <span className="text-green-600 font-bold">

                            Successful

                        </span>

                    </div>

                    <div className="flex justify-between mb-4">

                        <span className="font-semibold">

                            Delivery Time

                        </span>

                        <span className="font-bold">

                            10 - 15 Minutes

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="font-semibold">

                            Order Status

                        </span>

                        <span className="text-orange-500 font-bold">

                            Preparing

                        </span>

                    </div>

                </div>

                <div className="flex gap-5 mt-10">

                    <button

                        onClick={() => navigate("/orders")}

                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold"

                    >

                        <FaShoppingBag className="inline mr-2" />

                        View Orders

                    </button>

                    <button

                        onClick={() => navigate("/")}

                        className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 rounded-xl text-lg font-semibold"

                    >

                        Continue Shopping

                    </button>

                </div>

            </div>

        </div>

    );

}