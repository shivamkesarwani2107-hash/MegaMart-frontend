import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        if (!email || !password) {
            toast.warning("Please fill all fields");
            return;
        }

        try {

            const response = await fetch("http://localhost:4000/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email,
                    password,
                }),

            });

            const data = await response.json();

            if (data.success) {

                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                toast.success(data.message);

                navigate("/");

            }

            else {

                toast.error(data.message);

            }

        }

        catch (error) {

            console.log(error);

            toast.error("Something went wrong");

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-green-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-6 outline-none focus:border-green-500"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 duration-300"
                >
                    Login
                </button>

                <p className="text-center mt-5">

                    Don't have an account?

                    <Link
                        to="/signup"
                        className="text-green-600 font-semibold ml-2"
                    >
                        Sign Up
                    </Link>

                </p>

            </div>

        </div>

    );

}