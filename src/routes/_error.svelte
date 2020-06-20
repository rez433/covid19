<script>
	export let status;
	export let error;
</script>

<svelte:head>
	<title>Error - {status}</title>
</svelte:head>

<style>
	.container{
		margin: 4rem;
	}
</style>



{#if status !== 404}
	<div class="container">
		<article class="message is-danger">
			<div class="message-header">
				<p>
					Error
				</p>
			</div>
			<div class="message-body">
				{error.message}
			</div>
		</article>
	</div>

{/if}



{#if status === 404}
	<div class="container">
		<article class="message is-warning">
			<div class="message-header">
				<p>
					Page Not Found
				</p>
			</div>
			<div class="message-body">
				<a href="/">Click Here</a> To go back Home
			</div>
		</article>
	</div>

{/if}