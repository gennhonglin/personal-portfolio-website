import Navigation from "../../components/Navigation/Navigation";
import "./Homepage.scss";
import {motion} from "framer-motion";
import About from "../../components/About/About";

export default function Homepage() {
    return(
        <motion.div className="homepage"
        //  initial={{x: "100%"}}
        //  animate={{x: 0}}
        //  transition={{type: "spring", stiffness: 100}}
        //  exit={{opacity: 1}}
         >
            <Navigation/>
            <About/>
        </motion.div>
    )
}