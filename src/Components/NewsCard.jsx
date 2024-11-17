import React from 'react';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-white shadow-xl rounded-lg p-4 my-6 w-full">
            {/* Author and Date */}
            <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">{news.author.name}</p>
                        <p className="text-xs text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>
                <button className="btn btn-circle btn-sm">
                    <span className="material-icons"><CiBookmark className='text-xl' /></span>
                </button>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-2">{news.title}</h2>

            {/* Thumbnail */}
            <img
                src={news.thumbnail_url}
                alt="Thumbnail"
                className="rounded-lg w-full h-48 object-cover mb-4"
            />

            {/* Details */}
            <p className="text-sm text-gray-600 line-clamp-3">
                {news.details} <span className="text-blue-500 cursor-pointer">Read More</span>
            </p>

            {/* Footer (Rating and Views) */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-yellow-500">
                    <AiFillStar />
                    <p className="ml-1 text-sm font-semibold">{news.rating.number}</p>
                </div>
                <div className="flex items-center text-gray-500">
                    <AiOutlineEye />
                    <p className="ml-1 text-sm">{news.total_view}</p>
                </div>
            </div>
        </div>
    );
};



export default NewsCard;