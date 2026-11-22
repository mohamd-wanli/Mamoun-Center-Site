import { forwardRef } from "react";
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  Navigate as RouterNavigate,
} from "react-router-dom";
import { language } from "./index";
import { localizedPath as pathForLanguage } from "./paths";

export * from "react-router-dom";

export function localizedPath(to, lang = language) {
  return pathForLanguage(to, lang);
}

export const Link = forwardRef(function Link({ to, ...props }, ref) {
  return <RouterLink ref={ref} to={localizedPath(to)} {...props} />;
});
export const NavLink = forwardRef(function NavLink({ to, ...props }, ref) {
  return <RouterNavLink ref={ref} to={localizedPath(to)} {...props} />;
});
export function Navigate({ to, ...props }) {
  return <RouterNavigate to={localizedPath(to)} {...props} />;
}
