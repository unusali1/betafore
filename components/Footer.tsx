import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../public/assets/logo.png";
import visa from "@/public/assets/visa.png";
import masterCard from "@/public/assets/masterCard.png";
import cash from "@/public/assets/cash.png";
import inslallment from "@/public/assets/inslallment.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Image src={logo} alt="logo" className="w-32 h-16" />
            <p className="text-base mb-4 text-[#677899]">
              Got questions? Call us 24/7!
            </p>
            <p className="text-base">0311 6666 144</p>
            <p className="text-base">0317 777015</p>
            <p className="mt-6 text-base text-[#677899]">Contact Info</p>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              info@twinstore.pk
            </p>
            <div className="flex gap-4 mt-6">
              <Facebook className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
              <Linkedin className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-normal text-base mb-6 text-[#677899]">
              Trending
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Installments</li>
              <li>Electronics</li>
              <li>Grocery</li>
              <li>Health & Beauty</li>
              <li>Home Appliances</li>
              <li>Mobile Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-base mb-6 text-[#677899]">
              Information
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Return</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-base mb-6 text-[#677899]">
              Customer Care
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>My Account</li>
              <li>Track Your Order</li>
              <li>Recently Viewed</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Become a Vendor</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto sm:pr-36 pr-4 mt-8 flex sm:justify-end justify-center gap-4">
          <div className="bg-white border-2 border-dashed rounded-lg w-20 h-12 flex items-center justify-center">
            <Image src={visa} alt="Visa" className="w-12 h-8" />
          </div>
          <div className="bg-white border-2 border-dashed rounded-lg w-24 h-12 flex items-center justify-center">
            <Image src={masterCard} alt="MasterCard" className="w-12 h-8" />
          </div>
          <div className="bg-white border-2 border-dashed rounded-lg w-24 h-12 flex items-center justify-center">
            <Image src={cash} alt="Cash" className="w-12 h-8" />
          </div>
          <div className="bg-white border-2 border-dashed rounded-lg w-24 h-12 flex items-center justify-center">
            <Image src={inslallment} alt="Installment" className="w-12 h-8" />
          </div>
        </div>
      </footer>

      <div className="bg-black w-full mx-auto py-4 px-16">
        <p className="text-sm text-white">
          © 2021 Winstore. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
