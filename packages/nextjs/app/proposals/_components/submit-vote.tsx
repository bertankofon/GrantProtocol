"use client";

import React from "react";

const SubmitVoteButton = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (document) {
            (document.getElementById("my_modal_1") as HTMLFormElement).showModal();
          }
        }}
      >
        Submit Vote
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">SocialDeX</h3>
          <p className="py-4">Please submit your vote</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">For</span>
              <input type="radio" name="radio-10" className="radio checked:bg-green-500" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Againts</span>
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Abstain</span>
              <input type="radio" name="radio-10" className="radio checked:bg-gray-500" />
            </label>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SubmitVoteButton;
