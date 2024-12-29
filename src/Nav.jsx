import { IoMenu } from "react-icons/io5";
export default function Nav(){
    return(
        <div className="bg-black ">
            <nav class="bg-black">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl "></div>
            </nav>
            <nav class=" dark:bg-gray-700  ">
                <div class="max-w-screen-xl px-4  mx-auto h-12 ">
                    <div class="flex items-center h-full justify-between">
                        <div className="h-full">
                        <ul class="flex flex-row font-medium space-x-8  text-sm">
                            <div className="bg-red-600 h-12 text-center w-52 py-1 flex justify-center gap-x-2 ">
                                <IoMenu className=" mt-2 text-lg text-white"/>
                                <a href="#" class="text-white   dark:text-white hover:underline mt-2" py-1 aria-current="page">All Categories</a>
                            </div>
                            <li className="mt-3"> 
                                <a href="#" class="text-white dark:text-white hover:text-orange-600 mt-2" aria-current="page">Home</a>
                            </li>
                            <li className="mt-3">
                                <a href="#" class="text-white dark:text-white hover:text-orange-600">Shop</a>
                            </li>
                            <li className="mt-3"> 
                                <a href="#" class="text-white dark:text-white hover:text-orange-600">About</a>
                            </li>
                            <li className="mt-3">
                                <a href="#" class="text-white dark:text-white hover:text-orange-600">Contact Us</a>
                            </li>
                            </ul>
                            </div>
                            <div>
                            <li>
                                <a href="#" class="text-white ml-96 dark:text-white hover:text-orange-600 ">Login/Register</a>
                            </li>
                            </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}