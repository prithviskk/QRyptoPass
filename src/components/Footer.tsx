import Link from 'next/link';
import Image from 'next/image';
import qrImage from '../../public/QR Code.png'; 
import logo from '../../public/logo.png';     
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#2e151b] text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
        <div className="shrink-0">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </div>

        <div className="font-hina flex-1 flex flex-wrap justify-center gap-3 md:gap-4 text-center">
          {[
            { label: 'Terms & Conditions', href: '/policies/terms-and-conditions' },
            { label: 'Privacy Policy', href: '/policies/privacy-policy' },
            { label: 'Contact Us', href: '/contact-us' },
            { label: 'List your events', href: '/list-events' },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="w-[140px] md:w-[160px] hover:font-weight-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="shrink-0 flex flex-col items-center">
          <Image
            src={qrImage}
            alt="QR Code"
            width={100}
            height={100}
            className="shadow-lg border border-white"
          />
          <p className="text-xs mt-1 font-bold text-center">Scan to download the app</p>
        </div>
      </div>

      <hr className="my-4 border-gray-700" />

      <div className="max-w-7xl mx-auto px-2 text-gray-400 text-sm font-hina">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="md:flex-1 md:text-left text-center">
            By accessing this page, you confirm that you have read, understood, and agreed to our{' '}
            <Link href="/policies/terms-and-conditions" className=" ml-1 inline-block">
              Terms of Service
            </Link>,{' '}
            <Link href="/policies/cookie-policy" className=" ml-1 inline-block">
              Cookie Policy
            </Link>,{' '}
            <Link href="/policies/privacy-policy" className=" ml-1 inline-block">
              Privacy Policy
            </Link>, and{' '}
            <Link href="/policies/content-guidelines" className=" ml-1 inline-block">
              Content Guidelines
            </Link>. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xl justify-center md:justify-end flex-shrink-0">
            <a href="#" className="hover:opacity-80 transition-opacity"><FaFacebookF /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaInstagramSquare /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><RiTwitterXLine /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
