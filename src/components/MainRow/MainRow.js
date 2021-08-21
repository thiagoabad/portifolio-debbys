import {useState} from "react";
import MainArea from '../MainArea/MainArea';
import LeftMenu from '../LeftMenu/LeftMenu';
import './MainRow.css'

function MainRow(props) {

  const [active, setActive] = useState(false);

  function handleClick(){
    setActive(true);
  }

  function hideAllOthers(){
    props.hideAllOthers(props.id);
  }

  function hideMiniMenu(){
    props.hideMiniMenu();
  }

  return (
    <div className="MainRow">
      <LeftMenu 
        animate={active} 
        hideMiniMenu={() => hideMiniMenu()}
        hideAllOthers={() => hideAllOthers()}
        handleClick={() => handleClick()} 
        id={props.id} 
        idToKeep={props.idToKeep}
        data={props.data}
      />
      { props.mainAreaVisibility && <MainArea animate={active}/> }
    </div>
  );
}

export default MainRow;