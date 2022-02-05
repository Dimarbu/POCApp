import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Image, Stack, Box, Text, SimpleGrid, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import '../style/style.css';
import FavoriteButton from './FavoriteButton';
import { getData } from '../../services/ghibliapi';
import { useFavorite } from '../../context/Favorites';
import { useMemo } from 'react';
import imgInput from '../../img/film.png';

const Pagination = () => {
  const navigate = useNavigate();

  const { favoriteMovie, setFavoriteMovie, setDetails } = useFavorite();
  const [selectedPage, setSelectedPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState('');
  const filterData = useMemo(() => {
    return data.filter((element) => element.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, data]);

  const handlePageClick = (e) => {
    setSelectedPage(e.selected + 1)
  };

  useEffect(() => {
    const serviceGetData = async () => {
      const data = await getData(selectedPage);
      const newData = data.data.map((item) => {
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
      favoriteMovie.splice(idFound, 1);
      favoriteArray = favoriteMovie;
    } else {
      favoriteArray = [...favoriteMovie, id]
    }

    const newDataFavorite = data.map((item) => {
      const favoriteItem = favoriteArray.find(element => element === item.id)
      return { ...item, favorite: favoriteItem ? true : false }
    })
    setData(newDataFavorite);
    setFavoriteMovie(favoriteArray);
  };

  const getDetail = (pd) => {
    setDetails(pd);
    navigate('/Detail');
  }

  return (
    <Stack className="App">
      <InputGroup className='inputPage' zIndex='3'>
        <InputLeftElement
          pointerEvents='none'
          children={<Image src={imgInput} w='34px' alt="" />}
        />
        <Input focusBorderColor='gray.300' variant='filled' type='text' placeholder='Search' w='md' onChange={(e) => setSearch(e.target.value)} />
      </InputGroup>
      <SimpleGrid minChildWidth='190px' spacing='40px' m='20px' pt='30px'>
        {filterData.map(pd =>
          <Box className='containerBox' borderRadius='7px' m='2px' w='200px'
            key={pd.id}>

            <Box className='boxTitle' >
              <Text color='white' fontSize='md' lineHeight='30px'>{pd.title}</Text>
            </Box>

            <Image borderRadius='5px' w='100%' src={pd.image} alt='Front Page' onClick={() => {
              console.log(pd, 'pagination');
              getDetail(pd);
            }} />
            <FavoriteButton handlePress={handlePressFavorite} id={pd.id} favoriteItem={pd.favorite} />
          </Box>)}
      </SimpleGrid>

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

