// src/components/ArticlePage.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchArticleById } from '../../api';
import { formatDate } from '../utils/utils';
import Comments from './Comments';

function ArticlePage() {
    const { articleId } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetchArticleById(articleId).then((article) => {
            setArticle(article);
        });
    }, [articleId]);

    return (
        <div className="article">
            <h1>{article.title}</h1>
            <p>{article.author}</p>
            <p>{formatDate(article.created_at)}</p>
            <p>{article.topic}</p>
            <p>{article.body}</p>
            <p>Votes: {article.votes}</p>
            <Comments articleId={articleId} />
        </div>
    );
}

export default ArticlePage;
