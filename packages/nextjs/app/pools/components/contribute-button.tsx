"use client";

import React from "react";

const ContributeButton = () => {
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
        Contribute
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">ZK</h3>
          <p className="py-4">Please select how much you want to contribute?</p>
          <div className="form-control">
            <input type="range" min={0} max="100" className="range" step="25" />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1k</span>
              <span>10k</span>
              <span>50k</span>
              <span>75k</span>
              <span>100k</span>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Contribute</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ContributeButton;
