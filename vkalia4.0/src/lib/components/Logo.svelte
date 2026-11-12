<script lang="ts">
	// Inlined pixel-art logo (512 bytes). v3 requested a .webp for this and used a 138 KB favicon.
	let { size = '100%', label }: { size?: string; label?: string } = $props();
</script>

<svg
	viewBox="0 0 21 21"
	width={size}
	height={size}
	shape-rendering="crispEdges"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
>
	<path
		fill="currentColor"
		d="M5 2h1v1h-1zM15 2h1v1h-1zM3 3h3v1h-3zM15 3h3v1h-3zM2 4h5v1h-5zM14 4h5v1h-5zM4 5h4v1h-4zM13 5h4v1h-4zM5 6h4v1h-4zM12 6h4v1h-4zM6 7h4v1h-4zM11 7h4v1h-4zM7 8h7v1h-7zM2 9h4v1h-4zM8 9h5v1h-5zM15 9h4v1h-4zM3 10h4v1h-4zM9 10h3v1h-3zM14 10h4v1h-4zM4 11h4v1h-4zM10 11h1v1h-1zM13 11h4v1h-4zM6 12h3v1h-3zM12 12h3v1h-3zM7 13h3v1h-3zM11 13h3v1h-3zM8 14h5v1h-5zM9 15h3v1h-3zM2 16h17v1h-17zM3 17h15v1h-15z"
	/>
</svg>
