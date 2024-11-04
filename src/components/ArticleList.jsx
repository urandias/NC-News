import { useState, useEffect } from "react";
import { fetchArticles } from "../../api";
import { Link } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then(articles => {
            setArticles(articles);
        });
    }, []);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const options = {
            timeZone: 'Europe/London',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        return date.toLocaleString('en-GB', options);
    };

    return (
        <>
            <ul>
                {articles.map((article, index) => (
                    <li key={index} className="article-card">
                        <Link to={`/articles/${article.article_id}`}>
                            <button>
                                <h3>{article.title}</h3>
                                <img src={article.article_img_url} alt={article.title} />
                                <p>{`From ${article.author} on ${formatDate(article.created_at)}`}</p>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ArticleList;
