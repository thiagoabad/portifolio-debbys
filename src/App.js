import './App.css';
import React, {useState} from "react";
import MainRow from './components/MainRow/MainRow';
import MiniMenu from './components/MiniMenu/MiniMenu'
import Details from './components/Details/Details'
import { Element } from 'react-scroll'
import { Route, Redirect, useLocation } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import { createBrowserHistory } from 'history';

const Home = () => {
  const [idToKeep, setIdToKeep] = useState(0);
  
  function handleMoreClick(clicked){
    //setminiMenuVisible(false);
    //<Redirect push to="/details" />
    console.log(`Go to ${clicked}`);
  }

  function hideAllOthers(idToKeep){
    setIdToKeep(idToKeep);
  }

  return (<>
    <MiniMenu visible={true}/>
    { (idToKeep === 0 || idToKeep === 1) && 
    <Element name="row1" className="element" >
      <MainRow 
        id={1} 
        handleMoreClick={(clicked) => handleMoreClick(clicked)}
        hideAllOthers={(idToKeep) => hideAllOthers(idToKeep)}
        idToKeep={idToKeep}
      />
    </Element>
    }
    { (idToKeep === 0 || idToKeep === 2) && 
    <Element name="row2" className="element" >
      <MainRow 
        id={2} 
        handleMoreClick={(clicked) => handleMoreClick(clicked)}
        hideAllOthers={(idToKeep) => hideAllOthers(idToKeep)}
        idToKeep={idToKeep}
      />
    </Element>
    }
  </>)
}


function App() {
  const history = createBrowserHistory();
  const [miniMenuVisible, setminiMenuVisible] = useState(true);
  const location = useLocation();

  return (
    <div className="App">
      <SlideRoutes location={location} animation='vertical-slide' duration={2000}>
        <Route path="/" component={Home} exact />
        <Route path="/details" component={Details} />
      </SlideRoutes>
    </div>
  );
}

export default App;
