"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import proposalMockData from "../../../mock/proposal-data";
import { Core, ERC20 } from "../../../utils/sablier/models";
import { BeamStream } from "../_components/beam-stream";
import SubmitVoteButton from "../_components/submit-vote";
import useStoreForm, { prefill } from "./store";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import _ from "lodash";
import { useAccount } from "wagmi";
import { LinkIcon } from "@heroicons/react/24/outline";

// import Image from "next/image";

const ProposalDetailsPage = ({ params }: { params: { id: number } }) => {
  const { isConnected } = useAccount();
  const { update } = useStoreForm(state => ({
    error: state.error,
    logs: state.logs,
    update: state.api.update,
  }));
  const onPrefill = useCallback(() => {
    update(prefill);
  }, [update]);

  const onApprove = useCallback(async () => {
    onPrefill();
    if (isConnected) {
      const state = useStoreForm.getState();
      try {
        state.api.update({ error: undefined });
        await ERC20.doApprove("SablierV2LockupLinear", state, state.api.log);
      } catch (error) {
        state.api.update({ error: _.toString(error) });
      }
    }
  }, [isConnected, onPrefill]);

  const onCreate = useCallback(async () => {
    if (isConnected) {
      const state = useStoreForm.getState();
      try {
        state.api.update({ error: undefined });
        await Core.doCreateLinear(state, state.api.log);
      } catch (error) {
        state.api.update({ error: _.toString(error) });
      }
    }
  }, [isConnected]);
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <div className="badge badge-success">{proposalMockData[params.id - 1].status}</div>
          <h1 className="text-2xl">{proposalMockData[params.id - 1].name}</h1>
          <p className="text-gray-500">
            Proposed by{" "}
            <span className="link border-l-pink-50">
              {proposalMockData[params.id - 1].owner.slice(0, 6) +
                "..." +
                proposalMockData[params.id - 1].owner.slice(-4)}
            </span>{" "}
            on {new Date(proposalMockData[params.id - 1].created).toISOString().substring(0, 10)}
          </p>
          <p>Raising: {proposalMockData[params.id - 1].raising} DAI</p>
        </div>
        {proposalMockData[params.id - 1].status === "Approved" ? (
          <div className="space-x-2">
            <button className="btn btn-primary" onClick={onApprove}>
              Approve Stream
            </button>
            <button className="btn btn-primary" onClick={onCreate}>
              Start Stream
            </button>
          </div>
        ) : (
          <SubmitVoteButton />
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-success w-full">For</h2>
              <p className="card-title">{proposalMockData[params.id - 1].votes.for}</p>
            </div>
            <progress className="progress progress-success w-full" value="60" max="100"></progress>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-error w-full">Against</h2>
              <p className="card-title">{proposalMockData[params.id - 1].votes.against}</p>
            </div>
            <progress className="progress progress-error w-full" value="30" max="100"></progress>
          </div>
        </div>
        {/* <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title w-full">Abstain</h2>
              <p className="card-title">{proposalMockData[params.id - 1].votes.abstain}</p>
            </div>
            <progress className="progress w-full" value="10" max="100"></progress>
          </div>
        </div> */}
      </div>

      <div role="tablist" className="tabs tabs-bordered">
        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg" aria-label="About" defaultChecked />
        <div role="tabpanel" className="tab-content pt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-6 w-6" />
              <p>{proposalMockData[params.id - 1].socials.website}</p>
            </div>
            <div className="flex items-center space-x-2">
              <SiX size={24} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              <p>{proposalMockData[params.id - 1].socials.twitter}</p>
            </div>
            <div className="flex items-center space-x-2">
              <SiGithub size={24} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              <p>{proposalMockData[params.id - 1].socials.github}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: proposalMockData[params.id - 1].description }} />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg" aria-label="Milestones" />
        <div role="tabpanel" className="tab-content pt-10">
          {proposalMockData[params.id - 1].milestones.map(m => {
            return (
              <div key={m.id} className="flex items-center space-x-4 py-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={m.completed}
                      className="checkbox checkbox-success"
                      disabled
                    />
                  </label>
                </div>
                <div>
                  <h3 className="text-lg">{m.title}</h3>
                  <p>{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg" aria-label="Rounds" />
        <div role="tabpanel" className="tab-content pt-10">
          <div>
            <h3 className="text-md text-gray-500">Active Round</h3>
            <Link href={"https://app.sablier.com/stream/LL2-11155111-989/"}>
              <BeamStream />
            </Link>
            <div className="divider"></div>
            <h3 className="text-md text-gray-500">Past Rounds</h3>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Pool</th>
                    <th>Stream</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {proposalMockData[params.id - 1].past_rounds.map(r => {
                    return (
                      <tr key={r.id}>
                        <th>{r.id}</th>
                        <td>{r.pool}</td>
                        <td>
                          <Link href={r.stream} className="link">
                            Stream Link
                          </Link>
                        </td>
                        <td>{r.duration}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailsPage;
