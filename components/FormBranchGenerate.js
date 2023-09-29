import Link from "next/link";

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
          <option>Choose type</option>
          <option value="prose">Prose</option>
          <option value="graphic-novel">Graphic Novel</option>
          <option value="video">Video</option>
          <option value="game">Game</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="generate-story-pages">
          <option># Pages</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="generate-story-genre">
          <option>Genre</option>
          <option value="funny">Funny</option>
          <option value="fun">Fun</option>
          <option value="calm">Calm</option>
          <option value="dramatic">Dramatic</option>
          <option value="romantic">Romantic</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="generate-story-environment">
          <option>Environment</option>
          <option value="trunk">Maintain from trunk</option>
          <option value="space">Space</option>
          <option value="country">Country</option>
          <option value="city">City</option>
          <option value="beach">Beach</option>
          <option value="forest">Forest</option>
          <option value="other">Other</option>
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
              Marty
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/preview">
          <button type="submit">Generate story</button>
        </Link>
      </div>
    </>
  );
}
