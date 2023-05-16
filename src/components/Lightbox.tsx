import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Data } from "./data";
import close from "../assets/icon-close.svg";

interface Props {
  products: Data[];
  slideIndex: number;
  nextSlide: () => void;
  previousSlide: () => void;
  handleBoxTwo: () => void;
}

const Lightbox = (props: Props) => {
  const { products, slideIndex, nextSlide, previousSlide, handleBoxTwo } =
    props;

  return (
    <>
      <article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
        <button onClick={handleBoxTwo}>
          <img src={close} alt="" className="w-10 absolute top-10 right-10" />
        </button>

        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className="big-image lg:w-full lg:rounded-2xl"
              />

              <ul>
                <li>
                  <button
                    onClick={previousSlide}
                    className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Lightbox;
