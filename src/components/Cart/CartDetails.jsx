import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { LiaTimesCircleSolid } from "react-icons/lia";
import product1 from "/product/02.png";
import { Link } from "react-router";

const CartDetails = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="my-20 container px-4 xl:px-0">
      <div className="text-center">
        <p className="text-5xl font-bold veneer">MY CART ( 1 )</p>
        <p className="my-3">Congratulations, you've got free shipping!</p>
        <hr class="w-40 border-orange-500 border-t-4 mx-auto"></hr>
      </div>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-12  xl:col-span-8">
          <table className=" table-auto mt-10 w-full">
            <thead>
              <tr>
                <th className="text-left">Product </th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-right"> Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-5 text-left">
                  <div className="flex gap-2">
                    <Link>
                      <img className="w-12" src={product1} alt="" />
                    </Link>
                    <div>
                      <Link className="font-bold mb-2 inline-block">
                        ECHO Lift 4WT 8'
                      </Link>
                      <button className="flex items-center gap-1">
                        <LiaTimesCircleSolid />
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className="text-center py-5 ">
                  <p className="text-[20px] font-bold">Tk 15,500.00</p>
                </td>
                <td className="text-center py-5">
                  <div class="flex gap-4 justify-center">
                    <button
                      onClick={() => setCount(Math.max(1, count - 1))}
                      className="minus"
                      class="minus"
                    >
                      <FaMinus />
                    </button>
                    <input className="w-5" type="text" value={count} min="1" />
                    <button
                      onClick={() => setCount(count + 1)}
                      className=" plus "
                    >
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="text-right py-5 text-[20px]">
                  <p>Tk </p>
                  <p>15,500.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-12  xl:col-span-4">
          <div className="flex justify-between text-[20px] font-bold mb-4">
            <p className="">Total</p>
            <p>Tk 15,500.00</p>
          </div>
          <p className="mb-4">
            Taxes, shipping and discount codes are entered and calculated at
            checkout.
          </p>
          <Link className="btn-one bg-orange text-black block uppercase">
            Proceed To Checkout
          </Link>
          <Link className="btn-one block mt-3 uppercase">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
