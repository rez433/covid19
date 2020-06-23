<script>
    import TableFilter from './TableFilter.svelte';
    import Table from './Table.svelte';
    
    export let data;
    $: states = data;
</script>

<h1>Table Content</h1>
<TableFilter />
<Table {states}/>