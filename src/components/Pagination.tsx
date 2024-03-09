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
          ? "bg-[#42D4FF] scale-125 opacity-90"
          : "bg-[#0973B1] opacity-85 scale-95"
      } hover:scale-110 hover:bg-[#42D4FF] duration-500`}
    />
  );
};

export default Pagination;
