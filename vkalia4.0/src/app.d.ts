// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {
		interface PageData {
			meta?: import('#lib/types.ts').PageMeta;
		}
	}
}

export {};
