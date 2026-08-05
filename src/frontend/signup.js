import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {

        if (!name || !email || !password || !confirmPassword) {
            toast.warning("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.warning("Password and Confirm Password do not match");
            return;
        }

        try {

            const response = await fetch("http://localhost:4000/signup", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),

            });

            const data = await response.json();

            if (data.success) {

                toast.success(data.message);

                navigate("/login");

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
                    Create Account
                </h1>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-green-500"
                />

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
                    className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-green-500"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-6 outline-none focus:border-green-500"
                />

                <button
                    onClick={handleSignup}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 duration-300"
                >
                    Sign Up
                </button>

                <p className="text-center mt-5">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-green-600 font-semibold ml-2"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}