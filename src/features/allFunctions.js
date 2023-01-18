import axios from 'axios';

export const allFunctions = {cardComparision, rotateCard, duplicateArr, isSmallScreen, loadApi, shuffle};

function cardComparision(firstPick, secondPick){
    return firstPick.card.id === secondPick.card.id ? true : false;
}

function rotateCard(firstPick, secondPick, boolean){
    firstPick.setFlipped(boolean);
    secondPick.setFlipped(boolean);
}

function duplicateArr(arr){
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

function isSmallScreen(){
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    if(mediaQuery.matches){
        return true;
    } else return false;
}

async function loadApi(searchInput, searchAmount){
      try {
        let res = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID t2S4r5jOGfB154EKcN21Gc5SHOtJAzJ7M3a_4QLubSI'
        },
        params: {
            query: searchInput,
            per_page: searchAmount,
            orientation: 'squarish'
        }          
    })
    return res.data.results;
}
      catch(err) {
        console.log(err);
        }
}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }