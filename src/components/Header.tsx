import { useScrollSections } from "react-scroll-section";
import { sections } from "../constants/header";
import useLocales from "../hooks/useLocales";
import "../styles/header.scss";

export function Header({
  hasBackground,
  isMobile,
  hidden,
}: {
  hasBackground: boolean;
  isMobile: boolean;
  hidden: boolean;
}) {
  const { t } = useLocales();
  const scrollSection = useScrollSections();

  return (
    <ul
      className={`header${
        !isMobile || hasBackground ? " header-background" : ""
      }`}
    >
      <li>
        <img src="four-e-white.svg" alt="website logo" height={32} />
      </li>
      {!isMobile ? (
        <li className="menu">
          <ul>
            {sections.map((item, index) => (
              <li key={item.id} onClick={scrollSection[index]?.onClick}>
                {t(item.name)}
              </li>
            ))}
          </ul>
        </li>
      ) : null}
    </ul>
  );
}
