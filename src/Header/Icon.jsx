import { FcLike } from "react-icons/fc";
import { IoBag } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function Icon(){
    return(
        <div className="flex gap-x-3">
            <FcLike className="text-2xl"/>
            <IoBag className="text-2xl"/>
            <CiUser className="text-2xl"/>
        </div>
    )
}