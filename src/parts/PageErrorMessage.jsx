import { Link } from "react-router";

export default function PageErrorMessage({
  title = "Not Found",
  body = "Sorry, but the page you were trying to view does not exist.",
}) {
  return (
    <section className="">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <img
              src="./images/page-not-found.svg"
              alt="congrats illustration"
            />
            <h2 className="text-3xl font-semibold mb-6 mt-4">{title}</h2>
            <p className="text-lg mb-12">{body}</p>
            <Link
              to="/details"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
