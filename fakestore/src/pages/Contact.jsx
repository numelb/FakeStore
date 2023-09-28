export default function Contact() {
  const currTime = new Date().toLocaleTimeString();
  return (
    <div className="footer">
      <div>
        <p>
          <hr />
          <strong>ADDRESS</strong>
        </p>
        <p>85300 Krista Lane Fort Worth, TX 76120 United States</p>
        <p>Current Time is: {currTime}</p>
      </div>
    </div>
  );
}
