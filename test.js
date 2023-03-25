import { Octokit } from "octokit";
import dotenv from "dotenv"

const octokit = new Octokit({ auth: `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` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);

await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => {console.log(res.data)})