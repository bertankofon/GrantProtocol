import React from "react";

const ProposalDetailsPage = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default ProposalDetailsPage;
