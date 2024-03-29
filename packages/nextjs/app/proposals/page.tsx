import React from "react";
import Image from "next/image";
import Link from "next/link";

const mock_projects = [
  {
    id: 1,
    name: "Project1!",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    owner: "0x0000000000000000000000000000000000000000",
    raised: 1000,
  },
  {
    id: 2,
    name: "Project2!",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    owner: "0x000000000000000000000000000000000000000",
    raised: 1000,
  },
  {
    id: 3,
    name: "Project2!",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    owner: "0x000000000000000000000000000000000000000",
    raised: 1000,
  },
  {
    id: 2,
    name: "Project2!",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    owner: "0x000000000000000000000000000000000000000",
    raised: 1000,
  },
];

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
        {mock_projects.map(project => (
          <Link className="card w-96 bg-base-100 shadow-xl" key={project.id} href={`/proposals/${project.id}`}>
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                width={384}
                height={227}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProposalsPage;
