import { useContext,useState } from "react";
import { UserContext } from "../Context/userContext";

const TaskInput = () => {
    let {list, mode, setInputPage} = useContext(UserContext);

    let [subTask,setSubTask] = useState([]);
    let [subTaskName,setSubTaskName] = useState("");
    let [inputTask,setInputTask] = useState({
        heading: "",
        description:"",
        dueDate:"",
        type:"None"
    })
    console.log(subTask);

    const addSubTask = (e) => {
        e.preventDefault()
        if(subTaskName.trim() === "") return;
        setSubTask([...subTask,{name:subTaskName,states:false}]);
        setSubTaskName("");
    }

    const deleteSubTask = (i) => {
        let newSubTasks = subTask.filter((ele,index) => i !== index);
        setSubTask(newSubTasks);
    }

    return (<div className="">
        <form className="flex flex-col justify-between h-full border shadow-md p-3 rounded-md dark:text-white dark:border-none dark:bg-[#151515] dark:border-black ">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl  font-extrabold">Task :</h1>
                <input 
                    className="bg-gray-100 dark:bg-[#303030] rounded-md p-1 pl-3"
                    type="text" placeholder="Task Heading..."
                    value={inputTask.heading}
                    onChange={(e) => {setInputTask(prev => ({...prev,"heading":e.target.value}))}}
                />
                <textarea 
                    className="bg-gray-100 dark:bg-[#303030] rounded-md p-2 h-24 md:h-36" 
                    placeholder="Description..." 
                    value={inputTask.description}
                    onChange={(e) => {setInputTask(prev => ({...prev,"description":e.target.value}))}}
                />
                <div className="flex gap-2">
                    <label>List :</label>
                    <select 
                        className="bg-gray-100 dark:bg-[#303030] rounded-md" 
                        onChange={(e) => {setInputTask(prev => ({...prev,"type":e.target.value}))}} >
                        <option value="">None</option>
                        {
                            list.map((item,index) => <option key={index}>{item.name}</option>)
                        }
                    </select>
                </div>
                <div className="flex gap-2">
                    <label>Due Date :</label>
                    <input 
                        className="bg-gray-100 dark:bg-[#303030] px-1 rounded-md"
                        type="date" 
                        value={inputTask.dueDate}
                        onChange={(e) => {setInputTask(prev => ({...prev,"dueDate":e.target.value}))}}
                    />
                </div>
                <h1 className="text-xl font-extrabold">SubTasks :</h1>
                {subTask.length < 5 && <div className="flex gap-3">
                    <input 
                        type="text" 
                        className="p-1 pl-3 grow bg-gray-100 dark:bg-[#303030] rounded-md"
                        placeholder="SubTask..."
                        value={subTaskName}
                        onChange={(e) => {setSubTaskName(e.target.value)}}
                    />
                    <button 
                        className="py-1 px-6 bg-blue-600 text-white rounded-[5px]" 
                        onClick={(e) => {addSubTask(e)}}>
                            ADD 
                    </button>
                    
                </div>}
                {subTask.length != 0 && <div className="flex flex-col px-4 py-2 bg-gray-100 dark:bg-[#303030] rounded-md">
                    {
                    subTask.map((item,index) => (
                        <p 
                            className="flex justify-between items-center text-[14px] md:text-[18px]" 
                            key={index}>

                                {index+1 +". "+item.name}
                                <img 
                                    className="w-4 md:w-5 cursor-pointer" 
                                    src="/AppImages/taskDelete.png"
                                    onClick={() => {deleteSubTask(index)}}
                                    style={{ filter: mode ? 'invert(100%)' : 'none' }}
                                    alt="" />
                        </p>))
                    }
                </div> }
            </div>
            
            <div className="flex gap-3 justify-center items-center">
                <button onClick={() => {setInputPage(false)}} className="px-3 py-1 bg-red-600 text-white font-bold rounded-[5px]">DISCARD</button>
                <button className="px-3 py-1 bg-blue-600 text-white font-bold rounded-[5px]">SUBMIT</button>
            </div>
        </form>
    </div>)
}

export default TaskInput;