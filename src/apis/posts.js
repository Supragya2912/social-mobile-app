export const getAllPosts = async() => {

   const response = await fetch('https://66ca127759f4350f064e5149.mockapi.io/api/allPosts/socialmedia');
    const data = await response.json();
    return data;
}