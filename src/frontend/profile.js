import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {

        try {

            const response = await fetch("http://localhost:4000/profile", {

                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },

            });

            const data = await response.json();

            if (data.success) {

                setUser(data.data);

            }

            else {

                navigate("/login");

            }

        }

        catch (error) {

            console.log(error);
            navigate("/login");

        }

    };

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
                    My Profile
                </h1>

                <div className="space-y-6">

                    <div className="border rounded-xl p-4">

                        <p className="text-sm text-gray-500 mb-1">
                            Full Name
                        </p>

                        <h2 className="text-xl font-semibold">
                            {user.name}
                        </h2>

                    </div>

                    <div className="border rounded-xl p-4">

                        <p className="text-sm text-gray-500 mb-1">
                            Email Address
                        </p>

                        <h2 className="text-xl font-semibold">
                            {user.email}
                        </h2>

                    </div>

                </div>

                <div className="flex gap-4 mt-10">

                    <button
                        onClick={() => navigate("/")}
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 duration-300"
                    >
                        Back To Home
                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 duration-300"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );

}