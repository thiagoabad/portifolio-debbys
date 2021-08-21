import './LeftMenu.css';
import { motion, useAnimation } from "framer-motion"
import React, {useLayoutEffect , useRef } from "react";
import Details from '../Details/Details';
import img from "./HappyDogMockup.png";
import { ReactComponent as Plus } from './plus.svg';

function LeftMenu(props) {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    props.hideMiniMenu();
    controls3.start({
      x: props.animate ? '150%' : 0,
      transition: { duration: 1.4 },
    })
    controls.start({
      x: props.animate ? '-100%' : 0,
      transition: { duration: 1.4 },
    }).then(() => {
      controls2.start({
        y: props.animate ? '-100%' : 0,
        transition: { duration: 2 },
      }).then(() => {
        props.hideAllOthers()
      })
    })
  });

  const list = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 }},
    hidden: { opacity: 0, y: '10%' },
  }

  return (
    <div className="detailsContentOpened">
      {
        props.idToKeep === 0 && 
        <motion.div animate={controls2} className="floatScreen">
          <motion.div className="LeftMenu">
            <motion.div animate={controls}>
              <p id="title" className="leftMenuTitle">{props.data.type}</p>
              <h2>{props.data.brand}</h2>
              <h3>{props.data.industry}</h3>
              <p>{props.data.tasks}</p>
              <p>{props.data.year}</p>
              <p>{props.id}</p>
            </motion.div>
          </motion.div>
          <motion.div>
            <img className="mockup" src={img} alt="Mockup of the job"/>
          </motion.div>
          <motion.div className="buttonMore" animate={controls3}>
            <motion.div
              className="moreIcon"
              whileHover={{
                rotate: [0, 360],
              }}
              onClick={() => props.handleClick(props.id)}
            ><Plus fill="red" stroke="green" /></motion.div>
            <p className="more" onClick={() => props.handleClick(props.id)}> More</p>
          </motion.div>
        </motion.div>
      }
      {
        props.idToKeep !== 0 && 
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <Details id={props.id}/>
        </motion.div>
      }
    </div>
  );
}

export default LeftMenu;
  