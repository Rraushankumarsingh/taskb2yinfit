const StatusOverview = ({ setSelectedStatus }) => {
    const statuses = [
      { name: 'All', count: 65, icon: 'drafts', color: 'text-gray-500' }, 
      { name: 'Drafts', count: 7, icon: 'drafts', color: 'text-blue-500' },
      { name: 'Submitted', count: 13, icon: 'send', color: 'text-green-500' },
      { name: 'In Review', count: 8, icon: 'hourglass_empty', color: 'text-yellow-500' },
      { name: 'Pending', count: 1, icon: 'pending', color: 'text-orange-500' },
      { name: 'Approved', count: 0, icon: 'check_circle', color: 'text-green-700' },
      { name: 'Rejected', count: 1, icon: 'cancel', color: 'text-red-500' },
      { name: 'Agreement', count: 4, icon: 'gavel', color: 'text-purple-500' },
      { name: 'Payment', count: 0, icon: 'payment', color: 'text-indigo-500' },
      { name: 'Reporting', count: 1, icon: 'report', color: 'text-pink-500' },
      { name: 'Awarded', count: 31, icon: 'emoji_events', color: 'text-yellow-700' },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-[-20px]">
        <h2 className="text-lg font-semibold mb-4">Proposals Overview</h2>
        <ul>
          {statuses.map((status, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-3 cursor-pointer"
              onClick={() => setSelectedStatus(status.name)} 
            >
              <span className="flex items-center">
                <span className={`material-icons mr-3 ${status.color}`}>{status.icon}</span>
                {status.name}
              </span>
              <span className="text-gray-700">{status.count}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StatusOverview;
  