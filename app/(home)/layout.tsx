import { Navbar } from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" w-full fixed bg-[#f5f5f5]">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
