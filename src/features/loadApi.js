import axios from 'axios';

export async function loadApi(searchInput){
      try {
        let res = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID t2S4r5jOGfB154EKcN21Gc5SHOtJAzJ7M3a_4QLubSI'
        },
        params: {
            query: searchInput,
            per_page: 8,
            orientation: 'squarish'
        }          
    })
    return res.data.results;
}

    //   if(res.data.results.length < 8){
    //     alert('Essa palavra tem poucas imagens, tente outra! Você também pode tentar traduzir para o inglês.');
    //     navigate('/');
    //     return
    //   }

    //   let arr1 = res.data.results.map(element => {
    //       return {
    //           ...element,
    //           control: 1 //for key problems
    //       }
    //   }
    //   )

    //   let arr2 = res.data.results.map(element => {
    //       return {
    //           ...element,
    //           control: 2 //for key problems
    //       }
    //   }
    //   )

    //   let duplicateArray = (shuffle([...arr1, ...arr2]));
    //   setArrayImgs(duplicateArray);
    //     } 
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
