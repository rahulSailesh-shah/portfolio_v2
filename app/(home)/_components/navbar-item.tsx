interface NavbarItemProps {
  label: string;
  value: string;
  isItemActive: boolean;
  handleItemClick: (item: string) => void;
}

export const NavbarItem = ({
  label,
  value,
  isItemActive,
  handleItemClick,
}: NavbarItemProps) => {
  return (
    <div className="flex flex-col mb-6 md:flex-row md:mb-0  gap-x-10 text-[#333333] ">
      <div
        className={`cursor-pointer relative group ${isItemActive && "active"} `}
        onClick={() => handleItemClick(value)}
      >
        {label}
        {isItemActive && (
          <span className="absolute w-3/4 inset-x-0 translate-y-1 bottom-0 left-0 h-0.5 bg-slate-500"></span>
        )}
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-2 h-2 bg-slate-500 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></span>
      </div>
    </div>
  );
};
