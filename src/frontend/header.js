import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("token");

    return (

        <header className="bg-white shadow sticky top-0 z-50">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <h1
                    onClick={() => navigate("/")}
                    className="text-3xl font-bold text-green-600 cursor-pointer"
                >
                    MegaMart
                </h1>

                <div className="hidden md:flex flex-1 mx-10">

                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-500"
                    />

                </div>

                <div className="flex items-center gap-3">

                    {

                        isLoggedIn ? (

                            <button
                                onClick={() => navigate("/profile")}
                                className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white duration-300"
                            >
                                Profile
                            </button>

                        ) : (

                            <button
                                onClick={() => navigate("/login")}
                                className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white duration-300"
                            >
                                Login
                            </button>

                        )

                    }

                    <button
                        onClick={() => navigate("/cart")}
                        className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 duration-300"
                    >
                        🛒 Cart
                    </button>

                </div>

            </div>

        </header>

    );

}