import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvier } from './context/cart.context';
import { CategoriesProvider } from './context/categories.context';
import { UserProvider } from './context/user.context';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/*nesting our app into browserrouter so that we can read from url and use routing */} 
      <UserProvider>    
        <CategoriesProvider>
          <CartProvier>
            <App />
          </CartProvier>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
