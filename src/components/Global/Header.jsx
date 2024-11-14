import "../../App.css";
const Header = () => {
  return (
    <header className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-transparent z-50 py-4 px-10">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-20 text-white text-xl  luckiest-guy-small-outline">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#highlights">Highlights</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#registration">Registration</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
