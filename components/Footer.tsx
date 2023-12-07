import Image from 'next/image'
import Link from 'next/link'
import { footerLinks} from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image 
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </div>

        <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-4">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>

        <div className="flex justify-between items-center flex-wrap mt-2 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 AliBuild. All rights reserved.</p>
          
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">Privacy Policy</Link>
            <Link href="/" className="text-gray-500">Terms of Use</Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer