import Menu from './Components/Menu'
import TopBar from './Components/TopBar';
import TasksPage from './Components/TasksPage';
import { UserContext } from './Context/userContext';
import { useContext ,useEffect} from 'react';
import TaskInput from "./Components/TaskInput";
import Calendar from './Components/Calendar';
import "./index.css";

const ToDoList = () => {
    let style = "grid h-full gap-2 grid-cols-1";
    let {page, inputpage,dark,moblieView} = useContext(UserContext);
    if(inputpage) style += " lg:grid-cols-2";

    useEffect(() => {
        let menu = document.getElementById("menu");
        menu.style.animation = `${moblieView} 0.5s ease forwards`;
    },[moblieView])
    
    return (<div className={`grid gap-2 gird-cols-1  h-screen md:h-full md:grid-cols-[auto_1fr] py-2.5 px-2 ${dark}`}>
                <div className='hidden md:block  bg-white dark:bg-[#151515] rounded-md w-56'>
                    <Menu />
                </div>
                <div id="menu" className='fixed top-0 -left-[270px] md:relative my-2.5 mx-2 border md:hidden bg-white dark:bg-[#151515]  rounded-md z-10 w-[250px]'>
                    <Menu />
                </div>
                <div className='w-full md:h-full flex flex-col gap-2'>
                    <TopBar />
                    <div className={style}>
                        {page === "CALENDER" && <Calendar />}
                        {page !== "CALENDER" && <TasksPage />}
                        
                        {inputpage && <TaskInput />}
                    </div>
                    
                </div>
            </div>
    );
}



export default ToDoList;