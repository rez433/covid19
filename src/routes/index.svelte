
<script context="module">
	import request from "../data/request.js";

	export async function preload() {
		try{
			const usStats = await request.usStats();
			return {usStats}
		}catch(e) {

		}
		
	}
</script>

<script>
	import CovidStat from '../components/CovidStat.svelte';
	import CovidChart from '../components/CovidChart.svelte';
	import TableContainer from '../components/TableContainer.svelte';
	export let usStats;
	console.log(usStats, "usStats")

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
<CovidChart />
<TableContainer />