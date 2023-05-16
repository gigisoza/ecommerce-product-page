import { useState } from "react";
import { Data, data } from "./components/data";
import Header from "./components/Header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lightbox from "./components/Lightbox";
import Buy from "./components/Buy";

function App() {
  const [products] = useState<Data[]>(data);
  const [value, setValue] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [showBox, setShowBox] = useState<boolean>(false);

  const handleAmountPlus = () => {
    setAmount((amount) => amount + 1);
  };

  const handleAmountMinus = () => {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    } else {
      setAmount(amount);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleBoxOne = () => {
    setShowBox(true);
  };

  const handleBoxTwo = () => {
    setShowBox(false);
  };

  const { mainImage } = products[value];

  return (
    <>
      <Header />

      {showBox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          handleBoxTwo={handleBoxTwo}
        />
      )}

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:rounded-2xl"
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={handleBoxOne}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <Buy
          amount={amount}
          handleAmountPlus={handleAmountPlus}
          handleAmountMinus={handleAmountMinus}
        />
      </section>
    </>
  );
}

export default App;
