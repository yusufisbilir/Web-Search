import { Link } from 'react-router-dom';
import { Search } from './Search';
export const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/"></Link>
      <Search />
    </div>
  );
};
