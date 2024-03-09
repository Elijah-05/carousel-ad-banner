import { ChevronIcon } from "../assets";

const Chevron = ({
  right,
  onClick,
}: {
  right?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`group absolute ${
        right ? "rotate-180 right-3" : "left-3"
      } active:scale-75 bottom-1/3 -translate-y-7 rounded-full bg-white w-8 h-8 shadow-lg text-[#00A3D3] fully-center hover:scale-[1.05] duration-700`}
    >
      <div className={`group-hover:-translate-x-[2px] duration-500`}>
        <ChevronIcon />
      </div>
    </button>
  );
};

export default Chevron;
