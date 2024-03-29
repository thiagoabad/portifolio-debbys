import React, {useState} from "react";
import MainRow from '../MainRow/MainRow';
import MiniMenu from '../MiniMenu/MiniMenu';
import { Element } from 'react-scroll';
import data from '../../data';

function Home() {
    const [idToKeep, setIdToKeep] = useState(0);
    const [miniMenuVisibility, setMiniMenuVisibility] = useState(true);
    const [mainAreaVisibility, setMainAreaVisibility] = useState(true);
    
    function hideMiniMenu(){
        setMiniMenuVisibility(false);
    }
  
    function hideAllOthers(idToKeep){
        console.log(idToKeep)
        setIdToKeep(idToKeep);
        if (idToKeep === 0) {
            setMainAreaVisibility(true);
            setMiniMenuVisibility(true);
        } else {
            setMainAreaVisibility(false);   
        }
        
    }
  
    return (<>
        <MiniMenu visible={miniMenuVisibility} size={data.length}/>
        {data.map(el => {
            if (idToKeep === 0 || idToKeep === el.id) {
                return  <Element key={el.id} name={"row"+el.id} className="element" >
                            <MainRow
                            key={el.id}
                            id={el.id}
                            data={el}
                            hideMiniMenu={hideMiniMenu}
                            hideAllOthers={hideAllOthers}
                            idToKeep={idToKeep}
                            mainAreaVisibility={mainAreaVisibility}
                            />
                        </Element>
            } else {
                return null
            }
        })}
    </>)
  }

export default Home;
