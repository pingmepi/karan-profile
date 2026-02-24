"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Work", path: "/work" },
  { name: "Products", path: "/products" },
  { name: "Agentic", path: "/agentic" },
  { name: "Life", path: "/life" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo — geometric wordmark */}
          <Link
            href="/"
            className="font-display font-extrabold text-xl tracking-tight text-foreground hover:text-klein transition-colors"
          >
            KM
          </Link>

          {/* Desktop Navigation — deconstructed blocks */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 font-display text-sm font-bold uppercase tracking-widest transition-all duration-150 border-2 ${isActive
                      ? "bg-ink text-gallery dark:bg-gallery dark:text-ink border-foreground"
                      : "border-transparent text-foreground hover:border-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-foreground"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-foreground"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground origin-center"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t-2 border-foreground"
            >
              <div className="py-4 flex flex-col gap-2">
                {navigationItems.map((item, i) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 font-display text-sm font-bold uppercase tracking-widest border-2 transition-all duration-150 ${isActive
                            ? "bg-ink text-gallery dark:bg-gallery dark:text-ink border-foreground"
                            : "border-transparent text-foreground hover:border-foreground"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}