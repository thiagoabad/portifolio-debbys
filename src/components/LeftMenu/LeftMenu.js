import './LeftMenu.css';
import { motion, useAnimation } from "framer-motion"
import React, {useLayoutEffect , useRef } from "react";
import Details from '../Details/Details';
import img from "./HappyDogMockup.png";

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
      x: props.animate ? '10%' : 0,
      transition: { duration: 1.5 },
    })
    controls.start({
      x: props.animate ? '-100%' : 0,
      transition: { duration: 2 },
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
        <>
        <motion.div animate={controls2} className="LeftMenu">
          <motion.div animate={controls}>
            <p id="title" className="leftMenuTitle">Job</p>
            <h2>Amigos de patas</h2>
            <h3>Petshop</h3>
            <p>Identity, RL Marketing</p>
            <p>2010</p>
            <p>{props.id}</p>
          </motion.div>
        </motion.div>
        {/* <div>
          <img className="mockup" src={img} alt="Mockup of the job"/>
        </div> */}
        <motion.div animate={controls3}>
          <p className="more" onClick={() => props.handleClick(props.id)}>+ More</p>
        </motion.div>
        </>
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
  