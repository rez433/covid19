import format from './format';
import moment from 'moment';

function usStats(data) {
    const [usStatRaw] = data;
    return parseStats(usStatRaw);
}
function stateStats(data) {
    const stateStatsRaw = data;
    return parseStats(stateStatsRaw);
}

function historicUS(historicData) {
    return parseHistoric(historicData)

}

function parseHistoric (historicData) {
    return [
        {   
            label: 'Cases',
            key: 'positive',
            color: 'rgb(100, 0, 200)'
        },
        {   
            label: 'Recovered',
            key: 'recovered',
            color: 'rgb(51, 255, 51)'
        },
        {   
            label: 'Total tested',
            key: 'totalTestResults',
            color: 'rgb(10, 30, 200)'
        },
        {   
            label: 'Hospitalized',
            key: 'hospitalizedCurrently',
            color: 'rgb(230, 230, 0)'
        },
        {   
            label: 'Death',
            key: 'death',
            color: 'rgb(250, 99, 230)'
        },
    ].reduce((prev, next) => {
        if(historicData.filter((d) => d[next.key]).length > 4) {
            prev.push(parseChart(historicData, next.key, next.label, next.color));
        }
        return prev;
    }, []);
}

function parseChart(historicData, key, label, color) {
    const chartData = historicData.map(data=> {
        return {
            x: moment(data.date, 'YYYYMMDD'),
            y: data[key] || 0
        }
    })
    return {
        label,
        data:chartData,
        fill: false,
        borderColor: color
    }
}


function parseStats(rawStats) {
    return {
        cases: format.number(rawStats.positive),
        deaths: format.number(rawStats.death),
        recovered: format.number(rawStats.recovered),
        ventilator: format.number(rawStats.onVentilatorCurrently),
        hospitalized: format.number(rawStats.hospitalizedCurrently),
        icu: format.number(rawStats.inIcuCurrently),
        tested: format.number(rawStats.totalTestResults),
        updated: moment(rawStats.lastModified).format('LLLL')
    }
}




export default {
    usStats,
    stateStats,
    historicUS
}