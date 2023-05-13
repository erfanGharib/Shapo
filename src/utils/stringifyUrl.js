const stringifyUrl = data => {
    if (data) {
        return Object.entries(data)
            ?.filter(([k, v]) => k && v)
            ?.reduce((acc, [key, val], idx) => {
                return `${acc}${idx === 0 ? "" : '&'}${key}=${encodeURIComponent(val)}`;
            }, "?");
    }
}
export default stringifyUrl;