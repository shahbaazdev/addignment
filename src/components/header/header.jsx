export const Header = ({ children = <></> }) => {
  return (
    <div className="bg-white h-20 flex items-center justify-around">
      <h2 className="text-lg font-bold">Hiring</h2>
      {children}
    </div>
  );
};
