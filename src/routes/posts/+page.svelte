<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h2>Blog posts live here</h2>

{#each data.posts as post}
  <a class="text-xl hover:text-violet-500" href="posts/{post.slug}">
    <h3>{post.title}</h3>
    <small class="text-sm text-slate-400">{post.date}</small>
  </a>
{/each}
