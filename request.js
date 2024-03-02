const GetURL = "https://rasmusweb.no/get.php"
const PostURL = "https://rasmusweb.no/post.json"

async function getRequest() {
  const getHtmlObj = document.getElementById("get")
  getHtmlObj.innerHTML = "Waiting for response"

  const apiCallPromise = await fetch(GetURL, {
    method: "GET",
    //  mode: "no-cors", // no-cors, *cors, same-origin
    headers: {
      Accept: "application/json",
    },
  })

  getHtmlObj.innerHTML = ""

  const p = document.createElement("p")
  p.textContent = "StatusCodeOK: " + apiCallPromise.ok
  getHtmlObj.appendChild(p)

  // Getting the json entries from the response:
  const entries = await apiCallPromise.json()
  console.log(entries)

  for (const entry of entries) {
    console.log(entry)
    const p = document.createElement("p")
    p.textContent = "Entry: " + JSON.stringify(entry)
    getHtmlObj.appendChild(p)
  }

  // document.getElementById("get").innerHTML = obj.toString()

  //.then((response) => {
  //  console.log(response)
  //  console.log("OK: " + response.ok)
  // console.log(JSON.stringify(response.json))
  // const obj = JSON.parse(response)
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
