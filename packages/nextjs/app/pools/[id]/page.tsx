import React from "react";

const PoolDetailsPage = ({ params }: { params: { id: number } }) => {
  return <div>{params.id}</div>;
};

export default PoolDetailsPage;
