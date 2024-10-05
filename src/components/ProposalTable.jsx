const ProposalTable = ({ selectedStatus }) => {
    const proposals = {
      readyForNextStage: [
        {
          title: 'Trees of the Future - 2023',
          Stage: 'Submitted',
          entity: 'Trees of the Future',
          funding: '$5000',
          tags: ['Climate', 'Climate Justice'],
        },
        {
          title: 'Art For All - 2024 - Temelio',
          Stage: 'Submitted',
          entity: 'Art For All',
          funding: '$0',
          tags: ['Climate', 'Arts', 'Scholarship'],
        },
        {
          title: 'Save the Children - 2024',
          Stage: 'In Review',
          entity: 'Save the Children',
          funding: '$400,000',
          tags: ['Education'],
        },
        {
          title: 'Climate Words - 2024 - Ten',
          Stage: 'Drafts',
          entity: 'Climate Words',
          funding: '$10,000',
          tags: ['Arts'],
        },
      ],
      drafts: [
        {
          title: 'New Draft Proposal - 2024',
          Stage: 'Drafts',
          entity: 'New Proposal',
          funding: '$2000',
          tags: ['Innovation'],
        },
        {
            title: 'New Draft Proposal - 2024',
            Stage: 'Drafts',
            entity: 'New Proposal',
            funding: '$2000',
            tags: ['Innovation'],
          },
          {
            title: 'New Draft Proposal - 2024',
            Stage: 'Drafts',
            entity: 'New Proposal',
            funding: '$2000',
            tags: ['Innovation'],
          },
          {
            title: 'New Draft Proposal - 2024',
            Stage: 'Drafts',
            entity: 'New Proposal',
            funding: '$2000',
            tags: ['Innovation'],
          },
      ],
      submitted: [
        {
          title: 'Submitted Proposal - 2024',
          Stage: 'Submitted',
          entity: 'Innovation Co.',
          funding: '$10000',
          tags: ['Research', 'Technology'],
        },
        {
            title: 'Submitted Proposal - 2024',
            Stage: 'Submitted',
            entity: 'Innovation Co.',
            funding: '$10000',
            tags: ['Research', 'Technology'],
          },
          {
            title: 'Submitted Proposal - 2024',
            Stage: 'Submitted',
            entity: 'Innovation Co.',
            funding: '$10000',
            tags: ['Research', 'Technology'],
          },
          {
            title: 'Submitted Proposal - 2024',
            Stage: 'Submitted',
            entity: 'Innovation Co.',
            funding: '$10000',
            tags: ['Research', 'Technology'],
          },
      ],
     
    };
  
    const tagColors = [
      'bg-green-200 text-green-800',
      'bg-blue-200 text-blue-800',
      'bg-red-200 text-red-800',
      'bg-yellow-200 text-yellow-800',
      'bg-purple-200 text-purple-800',
      'bg-pink-200 text-pink-800',
      'bg-teal-200 text-teal-800',
      'bg-indigo-200 text-indigo-800',
    ];
  
    const filteredProposals =
      selectedStatus === 'All'
        ? [...proposals.readyForNextStage, ...proposals.drafts] 
        : proposals[selectedStatus.toLowerCase()] || []; 
  
    return (
      <div className="mx-auto ml-1 mr-7 bg-white shadow-lg rounded-lg">
        <Section title="Ready For Next Stage" proposals={proposals.readyForNextStage} tagColors={tagColors} />
  
        <Section title={`${selectedStatus} Proposals`} proposals={filteredProposals} tagColors={tagColors} />
      </div>
    );
  };
  
  const Section = ({ title, proposals, tagColors }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {title} ({proposals.length})
      </h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Proposal Title</th>
            <th className="py-3 px-6 text-left">Stage</th>
            <th className="py-3 px-6 text-left">Entity</th>
            <th className="py-3 px-2 text-left">Funding Requested</th>
            <th className="py-3 px-6 text-left">Tags</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {proposals.map((proposal, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left text-[#3B82F6]">{proposal.title}</td>
              <td className="py-3 px-6 text-left">{proposal.Stage}</td>
              <td className="py-3 px-6 text-left">{proposal.entity}</td>
              <td className="py-3 px-6 text-left">{proposal.funding}</td>
              <td className="py-3 px-6 text-left">
                {proposal.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`${tagColors[idx % tagColors.length]} py-1 px-3 rounded-full text-xs mr-2`}
                  >
                    {tag}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default ProposalTable;
  