import axios from 'axios';
import parsers from './parsers';

async function usStats(){
    const res = await axios.get('https://covidtracking.com/api/v1/us/current.json');
    return parsers.usStats(res.data)
}
async function stateStats(state){
    const res = await axios.get(`https://covidtracking.com/api/v1/states/${state}/current.json`);
    
    const stats = parsers.stateStats(res.data)
    console.log(res.data)
    return stats;
}

export default{
    usStats,
    stateStats
}