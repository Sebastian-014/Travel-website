
import Button from "../shared/Button"

const Hero = () => {
  return (
    <>
      <main>

        {/* Background Image */}

        <div className=" max-w-screen-2xl bg-cover bg-center bg-no-repeat h-[700px]" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>

          {/* Text */}
          
          <div className="realative h-[700px] bg-black/40 space-y-4">

            <h1 className="flex justify-center items-center text-slate-100 text-2xl font-bold pt-60">TOURS & TRAVEL</h1>
            <h2 className=" flex justify-center items-center text-white text-6xl font-extrabold pb-8">Let&apos;s Discover The <br /> World Together</h2>

            {/* Button */}

            <div className="flex justify-center">

              <Button text={"Book Now"} />

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default Hero