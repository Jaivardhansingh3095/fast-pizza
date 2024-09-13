/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ children, disabled = false, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed";

  const className = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-3 py-2 sm:px-4 sm:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full font-semibold uppercase tracking-wide  transition-colors duration-300  focus:outline-none focus:ring  focus:ring-offset-1 disabled:cursor-not-allowed" +
      " px-4 py-3 sm:px-6 sm:py-4 bg-transparent border-2 border-stone-400 text-stone-400 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:ring-stone-300 focus:ring-offset-1 focus:text-stone-800",
    delete:
      base +
      " material-symbols-outlined px-2 py-1 sm:px-6  sm:text-xl hover:text-red-600 focus:text-red-600",
    add:
      base +
      " material-symbols-outlined px-1 py-1 sm:px-1.5 sm:py-1.5 hover:text-green-600 focus:text-green-600",
    remove:
      base +
      " material-symbols-outlined px-1 py-1 sm:px-1.5 sm:py-1.5  hover:text-red-600 focus:text-red-600",
  };

  if (to)
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={className[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={className[type]}>
      {children}
    </button>
  );
}

export default Button;
