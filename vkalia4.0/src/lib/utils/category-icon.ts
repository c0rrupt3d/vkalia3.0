import IconCode from '~icons/tabler/code';
import IconDashed from '~icons/tabler/line-dashed';
import IconHeart from '~icons/tabler/heart';
import IconSoftware from '~icons/tabler/package';
import IconWorld from '~icons/tabler/world';
import type { Icon } from '#lib/types.ts';

const icons: Record<string, Icon> = {
	software: IconSoftware,
	life: IconHeart,
	coding: IconCode,
	world: IconWorld
};

export const categoryIcon = (category: string): Icon => icons[category.toLowerCase()] ?? IconDashed;
