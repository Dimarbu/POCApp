import axios from "axios";

const PER_PAGE = 20;

export const getData = async (selectedPage) => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
    const data = res.data;
    const slice = data.slice((selectedPage -1) * PER_PAGE, selectedPage * PER_PAGE)
    return {data: slice, page: Math.ceil(data.length / PER_PAGE)}
  }