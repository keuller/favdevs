import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { listarRepositorios } from '~/routes/(buscar)/githubApiClient';

export const useRepositorios = routeLoader$(async ({ params }) => {
    return await listarRepositorios(params.slug);
})

export default component$(() => {
    const { params } = useLocation();
    const repos = useRepositorios();

    return (
        <div>
            <h1 class="text-xl font-bold py-2">Repositórios - {params.slug}</h1>

            <div class="flex flex-col gap-2">
            {repos.value.map((repo) => (
                <div class="flex flex-col border bg-white py-2 px-4" key={repo.id}>
                    <span>{repo.name}</span>
                    <span>URL: {repo.url}</span>
                    <span class="text-sm text-slate-500">Language: {repo.language ?? 'N/A'}</span>
                </div>
            ))}
            </div>
        </div>
    )
});