export default function profileSample(){
    const url = "https://api.github.com/users/sunakujira"

    type Profile = {
        login: string,
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile:FetchProfile = () => {
        return new  Promise((resolve, reject) => {
            fetch(url)
            .then((res:Response) =>{
                res.json()
                .then((json) => {
                    console.log("Sample Profile json:", json)
                    resolve(json)
                })
                .catch((error) => {
                    console.error(error)
                    resolve(null)    
                })
            })
            .catch((error) =>{
                console.error(error)
            })
        })
    }
    fetchProfile()
      .then((profile:Profile | null) =>{
        console.log("Callback Sample2:", profile)
      })
      .catch(()=>{})
}