import Header from './components/Header'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App

