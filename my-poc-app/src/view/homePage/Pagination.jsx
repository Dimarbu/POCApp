import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import './pagination.css'

const Pagination = () => {
  
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);


  const getData = async() => {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
      const data = res.data;
                const slice = data.slice(offset, offset + perPage)
                const postData = slice.map(pd => <div key={pd.id}>
                    <p>{pd.title}</p>
                    <Link to='/Detail' target='_blank'><img src={pd.image} alt=''/></Link>
                    
                </div>)
                setData(postData)
                setPageCount(Math.ceil(data.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage *perPage)
};

 useEffect(() => {
   getData()
 }, [offset])

  return (
    <div className="App">
      {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default Pagination;

