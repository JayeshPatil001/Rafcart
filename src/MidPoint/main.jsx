import Image from "./image" ;
import Right from "./Right";
import Bottom from "./Bottom";
import Logo from "./Logo";


export default function Main(){
    return(
        <>
        <div className="flex">
            <Image />
            <Right />
            
        </div>
        <div className="flex flex-col">
        <Bottom />
        <Logo/>
        </div>
       
        </>
    )
}