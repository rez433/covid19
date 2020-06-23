<script>
export let states;

</script>

<style>
    table{
        width: 100%;
    }
    .section {
        padding: 0.5rem 1.5rem;
    }
</style>

<div class="section">
    <div class="container">
        <table class="table is-bordered is-stripped">
            <thead>
                <tr>
                    <th>Sates</th>
                    <th>Cases</th>
                    <th>Deaths</th>
                    <th>Total Tested</th>
                </tr>
            </thead>
            <tbody>
                {#each states as st}
                    <tr>
                        <td>
                            <a href="/{st.state}">{st.stateName}</a>
                        </td>
                        <td>{st.cases}</td>
                        <td>{st.deaths}</td>
                        <td>{st.tested}</td>
                    </tr>

                {/each}
            </tbody>
        </table>
    </div>
</div>