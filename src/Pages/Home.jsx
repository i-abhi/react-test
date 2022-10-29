import { useState } from 'react';
import ArticlesFeed from '../Components/ArticlesFeed';
import Search from '../Components/Search';

const Home = () => {

  const [searchQuery,setSearchQuery] = useState('')
  const [searhResult, setSearhResult] = useState([])

  return (
    <>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} searhResult={searhResult} setSearhResult={setSearhResult}/>
        <ArticlesFeed searhResult={searhResult}/>
    </>
  )
}

export default Home