const parseUrl = url => {
    return url
        ?.replace("?", "")
        ?.split('&')
        ?.filter((v) => v)
        ?.reduce((acc, cur) => {
            const [key, value] = cur.split('=');
            return { ...acc, [key]: decodeURIComponent(value) };
        }, {});
}

export default parseUrl;