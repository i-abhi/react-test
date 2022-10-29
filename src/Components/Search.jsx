import {useEffect} from "react"

const Search = (props) => {

    const {searchQuery , setSearchQuery, searhResult, setSearhResult} = props

    const searchHandle = () => {
        console.log('search', searchQuery)
    }

    useEffect(()=>{
        let timer;
        timer = setTimeout(()=>{
            fetchResult()
        },300)
        return ()=> clearTimeout(timer)
    },[searchQuery])

    const fetchResult = async () => {
        let result = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        result = await result.json()
        setSearhResult(result.products)        
    }
    

  return (
    <>
        <div className="search-container">
            <div className="search-container-inner">
                <h3 className='text-center'>Search Products</h3>
                <input type="text" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} placeholder='Search...'/>
                { searchQuery &&
                    <ul className='dropdown'>
                    {
                        searhResult
                        .filter(result => {
                            let query = searchQuery.toLocaleLowerCase()
                            let resultTitle = result.title.toLocaleLowerCase()
                            return resultTitle.includes(query) && resultTitle !== query
                        })
                        .map(result =>
                            <li key={result.id} onClick={()=> setSearchQuery(result.title)}> {result.title}</li>
                        )
                        
                    }
                    </ul>
                }
            </div>
        </div>
    </>
  )
}

export default Search