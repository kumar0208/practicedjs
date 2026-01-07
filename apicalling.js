//api calling logic with asynch-await
const todoData = async () => {
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
todoData();
