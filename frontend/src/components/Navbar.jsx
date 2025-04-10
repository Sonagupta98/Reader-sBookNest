import { Link } from "react-router";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    const { message } = await logout();
    toast.success(message);
  };
  return (
    <nav className="bg-[#a8dadc] flex justify-between items-center text-[#1B1212] px-4 md:px-12 py-3 md:py-3">
      <Link to={"/"}>
        <label className="font-semibold tracking-wider text-[#F57C00] md:text-lg lg:text-xl cursor-pointer">
          📚Reader&rsquo;sBookNest
        </label>
      </Link>

      {!user ? (
        <div className="flex items-center space-x-5 md:text-lg">
          <Link to={"/login"}>
            <button className="hover:scale-110 hover:opacity-60">Add book</button>
          </Link>

          <Link to={"/login"}>
            <button className="hover:scale-110 hover:opacity-60">Log in</button>
          </Link>

          <Link to={"/signup"}>
            <button className=" hover:scale-110 hover:opacity-60 px-3 py-2">Sign up</button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-5 md:text-lg">
          <Link to={"/add-book"}>
            <button className=" hover:scale-110 hover:opacity-60 px-3 py-2">Add book</button>
          </Link>
          <button className="hover:scale-110 hover:opacity-60" onClick={handleLogout}>Log out ({user.username})</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
