import React, {useState} from "react";
import { Link } from 'react-scroll'

function MiniMenu(props) {
    const screens = [1, 2, 3];

    const [active, setActive] = useState(1);

    function handleClick(screen){
      setActive(screen);
    }

    return (
      <div>
        {
        props.visible ?
        <div className="MiniMenu">
          {screens.map(screen => 
            <Link 
              key={screen} 
              className={screen === active ? "circleactive" : "circle"} 
              activeClass={"circleactive"} 
              to={"row" + screen} 
              spy={true} 
              smooth={true} 
              duration={500}
              onClick={() => handleClick(screen)}>
            </Link>)
          }
        </div>
        : null
        }
      </div>
      );
}

export default MiniMenu;