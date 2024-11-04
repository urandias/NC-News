import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../api"
import { useState, useEffect } from "react"

function ArticlePage() {
  const {articleId} = useParams()
  const [article, setArticle] = useState({});
  
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

  useEffect(() => {
    fetchArticleById(articleId).then((article) => {
      setArticle(article);
      console.log(article)
    });
  }, []);

  return (
    <>
    <div>
      <h1>Article Page</h1>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{formatDate(article.created_at)}</p>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <p>{article.votes}</p>
    </div>
    </>
  )
}

export default ArticlePage

