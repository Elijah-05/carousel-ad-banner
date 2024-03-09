const Pagination = ({
  onClick,
  isActive,
}: {
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full ${
        isActive
          ? "bg-[#42D4FF] scale-125 opacity-95"
          : "bg-[#f2faff] opacity-80 scale-[0.85]"
      } active:scale-75 hover:scale-110 hover:bg-[#42D4FF] duration-500`}
    />
  );
};

export default Pagination;
