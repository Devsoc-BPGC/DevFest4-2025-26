"use client"
import Image from "next/image"
import { Audiowide } from "next/font/google";
import { useState } from "react";

const audioWide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "TIMELINE", href: "#timeline" },
    { label: "HACKATHONS", href: "#hackathons" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "ABOUT", href: "#about" },
    { label: "TEAM", href: "#team" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
      <nav className={`
        fixed top-0 z-50
        flex w-screen
        justify-between items-center
        px-8 py-3
        backdrop-blur-md
        bg-white/10
        border-b border-white/20
        shadow-lg shadow-black/20
        ${audioWide.className}
      `}>

        <div className="flex items-center gap-3">
          <Image src="/devsoc_logo.svg" width={40} height={20} alt="logo"/>
          <Image src="/devsoc.svg" width={140} height={80} alt="devsoc"/>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white/80 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white/80 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white/80 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 text-[0.75rem] font-medium text-white/80">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="inline-block cursor-pointer relative px-2 py-1
                           transition-all duration-200 ease-out
                           hover:-translate-y-0.5 hover:scale-110
                           hover:text-[#40ffaa]
                           hover:bg-white/5 hover:rounded-full
                           hover:shadow-[0_0_18px_rgba(64,255,170,0.55)]
                           after:content-['']
                           after:absolute after:left-0 after:-bottom-1 
                           after:h-0.5 after:w-0 
                           after:bg-linear-to-r after:from-[#40ffaa] after:to-[#4079ff]
                           after:transition-all after:duration-200
                           hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 lg:hidden bg-black/95 backdrop-blur-md border-b border-white/20">
            <ul className="flex flex-col gap-4 text-[0.75rem] font-medium text-white/80 p-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block cursor-pointer relative px-2 py-2
                               transition-all duration-200 ease-out
                               hover:text-[#40ffaa]
                               hover:bg-white/5 hover:rounded-lg
                               hover:shadow-[0_0_18px_rgba(64,255,170,0.55)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
  )
}

export default NavBar
