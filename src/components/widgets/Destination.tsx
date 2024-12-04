
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"

const Destination = () => {
  return (
    <>
      <section className="bg-slate-200">
        <Wrapper>
          <div>

            <div className="pt-40 space-y-4">
              <h1 className="flex justify-center text-xl font-medium text-emerald-700 tracking-wider">DESTINATION</h1>
              <h2 className="flex justify-center text-5xl font-bold">Explore Top Destination</h2>
            </div>

            {/* Destination Images */}

            <div className="space-y-8 pt-10 pb-6">

              {/* First Row */}

              <div className="flex justify-center gap-x-10">

                <div className="bg-cover bg-center bg-no-repeat rounded-md h-[200px] w-[300px] hover:scale-110 transition duration-300 cursor-pointer" style={{ backgroundImage: "url('/images/destination1.jpg')" }}>
                  <div className="realative h-[200px] w-[300px] bg-black/40">
                    <h2 className="flex justify-center items-center text-lg font-semibold text-white tracking-wider pt-24">UNITED KINGDOM</h2>
                  </div>
                </div>

                <div className="bg-cover bg-center bg-no-repeat rounded-md h-[200px] w-[300px] hover:scale-110 transition duration-300 cursor-pointer" style={{ backgroundImage: "url('/images/destination2.jpg')" }}>
                  <div className="realative h-[200px] w-[300px] bg-black/40">
                    <h2 className="flex justify-center items-center text-lg font-semibold text-white tracking-wider pt-24">UNITED STATES</h2>
                  </div>
                </div>

                <div className="bg-cover bg-center bg-no-repeat rounded-md h-[200px] w-[300px] hover:scale-110 transition duration-300 cursor-pointer" style={{ backgroundImage: "url('/images/destination3.jpg')" }}>
                  <div className="realative h-[200px] w-[300px] bg-black/40">
                    <h2 className="flex justify-center items-center text-lg font-semibold text-white tracking-wider pt-24">SWITZERLAND</h2>
                  </div>
                </div>

              </div>

              {/* Second Row */}

              <div className="flex justify-center gap-x-10">

                <div className="bg-cover bg-center bg-no-repeat rounded-md h-[200px] w-[300px] hover:scale-110 transition duration-300 cursor-pointer" style={{ backgroundImage: "url('/images/destination4.jpg')" }}>
                  <div className="realative h-[200px] w-[300px] bg-black/40">
                    <h2 className="flex justify-center items-center text-lg font-semibold text-white tracking-wider pt-24">MALDIVES</h2>
                  </div>
                </div>

                <div className="bg-cover bg-center bg-no-repeat rounded-md h-[200px] w-[300px] hover:scale-110 transition duration-300 cursor-pointer" style={{ backgroundImage: "url('/images/destination5.jpg')" }}>
                  <div className="realative h-[200px] w-[300px] bg-black/40">
                    <h2 className="flex justify-center items-center text-lg font-semibold text-white tracking-wider pt-24">AUSTRALIA</h2>
                  </div>
                </div>

                <div className="bg-cover bg-center bg-no-repeat rounded-md h-[200px] w-[300px] hover:scale-110 transition duration-300 cursor-pointer" style={{ backgroundImage: "url('/images/destination6.jpg')" }}>
                  <div className="realative h-[200px] w-[300px] bg-black/40">
                    <h2 className="flex justify-center items-center text-lg font-semibold text-white tracking-wider pt-24">SINGAPORE</h2>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex justify-center pb-5">
              <Button text={"Explore More"} />
            </div>

          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Destination