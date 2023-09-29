import FormBranchGenerate from "@components/FormBranchGenerate";
import FormBranchWrite from "@components/FormBranchWrite";

export default function BranchCreate() {
  return (
    <div className="branch-create bg-black">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="branch-create-wrapper">
              <div className="branch-create-logo">
                <img src="/branch.png" alt="Branch Logo" width="58" height="58" />
              </div>
              <div className="branch-create-profile">
                <img src="/profile.png" alt="Branch Profile" width="86" height="86" />
              </div>
              <div className="branch-create-details">
                <p>You are about to create a story brand from:</p>
                <h1>AREA15's It Begins: Chapter 1</h1>
              </div>
              <div className="branch-create-forms">
                <ul className="nav nav-tabs" id="branch-create-forms-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="ai-tab" data-bs-toggle="tab" data-bs-target="#ai"
                            type="button" role="tab" aria-controls="ai" aria-selected="true">AI Generate
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="user-tab" data-bs-toggle="tab" data-bs-target="#user"
                            type="button" role="tab" aria-controls="user" aria-selected="false">Write Yourself
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="branch-create-forms-tab-content">
                  <div className="tab-pane fade show active" id="ai" role="tabpanel" aria-labelledby="ai-tab">
                    <FormBranchGenerate />
                  </div>
                  <div className="tab-pane fade" id="user" role="tabpanel" aria-labelledby="user-tab">
                    <FormBranchWrite />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}