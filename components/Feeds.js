import BranchesMine from "@components/BranchesMine";
import BranchesFeatured from "@components/BranchesFeatured";

export default function Feeds() {
  return(
    <div className="feeds">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs" id="branch-create-forms-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="mine-tab" data-bs-toggle="tab" data-bs-target="#mine"
                        type="button" role="tab" aria-controls="mine" aria-selected="false">My Stories
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="featured-tab" data-bs-toggle="tab" data-bs-target="#featured"
                        type="button" role="tab" aria-controls="featured" aria-selected="true">Featured Stories
                </button>
              </li>
            </ul>
            <div className="tab-content" id="branch-create-forms-tab-content">
              <div className="tab-pane fade" id="mine" role="tabpanel" aria-labelledby="mine-tab">
                <BranchesMine />
              </div>
              <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                <BranchesFeatured />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}