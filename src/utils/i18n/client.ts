"use client"

import { useEffect } from "react"
import i18next, { i18n } from "i18next"
import {
  initReactI18next,
  useTranslation as useTransAlias,
} from "react-i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import {
  type LocaleTypes,
  getOptions,
  languages,
} from "@/utils/i18n/settings"

const runsOnServerSide = typeof window === "undefined"

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: LocaleTypes, namespace: string) => {
      return import(`./locales/${language}/${namespace}.json`)
    }),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ["path"],
    },
    preload: runsOnServerSide ? languages : [],
  })

export default function useTranslation(lng: LocaleTypes, ns: string) {
  const translator = useTransAlias(ns)
  const { i18n } = translator

  // Run content is being rendered on server side
  if (runsOnServerSide && lng) {
    // && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  } else {
    // Use our custom implementation when running on client side
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCustomTranslationImplem(i18n, lng)
  }
  return translator
}

function useCustomTranslationImplem(i18n: i18n, lng: LocaleTypes) {
  // This effect changes the language of the application when the lng prop changes.
  useEffect(() => {
    if (!lng) return // || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng)
  }, [lng, i18n])
}
