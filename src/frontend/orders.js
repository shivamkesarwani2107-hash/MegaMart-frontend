import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getOrders();

    }, []);

    const getOrders = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            setLoading(false);
            return;

        }

        try {

            const response = await fetch(

                `http://localhost:4000/orders/${user._id}`

            );

            const data = await response.json();

            if (data.success) {

                setOrders(data.data);

            }

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h1 className="text-center mt-10">Loading...</h1>;

    }

    return (

        <>

            <Header />

            <div className="max-w-6xl mx-auto py-10 px-5">

                <h1 className="text-4xl font-bold mb-8">

                    My Orders

                </h1>

                {

                    orders.length === 0 ?

                        (

                            <h2 className="text-center text-2xl">

                                No Orders Found

                            </h2>

                        )

                        :

                        orders.map(order => (

                            <div

                                key={order._id}

                                className="border rounded-2xl shadow p-6 mb-8"

                            >

                                <div className="flex justify-between mb-5">

                                    <div>

                                        <h2 className="font-bold text-xl">

                                            Order #{order._id.slice(-6)}

                                        </h2>

                                        <p>

                                            Status :
                                            <span className="text-green-600 font-semibold">

                                                {" "}{order.status}

                                            </span>

                                        </p>

                                    </div>

                                    <div className="text-right">

                                        <h3 className="font-bold">

                                            ₹{order.total}

                                        </h3>

                                        <p>

                                            {new Date(order.createdAt).toLocaleString()}

                                        </p>

                                    </div>

                                </div>

                                {

                                    order.items.map(item => (

                                        <div

                                            key={item.product._id}

                                            className="flex justify-between items-center border-t py-4"

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

                                                    <p>

                                                        {item.product.weight}

                                                    </p>

                                                    <p>

                                                        Qty : {item.quantity}

                                                    </p>

                                                </div>

                                            </div>

                                            <h3 className="font-bold">

                                                ₹{item.product.price * item.quantity}

                                            </h3>

                                        </div>

                                    ))

                                }

                            </div>

                        ))

                }

            </div>

            <Footer />

        </>

    );

}