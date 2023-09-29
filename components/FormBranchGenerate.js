export default function FormBranchGenerate() {
  return (
    <>
      <div className="mb-3">
        <input type="text" className="form-control" id="generate-title" placeholder="Title of story" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="generate-story" placeholder="Enter details of your story" rows="7"></textarea>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="generate-story-type">
          <option>Story type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="generate-story-environment">
          <option>Environment</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="generate-story-length">
          <option>Length</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="generate-character wrapper-dashed mb-3">
        <div className="mb-3 d-flex align-items-center justify-content-between">
          <h2>Character Build</h2>
          <a href="#">Delete Character</a>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="generate-character-name" placeholder="Character name" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="generate-character-describe" placeholder="Describe the character, including details about the character and their personality traits" rows="7"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="generate-character-file" className="form-label form-label-upload">Upload character image</label>
          <input className="form-control hide" type="file" id="generate-character-file" />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit">Generate character</button>
        </div>
      </div>
      <div className="generated-characters">
        <ul>
          <li>
            <a href="#">
              <img src="/characters/character-2.png" alt="Character 2" width="36" height="36" />
              Priscilla
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit">Generate story</button>
      </div>
    </>
  );
}
