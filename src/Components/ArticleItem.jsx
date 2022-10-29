import { Link } from "react-router-dom"

const ArticleItem = ({id, title, description, thumbnail}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
        <div className="card">
            <img src={thumbnail} className="card-img-top" alt={title} loading="lazy"/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="mt-auto">
                    <Link to={`/article/${id}`} className="btn btn-primary">Read full article</Link>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ArticleItem