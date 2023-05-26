export type GithubUser = {
    id: number;
    bio: string;
    login: string;
    name: string;
    avatar: string;
    email: string;
    location: string;
    company: string;
}

export type FavoritarUser = Pick<GithubUser, "name" | "avatar" | "login">;

export type Developer = {
    id: string;
    name: string;
    slug: string;
    avatar: string;
}

export type Repositorio = {
    id: number,
    name: string;
    description: string;
    url: string;
    language: string;
}