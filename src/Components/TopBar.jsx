import './style.css';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';

const TopBar = () => {
    let {mode,setMode,setDark,setMoblieView} = useContext(UserContext);
    const handleOnClick = () => {
        setMode(prev => !prev);
        setDark(prev => {
            return prev === "" ? "dark bg-[#0c0c0c]" : "";
        });
    };

    // const openMenu = () => {
    //     setMenu((prev) => prev !== "slideOut" ? "slideOut":"" )
    // }
    
    return (
        <div className="w-full flex justify-between px-1 lg:px-10 border shadow-md py-1 rounded-md dark:text-white dark:border-none dark:bg-[#151515] dark:border-black ">
            <div className="group flex items-center  gap-2">
                <svg 
                    className="icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                >
                    <g >
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input 
                    placeholder="Search" 
                    type="search" 
                    className="input dark:bg-[#303030]" 
                    aria-label="Search"
                />
            </div>

            <div className='flex items-center gap-2' >
                <label className="switch">
                    <input type="checkbox" onClick={handleOnClick}/>
                    <span className="slider"></span>
                </label>
                <img src="/AppImages/profile.png" className='w-9 hidden md:block' alt="Profile" style={{ filter: mode ? 'invert(100%)' : 'none' }}/>
                <img onClick={() => {setMoblieView("slideOut")}} src="/AppImages/menu.png" className='w-9 block md:hidden p-0.5 rounded-[5px] bg-gray-300' alt="Profile" style={{ filter: mode ? 'invert(100%)' : 'none' }}/>
            </div>
        </div>
    );
}

export default TopBar;
