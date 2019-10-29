const ROOT_URL = "https://api.github.com/search/users?q=";

async function getGithubUser(query){
    const response = await fetch(`${ROOT_URL}${query}`);
    return response.json();
}

export {getGithubUser}