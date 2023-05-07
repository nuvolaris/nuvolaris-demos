<script lang="js">
  import { onMount } from "svelte";
  let url = "http://localhost:3233/api/v1/web/nuvolaris/form/";
  let msg = "";
  let form = {};
  
  function submit() {
    console.log(form);
    fetch(url + "set", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(function(res) {
        if (res.ok) {
          msg = "Message sent thank you";
          //alert("Message sent thank you");
          form = {};
        }
        else {
          msg = res.error;
          //alert(res.error)
        }
      })
      .catch(console.log);
    
  }
  async function send() {
    let res = await fetch(url);
    let out = await res.text();
    alert(out);
  }
  
</script>
<div style="color:red"> {msg} </div>
<form>

  <!-- Grid -->
  <div class="grid" style="width:350">
 

    <!-- Markup example 1: input is inside label -->
    <label for="firstname">
      First name
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder="First name"
        bind:value={form.firstname}
         />
    </label>

    <label for="lastname">
      Last name
      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder="Last name"
        bind:value={form.lastname}
        />
    </label>

  </div>

  <!-- Markup example 2: input is after label -->
  <div class="grid" style="width:350">
    <label for="company">
      Company
      <input
        type="text"
        id="company"
        name="company"
        placeholder="company"
        bind:value={form.company} />
    </label>
    <label for="email">
      Email address
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        bind:value={form.email}
        />
    </label>
  </div>
  <label for="textmessage">Text message</label>
  <textarea
    name="textmessage"
    rows="5"
    cols="50"
    id="textmessage"
    placeholder="Text message"
    bind:value={form.textmessage} />
  <small>We'll never share your email with anyone else.</small>

  <!-- Button -->
  <button type="submit" on:click={submit}>Submit</button>

</form>
