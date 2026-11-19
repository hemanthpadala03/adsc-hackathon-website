/**
 * Registration, ticketing and payment stay on an external platform.
 * Rietz is one option under consideration; it is not selected.
 * Leave `url` null until a platform and a real registration link exist.
 * Components read this object. Do not hard-code a provider in the UI.
 */
export const registrationConfig = {
  url: null as string | null,
  providerName: null as string | null,
  openLabel: "Register",
  closedLabel: "Registration opening soon",
};
