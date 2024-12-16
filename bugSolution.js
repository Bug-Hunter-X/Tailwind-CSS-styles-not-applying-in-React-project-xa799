```javascript
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
```css
/*index.css*/
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
  @apply bg-gray-100;
}
```
```javascript
//App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </div>
  );
}

export default App;
```