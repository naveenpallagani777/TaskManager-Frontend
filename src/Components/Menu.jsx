import { useContext,useState,useRef } from "react";
import { UserContext } from "../Context/userContext";

const Menu = () => {
    const buttonStyle = "relative py-1 px-2 w-full flex items-center justify-between rounded-[3px] hover:bg-[#4682B4]";
    const { list,setList,setPage,mode,setMoblieView} = useContext(UserContext); 
    let [input,setInput] = useState(false);
    let [valueInput,setValue] = useState("");
    let listName = useRef();
    let color = useRef();

    let [menu,setMenu] = useState([
                ["/AppImages/upcoming.png","Upcomming",0],
                ["/AppImages/to-do-list.png","Today",0],
                ["/AppImages/calendar.png","Calender",0],
                ["/AppImages/sticky-note.png","Sticky Notes",0]
            ]);

    const handleInput = () => {
        // console.log(listName.current.value,color.current.value);
        setList([...list,{"color":color.current.value,'name':valueInput,"count":0}]);
        setValue("");
    }

    const handlePages = (data) => {
        setPage(data.toUpperCase());
        setMoblieView("slideIn");
    }

    return (<div className="w-full px-4 py-2  md:p-2 flex flex-col justify-between bg-white shadow-md rounded-md dark:text-white border dark:border-none dark:bg-[#151515] dark:border-black " style={{height:"max(calc(100vh - 20px),650px)"}}>
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-3xl font-semibold">Menu</h1>
                    <img src="/AppImages/menu.png" style={{ filter: mode ? 'invert(100%)' : 'none' }} className="w-8 hover:cursor-pointer hidden md:block" alt="" />
                    <img src="/AppImages/cross.png" style={{ filter: mode ? 'invert(100%)' : 'none' }} onClick={() => {setMoblieView("slideIn")}} className="w-6 hover:cursor-pointer md:hidden block" alt="" />
                </div>
        
                <div >
                    <h2 className="text-xl font-semibold">Tasks</h2>
                    <div className="pl-4 flex flex-col items-start">
                        {menu.map((item, index) => (
                            <button onClick={() => {handlePages(item[1])}} key={index} className={buttonStyle}>
                                <div className="flex items-center gap-2">
                                    <img src={item[0]} className="w-5" style={{ filter: mode ? 'invert(100%)' : 'none' }} alt="" />
                                    {item[1]}
                                </div>
                                <div className="bg-slate-200 px-1.5 rounded-sm text-black">0</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Lists</h2>
                    <div className="pl-4 flex flex-col items-start">
                        {list.map((item, index) => (
                            <button onClick={() => {setPage(item.name.toUpperCase())}} key={index} className={buttonStyle}>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-[4px]" style={{background:item.color}}></div>
                                    <div className="w-32 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                                        {item.name}
                                    </div>
                                </div>
                                <div className="bg-slate-200 px-1.5 rounded-sm text-black">{item[2]}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {!input && <button onClick={() => {setInput(true)}} className="w-full flex justify-center items-center gap-1 border p-1 text-lg font-medium mt-2 rounded-md">
                    <img src="/AppImages/list.png" style={{ filter: mode ? 'invert(100%)' : 'none' }} className="w-7" alt="" />
                    NEW LIST
                </button>}
                {/* input to list */}
                {input && <div className="flex flex-col gap-1.5 rounded-md items-center border p-3 mt-2">
                    <div className="flex gap-2">
                        <label> Color :</label>
                        <input ref={color} type="color" className="w-10"/>
                    </div>
                    <input type="text" value={valueInput} className="bg-slate-100 pl-3 py-0.5 rounded-md border" onChange={(e) => {setValue(e.target.value)}} placeholder="List Name"/>
                    <div className="flex gap-2">
                        <button onClick={handleInput} className="border px-2 py-0.5 rounded-[4px] bg-blue-500 hover:bg-blue-600 hover:text-white">SUBMIT</button>
                        <button onClick={() => {setInput(false)}} className="border px-2 py-0.5 rounded-[4px] bg-red-400 hover:bg-red-500 hover:text-white">CANCEL</button>
                    </div>
                </div>}
            </div>

            <div >
                <button className={buttonStyle}>
                    <div className="flex items-center gap-2">
                        <img src="/Appimages/setting.png" style={{ filter: mode ? 'invert(100%)' : 'none' }} className="w-5  filter invert-100" alt="" />
                        Settings
                    </div>
                </button>
                <button className={buttonStyle}>
                    <div className="flex items-center gap-2">
                        <img src="/Appimages/logout.png" style={{ filter: mode ? 'invert(100%)' : 'none' }} className="w-5" alt="" />
                        Logout
                    </div>
                </button>
            </div>
        </div>)
}

export default Menu;