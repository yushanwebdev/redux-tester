import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

export default function Counter({ componentID }): JSX.Element {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="flex items-center justify-center gap-4 px-4 py-2 mx-auto mt-8 bg-gray-400 rounded-lg shadow-md w-min">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="py-1 px-3 min-w-[4rem] bg-red-400 text-white text-3xl cursor-pointer hover:bg-red-600 rounded-md"
        >
          -
        </button>
        <span className="px-8 py-2 text-3xl text-gray-600 bg-gray-200 rounded-md shadow-inner">
          {count}
        </span>
        <button
          aria-label="Increment value"
          className="py-1 px-3 min-w-[4rem] bg-green-400 text-white text-3xl cursor-pointer hover:bg-green-600 rounded-md"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 px-4 py-2 mx-auto mt-8 bg-gray-400 rounded-lg shadow-md w-max">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="w-12 px-4 py-2 text-center text-gray-600 bg-gray-200 rounded-sm outline-none focus:outline-none focus:ring-2 ring-purple-600"
        />
        <button
          className="px-4 py-1 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="px-4 py-1 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="px-4 py-1 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
