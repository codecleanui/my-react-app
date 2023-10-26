import { useLocation } from "react-router-dom";
import { NavItemWrapperProps } from "../../components/Navbar/type";

export const useDisplayNameFinder = (navLinks: NavItemWrapperProps[]) => {
  // const matchPath = useMatch()
  const location = useLocation();

  const path = window.location.pathname

  for (const navItem of navLinks) {
    if (navItem.children) {
      for (const childItem of navItem.children) {
        if (childItem.link === path.split('/')[0]) {
          return childItem.displayName;
        }
        if (childItem.links) {
          for (const subItem of childItem.links) {
            if (subItem.link === path.split('/')[1]) {
              return subItem.displayName;
            }
          }
        }
      }
    }
  }
  return ''; // Return null if the link is not found.
};
