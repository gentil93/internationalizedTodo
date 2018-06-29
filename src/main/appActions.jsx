export const changeLocale = (locale) => {
    return {
        type: "LOCALE_CHANGED",
        payload: locale
    }
}