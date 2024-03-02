const GetURL = "https://rasmusweb.no/get.php"
const PostURL = "https://rasmusweb.no/post.json"

async function getRequest() {
  const apiCallPromise = await fetch(GetURL, {
    method: "GET",
    //  mode: "no-cors", // no-cors, *cors, same-origin
    headers: {
      Accept: "application/json",
    },
  })
  const entries = await apiCallPromise.json()
  console.log(entries)

  for (const entry of entries) {
    console.log(entry)
  }

  //.then((response) => {
  //  console.log(response)
  //  console.log("OK: " + response.ok)
  // console.log(JSON.stringify(response.json))
  // const obj = JSON.parse(response)
  // document.getElementById("get").innerHTML = obj.toString()
  // })
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
