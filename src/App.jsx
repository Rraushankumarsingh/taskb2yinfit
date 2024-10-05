import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatusOverview from './components/StatusOverview';
import ProposalTable from './components/ProposalTable';
import Header from './components/Header';

const App = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');

  return (
    <div className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>

      <div className="w-[85%] flex flex-col">
        <Header />

        <div className="flex mt-4">
          <div className="w-[20%]">
            <StatusOverview setSelectedStatus={setSelectedStatus} />
          </div>

          <div className="w-[80%]">
            <ProposalTable selectedStatus={selectedStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
