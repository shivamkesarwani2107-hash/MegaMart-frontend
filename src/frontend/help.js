export default function Help() {
    return (

        <div className="min-h-screen bg-gray-100 py-10 px-4">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-3">
                    Help Center
                </h1>

                <p className="text-center text-gray-500 mb-10">
                    Find answers to the most common questions.
                </p>

                <div className="space-y-5">

                    <div className="bg-white shadow rounded-xl p-6">

                        <h2 className="text-xl font-semibold">
                            📦 How can I track my order?
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Go to the Orders page to check your order status and delivery updates.
                        </p>

                    </div>

                    <div className="bg-white shadow rounded-xl p-6">

                        <h2 className="text-xl font-semibold">
                            ❌ How do I cancel my order?
                        </h2>

                        <p className="text-gray-600 mt-2">
                            You can cancel your order before it is shipped from the Orders page.
                        </p>

                    </div>

                    <div className="bg-white shadow rounded-xl p-6">

                        <h2 className="text-xl font-semibold">
                            💳 What if my payment fails?
                        </h2>

                        <p className="text-gray-600 mt-2">
                            If payment fails, the amount will be refunded automatically within a few business days.
                        </p>

                    </div>

                    <div className="bg-white shadow rounded-xl p-6">

                        <h2 className="text-xl font-semibold">
                            🔄 How can I return a product?
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Eligible products can be returned from the Orders page within the return period.
                        </p>

                    </div>

                    <div className="bg-white shadow rounded-xl p-6">

                        <h2 className="text-xl font-semibold">
                            🔐 I forgot my password.
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Click on the "Forgot Password" option on the Login page to reset your password.
                        </p>

                    </div>

                    <div className="bg-white shadow rounded-xl p-6">

                        <h2 className="text-xl font-semibold">
                            🚚 What are the delivery timings?
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Orders are generally delivered within 10–30 minutes depending on your location.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
}