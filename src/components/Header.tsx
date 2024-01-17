import { Instagram, Mail, Menu, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "About us", href: "about-us" },
  { label: "Activities", href: "about-us" },
  { label: "Outputs (scientific production)", href: "about-us" },
  { label: "Contacts", href: "about-us" },
];

const contacts = [
  { Icon: Mail, href: "mailto:ipsi@novalaw.unl.pt" },
  { Icon: Twitter, href: "https://twitter.com/novaipsi" },
  { Icon: Instagram, href: "https://www.instagram.com/novaipsi/" },
  { Icon: Youtube, href: "https://www.youtube.com/@novaipsi" },
];

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
          <nav className="ml-auto md:mr-auto flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                className="cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact links */}
          {contacts.map(({ href, Icon }) => (
            <a
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="hidden md:inline-block"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
