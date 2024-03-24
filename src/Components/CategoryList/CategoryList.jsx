// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="">
            <div className="p-5 text-center">
            <h2 className="text-5xl font-extrabold">Job Category List:{categories.length}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Eveniet animi tempora error eaque quasi vel eius ratione doloremque quidem officiis?</p>
            </div>
            <div className="flex justify-around">
                {
                    categories.map(category=><Category key={category.id} category={category}></Category>)
                }
            </div>
            
        </div>
    );
};

export default CategoryList;