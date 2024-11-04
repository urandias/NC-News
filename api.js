import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nc-news-q2dy.onrender.com/api',
})

export function fetchArticles() {
    return api.get('/articles').then(response => {
        return response.data.articles
    })
    .catch(error => {
        console.log(error)
    })
}

export function fetchArticleById(articleId) { 
    return api.get(`/articles/${articleId}`).then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })
}