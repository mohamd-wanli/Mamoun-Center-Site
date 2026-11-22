import { forwardRef } from "react";
import { Link as RouterLink, NavLink as RouterNavLink, Navigate as RouterNavigate } from "react-router-dom";
import { language } from "./index";

export * from "react-router-dom";

export function localizedPath(to, lang = language) {
  if (typeof to === "object" && to !== null) return { ...to, pathname: localizedPath(to.pathname, lang) };
  if (typeof to !== "string" || !to.startsWith("/") || to.startsWith("//")) return to;
  const path = to.replace(/^\/en(?=\/|$|[?#])/, "") || "/";
  return lang === "en" ? `/en${path}` : path;
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
