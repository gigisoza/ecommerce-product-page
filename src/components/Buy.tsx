import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {
  amount: number;
  handleAmountPlus: () => void;
  handleAmountMinus: () => void;
}

const Buy = (props: Props) => {
  const { amount, handleAmountPlus, handleAmountMinus } = props;

  return (
    <>
      <article className="px-8 pb-10">
        <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase text-sm font-bold inline-block rounded shadow mb-10">
          Sneaker company
        </h2>
        <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
          <ul className="flex items-center gap-5">
            <li className="text-slate-900 font-bold text-2xl">$125.00</li>
            <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
              50%
            </li>
          </ul>

          <p className="text-slate-600 text-sm">
            <s>$250.00</s>
          </p>
        </div>

        <div className="mt-10 lg:flex items-center justify-between gap-2">
          <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
            <li onClick={handleAmountMinus} className="cursor-pointer">
              <img src={minus} alt="" />
            </li>
            <li>{amount}</li>
            <li onClick={handleAmountPlus} className="cursor-pointer">
              <img src={plus} alt="" />
            </li>
          </ul>

          <div className="lg:flex-1">
            <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Buy;
