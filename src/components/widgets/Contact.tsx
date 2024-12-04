
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <Wrapper>
        <div>

          <div className="pt-40 space-y-4">
            <h1 className="flex justify-center text-xl font-medium text-emerald-700 tracking-wider">CONTACT</h1>
            <h2 className="flex justify-center text-5xl font-bold">Contact For Any Query</h2>
          </div>

          {/* Contact Info */}

          <div className="flex justify-around pt-16">

            <div className="space-y-20 pt-8 text-slate-500 text-lg font-medium tracking-wider">

              <div className="flex"><FaLocationDot className="size-6" color="black" /> &nbsp;15-Street,xyz.</div>
              <div className="flex"><IoCall className="size-6" color="black" /> &nbsp;+12 34567890</div>
              <div className="flex"><MdEmail className="size-6" color="black" /> &nbsp;abc@mail.com</div>

            </div>

            {/* Contact form */}

            <div className="flex justify-center items-center">

              <form className="pt-8 pb-4 w-[250px] md:w-[500px]">

                <div className="flex flex-col gap-5">

                  <input type="text" placeholder="Your Name" className="p-2 rounded-md  border border-gray-400" required />

                  <input type="text" placeholder="Your Email" className="p-2 rounded-md border border-gray-400" required />

                  <input type="email" placeholder="Subject" className="p-2 rounded-md border border-gray-400" required />

                  <textarea placeholder="Message" className="p-2  rounded-md border border-gray-400" required></textarea>

                </div>

                {/* Button */}

                <div className="flex justify-center pt-5">
                  <Button text={"Send Message"} />
                </div>

              </form>

            </div>

          </div>

        </div>

      </Wrapper>
    </section>
  )
}

export default Contact