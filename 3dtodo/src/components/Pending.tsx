import { Task } from "./Tasks";
import axios from "axios";

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
  return (
    <>
      <div className="w-full p-[10px] card cursor-pointer mb-[10px] flex items-center justify-between group">
        <h1 className="text-white text-md max-w-[70%]">{task}</h1>
        <div className="mt-2 hidden gap-2 group-hover:flex">
          <button
            className="p-[2px] bg-emerald-400 text-sm text-white h-[20px] w-[20px] rounded-full"
            onClick={markComplete}
          ></button>
          <button
            className="p-[2px] bg-yellow-400 text-sm text-white h-[20px] w-[20px] rounded-full"
            onClick={deleteTask}
          ></button>
        </div>
      </div>
    </>
  );
};

const Pending = (props: Task[]) => {
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
        </ul>
      </div>
      <div className="mt-[30px]">
        {props.tasks?.map((item, index) => (
          <Card {...item} key={index} fetcher={props.fetchTask} />
        ))}
      </div>
    </>
  );
};

export default Pending;
