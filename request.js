const GetURL = "https://rasmus.42web.io/get.php"
const PostURL = "https://rasmus.42web.io/post.json"

async function getRequest() {
    const response = await fetch(GetURL, {
        method: "GET",
       //  mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            console.log( response )
            console.log("OK: " + response.ok)
            console.log(JSON.stringify(response.json))
            // const obj = JSON.parse(response)
            // document.getElementById("get").innerHTML = obj.toString()
        })
}

async function postRequest() {
    await fetch(PostURL, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 78912 }),
    })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)))
}
