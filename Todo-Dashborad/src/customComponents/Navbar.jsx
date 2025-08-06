import { useState } from "react"
import { useDispatch } from "react-redux";
import { searchTodo } from "../features/TodoSlice";
import { IoMdMenu } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";


const Navbar = () => {
    const [inputVal, setInputVal] = useState("");

    const dispatch = useDispatch();
    console.log(inputVal);
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setInputVal(searchValue);
        dispatch(searchTodo(searchValue))
    }

    const handleLeftSidebar = () => {
    }

    const handleRightSidebar = () => { }


    return (
        <div className='border-b border-gray-300 py-3'>
            <div className='max-w-[1300px] w-full px-4 md:px-0 md:mx-auto flex items-center justify-between'>
                <div className='flex-1'>
                    <h1 className='hidden md:block text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>TaskMaster Pro</h1>
                    <p className="md:hidden"><IoMdMenu onClick={handleLeftSidebar} size="20" /></p>
                </div>
                <div className="border border-gray-400 rounded-full flex items-center gap-1.5 flex-3 md:flex-1 px-4 py-2 bg-white shadow-sm">
                    <span>
                        🔍
                    </span>
                    <input
                        value={inputVal}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search tasks, projects or tags.."
                        className="outline-none w-full bg-transparent text-sm text-gray-700"
                    />
                </div>

                <div className='flex flex-1 items-center gap-0.5 justify-end'>
                    <div className='hidden md:flex bg-gradient-to-t from-blue-300 to-purple-600 text-base text-white px-2 py-1 font-bold rounded-full  items-center justify-center'>JD</div>
                    <p className="hidden md:block">Jhon Doe</p>
                    <p className="block md:hidden"><SiGoogleanalytics onClick={handleRightSidebar} size="20" /></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
