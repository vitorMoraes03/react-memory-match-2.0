import { shuffle } from "./shuffle"

export function duplicateArr(arr){
    let arr1 = arr.map(element => {
        return {
            alt_description: element.alt_description,
            description: element.description,
            id: element.id,
            key_arr: 1,
            urls: element.urls.small 
        }
    }
    )

    let arr2 = arr.map(element => {
        return {
            alt_description: element.alt_description,
            description: element.description,
            id: element.id,
            key_arr: 2,
            urls: element.urls.small 
        }
    }
    )

    let duplicateArray = (shuffle([...arr1, ...arr2]));
    return duplicateArray;
}

