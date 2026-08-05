import { FaUsers, FaBoxOpen, FaShoppingCart, FaTags, FaLayerGroup, FaChartLine, FaTicketAlt } from "react-icons/fa";

export default function Admin() {

    return (

        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}

            <div className="w-72 bg-gray-900 text-white p-6">

                <h1 className="text-3xl font-bold text-green-400 mb-10">

                    MegaMart Admin

                </h1>

                <div className="space-y-4">

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        📊 Dashboard
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        📂 Categories
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        🏷 Sub Categories
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        📦 Products
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        👥 Users
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        🛒 Orders
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        🎟 Coupons
                    </button>

                    <button className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
                        📈 Analytics
                    </button>

                </div>

            </div>

            {/* Main */}

            <div className="flex-1">

                {/* Navbar */}

                <div className="bg-white shadow flex justify-between items-center px-8 py-5">

                    <h2 className="text-3xl font-bold">

                        Dashboard

                    </h2>

                    <button className="bg-red-500 text-white px-5 py-2 rounded-lg">

                        Logout

                    </button>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-4 gap-6 p-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <FaUsers className="text-4xl text-blue-500" />

                        <h2 className="text-3xl font-bold mt-4">

                            120

                        </h2>

                        <p>Total Users</p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <FaBoxOpen className="text-4xl text-green-500" />

                        <h2 className="text-3xl font-bold mt-4">

                            450

                        </h2>

                        <p>Products</p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <FaLayerGroup className="text-4xl text-purple-500" />

                        <h2 className="text-3xl font-bold mt-4">

                            24

                        </h2>

                        <p>Categories</p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <FaShoppingCart className="text-4xl text-red-500" />

                        <h2 className="text-3xl font-bold mt-4">

                            640

                        </h2>

                        <p>Orders</p>

                    </div>

                </div>

                {/* Revenue */}

                <div className="grid grid-cols-2 gap-8 px-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-2xl font-bold mb-5">

                            Revenue

                        </h2>

                        <h1 className="text-5xl text-green-600 font-bold">

                            ₹5,45,250

                        </h1>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-2xl font-bold mb-5">

                            Coupons

                        </h2>

                        <h1 className="text-5xl text-blue-600 font-bold">

                            12

                        </h1>

                    </div>

                </div>

                {/* Recent Orders */}

                <div className="bg-white shadow rounded-xl m-8 p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Recent Orders

                    </h2>

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="py-3">Customer</th>

                                <th>Product</th>

                                <th>Amount</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="border-b">

                                <td className="py-4">

                                    Shivam

                                </td>

                                <td>

                                    Amul Milk

                                </td>

                                <td>

                                    ₹90

                                </td>

                                <td className="text-green-600">

                                    Delivered

                                </td>

                            </tr>

                            <tr className="border-b">

                                <td className="py-4">

                                    Rahul

                                </td>

                                <td>

                                    Bread

                                </td>

                                <td>

                                    ₹55

                                </td>

                                <td className="text-orange-500">

                                    Packed

                                </td>

                            </tr>

                            <tr>

                                <td className="py-4">

                                    Aman

                                </td>

                                <td>

                                    Coffee

                                </td>

                                <td>

                                    ₹240

                                </td>

                                <td className="text-blue-500">

                                    Placed

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}