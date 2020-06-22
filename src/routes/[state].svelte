<script context="module">
    import states from "../data/states.js";
    import request from "../data/request.js";


    export async function preload(page) {
        const state = page.params["state"];
        const stateName = states.Names.find(s => s[1].toLowerCase() === state)[0];
        if(states.Names.find(s => s[1].toLowerCase() === state) === undefined) {
            this.error(404, 'State Not Found');
            return;
        }
        try{
            const stateStats = await request.stateStats(state);
            const historicState = await request.historicState(state);
            return { state:stateName, stateStats, historicState}
		}catch(e) {
			
		}
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte';
	import CovidChart from '../components/CovidChart.svelte';
	import TableContainer from '../components/TableContainer.svelte';
    export let state;
    export let stateStats;
    export let historicState;
   
</script>

<svlete:head>
    <title>Covid 19 - {state}</title>
</svlete:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {state}</h1>
    </div>    
</div>

<CovidStat {...stateStats}/>
<CovidChart historicData={historicState} title= "{state} covid-19"/>