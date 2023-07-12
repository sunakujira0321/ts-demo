export default async function asyncSample(){
    const url = "https://api.github.com/users/sunakujira"

    type Profile = {
        login: string,
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const asyncProfile:FetchProfile = async() => {
        const response = await fetch(url)
        .then((res: Response) => res)
        .catch((error) => {
            return null;
        })
        if (!response) {
            return null
        }
        const json = await response.json()
            .then((json: Profile) =>{
                console.log("async:", json)
                return json
            })
            .catch((error)=>{
                console.error(error)
                return null
            })
        if (!json) {
            return null
        }
        return json
    }

    const profile = await asyncProfile()
    if(profile){
        console.log("これだ:", profile)
    } 
}