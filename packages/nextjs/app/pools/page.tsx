import React from "react";
import Link from "next/link";
import pools from "../../mock/pool-data";

const PoolsPage = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {pools.map(pool => {
        return (
          <Link key={pool.id} href={`/pools/${pool.id}`} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{pool.name}</h2>
                <h2 className="card-title">DAI {pool.tvl}</h2>
              </div>
              <p>{pool.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PoolsPage;
