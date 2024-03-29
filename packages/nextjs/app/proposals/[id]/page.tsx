import React from "react";
// import Image from "next/image";
import Link from "next/link";

const ProposalDetailsPage = ({ params }: { params: { id: string } }) => {
  const proposal_mock = {
    id: params.id,
    status: "Approved",
    title: "Project Title",
    owner: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
    created: new Date().toISOString(),
    votes: {
      for: 5,
      against: 2,
      abstain: 1,
    },
    description: "Project description",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    raised: 1000,
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="badge badge-success">{proposal_mock.status}</div>
          <h1 className="text-2xl">{proposal_mock.title}</h1>
          <p className="text-gray-500">
            Proposed by{" "}
            <span className="link border-l-pink-50">
              {proposal_mock.owner.slice(0, 6) + "..." + proposal_mock.owner.slice(-4)}
            </span>{" "}
            on {new Date(proposal_mock.created).toISOString().substring(0, 10)}
          </p>
        </div>
        <button className="btn btn-primary">Submit Vote</button>
      </div>

      <div className="grid grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-success w-full">For</h2>
              <p className="card-title">{proposal_mock.votes.for}</p>
            </div>
            <progress className="progress progress-success w-full" value="60" max="100"></progress>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-error w-full">Against</h2>
              <p className="card-title">{proposal_mock.votes.against}</p>
            </div>
            <progress className="progress progress-error w-full" value="30" max="100"></progress>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title w-full">Abstain</h2>
              <p className="card-title">{proposal_mock.votes.abstain}</p>
            </div>
            <progress className="progress w-full" value="10" max="100"></progress>
          </div>
        </div>
      </div>

      <div className="mb-4">
        {/* <Image src={proposal_mock.image} alt={proposal_mock.title} width={1000} height={1000} /> */}
        <p className="text-lg">{proposal_mock.title}</p>
        <p className="text-gray-500">{proposal_mock.description}</p>
        <div className="flex justify-between items-center">
          <p>Raised: {proposal_mock.raised} ETH</p>
          <Link href={`/proposals/${params.id}/contribute`} className="btn btn-primary">
            Contribute
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <p>Owner: {proposal_mock.owner}</p>
      </div>
      <div className="mb-4">
        <p>Status: {proposal_mock.status}</p>
        <p>Votes: 0</p>
        <p>Comments: 0</p>
        <Link href={`/proposals/${params.id}/comments`} className="btn btn-primary">
          View Comments
        </Link>
      </div>
    </div>
  );
};

export default ProposalDetailsPage;
