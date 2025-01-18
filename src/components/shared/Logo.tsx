import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="text-3xl font-bold tracking-tighter transition-all">
      <p className="text-red-700 hidden skew-x-12 skew lg:block">
        <div className="flex flex-col items-center">
          <span>eTale</span>
          <span className="text-cyan-500">Sensations</span>
        </div>
      </p>

      <p className="text-red-700 skew-x-12 lg:hidden">
        <span>e</span>
        <span>Tale</span>
      </p>
    </Link>
  );
};
