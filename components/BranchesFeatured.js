import Carousel from "@components/Carousel";
import Link from "next/link";
import Stats from "@components/Stats";

export default function BranchesFeatured() {
  return (
    <div className="branch">
      <div className="branch-commit-wrapper">
        <div className="branch-commit">
          <div className="branch-commit-status">
            <img src="/characters/character-2.png" alt="Character 2" width="36" height="36" />
            <div className="branch-commit-status-profile">AREA15</div>
            <div className="branch-commit-status-actions">
              <div className="branch-commit-status-actions-item">
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.57 2.42156V14.1827L9.11972 11.6268L7.7025 10.5769L6.26284 11.5961L2.43011 14.3093V2.42156H12.5702M15 0H0V19L7.66997 13.5703L15 19V0Z" />
                </svg>
              </div>
              <div className="branch-commit-status-actions-group">
                <div className="branch-commit-status-actions-item">
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7027 0.00444115C12.8934 0.00444115 11.4138 1.58549 11.4138 3.48631C11.4138 5.00518 12.3692 6.302 13.6712 6.76388C13.5655 8.22502 13.0582 8.96669 12.31 9.55292C11.4645 10.2191 10.171 10.6055 8.75481 10.9697C7.34288 11.3338 5.82104 11.6536 4.52748 12.5107C4.45139 12.564 4.37952 12.6218 4.30343 12.6795V6.76832C5.61813 6.31532 6.59042 5.02295 6.59042 3.49075C6.59042 1.58549 5.09817 0.00444115 3.28887 0.00444115C1.47957 0.00444115 0 1.58549 0 3.48631C0 5.01406 0.955378 6.30644 2.27431 6.76388V17.2406C0.955378 17.698 0 19.017 0 20.5448C0 22.4456 1.47957 24 3.28887 24C5.09817 24 6.59042 22.4456 6.59042 20.5448C6.59042 19.017 5.62236 17.698 4.30343 17.2406V17.0718C4.30343 15.4907 4.76421 14.869 5.60968 14.3094C6.45937 13.7498 7.79098 13.4034 9.22828 13.0303C10.6698 12.6617 12.2297 12.2576 13.5232 11.2406C14.6984 10.3168 15.5439 8.82457 15.6876 6.77276C17.015 6.32865 18 5.02295 18 3.48187C18 1.58105 16.5077 0 14.6985 0L14.7027 0.00444115ZM4.56975 20.5448C4.56975 21.2909 3.99906 21.8638 3.28887 21.8638C2.57868 21.8638 2.02067 21.2953 2.02067 20.5448C2.02067 19.7942 2.57868 19.1991 3.28887 19.1991C3.99906 19.1991 4.56975 19.7987 4.56975 20.5448ZM3.28887 4.80533C2.57868 4.80533 2.02067 4.23686 2.02067 3.48631C2.02067 2.73575 2.57868 2.14064 3.28887 2.14064C3.99906 2.14064 4.56975 2.74019 4.56975 3.48631C4.56975 4.23242 3.99906 4.80533 3.28887 4.80533ZM14.7027 4.80533C13.9925 4.80533 13.4345 4.23686 13.4345 3.48631C13.4345 2.73575 13.9925 2.14064 14.7027 2.14064C15.4129 2.14064 15.9836 2.74019 15.9836 3.48631C15.9836 4.23242 15.4129 4.80533 14.7027 4.80533Z" />
                  </svg>
                  <span>212</span>
                </div>
                <div className="branch-commit-status-actions-item">
                  <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8978 2.86797L20.2031 3.44615L22.1317 6.18972L21.5194 9.68902L12.5 19.0806L3.48062 9.68902L2.86835 6.18972L4.7969 3.44615L8.10222 2.86797L11.4592 5.22709L12.5 5.95854L13.5407 5.22709L16.8977 2.86797M16.4706 0.955963L12.4999 3.74639L8.5293 0.955963L3.74688 1.79247L0.956085 5.7627L1.79271 10.5445L12.5 21.6935L23.2072 10.5445L24.0438 5.7627L21.253 1.79247L16.4706 0.955963Z" />
                  </svg>
                  <span>45k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="branch-commit-details">
            <div className="branch-commit-details-graphics">
              <Carousel id="gallery-it-begins" images={["/gallery/it-begins-1.jpg","/gallery/it-begins-2.jpg","/gallery/it-begins-3.jpg","/gallery/it-begins-4.jpg","/gallery/it-begins-5.jpg"]} linkTo="" />
            </div>
            <Link href="/details">
              <div className="mt-3 branch-commit-details-content content-preview">
                <h2>It Begins</h2>
                <p>An explosion of pure Particle A15 transformed this place into something spectacular. Now, we have to protect it.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="branch-commit-wrapper">
        <div className="branch-commit">
          <div className="branch-commit-status">
            <img src="/characters/character-2.png" alt="Character 2" width="36" height="36" />
            <div className="branch-commit-status-profile">AREA15</div>
            <div className="branch-commit-status-actions">
              <div className="branch-commit-status-actions-item">
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.57 2.42156V14.1827L9.11972 11.6268L7.7025 10.5769L6.26284 11.5961L2.43011 14.3093V2.42156H12.5702M15 0H0V19L7.66997 13.5703L15 19V0Z" />
                </svg>
              </div>
              <div className="branch-commit-status-actions-group">
                <div className="branch-commit-status-actions-item">
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7027 0.00444115C12.8934 0.00444115 11.4138 1.58549 11.4138 3.48631C11.4138 5.00518 12.3692 6.302 13.6712 6.76388C13.5655 8.22502 13.0582 8.96669 12.31 9.55292C11.4645 10.2191 10.171 10.6055 8.75481 10.9697C7.34288 11.3338 5.82104 11.6536 4.52748 12.5107C4.45139 12.564 4.37952 12.6218 4.30343 12.6795V6.76832C5.61813 6.31532 6.59042 5.02295 6.59042 3.49075C6.59042 1.58549 5.09817 0.00444115 3.28887 0.00444115C1.47957 0.00444115 0 1.58549 0 3.48631C0 5.01406 0.955378 6.30644 2.27431 6.76388V17.2406C0.955378 17.698 0 19.017 0 20.5448C0 22.4456 1.47957 24 3.28887 24C5.09817 24 6.59042 22.4456 6.59042 20.5448C6.59042 19.017 5.62236 17.698 4.30343 17.2406V17.0718C4.30343 15.4907 4.76421 14.869 5.60968 14.3094C6.45937 13.7498 7.79098 13.4034 9.22828 13.0303C10.6698 12.6617 12.2297 12.2576 13.5232 11.2406C14.6984 10.3168 15.5439 8.82457 15.6876 6.77276C17.015 6.32865 18 5.02295 18 3.48187C18 1.58105 16.5077 0 14.6985 0L14.7027 0.00444115ZM4.56975 20.5448C4.56975 21.2909 3.99906 21.8638 3.28887 21.8638C2.57868 21.8638 2.02067 21.2953 2.02067 20.5448C2.02067 19.7942 2.57868 19.1991 3.28887 19.1991C3.99906 19.1991 4.56975 19.7987 4.56975 20.5448ZM3.28887 4.80533C2.57868 4.80533 2.02067 4.23686 2.02067 3.48631C2.02067 2.73575 2.57868 2.14064 3.28887 2.14064C3.99906 2.14064 4.56975 2.74019 4.56975 3.48631C4.56975 4.23242 3.99906 4.80533 3.28887 4.80533ZM14.7027 4.80533C13.9925 4.80533 13.4345 4.23686 13.4345 3.48631C13.4345 2.73575 13.9925 2.14064 14.7027 2.14064C15.4129 2.14064 15.9836 2.74019 15.9836 3.48631C15.9836 4.23242 15.4129 4.80533 14.7027 4.80533Z" />
                  </svg>
                  <span>17</span>
                </div>
                <div className="branch-commit-status-actions-item">
                  <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8978 2.86797L20.2031 3.44615L22.1317 6.18972L21.5194 9.68902L12.5 19.0806L3.48062 9.68902L2.86835 6.18972L4.7969 3.44615L8.10222 2.86797L11.4592 5.22709L12.5 5.95854L13.5407 5.22709L16.8977 2.86797M16.4706 0.955963L12.4999 3.74639L8.5293 0.955963L3.74688 1.79247L0.956085 5.7627L1.79271 10.5445L12.5 21.6935L23.2072 10.5445L24.0438 5.7627L21.253 1.79247L16.4706 0.955963Z" />
                  </svg>
                  <span>804</span>
                </div>
              </div>
            </div>
          </div>
          <div className="branch-commit-details">
            <div className="branch-commit-details-graphics">
              <Carousel id="gallery-rave-team" images={["/gallery/rave-team-1.jpg"]} linkTo="" />
            </div>
            <div className="mt-3 branch-commit-details-content content-preview">
              <h2>Adventures of the Rave Team</h2>
              <p>Pellentesque efficitur blandit vehicula. Vestibulum aliquet, nibh eu interdum fringilla, est urna efficitur nunc, non iaculis elit metus vitae urna.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <button type="submit">Load more</button>
      </div>
    </div>
  );
}
