import React, {useState} from "react";
import { Link } from 'react-scroll';
import { Range } from '../../helpers/utils';

function MiniMenu(props) {
    const [active, setActive] = useState(1);

    function handleClick(screen){
      setActive(screen);
    }

    return (
      <div>
        {
        props.visible ?
        <div className="MiniMenu">
          {Range(1, (props.size +1)).map(screen => 
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