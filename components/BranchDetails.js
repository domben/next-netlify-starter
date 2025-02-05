import Carousel from "@components/Carousel";
import History from "@components/History";
import Stats from "@components/Stats";
import Link from "next/link";

export default function BranchesDetails() {
  return (
    <div className="branch">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="branch-commit-wrapper open">
              <div className="branch-commit">
                <div className="branch-commit-status">
                  <img src="/characters/character-2.png" alt="Character 2" width="36" height="36" />
                  <div className="branch-commit-status-profile">AREA15</div>
                </div>
                <div className="branch-commit-details">
                  <div className="branch-commit-details-graphics">
                    <Carousel id="gallery-it-begins" images={["/gallery/it-begins-1.jpg","/gallery/it-begins-2.jpg","/gallery/it-begins-3.jpg","/gallery/it-begins-4.jpg","/gallery/it-begins-5.jpg"]} linkTo="/generate" />
                  </div>
                  <div className="branch-commit-details-stats">
                    <Stats numBranches="212" numComments="8" numLikes="45k" />
                  </div>
                  <div className="branch-commit-details-content">
                    <h2>It Begins</h2>
                    <p>An explosion of pure Particle A15 transformed this place into something spectacular. Now, we have to protect it.</p>
                  </div>
                  <div className="date-or-time">45 minutes ago</div>
                </div>
              </div>
              <History />
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
              <div className="branch-commit-comments-add">
                <div className="mb-3">
                  <textarea className="form-control" id="comment-add" placeholder="Comment..." rows="5"></textarea>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <Link href="/">
                    <button type="submit" className="w-100">Add comment</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
