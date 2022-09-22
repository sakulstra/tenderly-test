import fetch from "isomorphic-unfetch";

// Function is later referenced with this name
const githubFn = async (context, event) => {
  const url = "https://api.github.com/repos/bgd-labs/aave-tokenlist/dispatches";
  const githubPAT = await context.secrets.get("GITHUB_PAT"); // keep this secret
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      event_type: "webhook",
    }),
    headers: {
      Authorization: "token " + githubPAT,
    },
  });
};

// Function must be exported
module.exports = { githubFn };
