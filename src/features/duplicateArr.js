export function duplicateArr(arr){
    let arr1 = arr.map(element => {
        return {
            ...element,
            key_arr1: 1 
        }
    }
    )

    let arr2 = arr.map(element => {
        return {
            ...element,
            key_arr2: 2
        }
    }
    )

    let duplicateArray = (shuffle([...arr1, ...arr2]));
    return duplicateArray;
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