import type { GithubUser } from "~/types";

export async function buscarDadosUsuarioGithub(slug: string): Promise<GithubUser | undefined> {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(`https://api.github.com/users/${slug}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.status !== 200) {
        return undefined;
    }

    const user = await response.json();
    return {
        id: user.id,
        name: user.name,
        login: user.login,
        email: user.email,
        bio: user.bio,
        avatar: user.avatar_url,
        location: user.location,
        company: user.company
    };
}
