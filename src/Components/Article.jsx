import {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Article = () => {

    const params = useParams()
    const {id} = params

    const [article,setArticle] = useState()
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
      fetchResult()
    },[])
  
    const fetchResult = async () => {
      let result = await fetch(`https://dummyjson.com/products/${id}`)
      result = await result.json()
      setArticle(result)
      setLoading(false)
    }

  return (
    <>
        <div className="container-fluid bg-dark text-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>{loading ? 'Title' : article.title}</h1>
                    </div>
                    <div className="col-auto ms-auto">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {loading ? 'Title' : article.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        {
            loading && 
            <Loader/>
        }

        {
            !loading && 

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1>{article.title}</h1>
                        <h5>Price ${article.price}</h5>
                        <div>{article.description}</div>
                    </div>

                    {
                        article.images.map((img,i)=>
                            <div className="col-12 col-lg-3 mb-4" key={i}>
                                <div className="card">
                                    <img src={img} className='card-img' style={{height:'100%', maxHeight:'50vh'}}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        }
    </>
  )
}

export default Article