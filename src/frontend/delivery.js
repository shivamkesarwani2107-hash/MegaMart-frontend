import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Delivery() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [address, setAddress] = useState({

        name: "",
        mobile: "",
        email: "",
        house: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",
        notes: "",

    });

    useEffect(() => {

        getProfile();

    }, []);

    if (!state) {

        return (

            <h1 className="text-center text-3xl mt-20">
                No Cart Found
            </h1>

        );

    }

    const {

        cart,
        subtotal,
        deliveryFee,
        platformFee,
        total,

    } = state;

    const getProfile = async () => {

        const token = localStorage.getItem("token");

        if (!token) return;

        try {

            const response = await fetch(
                "http://localhost:4000/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.success) {

                setAddress((prev) => ({

                    ...prev,

                    name: data.data.name,
                    email: data.data.email,

                }));

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setAddress({

            ...address,

            [e.target.name]: e.target.value,

        });

    };

    const handleContinue = () => {

        if (
            !address.name ||
            !address.mobile ||
            !address.email ||
            !address.house ||
            !address.area ||
            !address.city ||
            !address.state ||
            !address.pincode
        ) {

            alert("Please Fill All Required Fields");

            return;

        }

        navigate("/payment", {

            state: {

                cart,

                subtotal,

                deliveryFee,

                platformFee,

                total,

                address,

            },

        });

    };

    return (

        <div className="bg-gray-100 min-h-screen py-8">

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-8">

                    🚚 Delivery Details

                </h1>

                <h2 className="text-xl font-semibold mb-4">

                    Customer Information

                </h2>

                <div className="grid md:grid-cols-2 gap-5 mb-8">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={address.name}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={address.mobile}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={address.email}
                        onChange={handleChange}
                        className="border rounded-lg p-3 md:col-span-2"
                    />

                </div>

                <h2 className="text-xl font-semibold mb-4">

                    Delivery Address

                </h2>

                <div className="grid md:grid-cols-2 gap-5 mb-8">

                    <input
                        type="text"
                        name="house"
                        placeholder="House / Flat No."
                        value={address.house}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="area"
                        placeholder="Street / Area"
                        value={address.area}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="landmark"
                        placeholder="Landmark (Optional)"
                        value={address.landmark}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={address.city}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={address.state}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={address.pincode}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    />

                </div>

                <h2 className="text-xl font-semibold mb-4">

                    Delivery Slot

                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-8">

                    <label className="border rounded-lg p-4 cursor-pointer">
                        <input type="radio" name="slot" className="mr-2" />
                        10 Minutes
                    </label>

                    <label className="border rounded-lg p-4 cursor-pointer">
                        <input type="radio" name="slot" className="mr-2" />
                        30 Minutes
                    </label>

                    <label className="border rounded-lg p-4 cursor-pointer">
                        <input type="radio" name="slot" className="mr-2" />
                        Today Evening
                    </label>

                    <label className="border rounded-lg p-4 cursor-pointer">
                        <input type="radio" name="slot" className="mr-2" />
                        Tomorrow Morning
                    </label>

                </div>

                <h2 className="text-xl font-semibold mb-4">

                    Order Notes

                </h2>

                <textarea
                    rows="4"
                    name="notes"
                    placeholder="Any Special Delivery Instructions..."
                    value={address.notes}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-8"
                />

                <button
                    onClick={handleContinue}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 duration-300"
                >

                    Continue To Payment

                </button>

            </div>

        </div>

    );

}