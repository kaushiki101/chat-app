import "./style.css";
export default function MessageHeader() {
  return (
    <div className="MessageHeader">
      <div className="profile-image">
        <img src="./profile.png" alt="profile" />
      </div>
      <div className="content">
        <div>
          From: <strong>IGI Airport, T3</strong>
        </div>
        <div>
          To: <strong>Sector 28</strong>
        </div>
      </div>
    </div>
  );
}
