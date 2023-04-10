import {Beauty, Tasks} from './index'

const Main = () => {
  return (
    <div className="lg:w-full h-screen flexer">
      <div className="md:h-screen h-[40%] lg:w-[40%] w-full bg-white transition-all">
        <Beauty />
      </div>
      <div className="h-screen flex-8 lg:w-[60%] w-[full] p-[40px] backgroundGrad overflow-scroll overflow-x-hidden">
        <Tasks />
      </div>
    </div>
  );
};

export default Main;
