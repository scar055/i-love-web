const request = await fetch(
	"https://api.github.com/users/scar055/repos?sort=create",
);

const reposJson = await request.json();

export default reposJson;
