export default function callbackSample(){
    const url = "https://api.github.com/users/sunakujira"

    const fetchProfile = () => {
        fetch(url)
        .then((res:Response) =>{
            res.json()
            .then((json) => {
                console.log("Callback Sample:", json)
                return json
            })
            .catch((error) => {
                console.error(error)    
            })
        })
        .catch((error) =>{
            console.error(error)
        })
    }

    const profile = fetchProfile()
    console.log("profile", profile)

}