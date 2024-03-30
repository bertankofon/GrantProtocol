import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import pools from "../../../mock/pool-data";
import { POOL_ABI } from "../../../utils/pool";
import { POOL_CONTRACT } from "../../../utils/pool/contract";
import ContributeButton from "../components/contribute-button";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

const PoolDetailsPage = ({ params }: { params: { id: number } }) => {
  const { config } = usePrepareContractWrite({
    // @ts-ignore
    addressOrName: POOL_CONTRACT,
    contractInterface: POOL_ABI,
    functionName: "contribute",
    args: [100], // Replace with the desired contribution amount
  });

  const { isLoading: isMintLoading, isSuccess: isMintStarted, error: mintError } = useContractWrite(config);

  useEffect(() => {
    console.log("isMintLoading:", isMintLoading);
    console.log("isMintStarted", isMintStarted);
    console.log("mintError:", mintError);
    console.log("___________");
  }, [isMintLoading, isMintStarted]);
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
