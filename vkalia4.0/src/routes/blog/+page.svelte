<script lang="ts">
	import PostCard from '#lib/components/PostCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="page">
	<section class="sub-section" aria-labelledby="blog-title">
		<div class="region-head">
			<h1 id="blog-title" class="title title-alt reveal" style:--i="0">Blogs<span>.</span></h1>
		</div>
		<div class="region">
			<ul class="reveal" style:--i="1">
				{#each data.posts as post (post.slug)}
					<li><PostCard {post} heading="h2" /></li>
				{/each}
			</ul>
		</div>
	</section>
</div>
