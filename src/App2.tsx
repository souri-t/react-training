import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import styled from "styled-components";


// interface ContentProps {
//   content: string;
// }

// const Content: React.FC<ContentProps> = ({ content }) => {
//   return <div className="content">{content}</div>;
// };

function App2() {
  return (
    <div className="App">
      <Sidebar />
      <Provider store={store}>
        <Content />
      </Provider>
    </div>
  );
}

export default App2;
