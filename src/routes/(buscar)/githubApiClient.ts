import type { GithubUser, Repositorio } from "~/types";

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

export async function listarRepositorios(slug: string): Promise<Repositorio[]> {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(`https://api.github.com/users/${slug}/repos?per_page=10`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.status !== 200) {
        return [];
    }

    const repos = await response.json();
    return repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        language: repo.language,
        description: repo.description,
        url: repo.url
    }));
}