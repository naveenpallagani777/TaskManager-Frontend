import { UserContext } from '../Context/userContext';
import { useContext } from 'react';

const Task = () => {
    const { mode } = useContext(UserContext);

    return (
        <div className={`px-4 py-2 border-l-4 md:border-l-8 rounded-md ${mode ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'} shadow-md`}>
            <div className='flex justify-between mb-1 items-center'>
                <h1 className={`text-xl md:text-2xl font-semibold ${mode ? 'text-white' : 'text-gray-800'}`}>Software Update</h1>
                <img 
                    className='w-5 md:w-6 cursor-pointer' 
                    src="/AppImages/taskDelete.png" 
                    style={{ filter: mode ? 'invert(100%)' : 'none' }} 
                    alt="Delete Task" 
                />
            </div>
            <div className="flex gap-6 md:gap-10 text-sm">
                <div className="flex gap-2 items-center">
                    <img 
                        className="w-4" 
                        src="/AppImages/calendar.png" 
                        alt="End Date" 
                        style={{ filter: mode ? 'invert(100%)' : 'none' }} 
                    />
                    <span className="text-[12px]  dark:text-gray-300 text-gray-700">32-8-2024</span>
                </div>
                
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 rounded-sm' style={{ background: "#676767" }}></div>
                    <p className="text-[12px]  dark:text-gray-300 text-gray-700">Personal</p>
                </div>

                <div className='flex items-center gap-2'>
                    <div className="border px-1.5 rounded-md">
                        <span className="text-[12px]  dark:text-gray-300 text-gray-700">3</span>
                    </div>
                    <p className="text-[12px]  dark:text-gray-300 text-gray-700">Sub Tasks</p>
                </div>
                
            </div>
        </div>
    );
};

export default Task;
