
import './App.scss'
import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { MyPage } from './modules/my-page/pages';
import { MyColumn } from './modules/column/pages';
import { MyRecordPage } from './modules/my-record/pages';
import { ScrollToTopButton } from './layout/scroll-to-top';

function App() {

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/column" element={<MyColumn />} />
          <Route path="/record" element={<MyRecordPage />} />
        </Routes>
        <Footer></Footer>
        <ScrollToTopButton />
      </Router>
    </>
  )
}

export default App
