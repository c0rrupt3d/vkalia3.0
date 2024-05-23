---
live: true
name: 'Svelte vs React'
category: 'software'
description: 'A Revolution in Frontend Development? Can Svelte dethrone the behemoth that is React'
date: 2024-05-17
ogImage: 'og-image.webp' 
---

<script lang="ts">
    import BlogImage from "#/lib/components/BlogImage.svelte"
</script>

React has been the industry leader in web development for many years now, and rightly so. It has been the framework of choice for most developers and companies looking to hire. With the evolving landscape of frontend development, a new player has emerged gathering widespread attention from developers. With its innovative solutions to modern problems in web development, Svelte has quickly risen to the spotlight. In this blog post, we'll delve into the reasons behind the sharp rise in Svelte's popularity and compare some of its fundamentals with React.

Although we will be comparing React and Svelte, it is not a competition to determine the best out of them. Both have their unique use cases, and ultimately it comes down to the developer and project as to which of the two suits their requirements. With that in mind, let's begin :).

## Compiler-centric approach

Svelte's journey from obscurity to fame can be attributed to its unique philosophy and approach to building web applications. Both frameworks do the same thing, they allow developers to build reactive user interfaces in JavaScript. But this is where the similarities end. React uses a VirtualDOM (VDOM) to keep track of changes in the application which it then checks to render the updated changes in the actual DOM (Document Object Model). This is what makes React 'reactive' and a React project requires the react-dom to be compiled with the final build of the project to do exactly that.

Svelte takes a completely different approach. When a Svelte project is built, it uses a compiler to compile all the code into vanilla JavaScript. This helps reduce the total project build size considerably where if we just try to render a simple Hello World in both projects, React would bundle up to ~46kB and Svelte just ~18kb resulting in much faster runtimes.

<BlogImage img="react-svelte-build-size.webp" alt="Basic hello world compared between React and Svelte. Compiled with Vite" width="100%" height="100%" />

## Less boilerplate, more productivity

Let us compare both frameworks by building a simple counter state.

React `counter.jsx`:

```jsx
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```

Svelte `counter.svelte`:

```svelte
<script>
    let count = 0;
</script>

<div>
    <p>Count: {count}</p>
    <button on:click={() => count++}>Increment</button>
</div>
```

Unlike traditional frontend frameworks like React, Vue, or Angular, Svelte takes a compiler-centric approach, shifting the heavy lifting from the runtime to the build process. This paradigm shift has led to a dramatic reduction in boilerplate code, making development faster, more intuitive, and highly efficient. As soon as you declare a variable in Svelte, it is reactive without needing a state handler like useState and with its modular approach like Vue, the JavaScript code can be separated using `<script>` from the visible HTML elements.


## Global state management

State management is a critical aspect of building large-scale applications. React relies on its Context API or external libraries like Redux or one of my favorite, Zustand to manage global state. Here's an example using React's Context API to share state across components:

React `Counter.jsx`:

```jsx
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

const Counter = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

const App = () => (
    <CounterProvider>
        <Counter />
    </CounterProvider>
);
```

In Svelte, global state management is achieved through its built-in store. The store pattern allows for reactive, centralized state management with minimal boilerplate.

Svelte `store.js`:

```js
import { writable } from 'svelte/store';

export const count = writable(0);
```

Svelte `Counter.svelte`:

```svelte
<script>
    import { count } from './store';
</script>

<div>
    <p>Count: {count}</p>
    <button on:click={() => count.update(n => n + 1)}>Increment</button>
</div>
```

With Svelte, global state management is more straightforward, utilizing a simple store pattern. The store manager being built-in also helps with code compatibility and even reducing reliance on external libraries making it easier for developers to manage state across components.

## Tooling, Ecosystem, and Community Support

A thorn on Svelte's side is its relatively young presence in the space. React has an extensive ecosystem with a wide range of tools, libraries, and plugins due to its years of availability. It has a large community, making it easy to find resources, tutorials, and community support. The React team continuously updates the framework, ensuring its current with industry trends.

Svelte's ecosystem is smaller compared to React, but it's growing rapidly. While Svelte may not have the same level of tooling as React, and many libraries that might help with quick prototyping in React might require much more work in Svelte. The Svelte community is active and enthusiastic, providing resources and support to new developers which does give a good glimpse of the future of this library.

## Conclusion: Choosing the Right Framework

React and Svelte have their unique strengths and are suitable for different use cases. React's extensive ecosystem, community support, and flexibility make it a solid choice for large-scale applications. Svelte's simplicity, reduced boilerplate, and compiler-centric approach make it an attractive option for smaller to medium-sized projects and developers seeking a simpler development experience.

Ultimately, the choice between React and Svelte depends on your project requirements and development preferences. Each framework has its unique charm, so take the time to explore and find the one that suits your needs best.