import Link from "next/link";
import {useEffect, useState} from "react";

export default function Carousel({id, images, linkTo}) {
  let [buttons, setButtons] = useState([])
  let [items, setItems] = useState([]);
  let [nav, setNav] = useState(null);

  useEffect(() => {
    if (Array.isArray(images)) {
      buttons = [];
      items = [];
      nav = null;

      if (images.length > 1) {
        for (let i = 0; i < images.length; i += 1) {
          buttons.push(
            <button type="button"
                    data-bs-target={"#" + id}
                    data-bs-slide-to={i}
                    className={(i === 0) ? "active" : ""}
                    aria-current="true"
                    aria-label={"Slide " + (i + 1)}
                    key={i}></button>
          );
        }

        nav = (
          <>
            <button className="carousel-control-prev" type="button" data-bs-target={"#" + id} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#" + id} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        );
      }

      for (let i = 0; i < images.length; i += 1) {
        items.push(
          <div className={"carousel-item" + ((i === 0) ? " active" : "")} key={i}>
            <img src={images[i]} className="d-block w-100" alt={"Carousel " + (i + 1)}/>
          </div>
        );
      }

      setButtons(buttons);
      setItems(items);
      setNav(nav);
    }
  }, [id, images])

  return(
    <div id={id} className="carousel slide">
      <div className="carousel-indicators">
        {buttons}
      </div>
      <div className="carousel-inner">
        {items}
      </div>
      {nav}
      {
        linkTo ? <div className="branch-commit-add">
          <Link href={linkTo}>
            <img src="/branch.png" alt="Branch" width="58" height="58" />
          </Link>
        </div> : <></>
      }
    </div>
  );
}