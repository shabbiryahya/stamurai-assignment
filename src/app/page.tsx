import TaskList from "@/components/TaskList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = async ({}) => {

  return (
    <div className="h-screen">
       
      <h1 className="text-2xl sm:text-2xl font-serif tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Welcome to Task Management system
      </h1>

      <div className="grid place-items-center">
        <TaskList />
        <ToastContainer/>

      </div>
    </div>
  );
};

export default Home;
