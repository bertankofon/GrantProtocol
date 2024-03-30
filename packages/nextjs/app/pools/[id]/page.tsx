import React from "react";
import Link from "next/link";
import pools from "../../../mock/pool-data";
import ContributeButton from "../components/contribute-button";

const PoolDetailsPage = ({ params }: { params: { id: number } }) => {
  return (
    <div className="flex flex-col">
      <h1>{pools[params.id - 1].name}</h1>
      <p>{pools[params.id - 1].description}</p>
      <p>{pools[params.id - 1].tvl} DAI</p>
      <ContributeButton />
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Address</th>
              <th>Value</th>
              <th>Vote Weight</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pools[params.id - 1].contributers.map(c => {
              return (
                <tr key={c.id}>
                  <th>{c.id}</th>
                  <td>
                    <Link className="link" href={c.address}>
                      {c.address}
                    </Link>
                  </td>
                  <td>{c.amount} DAI</td>
                  <td>{c.weight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PoolDetailsPage;
