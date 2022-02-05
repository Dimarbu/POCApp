import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Image, Stack, Box, Text, SimpleGrid } from '@chakra-ui/react';
import '../style/style.css';
import { getData } from '../../services/ghibliapi';
import { useFavorite } from '../../context/Favorites';
import { useMemo } from 'react';


const Favorites = () => {
    const navigate = useNavigate();

    const { favoriteMovie, setDetails } = useFavorite();
    const [selectedPage, setSelectedPage] = useState(1);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [search, setSearch] = useState('');

    const filterFavoriteData = useMemo(() => {
        return data.filter((item) => favoriteMovie.includes(item.id))
    }, [favoriteMovie]);

    const filterDataSearch = useMemo(() => {
        console.log(filterFavoriteData, 'filter');
        return filterFavoriteData.filter((element) => element.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, filterFavoriteData]);

    console.log(favoriteMovie, 'favoriteMovie');
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


    const getDetail = (pd) => {
        setDetails(pd);
        navigate('/Detail');
    }

    return (
        <Stack className="App">
            <input className='inputPage' type="text" onChange={(e) => setSearch(e.target.value)} />
            <SimpleGrid minChildWidth='190px' spacing='40px' m='20px' pt='100px'>
                {filterDataSearch.map(pd =>
                    <Box className='containerBox' borderRadius='7px' m='2px' w='200px'
                        key={pd.id}>

                        <Box className='boxTitle' >
                            <Text color='white' fontSize='md' lineHeight='30px'>{pd.title}</Text>
                        </Box>
                        <Image borderRadius='5px' w='100%' src={pd.image} alt='Front Page' onClick={() => {
                            console.log(pd, 'pagination');
                            getDetail(pd);
                        }} />
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

export default Favorites;

