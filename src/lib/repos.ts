/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export async function getPinnedRepos() {
  const res = await axios.get("https://ghpr.asrvd.me/neolawz");
  console.log(res.data);
  const repos = res.data;

  return repos.map((repo: any) => {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.link,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
    };
  });
}
