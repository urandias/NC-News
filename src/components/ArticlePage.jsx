// src/components/ArticlePage.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchArticleById } from '../../api';
import { formatDate } from '../utils/utils';
import Comments from './Comments';
import { patchArticleVotes } from '../../api';

function ArticlePage() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [votes, setVotes] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true)
        fetchArticleById(articleId).then((article) => {
            setArticle(article);
            setVotes(article.votes);
            setError(null)
            setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    }, [articleId]);

    if (loading) {
      return <p>Loading article...</p>
    } 
    
    if (error) {
      return <p>{error}</p>
    }


    const handleVote = (increment) => {
      setVotes((preVotes) => preVotes + increment)
      patchArticleVotes(article.article_id, increment)
      .then((updatedArticle) => {
        setVotes(updatedArticle.votes)
      })
    }

    return (
        <div className="article">
            <h1>{article.title}</h1>
            <p>{article.author}</p>
            <p>{formatDate(article.created_at)}</p>
            <p>{article.topic}</p>
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.body}</p>
            <p>Votes: {votes}</p>
            <button onClick={() => handleVote(1)}>👍</button>
            <button onClick={() => handleVote(-1)}>👎</button>
            <Comments articleId={articleId} />
        </div>
    );
}

export default ArticlePage;
