import { AnimateComponent } from "../components/AnimateComponent";
import { projects } from "../constants/project";
import useLocales from "../hooks/useLocales";
import "../styles/sections/plans.scss";

export function Plans({ isMobile }: { isMobile?: boolean }) {
  const { t } = useLocales();

  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Plans</h2>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        <p className="subtitle">
          We offer three different plans to meet your coding education needs.
        </p>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <div className="plans">
          {projects.map((project) => (
            <div className="card" key={project.smallName}>
              <div className="company-text">
                <img
                  className="logo"
                  src={project.image}
                  alt={t(
                    `sections.portfolio.description.${project.smallName}.name`
                  )}
                />
                <h6>{project.title}</h6>
                <h3>R${project.price}</h3>
                <p className="carousel-description">{project.text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateComponent>
    </div>
  );
}
