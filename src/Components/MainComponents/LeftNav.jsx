import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    
    const [categories, setCategories ] = useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            setCategories(data.data.news_category)
        })
        .catch(error => {console.log(error);})
    },[])
    console.log(categories);
    return (
        <div className='col-span-3'>
            <h1 className='font-semibold'>All Categories</h1>
            <div>
                {
                    categories.map((category) => <div className=''><button className='btn w-full rounded-md md:w-[94%] my-2 p-2 ' key={category.category_id}>{category.category_name}</button></div>)
                }
            </div>
        </div>
    );
};

export default LeftNav;