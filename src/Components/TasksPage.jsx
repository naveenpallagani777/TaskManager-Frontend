import { useContext,useState } from "react";
import { UserContext } from "../Context/userContext";
import Task from "./Task";


const TasksPage = () => {
    const date = new Date();
    let mouth = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    let {page,setInputPage,inputpage} = useContext(UserContext);
    let day = date.getDate()+" "+mouth[date.getMonth()]+" "+date.getFullYear();
    let style = `p-2 border grow flex flex-col gap-2 rounded-md border shadow-md dark:text-white dark:border-none dark:bg-[#151515] dark:border-black `
    if (inputpage) style = `p-2 border grow hidden lg:flex  flex-col gap-2 rounded-md border shadow-md dark:text-white dark:border-none dark:bg-[#151515] dark:border-black `

    const [selectedOption, setSelectedOption] = useState('All');

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
      console.log(`Selected option: ${e.target.value}`);
    }
    return <div className={style}>
            <h1 className="p-1 text-center text-xl md:text-2xl lg:text-3xl md:text-left font-extrabold ">
                {page !== "TODAY" ? `${page} TASKS` : `TODAY  ${day} `}
            </h1>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
                <button onClick={() => {setInputPage(true)}} className="border text-white bg-blue-600 hover:bg-blue-700 flex rounded justify-center md:justify-start items-center gap-1 font-medium py-1 px-3">
                    <img src="/AppImages/task.png" style={{ filter:  'invert(100%)'}} className="w-7" alt="" />
                    NEW TASK
                </button>
                <div className="relative inline-block  w-34"> {/* Reduced width */}
                <select
                    className="block w-full px-4 py-2 pr-8 bg-green-600 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Complete">Complete</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20">
                    <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>
            </div>
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
    </div>
}

export default TasksPage;