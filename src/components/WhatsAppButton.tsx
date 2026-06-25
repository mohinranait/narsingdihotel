import { HOTEL_INFO } from "@/constants/hotel";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappUrl =
    `https://wa.me/88${HOTEL_INFO.phone}?text=` +
    encodeURIComponent("বিস্তারিত জানতে চাই");

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-4xl bg-[#25D366] text-white inline-flex gap-2 items-center fixed bottom-6 right-6 py-2 px-6"
    >
      <FaWhatsapp size={28} />
      Call (WhatsApp)
    </Link>
  );
};

export default WhatsAppButton;