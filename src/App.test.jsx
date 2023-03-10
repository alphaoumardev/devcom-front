import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import React from "react";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  render(<BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>);
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});
