import CountUp from "react-countup";
const Counter = () => {
  return (
    <div className="rounded-[20px] bg-[#931946] mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-12 text-center justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            <CountUp start={0} end={299} duration={3.75} />+
          </h1>
          <p className="text-white">Completed Project</p>
        </div>
        <div className="p-12 text-center justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            <CountUp start={0} end={198} duration={3.75} />+
          </h1>
          <p className="text-white">Total Clients</p>
        </div>
        <div className="p-12 text-center justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            <CountUp start={0} end={25} duration={3.75} />+
          </h1>
          <p className="text-white">Team Member</p>
        </div>
        <div className="p-12 text-center justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            <CountUp start={0} end={295} duration={3.75} />+
          </h1>
          <p className="text-white">Success Project</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
