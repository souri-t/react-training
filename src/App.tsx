import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './Pages/public/TestPage';
import CarenderPage from './Pages/public/CarenderPage';
import TimelinePage from './Pages/public/TimelinePage';
import BigCalendarPage from './Pages/public/BigCalendarPage';
import Layout from './Pages/public/Layout';

// interface ContentProps {
//   content: string;
// }

// const Content: React.FC<ContentProps> = ({ content }) => {
//   return <div className="content">{content}</div>;
// };

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BigCalendarPage />} />
            <Route path="/cal" element={<CarenderPage />} />
            <Route path="/time" element={<TimelinePage />} />
            <Route path="/test" element={<TestPage />} />
            {/* <Route path="/layout" element={<LayoutPage />} /> */}
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
