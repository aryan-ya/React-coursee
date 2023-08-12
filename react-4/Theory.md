# what is component?

A component is a reusable, self-contained unit in software design that encapsulates specific functionality or user interface elements, commonly used in frameworks like React for modular application development.

There are two types of component 
1.functional component
2.Class component

# functional component

functional component is a simple javascript function that return react elements. it accepts props as an argument and returns a React element , typically using JSX.functional components can also manage state and side-effects using hooks.

const HeaderComponent = () => {
    return <h1>Namaste react functional components </h1>;
}