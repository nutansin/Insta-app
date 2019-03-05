
export default function fetchUnsplashProfileData() {
  
    fetch('https://api.unsplash.com/photos/?client_id=e8a1568ebfbe6e258843b98cf7524eef5d286b3cf540345fe13e2f558f9b9165')
        .then(res => res.json())
        .then( data=>{
            console.log("  data " ,data);
            return data
        }    
        )
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
}


