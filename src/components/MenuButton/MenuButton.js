import { Range } from '../../helpers/utils';
import {useState} from "react";

function MenuButton() {
    const [initial, setInitial] = useState(true);
    const [mainClass, setMainClass] = useState("menu");
    const [menuOpen, setMenuOpen] = useState(false);

    function animateButton() {
        setMainClass("menu menu--big")
        setTimeout(() => { 
            setMainClass("menu")
        }, 1000);
    }

    function animateMenu(){
        if (initial) {
            setInitial(!initial);
        }
        setMenuOpen(!menuOpen);
    }
    
    return(
        <div className={mainClass} 
            onClick={() => animateMenu()}
            onMouseEnter={() => animateButton()}
        >
            {Range(1, 4).map((el) =>  
                initial ? 
                <div id={"slash" + el} className="slash"></div>
                :
                menuOpen ?
                    <div id={"slash" + el} className={"slash slash--" + (el)}></div>
                    :
                    <div id={"slash" + el} className={"slash slash--" + (el) + "B"}></div>
            )}
        </div>
    )

}

export default MenuButton;
