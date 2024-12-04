
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import AboutImage from "/public/images/about-image.jpg"
import AboutImage2 from "/public/images/about2-image.jpg"
import AboutImage3 from "/public/images/about3-image.jpg"
import Image from "next/image"

const About = () => {

  // BoxesData

  const aboutData = [
    {
      header: "Competitive Pricing",
      description: "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea totam rem aperiam, eaque ipsa."
    },
    {
      header: "Best Services",
      description: "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea totam rem aperiam, eaque ipsa."
    },
    {
      header: "Worldwide Coverage",
      description: "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea totam rem aperiam, eaque ipsa."
    },
  ]
  return (
    <section>
      <Wrapper>

        <div>

          <div className="flex justify-between pt-40">

            {/* Image */}

            <div>             
              <Image src={AboutImage} alt="About-image" className="h-[530px] w-[600px]" />        
            </div>

            <div className="max-w-xl space-y-4">

              {/* Text */}

              <h1 className="text-xl font-medium text-emerald-700 tracking-wider">ABOUT US</h1>
              <h2 className="text-5xl font-bold">We Provide Best Tour Packages In Your Budget</h2>
              <p className="text-slate-500 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                
                {/* Images */}  

              <div className="flex gap-x-4 pb-2">
       
                <div>
                  <Image src={AboutImage2} alt="About-image" className=" rounded-md h-[200px] w-[400px]" />
                </div>
                <div>
                  <Image src={AboutImage3} alt="About-image" className=" rounded-md h-[200px] w-[400px]" />
                </div>
              </div>

              {/* Button */}

              <div>
                <Button text={"Read More"} />
              </div>

            </div>

          </div>

          {/* Boxes */}

          <div className="flex gap-x-2 pt-10 pb-5">
            {
              aboutData.map((item, i) => (
                (<div key={i} className="border rounded-md shadow-lg w-4/12 px-8 py-4 cursor-pointer">
                  <h4 className="text-xl font-medium text-emerald-700 pb-2">{item.header}</h4>
                  <p className="text-slate-500">{item.description}</p>
                </div>)
              ))
            }
          </div>

        </div>


      </Wrapper>
    </section>
  )
}

export default About