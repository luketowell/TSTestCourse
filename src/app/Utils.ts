import { UrlWithParsedQuery, parse } from "url";

export const toUppercase = (str:string): string => {
    return str.toUpperCase();
}

export const parseUrl = (url:string):UrlWithParsedQuery => {
    if (!url){
        throw new Error('Empty url!');
    }
    return parse(url, true);
}