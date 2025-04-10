import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useBookStore } from "../store/bookStore";

const UpdateBook = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [review, setReview] = useState("");
  const { isLoading, error, fetchBook, book, updateBook } = useBookStore();
  const navigate = useNavigate();
  const params = useParams();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !link) {
      toast.error("Please fill in required information.");
      return;
    }

    const { message } = await updateBook(
      params.id,
      image,
      title,
      subtitle,
      author,
      link,
      review
    );
    toast.success(message);
    navigate(`/book/${book._id}`);
  };

  useEffect(() => {
    fetchBook(params.id);
  }, [fetchBook, params]);

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setSubtitle(book.subtitle);
      setAuthor(book.author);
      setLink(book.link);
      setReview(book.review);
    }
  }, [book]);

  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12 pb-16">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto">
        Update Book
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-5 md:mt-10"
      >
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Change Book Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg  bg-white border border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="md:text-lg">Title*:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the book title"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg  bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Subtitle (optional):</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter the book subtitle"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Author*:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Link*:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link to where users can find the book"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Personal Review (optional):</label>
          <textarea
            rows={4}
            value={review}
            placeholder="Your personal review"
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-3 py-1.5 resize-none md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg"
        >
          {isLoading ? "Please wait..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
