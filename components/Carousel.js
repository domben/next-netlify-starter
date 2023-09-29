import Link from "next/link";

export default function Carousel({showAdd}) {
  return(
    <div id="branch-commit-carousel" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#branch-commit-carousel" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#branch-commit-carousel" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#branch-commit-carousel" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/gallery/carousel-1.jpg" className="d-block w-100" alt="Carousel 1" width="312" height="312" />
        </div>
        <div className="carousel-item">
          <img src="/gallery/carousel-2.jpg" className="d-block w-100" alt="Carousel 2" width="312" height="312" />
        </div>
        <div className="carousel-item">
          <img src="/gallery/carousel-3.jpg" className="d-block w-100" alt="Carousel 3" width="312" height="312" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#branch-commit-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#branch-commit-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {
        showAdd ? <div className="branch-commit-add">
          <Link href="/generate">
            <img src="/branch.png" alt="Branch" width="58" height="58" />
          </Link>
        </div> : <></>
      }
    </div>
  );
}