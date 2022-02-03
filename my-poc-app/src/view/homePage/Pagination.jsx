import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Image, Stack } from '@chakra-ui/react';
import './pagination.css';
import FavoriteButton from './FavoriteButton';
import { getData } from '../../services/ghibliapi';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/Favorites';

const Pagination = () => {
  const navigate = useNavigate();

  const { favoriteMovie, setFavoriteMovie } = useContext(FavoriteContext);
  const [selectedPage, setSelectedPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (e) => {
    console.log(e);
    setSelectedPage(e.selected + 1)
  };

  useEffect(() => {
    const serviceGetData = async () => {
      //console.log(favoriteMovie, 'movie');
      const data = await getData(selectedPage);
      const newData = data.data.map((item) => {
        //console.log(item, 'item');
        const favoriteItem = favoriteMovie.find(element => element === item.id)
        return { ...item, favorite: favoriteItem ? true : false }
      })
      setData(newData);
      setPageCount(data.page);
    }
    serviceGetData();
  }, [selectedPage])

  const handlePressFavorite = (id) => {
    let favoriteArray;
    const idFound = favoriteMovie.findIndex(element => element === id)
    if (idFound !== -1) {
      favoriteArray = favoriteMovie.slice(idFound, 1)
    } else {
      favoriteArray= [...favoriteMovie, id]
    }

    const newDataFavorite = data.map((item) => {
      console.log(item, 'item');
      const favoriteItem = favoriteArray.find(element => element === item.id)
      return { ...item, favorite: favoriteItem ? true : false }
    })
    setData(newDataFavorite);
    setFavoriteMovie(favoriteArray);
  };


  return (
    <Stack className="App">
      {data.map(pd =>
        <div key={pd.id}>
          <p>{pd.title}</p>
          <Image boxSize='150px' src={pd.image} alt='Front Page' onClick={() => navigate('/Detail')}/>
          <FavoriteButton handlePress={handlePressFavorite} id={pd.id} favoriteItem={pd.favorite} />
        </div>)}
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
        activeClassName={"active"} />
    </Stack>
  );
}

export default Pagination;

