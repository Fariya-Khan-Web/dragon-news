import React from 'react';
import Header from '../Components/Header';
import RightPart from '../Components/MainComponents/RightPart';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data = useLoaderData()
    const news = data.data[0]
    console.log(news);

    return (
        <div className='w-11/12 mx-auto'>
            <Header />
            <div className='grid md:grid-cols-12 mt-16'>
                <div className='col-span-9'>
                    <h1 className='font-bold text-2xl'>Dragon News</h1>
                    <div className="bg-white w-full shadow-md rounded-lg p-6 max-w-5xl my-6">
                        {/* Image */}
                        <img
                            src={news.thumbnail_url}
                            alt="Thumbnail"
                            className="w-full h-96 object-cover rounded"
                        />

                        {/* Title */}
                        <h2 className="text-2xl font-bold my-4 leading-tight">{news.title}</h2>

                        {/* Details */}
                        <p className="text-gray-600 text-lg mb-6">{news.details}</p>

                        {/* Footer */}
                        <div className="mt-6 border-t pt-4 flex justify-between items-center">
                            <Link to={`/category/${news.category_id}`} className="btn text-white bg-[#D72050] text-base rounded-md">
                                ← All news in this category
                            </Link>
                        </div>
                    </div>
                </div>
                <RightPart />
            </div>

        </div>
    );
};

export default NewsDetails;