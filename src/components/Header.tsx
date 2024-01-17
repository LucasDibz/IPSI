import { Github, Menu, Twitter } from "lucide-react";
import { useState } from "react";

const navigation = ["About", "Blog", "Publish"];

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a href="/" className="flex text-3xl text-slate-600 font-bold">
            IPSI
          </a>
          <button
            className="text-slate-600 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Menu />
          </button>
        </div>
        <div
          className={`flex-grow md:flex md:items-center${
            navbarOpen ? " flex" : " hidden"
          }`}
        >
          <div className="ml-auto md:mr-auto flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start gap-5">
            {navigation.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="https://twitter.com/" //TODO: Add link
            rel="noopener noreferrer"
            target="_blank"
            className="hidden md:inline-block"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/LucasDibz/IPSI"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-7 hidden md:inline-block"
          >
            <Github />
          </a>
        </div>
      </div>
    </header>
  );
}
