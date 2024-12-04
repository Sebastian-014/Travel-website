
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="pt-24">

        <div className="bg-slate-100 pt-2">

          {/* Social icons */}

          <h2 className="flex justify-center text-xl font-medium text-emerald-700 tracking-wider pb-3">FOLLOW US</h2>
          <div className="flex justify-center gap-x-4 pb-7">
            <FaSquareXTwitter size="26" className="cursor-pointer" />
            <FaInstagramSquare size="26" className="cursor-pointer" />
            <FaFacebook size="26" className="cursor-pointer" />
            <FaLinkedin size="26" className="cursor-pointer" />
            <TbWorld size="26" className="cursor-pointer" />
          </div>

          <h4 className="flex justify-center text-slate-500 pb-2">Copyright &copy; 2024. All rights reserved - Created by @Sebastian Safdar</h4>

        </div>

      </div>
    </>
  )
}

export default Footer