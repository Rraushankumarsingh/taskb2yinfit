import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isWorkflowOpen, setWorkflowOpen] = useState(false);
  const [isDocumentsOpen, setDocumentsOpen] = useState(false);
  const [isContactsOpen, setContactsOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2  ml-5 flex items-center bg-blue-500 text-white py-2 px-4 rounded">
        Temelio Foundation
      </h2>

      <div className="w-64 h-screen bg-[#F8F8F8] p-5 rounded-[10px] transition-all duration-300">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-300"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="material-icons text-gray-400">search</span>
          </span>
        </div>

        <nav>
          <ul>
            <li className="mb-4 flex items-center">
              <span className="material-icons mr-3 text-blue-500">home</span> Notifications
            </li>

            <li className="mb-4 flex items-center">
              <span className="material-icons mr-3 text-red-500">task</span> Tasks
            </li>

            <li className="mb-4 flex items-center">
              <span className="material-icons mr-3 text-green-500">description</span> Proposals
            </li>

            <li className="mb-4">
              <div
                className="flex items-center cursor-pointer justify-between transition-all duration-300"
                onClick={() => setWorkflowOpen(!isWorkflowOpen)}
              >
                <span className="flex items-cente text-xl">Workflow</span>
                {isWorkflowOpen ? (
                  <ChevronUpIcon className="w-5 h-5 text-yellow-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              {isWorkflowOpen && (
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-purple-500">construction</span> Form Builder
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-teal-500">supervisor_account</span> Reviewers
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-pink-500">payments</span> Payments
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-indigo-500">assignment</span> Grantee Reports
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-4">
              <div
                className="flex items-center cursor-pointer justify-between transition-all duration-300"
                onClick={() => setDocumentsOpen(!isDocumentsOpen)}
              >
                <span className="flex items-center text-xl">Documents</span>
                {isDocumentsOpen ? (
                  <ChevronUpIcon className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-orange-500" />
                )}
              </div>
              {isDocumentsOpen && (
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-blue-400">insert_drive_file</span> Document Template
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-red-400">folder_shared</span> Document Center
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-4">
              <div
                className="flex items-center cursor-pointer justify-between transition-all duration-300"
                onClick={() => setContactsOpen(!isContactsOpen)}
              >
                <span className="flex items-center text-xl ">Contacts</span>
                {isContactsOpen ? (
                  <ChevronUpIcon className="w-5 h-5 text-pink-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-pink-500" />
                )}
              </div>
              {isContactsOpen && (
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-purple-500">person</span> Grantees
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-indigo-500">person_outline</span> Individuals
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons mr-2 text-teal-500">group</span> Constituents
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
