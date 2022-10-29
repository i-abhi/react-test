import { useEffect, useState } from 'react'
import Alert from './Alert'
import ArticleItem from './ArticleItem'
import Loader from './Loader'

const ArticlesFeed = ({searhResult}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(()=>{
      fetchResult()
    },[])

    useEffect(()=>{
      setData(searhResult)
    },[searhResult])

 
    const fetchResult = async () => {
      try{
        let result = await fetch(`https://dummyjson.com/products`)
        result = await result.json()
        setData(result.products)
        setLoading(false)
      }catch{
        setLoading(false)
        setError(true)
      }
    }

  return (
    <div className="container mt-5">

        <h1>Articles</h1>

        {
          loading ? <Loader/>
          : error ? <Alert type='danger' strongText='Error' text='Something went wrong please try again'/>
          : <div className="row">
            {
              data.map(item=>
                <ArticleItem key={item.id} id={item.id} title={item.title} description={item.description} thumbnail={item.thumbnail}/>
                )
            }
          </div>
        }
    </div>
  )
}

export default ArticlesFeed