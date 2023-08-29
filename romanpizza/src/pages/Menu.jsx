import pizza from "../assets/pizzas/spinaci.jpg";
import pizza1 from "../assets/pizzas/margherita.jpg";
import pizza2 from "../assets/pizzas/focaccia.jpg";
import pizza3 from "../assets/pizzas/funghi.jpg";
import pizza4 from "../assets/pizzas/salamino.jpg";
import pizza5 from "../assets/pizzas/prosciutto.jpg";
export default function Menu() {
  return (
    <div className="container col-6">
      <h2>Menu</h2>
      <div className="menu  ">
        <img src={pizza} alt="" />
        <img src={pizza1} alt="" />
        <img src={pizza2} alt="" />
        <img src={pizza3} alt="" />
        <img src={pizza4} alt="" />
        <img src={pizza5} alt="" />
      </div>
    </div>
  );
}
