import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useBookStore } from "../store/bookStore";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const Bookpage = () => {
  const { user } = useAuthStore();
  const { fetchBook, book, isLoading, deleteBook } = useBookStore();
  const navigate = useNavigate("/");
  const params = useParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchBook(params.id);
  }, [fetchBook, params]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("Book: ", book);

  const handleDelete = async () => {
    const { message } = await deleteBook(params.id);
    toast.success(message);
    navigate("/");
  };
  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12 pb-10">
      <p className="cursor-pointer py-3" onClick={() => navigate("/")}>
        &larr; Back
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="md:basis-[30%] md:mr-6 mx-auto w-full">
          <img
            src={book?.image}
            alt="book_img"
            className="max-h-[50vh] mx-auto"
          />
          <Link to={book?.link} target="_blank">
            <div className="w-full flex justify-center items-center">
              <button className="bg-[#403D39] text-[#CCC5B9] px-3 py-2 w-full md:max-w-52 mt-3">
                Read
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-6 md:mt-0 md:max-w-4xl basis-[65%]">
          <div className="flex justify-between items-center">
            <p>
              Uploaded by:{" "}
              <span className="text-[#944424]">@{book?.user.username}</span>
            </p>

            {user?._id === book?.user?._id && (
              <div className="text-2xl font-bold -mt-2 relative">
                <span
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer tracking-widest"
                >
                  ...
                </span>

                {open && (
                  <div className="absolute bg-[#f5f5f5] shadow-md pb-2 px-5 text-base font-normal right-0 top-10">
                    <Link to={`/book/${book._id}/update`}>
                      <p className="mb-2 pb-2 border-b border-gray-300">
                        Update
                      </p>
                    </Link>
                    <p onClick={handleDelete} className="text-red-500 cursor-pointer">Delete</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            {book?.title}
          </h1>
          {book?.subtitle && <h3>{book?.subtitle}</h3>}
          <p className="pl-5">Written by: {book?.author}</p>

          <p className="mt-2 font-semibold text-lg md:text-xl">Review:</p>
          <p className="md:text-lg">{book?.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookpage;
