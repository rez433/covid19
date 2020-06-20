<script context="module">
    import states from '../data/states.js';

    export async function preload(page) {
        let state = page.params["state"].toUpperCase();
        if(states.Names.find(s => s[1] === state) === undefined) {
            this.error(404, 'State Not Found');
            return;
        }
        try{
        return { state: page.params['state']}
		}catch(e) {
			this.error(500, "Bad Entry point, try again");
		}
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte';
	import CovidChart from '../components/CovidChart.svelte';
	import TableContainer from '../components/TableContainer.svelte';
    export let state
</script>

<svlete:head>
    <title>Covid 19 - {state.toUpperCase()}</title>
</svlete:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {state.toUpperCase()}</h1>
    </div>    
</div>

<CovidStat />
<CovidChart />