<script lang="ts">
	import DisplayBlog from '#/lib/components/DisplayBlog.svelte';
	import { formatDate } from '#/lib/utility/blogs.js';
	import transition from '#/lib/utility/Transition';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div class="page">
	<section class="sub-section">
		<div class="region-head">
			<h2 in:fly={transition(2)} class="title title-alt">Blogs<span>.</span></h2>
		</div>

		<div class="region">
			<div class="blog-list" in:fly={transition(3)}>
				{#each data.posts as post}
					<DisplayBlog
						category={post.category}
						href={'/blog/' + post.slug}
						date={formatDate(post.date)}
						title={post.name}
						teaser={post.description}
					/>
				{/each}
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.blog-list {
		@include flex(column, center, center);
		width: 100%;
	}
</style>
