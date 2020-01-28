if (sessionStorage.getItem("token") === null) {
    createToken()
}
/* createToken and save ind sesision storage  */
function createToken() {
    const clientId = "3feb43ca2df44fdbb90d3071906feb3e";
    const ClientSecret = "2a8788f4389c4329936e0e57b373b9e9";
    
    fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + ClientSecret)
        },
        body: "grant_type=client_credentials"
    })
        .then(respons => respons.json())
        .then(resultat => sessionStorage.setItem('token', `Bearer ${resultat.access_token}`))
}
