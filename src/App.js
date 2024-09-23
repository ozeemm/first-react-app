import "./styles/main.css"

import Navigation from "./components/Navigation/Navigation"
import Header from './components/Header/Header'
import IndexSection from "./components/IndexSection/IndexSection"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <IndexSection/>
      <Footer/>
    </div>
  );
}

export default App;
