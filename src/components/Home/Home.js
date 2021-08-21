import React, {useState} from "react";
import MainRow from '../MainRow/MainRow';
import MiniMenu from '../MiniMenu/MiniMenu'
import { Element } from 'react-scroll'

function Home() {
    const [idToKeep, setIdToKeep] = useState(0);
    const [miniMenuVisibility, setMiniMenuVisibility] = useState(true);
    const [mainAreaVisibility, setMainAreaVisibility] = useState(true);
    
    function hideMiniMenu(){
        setMiniMenuVisibility(false);
    }
  
    function hideAllOthers(idToKeep){
      setIdToKeep(idToKeep);
      setMainAreaVisibility(false);
    }
  
    return (<>
      <MiniMenu visible={miniMenuVisibility}/>
      { (idToKeep === 0 || idToKeep === 1) && 
      <Element name="row1" className="element" >
        <MainRow 
          id={1} 
          hideMiniMenu={() => hideMiniMenu()}
          hideAllOthers={(idToKeep) => hideAllOthers(idToKeep)}
          idToKeep={idToKeep}
          mainAreaVisibility={mainAreaVisibility}
        />
      </Element>
      }
      { (idToKeep === 0 || idToKeep === 2) && 
      <Element name="row2" className="element" >
        <MainRow 
          id={2} 
          hideMiniMenu={() => hideMiniMenu()}
          hideAllOthers={(idToKeep) => hideAllOthers(idToKeep)}
          idToKeep={idToKeep}
        />
      </Element>
      }
      { (idToKeep === 0 || idToKeep === 3) && 
      <Element name="row3" className="element" >
        <MainRow 
          id={3} 
          hideMiniMenu={() => hideMiniMenu()}
          hideAllOthers={(idToKeep) => hideAllOthers(idToKeep)}
          idToKeep={idToKeep}
        />
      </Element>
      }
    </>)
  }

export default Home;
