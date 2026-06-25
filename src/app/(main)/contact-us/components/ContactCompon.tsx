"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HOTEL_CONTACTS } from "@/constants/hotel";
import { Mail, Map, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactUsCompo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <SectionHeader
        title='CONTACT US'
        subTitle='Let’s Talk'
      />

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 ">

          {/* Office 1 */}
          <div className="space-y-6">

            {HOTEL_CONTACTS.map((office) => (
              <div key={office.city}>
                <h3 className="font-bold text-gray-700 mb-3 uppercase text-sm">{office.city}</h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2"><Map size={14} /> {office.address}</p>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2"> <Phone size={14} /> {office.phone}</p>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2"><FaWhatsapp size={14} /> {office.whatsapp}</p>
                <a href={`mailto:${office.email}`} className="text-sm text-gray-600 flex items-center gap-2  transition">
                  <Mail size={14} /> {office.email}
                </a>
              </div>
            ))}
          </div>

          {/* FORM SECTION */}
          <div className="mt-12">
            <Card className="bg-white p-0 border rounded-none border-gray-200">
              <CardContent className="p-6 space-y-4">
               <ContactForm />
              </CardContent>
            </Card>
          </div>


        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          <Card className="bg-white border p-0 border-gray-100">
            <CardContent className="p-3">
              <div className="h-72 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground">

                <iframe
                  title="Shikder Ambulance, Mogbazar, Dhaka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11260.62132106335!2d90.40976524429216!3d23.78996494947933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6cafeffc7145ade5%3A0x6f6919835e6914af!2sShikder%20Ambulance%20Services!5e0!3m2!1sen!2sbd!4v1761139933386!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  loading="lazy"

                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                ></iframe>

              </div>
            </CardContent>
          </Card>


          <Card className="bg-white border p-0 border-gray-100">
            <CardContent className="p-3">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  narsingdi Residential Hotel offer couple residential hotel Service. you can contact with sms, call or whatsapp.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Narsingdi Hotel .com. The best place in entire narsingdi district. Located in velanagar along the dhaka to Sylhet highway.
                </p>
              </div>
            </CardContent>
          </Card>


          <Card className="bg-white border p-0 border-gray-100">
            <CardContent className="p-3">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  144/6 Sabmeher Tower, Dhaka Bus Stand
                  Vela nagar, narsingdi, Bangladesh
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li><strong>Phone: 01788453585</strong></li>
                  <li><strong>WhatsApp Number: <Link href={'https://wa.me/1788453585'} className="text-blue-600">+8801788453585</Link> </strong> </li>
                  <li><strong>Telegram Number: <Link href={'/'} className="text-blue-600">+8801788453585</Link> </strong> </li>

                </ul>
              </div>
            </CardContent>
          </Card>


          <div className="space-y-3 text-sm">
            <div className="flex items-center border border-gray-200 text-gray-700 gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-[#A70F2E]">
                <Map className="text-white" size={16} />

              </div>
              Plot-7, Road-02, narsingdi Bazar
            </div>
            <div className="flex items-center border border-gray-200 text-gray-700 gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-[#A70F2E]">
                <Phone className="text-white" size={16} />

              </div> +88 0341 52410-22
            </div>
            <div className="flex items-center border border-gray-200 text-gray-700 gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-[#A70F2E]">
                <Phone className="text-white" size={16} />

              </div> +880 1755 98 449
            </div>
            <div className="flex items-center border border-gray-200 text-gray-700 gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-[#A70F2E]">
                <Mail className="text-white" size={16} />

              </div> info@hotelthecoxtoday.com
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}