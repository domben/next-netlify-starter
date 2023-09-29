export default function Header({ title }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="profile">
              <img src="/profile.png" alt="Storyverse User Profile" />
            </div>
            <div className="logo">
              <a href="/">
                <img src="/logo.png" alt="Storyverse Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
