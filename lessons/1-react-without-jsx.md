# React without JSX

You might have seen some React codebases before, or you might have even heard about JSX before. You might have heard things like "JSX isn't a templating language" and that "JSX is based on XML and not HTML", or various other discussions. Even is this is the first time you are hearing about JSX it shouldn't matter, since JSX (which is something seperate from React) is a complex topic in it's own right.

We're going to be talking about JSX at a later point, however for now we'll be looking at React through the lens of regular JavaScript, CSS and HTML.

In order to get started let us create three files:

- `index.html`
- `styles.css`
- `scripts.js`

We can then add the following HTML and CSS to our `index.html`


```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>React Without JSX</title>
    <link rel="stylesheet" href="./style.css">
  </head>

  <body>
    <header class="header">
      <h1>React without JSX</h1>
    </header>

    <main class="content">
      <div id="widget">Loading...</div>
    </main>

    <footer class="footer">
      Built with <a href=https://reactjs.org">React</a>.
    </footer>

    <script defer src="./scripts.js"></script>
  </body>
</html>
```

```css
* { 
  box-sizing: border-box;
 }

body {
 padding: 0;
 margin: 0;
 display: flex;
 align-items:center;
 justify-content: stretch;
 flex-direction: column;
 font-family: Arial, sans-serif;
 color: #222;
 background: #EEE;
}

.header {
  padding: 1rem;
  text-align-center;
  background: #444;
  color: white;
}

.main {
  padding: 2rem;
}

.footer {
  padding: 1rem;
  text-align-center;
  background: #444;
  color: white;
}
```

You should see something as follows when opening the HTML file in your browsers:

_TO ADD IMAGE_

Within single page applications (SPA) this often called the App Shell.

_ADD App Shell Info_

However, we are merely showing "Loading..." for now where our app should go. Before we can add our React app to our page we need to include two React libraries:

- The Core React library
- The React DOM bindings

It is important to note that by itself the core React logic is platform agnostic, in other words it can be used to create hybrid apps, virtual reality experiences, desktop software or even audio. This means that we need to include the document object model (DOM) bindings in order to connect our React logic to an HTML web page.

We can add both of the following libraries before our existing `<script>` file by using the snippets from the [React CDN documentation(https://reactjs.org/docs/cdn-links.html).

```html
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

We can then add the following to our `scripts.js` file to confirm that both libraries have loaded into our JavaScript. If either of these are `undefined` you need to import them before your `script.js` in your HTML.

```js
console.log(React)
console.log(ReactDOM)
```

Now that we have both the above lets create our first React element. A React element accepts three arguments:

- The HTML tag to render
- The attributes to add to the HTML tag
- Children to be placed inside the tag.

This means that if we do the following:

```js
const component = React.createElement('button', { title: 'This should show on hover' }, 'This is my first React Widget!');
```

Then `component` should return the following HTML:

```html
<button title="This should show on hover">This is my first React Widget!</a>
```


```js
const component = React.createElement('div', {}, 'This is my first React Widget!');
const node = document.getElementById('widget');

ReactDOM.render(component, node)
```

```html
  <div id="widget-1></div>
  <div id="widget-2"></div>
  <div id="widget-3"></div>
  <div id="widget-4"></div>
```

```js
const component = React.createElement('div', {}, 'This is my first React Widget');
const node1 = document.getElementById('widget-1');
const node2 = document.getElementById('widget-2');
const node3 = document.getElementById('widget-3');
const node4 = document.getElementById('widget-4');

ReactDOM.render(component, node1)
ReactDOM.render(component, node2)
ReactDOM.render(component, node3)
ReactDOM.render(component, node4)
```

```js
const component = React.createElement('div', {}, 'This is my first React Widget!');
const node1 = document.getElementById('widget-1');
const node2 = document.getElementById('widget-2');
const node3 = document.getElementById('widget-3');
const node4 = document.getElementById('widget-4');

ReactDOM.render(component, node1)
ReactDOM.render(component, node2)
ReactDOM.render(component, node3)
ReactDOM.render(component, node4)
```

```
.green {
  color: rgb(30, 70, 32);
  background-color: rgb(237, 247, 237)
}

.blue {
  color: rgb(13, 60, 97);
  background-color: rgb(232, 244, 253);
}
```


```js
const component = React.createElement('div', { className: 'green' }, 'This is my first React Widget!');
const component = React.createElement('div', { className: 'blue' }, 'This is my second React Widget!');
const component = React.createElement('div', { className: 'green' }, 'This is my third React Widget!');
const component = React.createElement('div', { className: 'blue' }, 'This is my fourth React Widget!');

const node1 = document.getElementById('widget-1');
const node2 = document.getElementById('widget-2');
const node3 = document.getElementById('widget-3');
const node4 = document.getElementById('widget-4');

ReactDOM.render(component1, node1)
ReactDOM.render(component2, node2)
ReactDOM.render(component3, node3)
ReactDOM.render(component4, node4)
```

```js
const createComponent = (props) => React.createElement('div', { className: props.theme }, `This is my ${props.count} React Widget!`);
const nodes = [1,2,3,4].map(number => document.getElementById(`widget-${number}`))

ReactDOM.render(createComponent({ count: 'first', theme: 'green' }), nodes[0])
ReactDOM.render(createComponent({ count: 'second', theme: 'blue' }), nodes[1])
ReactDOM.render(createComponent({ count: 'third', theme: 'green' }), nodes[2])
ReactDOM.render(createComponent({ count: 'fourth', theme: 'blue' }), nodes[3])
```





