import { useState } from "react";
import { data } from "./data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "./assets/logo.svg";
import avatar from "./assets/image-avatar.png";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="" />

          <nav>
            <ul className="flex items-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex items-center justify-start gap-4">
            <li>
              <button>
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li>
              <img src={avatar} alt="" className="w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

function App() {
  const [products] = useState(data);

  return (
    <>
      <Header />
      {products.map((item) => (
        <article key={item.id}>
          <img src={item.mainImage} alt="" />

          <ul>
            <img src={item.thumbnail} alt="" />
          </ul>
        </article>
      ))}
    </>
  );
}

export default App;