
<script context="module">
	import request from "../data/request.js";

	export async function preload() {
		try{
			//throw new Error('Bad');
			const usStats = await request.usStats();
			const historicUS = await request.historicUS();
			return {usStats, historicUS}
		}catch(e) {
			this.error(500, "Bad Entry point, try again");
		}
		
	}

</script>

<script>
	import CovidStat from '../components/CovidStat.svelte';
	import CovidChart from '../components/CovidChart.svelte';
	import TableContainer from '../components/TableContainer.svelte';
	export let usStats;
	export let historicUS;
	
</script>

<svlete:head>
	<title>Covid 19 Stats</title>
</svlete:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 Stats</h1>
	</div>
</div>

<CovidStat {...usStats}/>
<CovidChart historicData={historicUS} title="US Covid-19"/>
<TableContainer />