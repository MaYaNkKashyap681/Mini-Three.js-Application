import { Task } from "./Tasks";
import axios from "axios";
import { useState } from "react";

const baseUrl = "http://localhost:4000/v1";

interface NewTask extends Task {
  fetcher: any;
}

const Card: React.FC<NewTask> = ({
  task,
  _id,
  createdAt,
  updatedAt,
  fetcher,
}) => {
  const deleteTask = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`${baseUrl}/del/${_id}`);

      if (res.status === 200) {
        fetcher();
      }
    } catch (err) {
      alert("Error");
    }
  };

  const markComplete = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`${baseUrl}/complete/${_id}`);

      if (res.status === 200) {
        fetcher();
      }
    } catch (err) {
      alert("Error");
    }
  };

  const [updateToggle, setUpdateToggle] = useState(false);
  const [updatedTask, setUpdatedTask] = useState("");
  const handleToggler = async (e: any) => {
    e.preventDefault();
    if (!updateToggle) {
      setUpdateToggle(true);
      return;
    }
    try {
      const res = await axios.patch(`${baseUrl}/updateTask/${_id}`, {
        updatedTask: updatedTask,
      });

      if (res.status === 200) {
        fetcher();
      }
    } catch (err) {
      alert("Something went Wrong!");
    } finally {
      setUpdatedTask("");
      setUpdateToggle(false);
    }
  };
  return (
    <>
      <div className="w-full p-[10px] card cursor-pointer mb-[10px] flex items-center justify-between group">
        {updateToggle ? (
          <textarea
            placeholder={`${task}`}
            className={`bg-transparent border-none text-white w-[80%] resize-none outline-none`}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
        ) : (
          <p className="text-white text-md max-w-[70%]">{task}</p>
        )}
        <div className="mt-2 hidden gap-2 group-hover:flex">
          <button
            className="p-[2px] bg-emerald-400 text-sm text-white h-[20px] w-[20px] rounded-full"
            onClick={markComplete}
          ></button>
          <button
            className="p-[2px] bg-yellow-400 text-sm text-white h-[20px] w-[20px] rounded-full"
            onClick={deleteTask}
          ></button>
          <button
            className="p-[2px] bg-blue-400 text-sm text-white h-[20px] w-[20px] rounded-full"
            onClick={handleToggler}
          ></button>
        </div>
      </div>
    </>
  );
};

const Pending = (props: any) => {
  return (
    <>
      <div className="mt-[30px]">
        <ul className="text-white">
          <li>
            Press&nbsp;&nbsp;&nbsp;
            <button className="p-[2px] bg-emerald-400 text-sm text-white h-[20px] w-[20px] rounded-full "></button>
            &nbsp; to mark task completed
          </li>
          <li>
            Press&nbsp;&nbsp;&nbsp;
            <button className="p-[2px] bg-yellow-400 text-sm text-white h-[20px] w-[20px] rounded-full"></button>
            &nbsp; to Delete Task
          </li>
          <li>
            Press&nbsp;&nbsp;&nbsp;
            <button className="p-[2px] bg-blue-400 text-sm text-white h-[20px] w-[20px] rounded-full"></button>
            &nbsp; to Update Task
          </li>
        </ul>
      </div>
      <div className="mt-[30px]">
        {props.tasks?.map((item: Task, index: number) => (
          <Card {...item} key={index} fetcher={props.fetchTask} />
        ))}
      </div>
    </>
  );
};

export default Pending;
