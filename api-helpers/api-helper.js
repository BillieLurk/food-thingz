export async function putData(data) {
  //make a json post request to the server
  fetch("http://localhost:3000/api/submitions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...data }),
  })
    .then((res) => res.json())
    .then((data) => {
      
    });
}

export async function getData() {
  //make a json post request to the server
  return fetch("http://localhost:3000/api/submitions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    
}

export async function removeData(data) {
    //make a json post request to the server
    fetch("http://localhost:3000/api/submitions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {id: data} ),
    })
      .then((res) => res.json())
      .then((data) => {
        
      });
  }
