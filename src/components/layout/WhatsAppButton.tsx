"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "918977742255";
  const defaultMessage = encodeURIComponent(
    "Hi Prodbiz Solutions, I would like to know more about your services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover (desktop) */}
      <span className="hidden sm:inline-block pointer-events-none absolute right-full mr-2.5 px-2.5 py-1 rounded-full bg-[#184a41] text-white text-[12px] font-semibold tracking-wide whitespace-nowrap shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat with us
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#20ba5a] to-[#2ae371] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(32,186,90,0.4)] hover:shadow-[0_10px_26px_rgba(32,186,90,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-white relative z-10 drop-shadow-sm"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 01-5.83 2.41c-1.47 0-2.91-.39-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 01-1.26-4.39c0-4.54 3.7-8.25 8.24-8.25zm-3.56 4.3c-.2 0-.44.07-.67.33-.23.26-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29s-1.48-.73-1.71-.81c-.23-.08-.4-.13-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43-.15-.01-.32-.01-.5-.01z" />
        </svg>
      </a>
    </aside>
  );
}

