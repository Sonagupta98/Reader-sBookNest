import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useBookStore } from "../store/bookStore";

const Searchpage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchBooks, books } = useBookStore();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);

    const searchQuery = urlParams.toString();
    await searchBooks(searchQuery);
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      const searchQuery = urlParams.toString();
      searchBooks(searchQuery);
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchBooks]);

  console.log("Results: ", books);
  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12 pb-10">
      <p className="cursor-pointer py-3" onClick={() => navigate("/")}>
        &larr; Back
      </p>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-sm md:max-w-xl lg:max-w-3xl text-base lg:text-lg"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. Purple hibiscus"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg placeholder:text-gray-600 bg-white border border-gray-500"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-[#403D39] text-[#f5f5f5] px-4 border border-white transitionfont-semibold rounded-r-lg"
          >
            Search
          </button>
        </form>
      </div>

      <h1 className="font-semibold pt-8 pb-6 text-xl md:text-2xl ">
        Search results
      </h1>

      {books.length > 0 ? (
        <div className="flex flex-wrap justify-around space-x-2 gap-y-5 lg:gap-y-8 w-full max-w-6xl mx-auto">
          {books.map((book, index) => (
            <Link key={index} to={`/book/${book._id}`}>
              <div className="cursor-pointer w-[9rem] md:w-[10.5rem] xl:w-[11rem] shadow-sm hover:shadow-md rounded-b-md">
                <div className="min-w-[9rem] md:min-w-[10.5rem] xl:min-w-[11rem] h-[12rem] md:h-[13.5rem] lg:h-[13rem] xl:h-[15rem] bg-[#252422]">
                  <img
                    src={book.image}
                    alt="book_img"
                    className="min-w-[9rem] md:min-w-[10.5rem] xl:min-w-[11rem] h-[12rem] md:h-[13.5rem] lg:h-[13rem] xl:h-[15rem] object-cover object-center"
                  />
                </div>

                <div className="p-2 flex flex-col">
                  <h2 className="flex-1 mb-2 font-semibold text-base md:text-lg">
                    {book.title}
                  </h2>
                  <p className="text-sm md:text-base">{book.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No book found.</p>
      )}
    </div>
  );
};

export default Searchpage;
