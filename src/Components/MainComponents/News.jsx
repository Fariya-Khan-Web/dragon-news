import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const News = () => {

    const data = useLoaderData()
    const allNews = data.data

    return (
        <div className='col-span-6'>
            <h2 className='font-semibold text-2xl'>Dragon News Home</h2>
            {
                allNews.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
            }
        </div>
    );
};

export default News;