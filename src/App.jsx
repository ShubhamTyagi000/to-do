import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import ToDoContextProvider from "./context/ToDoContextProvider";
import "./App.css";

function App() {
  return (
    <ToDoContextProvider>
      <div className="min-h-screen bg-gray-100 p-10 flex flex-col sm:flex-row gap-8 justify-center items-start overflow-hidden">
        <div className="w-full sm:w-1/2 bg-white p-8 rounded-xl shadow-2xl flex flex-col space-y-6 overflow-y-auto h-full">
          <h2 className="text-3xl font-semibold text-gray-800">Your To-Dos</h2>
          <LeftPane />
        </div>

        <div className="w-full sm:w-1/2 bg-white p-8 rounded-xl shadow-2xl flex flex-col space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Add New To-Do
          </h2>
          <RightPane />
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
