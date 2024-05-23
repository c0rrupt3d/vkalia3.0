// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type RoutesProps = {
		index: number;
		name: string;
		path: string;
		icon: ComponentType;
		iconFilled: ComponentType;
	}[];

	interface MetaData {
		name: string;
		description: string;
		ogImage: string;
		published: boolean;
	}
	
	interface Post {
		metadata: MetaData;
		// Add other properties as needed
	}

	type Modules = Record<string, () => Promise<{ default: Post }>>;
}

export {};
