import React from "react";
import Image from "next/image";
import Link from "next/link";
import proposalMockData from "../../mock/proposal-data";

const ProposalsPage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-xl">Proposals</h1>
        <Link className="btn btn-primary" href={"/proposals/new"}>
          Submit proposal
        </Link>
      </div>
      <div className="divider"></div>
      <div className="pb-10">
        <select className="select select-bordered w-full max-w-xs" defaultValue={""}>
          <option>Active</option>
          <option>Funded</option>
          <option>Rejected</option>
        </select>
      </div>
      <div className="grid gap-y-6 grid-cols-3">
        {proposalMockData.map(project => (
          <Link className="card w-96 bg-base-100 shadow-xl" key={project.id} href={`/proposals/${project.id}`}>
            <figure>
              <Image src={project.image} alt="Shoes" width={384} height={227} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.title}</p>
              <div className="card-actions justify-end">
                {project.tags.map(tag => (
                  <div className="badge badge-secondary" key={tag.id}>
                    {tag.tag}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProposalsPage;
