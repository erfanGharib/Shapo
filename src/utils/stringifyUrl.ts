import { T_ProductsPage } from "../store/reducers/_productsPage";

type T_Props = T_ProductsPage['filters'];

const stringifyUrl = (data: T_Props) => {
    if (data) {
        return Object.entries(data)
            ?.filter(([k, v]) => k && v)
            ?.reduce((acc, [key, val], idx) => {
                return `${acc}${idx === 0 ? "" : '&'}${key}=${encodeURIComponent(val.toString())}`;
            }, "?");
    }
}
export default stringifyUrl;