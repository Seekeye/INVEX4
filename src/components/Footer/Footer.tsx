import { LiaYoutube, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";
import { dataFooter } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="px-4 py-2 bg-black/90 md:py-20 md:px-20">
      <div className="grid gap-8 grid-cols-2 md:grid-cols-[lfr,lfr,lfr,_400px] text-white mt-10">
        {dataFooter.map(({ id, links }) => (
          <div key={id}>
            {links.map(({ id, name, link }) => (
              <Link key={id} href={link} className="block mb-5">
                {name}
              </Link>
            ))}
          </div>
        ))}
        <div className="md:text-right">
          <h4 className="mb-6 text-xl font-semibold">INVEX</h4>
          <p>Carrer Muntaner, 312</p>
          <p>08021 Barcelona, Spain</p>
          <div className="flex gap-4 mt-4 md:justify-end">
            <a
              href="https://www.instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl cursor-pointer duration-200 hover:scale-110"
            >
              <LiaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/your_linkedin_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl cursor-pointer duration-200 hover:scale-110"
            >
              <LiaLinkedinIn />
            </a>
            <a
              href="https://x.com/home?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl cursor-pointer duration-200 hover:scale-110"
            >
              <CiTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/your_youtube_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl cursor-pointer duration-200 hover:scale-110"
            >
              <LiaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
