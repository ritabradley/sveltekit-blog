<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1 class="text-4xl font-bold">{data.post.title}</h1>
<p class="text-2xl">{data.post.author}</p>
<small class="text-sm text-slate-400">{data.post.date}</small>
<p class="text-lg">{data.post.content}</p>
