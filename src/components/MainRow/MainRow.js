import {useState} from "react";
import MainArea from '../MainArea/MainArea';
import LeftMenu from '../LeftMenu/LeftMenu';
import './MainRow.css'
import { Link } from "react-router-dom";

function MainRow(props) {

  const [active, setActive] = useState(false);

  function handleClick(){
    console.log('handle click');
    //props.handleMoreClick(props.id);
    setActive(true);
  }

  function hideAllOthers(){
    props.hideAllOthers(props.id);
  }

  return (
    <div className="MainRow">
      <p className="more" onClick={() => handleClick()}>More</p>
      <LeftMenu animate={active} hideAllOthers={() => hideAllOthers()} id={props.id} idToKeep={props.idToKeep}/>
      <MainArea animate={active}/>
    </div>
  );
}

export default MainRow;