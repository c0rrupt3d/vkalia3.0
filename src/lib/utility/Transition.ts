import { quintOut } from "svelte/easing";

export default function transition(index: number) {
	return { y: '-0.75rem', duration: 500, delay: (200 * index) / 1.25, easing: quintOut };
}
