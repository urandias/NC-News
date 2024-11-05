import { Link } from 'react-router-dom';
import { formatDate } from '../utils/utils';

function ArticleCard({ article }) {
    return (
        <li className="article-card">
            <Link to={`/articles/${article.article_id}`}>
                <button>
                    <h3>{article.title}</h3>
                    <img src={article.article_img_url} alt={article.title} />
                    <p>{`From ${article.author} on ${formatDate(article.created_at)}`}</p>
                </button>
            </Link>
        </li>
    );
}

export default ArticleCard;

