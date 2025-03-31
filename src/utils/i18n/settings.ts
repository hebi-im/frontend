export const fallbackLng = "ko"
export const locales = [fallbackLng, "en", "ja"]
//NOTE : We don't have any common json file, so it is temporary
export const defaultNS = "common"
export const cookieName = "i18next"
export type LocaleTypes = (typeof locales)[number]

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
