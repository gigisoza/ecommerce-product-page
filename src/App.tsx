import { useState } from "react";
import { data } from "./components/data";
import Header from "./components/Header";

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState<number>(0);

  const { mainImage } = products[value];

  return (
    <>
      <Header />

      <section>
        <img src={mainImage} alt="" />
        {products.map((item, index) => (
          <ul key={item.id}>
            <li onClick={() => setValue(index)}>
              <img src={item.thumbnail} alt="" />
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}

export default App;
