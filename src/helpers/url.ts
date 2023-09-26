export function getAbsoluteUrl(url: string): string {
    if (!url) {
        return '';
    }
    if (url.startsWith('#') || url.match(/(\w|http?s):/)) {
        return url;
    }
    if (url.match(/^(\/\/)/)) {
        return 'https:' + url;
    }
    if (url.match(/^www/)) {
        return 'https://' + url;
    }
    return location.origin + url;
}

export function isExternalLink(link: string): boolean | undefined {
    if (link) {
        const url = new URL(getAbsoluteUrl(link));
        return url.host !== location.host;
    }
    return;
}
