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
      catch(err) {
        console.log(err);
        }
}

