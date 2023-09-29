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
              <h1>Story Preview: Story name</h1>
              <Link href="/generate">
                <a href="/generate">Make edits</a>
              </Link>
            </div>
            <div className="preview-intro">
              <p>Reminder: This story is a branch from</p>
              <a href="#">AREA15: It Begins Chapter 1</a>
            </div>
            <div className="preview-details">
              <div className="preview-details-graphics">
                <Carousel showAdd={false} />
              </div>
              <div className="preview-details-content">
                <h2>Regular Day at the office for Marty...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur quam urna, ac placerat arcu eleifend at. Quisque ut sapien et est molestie mattis. Donec vestibulum egestas lorem, et lobortis metus congue sit amet. Nulla ex diam, ullamcorper eget tortor eu, vestibulum aliquet turpis.</p>
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