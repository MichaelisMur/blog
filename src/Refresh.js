import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Refresh = (fun) => {
    const refresh = (again) => {
        fetch("http://localhost:3001/refreshtoken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: cookies.get("username"),
                access_token: cookies.get("access_token"),
                refresh_token: cookies.get("refresh_token")
            })
        }).then(res=>res.json())
        .then(response=>{
            console.log(`new access_token: ${response.access_token}`);
            console.log(`new refresh_token: ${response.refresh_token}`);
            cookies.set("access_token", response.access_token, {path: "/"});
            cookies.set("refresh_token", response.refresh_token, {path: "/"});
            again()
        })
    }
    fun(refresh)
}

export default Refresh;