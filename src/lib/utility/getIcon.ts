
import IconSoftware from '~icons/tabler/package';
import IconHeart from '~icons/tabler/heart';
import IconCode from '~icons/tabler/code';
import IconWorld from '~icons/tabler/world';
import IconDashed from '~icons/tabler/line-dashed';

import type { ComponentType } from "svelte";

const categoryIcons: { id: number; category: string; icon: ComponentType }[] = [
    { id: 0, category: 'software', icon: IconSoftware },
    { id: 1, category: 'life', icon: IconHeart },
    { id: 2, category: 'coding', icon: IconCode },
    { id: 3, category: 'world', icon: IconWorld }
];

export const getIcon = (icon: string): ComponentType => {
    const found = categoryIcons.find((item) => item.category.toLowerCase() === icon.toLowerCase());

    return found ? found.icon : IconDashed;
};

export default getIcon;