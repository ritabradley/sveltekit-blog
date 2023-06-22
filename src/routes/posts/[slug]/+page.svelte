<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1 class="text-4xl font-bold">{data.post.title}</h1>

<p class="text-2xl">{data.post.author.name}</p>
<small class="text-slate-400 text-sm">{data.post.date}</small>
<p class="text-lg">
  {#await data.post.content}
    <p>...loading</p>
  {:then content}
    {@html content?.code}
  {/await}
</p>
