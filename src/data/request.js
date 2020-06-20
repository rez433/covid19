import axios from 'axios';
import parsers from './parsers';



async function usStats(){
    const res = await axios.get('https://covidtracking.com/api/v1/us/current.json');


    return parsers.usStats(res.data)
}

export default{
    usStats
}