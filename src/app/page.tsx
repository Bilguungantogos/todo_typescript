import Card from "@/components/Card";
import { FaPlusCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-slate-700 pt-10">
      <h1 className="text-center text-5xl text-[#b9b9b9]">Todo Application</h1>
      <div className="flex justify-between gap-4 p-12 ">
        <div className="w-full h-screen bg-slate-200 rounded-xl py-4 px-6 flex flex-col gap-6">
          <div className="flex justify-between w-full">
            <h1 className="text-3xl font-bold">To Do</h1>
            <FaPlusCircle size={30} />
          </div>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full h-screen bg-slate-200 rounded-xl py-4 px-6 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">In progress</h1>
          <Card />
          <Card />
        </div>
        <div className="w-full h-screen bg-slate-200 rounded-xl py-4 px-6 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Closed</h1>
          <Card />
        </div>
      </div>
    </main>
  );
}
