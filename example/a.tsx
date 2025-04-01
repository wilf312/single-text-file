import { add } from './util';

export const Button = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => alert('Button clicked!')}
    >
      Click Me
    </button>
  );
};

export const calcButton = () => {
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        alert(add(2, 3));
      }}
    >
      Calc
    </button>
  );
};
