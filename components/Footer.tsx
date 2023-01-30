import Link from "next/link"
import Image from "next/image"


function Footer() {


  return (
    <header className=" font-roboto text-[#868686]  mt-10 bg-[#191A22] border-t-2 border-[#2E2E2E] py-20">
      <div className="max-w-5xl m-auto px-4 lg:px-0 md:flex items-center justify-between space-x-2 text-center lg:text-left">
        {/* Left */}
        <div className="mb-10 md:mb-0">
          <Image className="mb-5 m-auto lg:mx-0" src="/assets/footer-logo.png" alt="logo" width={150} height={180} />
          <p className="mb-8 text-sm">©enrique.zone 2023</p>
          <a className="text-sm underline cursor-pointer" href="https://www.enrique.zone" target="_blank">Looking for enrique the designer?</a>

        </div>

        {/* Right */}
        <div className="md:flex md:space-x-16 text-white text-sm">
          <div className="flex flex-col">
            <p className="text-lg mb-5">Other Links</p>
            <a href="https://www.nulliusinverba.io/" target="_blank" className="cursor-pointer mb-1 hover:underline transition-all">My Blog</a>
            <a href="https://www.nulliusinverba.io/about" target="_blank" className="cursor-pointer mb-1 hover:underline transition-all">About Me</a>
            <a href="https://www.enrique.zone/" target="_blank" className="cursor-pointer mb-1 hover:underline transition-all">Design Portfolio</a>
          </div>
          <div className="flex flex-col">
            <p className="text-lg mb-5">Follow me</p>
            <a href="https://twitter.com/iturriagaayala" target="_blank" className="cursor-pointer mb-1 hover:underline transition-all">Twitter</a>
            <a href="https://www.linkedin.com/in/enriqueiturriaga/" target="_blank" className="cursor-pointer mb-1 hover:underline transition-all">LinkedIn</a>
            <a href="https://github.com/enriqueiturriagaa" target="_blank" className="cursor-pointer mb-1 hover:underline transition-all">GitHub</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Footer