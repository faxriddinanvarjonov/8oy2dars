import "./Header.css";
import NotificationIcon from "../../assets/notifications.png";
import Heroimg from "../../assets/heroImg.png";

function Header() {
  return (
    <header className="header">
      <div className="headerInfo">
        <h3 className="header__h3">Guruhlar</h3>
        <p className="header__parahraph">Guruhlarni ko‘rishingiz mumkin</p>
      </div>
      <div className="HeaderUserSlide">
        <img
          className="natificationsIcon"
          src={NotificationIcon}
          alt="icon"
        />
        <div className="user">
          <img src={Heroimg} alt="user" width={44} height={44} />
          <div className="headerInfo header__user">
            <h3 className="header__h3">Sarvarbek</h3>
            <p className="header__parahraph">CEO</p>
          </div>
        </div>
        <svg
        className="arrowbtn"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99998 9.87831L12.7123 6.16602L13.773 7.22667L8.99998 11.9997L4.22705 7.22667L5.28771 6.16602L8.99998 9.87831Z"
            fill="#4B4B4B"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
