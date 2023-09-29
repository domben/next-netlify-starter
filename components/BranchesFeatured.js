import Carousel from "@components/Carousel";
import History from "@components/History";
import Stats from "@components/Stats";
import {useState} from "react";

export default function BranchesFeatured() {
  const [showCommits, setShowCommits] = useState(false);

  return (
    <div className="branch">
      <div className={"branch-commit-wrapper" + (!showCommits ? "" : " open")}>
        <div className="branch-commit">
          <div className="branch-commit-status">
            <img src="/characters/character-2.png" alt="Character 2" width="36" height="36" />
          </div>
          <div className="branch-commit-details">
            <div className="branch-commit-details-profile">Haley15</div>
            <div className="branch-commit-details-graphics">
              <Carousel showAdd={true} />
              <div className="branch-commit-details-graphics-caption">
                <p>For Marty, it was just another day at the office when...</p>
              </div>
            </div>
            <div className="branch-commit-details-stats">
              <Stats numBranches="212" numComments="8" numLikes="45k" />
            </div>
            <div className="branch-commit-details-content" onClick={() => setShowCommits(!showCommits)}>
              <h2>Regular Day at the office for Marty...</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur quam urna, ac placerat arcu eleifend at. Quisque ut sapien et est molestie mattis. Donec vestibulum egestas lorem, et lobortis metus congue sit amet. Nulla ex diam, ullamcorper eget tortor eu, vestibulum aliquet turpis.</p>
            </div>
            <div className="date-or-time">45 minutes ago</div>
          </div>
        </div>
        {showCommits ? <History /> : <></>}
        <div className="branch-commit-comments">
          <h3>Comments</h3>
          <div className="branch-commit-comment">
            <img src="/characters/character-3.png" alt="Character 3" width="36" height="36" />
            <div className="branch-commit-comment-content">
              <span>unreal341</span> Pellentesque laoreet non dui sollicitudin vulputate.
            </div>
            <div className="date-or-time">30 minutes ago</div>
          </div>
          <div className="branch-commit-comment">
            <img src="/characters/character-3.png" alt="Character 3" width="36" height="36" />
            <div className="branch-commit-comment-content">
              <span>unreal341</span> Pellentesque laoreet non dui sollicitudin vulputate.
            </div>
            <div className="date-or-time">18 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
