const GetURL = "https://rasmusweb.no/get.php"
const PostURL = "https://rasmusweb.no/post.php"

async function getRequest() {
  const htmlObj = document.getElementById("get")
  htmlObj.innerHTML = "Waiting for response"

  const apiCallPromise = await fetch(GetURL, {
    method: "GET",
    //  mode: "no-cors", // no-cors, *cors, same-origin
    headers: {
      Accept: "application/json",
    },
  })

  htmlObj.innerHTML = ""

  const p = document.createElement("p")
  p.textContent = "StatusCodeOK: " + apiCallPromise.ok
  htmlObj.appendChild(p)

  // Getting the json entries from the response:
  const entries = await apiCallPromise.json()
  console.log(entries)

  for (const entry of entries) {
    console.log(entry)
    const p = document.createElement("p")
    p.textContent = "Entry: " + JSON.stringify(entry)
    htmlObj.appendChild(p)
  }
}

async function postRequest() {
  const htmlObj = document.getElementById("post")
  htmlObj.innerHTML = "Waiting for response"

  const apiCallPromise = await fetch(PostURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 78912 }),
  })

  htmlObj.innerHTML = ""

  const p = document.createElement("p")
  p.textContent = "StatusCodeOK: " + apiCallPromise.ok
  htmlObj.appendChild(p)

  // Getting the json from the response:
  const responseJson = await apiCallPromise.json()
  console.log(responseJson)

  const p2 = document.createElement("p")
  p2.textContent = "Response: " + responseJson
  htmlObj.appendChild(p2)
}
