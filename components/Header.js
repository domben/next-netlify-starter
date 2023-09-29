import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="profile">
              <img src="/profile.png" alt="Storyverse User Profile" />
            </div>
            <div className="logo">
              <Link href="/">
                <a href="/">
                  <img src="/logo.png" alt="Storyverse Logo" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
