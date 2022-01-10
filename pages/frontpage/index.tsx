import Head from 'next/head';
import CamperLinkNav from '../../components/CamperLinkNav/CamperLinkNav';

function FrontPage() {

  return <div className='h100 flex-col' id="DashboardContainer">
    <Head>
      <link rel="stylesheet" href="/static/CamperLinkNav.module.css" />
    </Head>
    <CamperLinkNav />
    <div className='flex' id="FrontpageContent">
      <div className="bg-image cover" style={{ height: 515, backgroundImage: `url("/assets/img_landing.jpg")` }}>
        <div className="overlay">
          <h1 className="title1 white center">Waar zullen we heen
            gaan vandaag?</h1>
        </div>
      </div>
    </div>


  </div>
}

export default FrontPage