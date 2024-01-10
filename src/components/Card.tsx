import React from "react";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className="w-full py-2 px-4 bg-slate-400 rounded-xl">
      <div className="flex gap-3 py-2 px-3">
        <h1 className="font-bold">CRM system design</h1>
        <h1 className="badge badge-neutral">Medium</h1>
      </div>
      <div>
        <div className="flex flex-col py-2 px-3">
          <p className="text-[#3f3f3f]">
            Participant: <span className="text-black">Azhar</span>
          </p>
          <p className="text-[#3f3f3f]">
            Data added: <span className="text-black">12/04/2021</span>
          </p>
        </div>
      </div>
    </div>
  );
}
