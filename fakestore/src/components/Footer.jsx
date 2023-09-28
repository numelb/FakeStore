import "../App.css";
export default function Footer() {
  const currTime = new Date().toLocaleTimeString();
  return (
    <div className="footer">
      <div>
        <p>
          <strong>OPENING HOURS</strong>
        </p>
        <p>Monday - Friday</p>
        <p> 10:00 AM - 11:00 PM</p>

        <p>Current time is: {currTime}</p>
      </div>
    </div>
  );
}
