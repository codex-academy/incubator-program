# React without JSX

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
  background: #444;
  color: white;
}

.footer {
  background: #444;
  color: white;
}
```

https://reactjs.org/docs/cdn-links.html

```html
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

`scripts.js`

```js
console.log(React)
console.log(ReactDOM)
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





