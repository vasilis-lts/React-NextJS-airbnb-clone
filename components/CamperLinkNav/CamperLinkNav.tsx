import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"

export default function CamperLinkNav() {

  const [ShowLinks, setShowLinks] = useState<boolean>(false);

  return (
    <div id='camperLinkNav'>
      <div className="nav-left">
        <Image src={'/logo-camperlink.png'} width={208} height={44} id='logoCamperLink' />
      </div>

      <div className="menu-button" onClick={() => setShowLinks(!ShowLinks)}>
        <AiOutlineMenu size={24} />
      </div>

      <div id='navRight' className={`nav-right ${ShowLinks ? 'show' : false}`}>
        <div className="flex ai-center nav-links">
          <div className="nav-link">
            <Link href={'/voor-camperars'} >Voor Camperars</Link>
          </div>
          <div className="nav-link">
            <Link href={'/voor-locaties'} >Voor Locaties</Link>
          </div>
          <div className="nav-link">
            <Link href={'/Inloggen'} >Inloggen</Link>
          </div>
          <Link href={'/Registeren'} >
            <button type="button" className="base-button blue">
              <div className="button-content">
                <div className="button-text">Registeren</div>
              </div>
            </button>
          </Link>
        </div>

        <div className="language">
          <img data-v-365d8aff="" src="/assets/ic_dutch.png" className="base-image locale current"></img>
          <img data-v-365d8aff="" src="/assets/ic_english.png" className="base-image locale"></img>
          <img data-v-365d8aff="" src="/assets/ic_french.png" className="base-image locale"></img>
          <img data-v-365d8aff="" src="/assets/ic_german.png" className="base-image locale"></img>
        </div>

      </div>
    </div>
  )
}