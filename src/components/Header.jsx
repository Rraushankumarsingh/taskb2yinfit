import { useState } from "react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isPipelineOpen, setPipelineOpen] = useState(false);
  const [isAssignedToMeChecked, setAssignedToMeChecked] = useState(false);

  return (
    <div className="p-4 bg-white border-b shadow-sm flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold rounded  w-full h-10 ">Proposals</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded">
          <PlusIcon className="w-5 h-5 mr-2" /> New Proposal
        </button>

        <div className="relative">
          <button
            className="flex items-center bg-gray-100 text-gray-700 py-2 px-4 rounded"
            onClick={() => setPipelineOpen(!isPipelineOpen)}
          >
            Default Pipeline
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </button>
          {isPipelineOpen && (
            <div className="absolute bg-white border mt-2 py-2 rounded shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pipeline 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pipeline 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pipeline 3</li>
              </ul>
            </div>
          )}
        </div>

        <label className="flex items-center space-x-2  bg-gray-100 text-black py-2 px-4 rounded ">
          <input
            type="checkbox"
            checked={isAssignedToMeChecked}
            onChange={() => setAssignedToMeChecked(!isAssignedToMeChecked)}
            className="form-checkbox text-blue-500 rounded"
          />
          <span >Assigned to Me</span>
        </label>
      </div>
    </div>
  );
};

export default Header;
