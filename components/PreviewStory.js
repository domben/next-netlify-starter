import Link from "next/link";
import Carousel from "@components/Carousel";
import Stats from "@components/Stats";

export default function PreviewStory() {
  return(
    <div className="preview">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="preview-title">
              <h1>Story Preview: Mega Marty of the Multiverse</h1>
              <Link href="/generate">
                <a href="/generate">Make edits</a>
              </Link>
            </div>
            <div className="preview-intro">
              <p>Reminder: This story is a branch from</p>
              <Link href="/details">
                <a href="/details">AREA15: It Begins</a>
              </Link>
            </div>
            <div className="preview-details">
              <div className="preview-details-graphics">
                <Carousel id="gallery-marty" images={["/gallery/marty-1.jpg","/gallery/marty-2.jpg","/gallery/marty-3.jpg","/gallery/marty-4.jpg","/gallery/marty-5.jpg","/gallery/marty-6.jpg","/gallery/marty-7.jpg","/gallery/marty-8.jpg"]} linkTo="" />
              </div>
              <div className="preview-details-content">
                <h2>Mega Marty of the Multiverse</h2>
                <p>An explosion of Particle A15 turns a high powered corner office New York executive named Marty into a super hero of the multiverse.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <Link href="/">
                <button type="submit" className="preview-commit">Commit branch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}