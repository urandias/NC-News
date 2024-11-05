// src/components/ArticleList.jsx
import { useState, useEffect } from 'react';
import { fetchArticles } from '../../api';
import ArticleCard from './ArticleCard';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then((articles) => {
            setArticles(articles);
        });
    }, []);

    return (
        <>
            <ul className="articles">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </ul>
        </>
    );
};

export default ArticleList;
