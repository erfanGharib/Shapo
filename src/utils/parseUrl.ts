import { T_ProductsPage } from "../store/reducers/_productsPage";

type T_ReturnType = T_ProductsPage['filters'] & {
    priceRange: string
};

const parseUrl = (url: string): Partial<T_ReturnType> => {
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