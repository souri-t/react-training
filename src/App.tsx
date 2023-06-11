import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

// interface ContentProps {
//   content: string;
// }

// const Content: React.FC<ContentProps> = ({ content }) => {
//   return <div className="content">{content}</div>;
// };

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
