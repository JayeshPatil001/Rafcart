import Right from "./Right";
import Left from "./Left";

export default function Foot(){
    return(
        <div className="flex justify-between ml-12 mt-12">
            <Left />
            <Right />
        </div>
    )
}