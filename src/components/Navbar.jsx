import { Link } from 'react-router-dom';
import { Search } from './Search';
export const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200">
      <Link to="/">
        <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded-full">
          Search
        </p>
      </Link>
      <Search />
    </div>
  );
};
