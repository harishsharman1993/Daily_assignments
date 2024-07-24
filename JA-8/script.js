// Task1----Using Fetch API
const fetchDta = async () => {
  const response = await fetch("https://fakestoreapi.com/products/1");

  if (!response.ok) {
    throw new Error("HTTP error");
  }

  const data = await response.json();

  console.log("response data:", data);
};

fetchDta();

//  Task2-----Handling Promises with Async and Await
const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/2");

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    const data = await response.json();

    console.log("response data:", data);
  } catch (error) {
    console.error("error occured", error);
  }
};

fetchData();

//    Task-3 Fetch with Parameters

document.addEventListener("DOMContentLoaded", () => {
  async function fetchdata1() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("http error");
      }
      const data = await response.json();
      console.log("response data:", data);
      // const data1= json.parse(data)
      // console.log(data1)

      displayInTable(data);
    } catch (error) {
      console.error("error occured", error);
    }
  }

  const displayInTable = (data) => {
    const tableBody = document.querySelector("#api-table #api-data");

    data.forEach((item) => {
      tr = document.createElement("tr");
      const idcell = document.createElement("td");
      idcell.textContent = item.id;
      tr.appendChild(idcell);

      const title = document.createElement("td");
      title.textContent = item.title;
      tr.appendChild(title);

      const completed = document.createElement("td");
      completed.textContent = item.completed;
      tr.appendChild(completed);

      tableBody.appendChild(tr);
    });
  };
  fetchdata1();
});

// Task4 Error Handling in Asynchronous Code

const fetchData2 = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/invalid");

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    const data = await response.json();

    console.log("response data:", data);
  } catch (error) {
    console.error("error in fetching data:", error);
  }
};

fetchData2();

//Task-5 Combining Fetch with Async/Await and Error Handling

async function fetchPosts() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Example API endpoint
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();
    console.log("Fetched Posts:", posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
}

// Call the fetchPosts function
fetchPosts();
