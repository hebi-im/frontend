/* eslint-disable no-console */

const fs = require("node:fs")
const path = require("node:path")
const lodash = require("lodash")
const PublicGoogleSheetsParser = require("public-google-sheets-parser")

const parser = new PublicGoogleSheetsParser()
const targetLanguages = ["ko", "en", "ja"]
const i18nDist = `${__dirname}/./`

console.clear()

// 기본 디렉토리 생성
targetLanguages.forEach(lang => {
  fs.mkdirSync(path.join(i18nDist, lang), { recursive: true })
})

// https://docs.google.com/spreadsheets/d/1unb9UoJJJc4lbsyxFYjCGDTNbRpIjxoQ6UAkVzlU1dI/edit?gid=0#gid=0
parser
  .parse("1unb9UoJJJc4lbsyxFYjCGDTNbRpIjxoQ6UAkVzlU1dI", "dictionary")
  .then(rows => {
    const dictionary = {}
    rows.forEach(row => {
      targetLanguages.forEach(lang => {
        lodash.set(dictionary, `${lang}.${row.key}`, row[lang])
      })
    })

    targetLanguages.forEach(lang => {
      Object.keys(dictionary[lang]).forEach(key => {
        const langFile = path.join(i18nDist, lang, `${key}.json`)
        fs.writeFileSync(
          langFile,
          JSON.stringify(dictionary[lang][key]),
        )
      })

      console.log(`Created ${lang} dictionary file.`)
    })

    console.log(`${targetLanguages.length} files created.`)
  })
  .catch(error => {
    console.error(`${error}`)
  })
