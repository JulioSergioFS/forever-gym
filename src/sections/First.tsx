import { useScrollSection } from "react-scroll-section";
import { AnimateComponent } from "../components/AnimateComponent";
import "../styles/sections/home.scss";

export function First() {
  const goToPlans = useScrollSection("3");

  return (
    <div className="content home">
      <div className="text">
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <div className="text-content">
            <h2 className="text-content_title">
              <p>#</p>
              <div>
                4EVER
                <br />
                LEARN
              </div>
            </h2>
            <p>Join us and discover a whole new carreer</p>
            <button
              className="button-secondary"
              onClick={() => goToPlans.onClick()}
            >
              Learn with us!
            </button>
          </div>
        </AnimateComponent>
      </div>

      <div className="photo-container">
        <div className="gradient">
          <img
            className="first-photo"
            src="images/landing.jpg"
            alt="Person using their phone (photo by Ketut Subiyanto: https://www.pexels.com/photo/melancholic-black-man-with-smartphone-listening-to-music-in-earphones-4559978/)"
          />
        </div>
      </div>
    </div>
  );
}
