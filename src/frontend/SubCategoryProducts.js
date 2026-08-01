import Header from "./header";
import Footer from "./footer";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function SubCategoryProducts() {

    const navigate = useNavigate();

    const { id } = useParams();

    const getProducts = async () => {

        const response = await fetch(

            `http://localhost:4000/product/subcategory/${id}`

        );

        const data = await response.json();

        return data.data;

    };

    const {

        data: products = [],
        isLoading,

    } = useQuery({

        queryKey:["products",id],

        queryFn:getProducts

    });

    if(isLoading){

        return <h1>Loading...</h1>

    }

    return(

        <>

        <Header/>

        <div className="max-w-7xl mx-auto py-10">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {

            products.map(item=>(

                <div

                key={item._id}

                className="bg-white rounded-xl shadow p-4"

                >

                <img

                src={item.image}

                className="w-full h-48 object-contain"

                />

                <p className="text-green-600 mt-2">

                ⏱ {item.deliveryTime} MINS

                </p>

                <h2 className="font-semibold mt-2">

                {item.name}

                </h2>

                <p>

                {item.weight}

                </p>

                <h3 className="font-bold mt-2">

                ₹{item.price}

                </h3>

                <button

                onClick={()=>navigate("/cart")}

                className="mt-3 w-full border border-green-600 py-2 rounded-lg"

                >

                ADD

                </button>

                </div>

            ))

        }

        </div>

        </div>

        <Footer/>

        </>

    );

}