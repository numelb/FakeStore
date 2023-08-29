import logo from "/src/assets/Pizzalogo.png";

export default function Header() {
  return (
    <>
      <div>
        <header>Roman-Pizza </header>
      </div>
      <div className="logo col-4">{/* <img src={logo} alt="" /> */}</div>

      <h5>Come Taste the Difference</h5>
    </>
  );
}
