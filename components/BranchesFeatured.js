import Carousel from "@components/Carousel";
import History from "@components/History";
import Stats from "@components/Stats";
import Link from "next/link";

export default function BranchesFeatured() {
  return (
    <div className="branch">
      <div className="branch-commit-wrapper">
        <div className="branch-commit">
          <div className="branch-commit-status">
            <img src="/characters/character-2.png" alt="Character 2" width="36" height="36" />
          </div>
          <div className="branch-commit-details">
            <div className="branch-commit-details-profile">Haley15</div>
            <div className="branch-commit-details-graphics">
              <Carousel linkTo="/details" />
              <div className="branch-commit-details-graphics-caption">
                <p>For Marty, it was just another day at the office when...</p>
              </div>
            </div>
            <div className="mt-3 branch-commit-details-content">
              <h2>Regular Day at the office for Marty...</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur quam urna, ac placerat arcu eleifend at. Quisque ut sapien et est molestie mattis. Donec vestibulum egestas lorem, et lobortis metus congue sit amet. Nulla ex diam, ullamcorper eget tortor eu, vestibulum aliquet turpis.</p>
            </div>
            <div className="date-or-time">45 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
