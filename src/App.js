import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import StoryList from './components/StoryList'



function App() {
  return (
    <div id="top">
    <Header />
    <StoryList />
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
