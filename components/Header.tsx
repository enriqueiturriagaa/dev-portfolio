import Link from "next/link"
import Image from "next/image"


function Header() {


  return (
    <header className="max-w-5xl m-auto flex items-center justify-between space-x-2 font-bold py-5 mb-10 px-4 lg:px-0 ">
      {/* <div className="flex items-center ">
                <Link href="/">
          <div className="hidden lg:block">
            <Image className="" src="/assets/logo.png" alt="logo" width={300} height={150} />
          </div>
        </Link> 
      </div>*/}


      {/* Social Icons */}
      <div className="flex">
        <Link href="https://www.linkedin.com/in/enriqueiturriaga/" className="border-[1px] p-3 bg-[#131416]/50 rounded-sm	 border-[#2E2E2E] mr-3 drop-shadow-blue-glow hover:drop-shadow-blue-glow-hover transition-all">
          <Image className="cursor-pointer min-h-[20px] min-w-[20px]" src="/assets/linkedin-icon.svg" alt="linkedin" width={30} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/enriqueiturriaga/" className="border-[1px] p-3 bg-[#131416]/50 rounded-sm	 border-[#2E2E2E] mr-3 drop-shadow-blue-glow hover:drop-shadow-blue-glow-hover transition-all">
          <Image className="cursor-pointer min-h-[20px] min-w-[20px]" src="/assets/twitter-icon.svg" alt="linkedin" width={30} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/enriqueiturriaga/" className="border-[1px] p-3 bg-[#131416]/50 rounded-sm	 border-[#2E2E2E] mr-3 drop-shadow-blue-glow hover:drop-shadow-blue-glow-hover transition-all">
          <Image className="cursor-pointer min-h-[20px] min-w-[20px]" src="/assets/github-icon.svg" alt="linkedin" width={30} height={30} />
        </Link>

      </div>

      {/* Spinner */}
      <div className="hidden lg:block ">
        <div className="relative overflow-hidden w-[400px] h-[45px] rounded-full bg-[#343436]/70 border border-[#BBBAAE]/30" >
          <div className="absolute text-white text-lg font-roboto font-light whitespace-nowrap pt-2 animate-x-translate-100">
            OPEN FOR NEW PROJECTS • OPEN FOR NEW PROJECTS • OPEN FOR NEW PROJECTS • OPEN FOR NEW PROJECTS •
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="flex font-roboto">
        <Link
          href="mailto:hey@enrique.zone"
          className="ml-5 px-6 py-2 border-2 border-[#F6931A] rounded-sm md:text-base bg-[#2A2523] hover:bg-[#F6931A] text-[#F6931A] hover:text-[#343434] transition-all flex items-center drop-shadow-gold-glow hover:drop-shadow-gold-glow-hover "
        ><p className="text-s md:text-l ">hey@enrique.zone</p></Link>
      </div>
    </header>
  )
}

export default Header