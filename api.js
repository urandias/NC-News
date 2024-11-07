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

        if (error.response && error.response.status === 404) {
            throw new Error('Article does not exist')
        } else {
            throw new Error('Failed to fetch the article')
        }
    })
}

export function fetchCommentsByArticleId(articleId) {
    return api.get(`/articles/${articleId}/comments`).then(response => {
        return response.data.comments
    })
    .catch(error => {
        console.log(error)
    })
}

export function patchArticleVotes(articleId, votes) {
    return api.patch(`/articles/${articleId}`, {
        inc_votes: votes
    }).then(response => {
        return response.data.articles
    })
    .catch(error => {
        console.log(error)
    })
}