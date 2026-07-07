export type AppRole = "admin" | "viewer";

const ROLE_KEY = "app_role";

export function getAppRole(): AppRole {
  return sessionStorage.getItem(ROLE_KEY) === "viewer" ? "viewer" : "admin";
}

export function setAppRole(role: AppRole) {
  sessionStorage.setItem(ROLE_KEY, role);
}

export function isReadOnly(): boolean {
  return getAppRole() === "viewer";
}
