import Cookies from "js-cookie"

export function resetLink(href) {
  const accountId = Cookies.get('yc-account-id')
  const downloadLink = accountId
    ? `${process.env.www_host}${href}`
    : `${process.env.account_host}?redirect_uri= ${encodeURIComponent(
        process.env.www_host + '' + href
      )}`

  return downloadLink
}
