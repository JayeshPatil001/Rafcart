import Name from "./Name" ;
import SearchBox from "./SearchBox";
import Icon from "./Icon";

export default function Base(){
    return(
        <div className="flex justify-around  sticky top-0 bg-gray-100 mt-0 mb-0 p-3">
            <Name/>
            <SearchBox />
            <Icon />
        </div>
    )
}