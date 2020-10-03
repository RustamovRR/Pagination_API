import React from 'react'
import { Provider } from './Context';
import { Header } from './components/header/index'
import { Info } from './components/info';
import { Lists } from './components/list/index';

export function App() {
  return (
    <Provider>
      <Header />
      <Lists />
      <Info />
    </Provider>
  )
}