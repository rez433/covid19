import axios from 'axios';
import parsers from './parsers';

//get Stats for US
async function usStats(){
    const res = await axios.get('https://covidtracking.com/api/v1/us/current.json');
    return parsers.usStats(res.data)
}

//get Stats for one state
async function stateStats(state){
    const res = await axios.get(`https://covidtracking.com/api/v1/states/${state}/current.json`);
    
    const stats = parsers.stateStats(res.data)
    return stats;
}



//get daily stats for US
async function historicUS() {
    const res = await axios.get('https://covidtracking.com/api/us/daily');
    

    const historic_US = parsers.historicUS(res.data);
    console.log(historic_US)

    return historic_US;
}



export default{
    usStats,
    stateStats,
    historicUS
}