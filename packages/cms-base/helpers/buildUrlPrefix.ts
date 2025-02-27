import { urlIsAbsolute } from "@shopware-pwa/helpers-next";

export default function buildUrlPrefix(url: string | any, prefix: string) {
  if (typeof url === "string") {
    if (urlIsAbsolute(url)) return url;
    url = url[0] !== "/" ? `/${url}` : url;
    return prefix ? `/${prefix}${url}` : url;
  }
  if (url.path && prefix) {
    url.path = `/${prefix}${url.path}`;
  }

  return url;
}
