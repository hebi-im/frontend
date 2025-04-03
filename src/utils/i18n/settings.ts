export const fallbackLng = "ko"
export const languages = [fallbackLng, "en", "ja"]
// NOTE : We don't have any common json file, so it is temporary
export const defaultNS = "section1"
export const cookieName = "i18next"
export type LocaleTypes = "ko" | "en" | "ja"
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
