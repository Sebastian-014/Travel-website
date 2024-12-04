
import Link from "next/link"

const Header = () => {

    return (
        <>

            <header className="fixed top-0 left-0  w-full z-10">

                <div className="bg-white flex justify-between items-center p-4">

                    <div>
                        <h2 className="text-3xl font-bold ml-4 tracking-wider">TRAVEL</h2>
                    </div>

                    {/* Navbar */}

                    <div className="font-semibold mr-4">
                        <ul className="flex space-x-14">
                            <Link href="/"><li className="text-gray-600 hover:underline hover:text-emerald-600 duration-500">Home</li></Link>
                            <Link href="/about"><li className="text-gray-600 hover:underline hover:text-emerald-600  duration-500">About</li></Link>
                            <Link href="/destination"><li className="text-gray-600 hover:underline hover:text-emerald-600 duration-500">Destination</li></Link>
                            <Link href="/contact"><li className="text-gray-600 hover:underline hover:text-emerald-600  duration-500">Contact</li> </Link>
                        </ul>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Header