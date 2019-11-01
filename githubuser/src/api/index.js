const githubApi = "https://api.github.com/search/users?q=$";

const loadUsers = async query => {
  const response = await fetch(`${githubApi}${query}`);
  if (response.status === 200) {
    return await response.json();
  } else {
    return response.statusText;
  }
};

export { loadUsers };
