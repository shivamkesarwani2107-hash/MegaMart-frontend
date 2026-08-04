import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const [cartCount, setCartCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("token");

    useEffect(() => {

        getCartCount();

    }, [location.pathname]);

    const getCartCount = async () => {

        if (!user) {

            setCartCount(0);
            return;

        }

        try {

            const response = await fetch(
                `http://localhost:4000/cart/${user._id}`
            );

            const data = await response.json();

            if (data.success) {

                const total = data.data.items.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                );

                setCartCount(total);

            }

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <header className="sticky top-0 z-50 bg-white shadow">

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

                {/* Logo */}

                <h1
                    onClick={() => navigate("/")}
                    className="text-2xl md:text-3xl font-bold text-green-600 cursor-pointer"
                >
                    MegaMart
                </h1>

                {/* Desktop Search */}

                <div className="hidden lg:flex flex-1 mx-8">

                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border rounded-xl px-5 py-3 outline-none focus:border-green-600"
                    />

                </div>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-4">

                    <button
                        onClick={() => navigate("/")}
                        className="hover:text-green-600"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => navigate("/wishlist")}
                        className="hover:text-green-600"
                    >
                        ❤️ Wishlist
                    </button>

                    {

                        isLoggedIn &&

                        <button
                            onClick={() => navigate("/orders")}
                            className="hover:text-green-600"
                        >
                            📦 Orders
                        </button>

                    }

                    {

                        isLoggedIn ?

                            <button
                                onClick={() => navigate("/profile")}
                                className="border border-green-600 px-4 py-2 rounded-lg text-green-600 hover:bg-green-600 hover:text-white"
                            >
                                Profile
                            </button>

                            :

                            <button
                                onClick={() => navigate("/login")}
                                className="border border-green-600 px-4 py-2 rounded-lg text-green-600 hover:bg-green-600 hover:text-white"
                            >
                                Login
                            </button>

                    }

                    <button
                        onClick={() => navigate("/cart")}
                        className="relative bg-green-600 text-white px-5 py-2 rounded-lg"
                    >

                        🛒

                        {

                            cartCount > 0 &&

                            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-6 h-6 rounded-full flex items-center justify-center">

                                {cartCount}

                            </span>

                        }

                    </button>

                </div>

                {/* Mobile Menu Button */}

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {

                        menuOpen ?

                            <FaTimes />

                            :

                            <FaBars />

                    }

                </button>

            </div>

            {/* Mobile Menu */}

            {

                menuOpen &&

                <div className="md:hidden border-t bg-white">

                    <div className="p-4">

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded-lg p-3 mb-4"
                        />

                        <div className="flex flex-col gap-3">

                            <button
                                onClick={() => {
                                    navigate("/");
                                    setMenuOpen(false);
                                }}
                                className="text-left"
                            >
                                🏠 Home
                            </button>

                            <button
                                onClick={() => {
                                    navigate("/wishlist");
                                    setMenuOpen(false);
                                }}
                                className="text-left"
                            >
                                ❤️ Wishlist
                            </button>

                            {

                                isLoggedIn &&

                                <button
                                    onClick={() => {
                                        navigate("/orders");
                                        setMenuOpen(false);
                                    }}
                                    className="text-left"
                                >
                                    📦 Orders
                                </button>

                            }

                            {

                                isLoggedIn ?

                                    <button
                                        onClick={() => {
                                            navigate("/profile");
                                            setMenuOpen(false);
                                        }}
                                        className="text-left"
                                    >
                                        👤 Profile
                                    </button>

                                    :

                                    <button
                                        onClick={() => {
                                            navigate("/login");
                                            setMenuOpen(false);
                                        }}
                                        className="text-left"
                                    >
                                        🔐 Login
                                    </button>

                            }

                            <button
                                onClick={() => {
                                    navigate("/cart");
                                    setMenuOpen(false);
                                }}
                                className="text-left"
                            >
                                🛒 Cart ({cartCount})
                            </button>

                        </div>

                    </div>

                </div>

            }

        </header>

    );

}