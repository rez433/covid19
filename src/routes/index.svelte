<script>
	import CovidStat from '../components/CovidStat.svelte';
	import CovidChart from '../components/CovidChart.svelte';
	import TableContainer from '../components/TableContainer.svelte';
</script>

<svlete:head>
	<title>Covid 19 Stats</title>
</svlete:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 Stats</h1>
	</div>
</div>

<CovidStat />
<CovidChart />
<TableContainer />