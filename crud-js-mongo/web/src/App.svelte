<script>
    // configurations
    import { onMount } from 'svelte'
    export let base;

    // data
    let data = []
    let select = ""

    // retrieve all data
    async function all()  {
      let res = await fetch(base+"all.json")
      let body = await res.json()
      data = body.data
      console.log(data)
    }

    // init
    onMount(all)


    let form = {}

    function submit() {
        console.log(form)
        fetch(base+"insert", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        .then(all)
        .catch(console.log)
        form = {}
    }

function remove() {
    console.log(select)
    fetch(base+"del?name="+select)
    .then(all)
    .catch(console.log)
}
</script>
<main><section>
  <table>
    <tr>
      <th></th><th>Name</th><th>Company</th><th>Phone</th>
    </tr>
    {#each data as row}
      <tr>
        <td><input type="radio" bind:group={select} 
                   value={row.name}></td>
        <td><b>{row.name}</b></td>
        <td><i>{row.company}</i></td>
        <td><tt>{row.phone}</tt></td>
      </tr>
    {/each}
  </table>
</section></main>

<main><section>
  <form>
       <input placeholder="Name" 
              bind:value={form.name} />
       <br />
       <input placeholder="Company"
              bind:value={form.company} />
       <br />
       <input placeholder="Phone" 
              bind:value={form.phone} />
   </form>
</section></main>
<main><section>
  <button on:click={submit}>Add</button>
  <button on:click={remove}>Remove</button>
</section></main>
  