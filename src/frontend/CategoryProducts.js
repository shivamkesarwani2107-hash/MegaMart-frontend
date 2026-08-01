import Header from "./header";
import Footer from "./footer";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function CategoryProducts() {

    const navigate = useNavigate();
    const { route } = useParams();

    const getSubCategories = async () => {

        const categoryRes = await fetch(
            "http://localhost:4000/category"
        );

        const categoryData = await categoryRes.json();

        const currentCategory = categoryData.data.find(
            item => item.route === route
        );

        if (!currentCategory) {

            return {
                category:null,
                subCategories:[]
            };

        }

        const subRes = await fetch(

            `http://localhost:4000/subcategory/category/${currentCategory._id}`

        );

        const subData = await subRes.json();

        return {

            category:currentCategory,

            subCategories:subData.data

        };

    };

    const {

        data,
        isLoading,

    } = useQuery({

        queryKey:["subcategory",route],

        queryFn:getSubCategories

    });

    if(isLoading){

        return <h1>Loading...</h1>

    }

    return(

        <>

        <Header/>

        <div className="max-w-7xl mx-auto py-8">

        <h1 className="text-4xl font-bold mb-10">

        {data.category.name}

        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {

            data.subCategories.map(item=>(

                <div

                key={item._id}

                onClick={()=>

                    navigate(

                    `/subcategory/${item._id}`

                    )

                }

                className="cursor-pointer bg-white rounded-xl p-4 shadow hover:shadow-lg"

                >

                <img

                src={item.image}

                className="w-full h-28 object-contain"

                />

                <h2 className="text-center mt-3 font-semibold">

                {item.name}

                </h2>

                </div>

            ))

        }

        </div>

        </div>

        <Footer/>

        </>

    );

}