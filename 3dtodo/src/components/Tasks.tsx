import { useEffect, useState } from "react";
import Completed from "./Completed";
import Pending from "./Pending";
import axios from "axios";

export interface Task {
  task: String;
  _id: String;
  completionStatus: Boolean;
  createdAt: String;
  updatedAt: String;
}

const Tasks = () => {
  const [pageInView, setPageInView] = useState<number>(0);
  const [completed, setCompleted] = useState<Task[]>([]);
  const [pending, setPending] = useState<Task[]>([]);
  const [adder, setAdder] = useState<boolean>(false);
  const [tasker, setTasker] = useState<String>("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/v1/all");
      if (res.status === 200) {
        const data = res.data;
        var a: Task[] = [];
        var b: Task[] = [];
        for (var i = 0; i < data.length; ++i) {
          data[i].completionStatus === true ? a.push(data[i]) : b.push(data[i]);
        }
        setCompleted(a);
        setPending(b);
      }
    } catch (err) {
    alert('error')
    }
  };

  const addTask = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/v1/add", {
        task: tasker,
      });

      if (res.status === 200) {
        fetchTasks();
      }
    } catch (err) {
       alert('Error')
    } finally {
      setTasker("");
      setAdder(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggler = (page: number): void => {
    setPageInView(page);
  };
  return (
    <>
      <div className="px-4">
        <span className="text-white font-semibold text-[40px] block">
          Check Your Tasks
        </span>
      </div>

      <div className="w-[full] p-[20px] ">
        <div
          className={`border-[1px] border-white inline-block px-6 py-2 cursor-pointer buttonclick relative mr-2 first-letter ${
            pageInView === 0 ? "bg-[#393646]" : ""
          }`}
          onClick={() => toggler(0)}
        >
          <span className="font-bold text-[16px] text-white">Pending</span>
        </div>
        <div
          className={`border-[1px] inline-block px-6 py-2 cursor-pointer buttonclick relative ${
            pageInView === 1 ? "bg-[#393646]" : ""
          }`}
          onClick={() => toggler(1)}
        >
          <span className="font-bold text-[16px] text-white">Completed</span>
        </div>
        <div className="w-full bg-gradient-to-r from-[#393646] h-[5px] mt-[10px]"></div>

        {adder ? (
          <>
            <button
              className=" bg-red-400 text-sm text-white p-[4px] rounded-sm mt-[10px]"
              onClick={() => setAdder((prev) => !prev)}
            >
              Close
            </button>
            <form>
              <div className="mt-[2px]">
                <span className="text-[#968eba] font-semibold text-[14px]">
                  Enter Task:
                </span>
                <input
                  type="text"
                  name="task"
                  className="p-[6px] bg-[#443f5d] block w-full mt-1 rounded-md text-white"
                  onChange={(e: any) => setTasker(e.target.value)}
                />
              </div>
              <button
                className=" bg-green-400 text-sm w-full text-white p-[4px] rounded-sm mt-[10px]"
                onClick={addTask}
              >
                Add Task
              </button>
            </form>
          </>
        ) : (
          <>
            <button
              className=" bg-blue-400 text-sm text-white py-[4px] px-[10px] rounded-sm mt-[10px]"
              onClick={() => setAdder((prev) => !prev)}
            >
              Add Task
            </button>
          </>
        )}
        <div>
          {pageInView === 0 ? (
            <Pending tasks={pending} fetchTask={fetchTasks} />
          ) : (
            <Completed tasks={completed} />
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
