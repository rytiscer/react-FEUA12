export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};