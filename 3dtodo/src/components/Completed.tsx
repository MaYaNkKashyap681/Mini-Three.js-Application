import { Task } from "./Tasks"



const Card: React.FC<Task>= ({task, _id, createdAt, updatedAt}) => {
return (
  <>
  <div className="w-full p-[10px] card cursor-pointer mb-[10px]">
    <h1 className="text-white">{task}</h1>
    <span className="text-white text-sm">{Date()}</span>
  </div>
 </>
);
}

const Completed = (props: any) => {


  return (
    <div className="mt-[30px]">
      {
        props.tasks?.map((item: Task, index: number) => (
           <Card {...item} key = {index} />
        ))
      }
    </div>
  )
}

export default Completed