"use client";

export default function Footer() {
  return (
    <footer className="border-t border-customGray bg-white mt-12 px-6 md:px-11 py-8 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
        <p>© 2025 Tatiana Vasylieva. All rights reserved.</p>

        <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4">
          <a
            href="https://tatianavasylieva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-customDarkerBlue transition"
          >
            My Portfolio
          </a>
          <a
            href="https://github.com/tevasy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-customDarkerBlue transition"
          >
            GitHub
          </a>
          <a
            href="https://dribbble.com/tatianavasye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-customDarkerBlue transition"
          >
            Dribbble
          </a>

          <div className="w-full text-center md:w-auto md:text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="underline hover:text-customDarkerBlue transition cursor-pointer"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
