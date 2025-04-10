import { useEffect } from "react";
import { useBookStore } from "../store/bookStore";
import { Link } from "react-router";

const BookList = () => {
  const { books, fetchBooks } = useBookStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="text-[#252422] bg-[#f5f5f5] px-4 md:px-12 pb-20">
      <h1 className="py-6 text-xl md:text-2xl lg:text-3xl w-full mx-auto max-w-6xl">
      Must-Reads from Our Readers <br/>Reader&rsquo;s shared With Love & Feedback
      </h1>

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
    </div>
  );
};

export default BookList;
