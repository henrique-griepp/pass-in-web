import icon from "../assets/icon.svg";

export const Header = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={icon} alt="" />
      <nav className="flex items-center gap-5">
        <a className="font-medium text-sm o opacity-80" href="">Eventos</a>
        <a className="font-medium text-sm" href="">Particpantes</a>
      </nav>
    </div>
  );
};
