import { Resource, component$, useResource$, useSignal } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { buscarDadosUsuarioGithub } from './githubApiClient';
import UsuarioCard from './UsuarioCard';

export const fetchUserData = server$(buscarDadosUsuarioGithub);

export default component$(() => {
    const name = useSignal<string>('');
    const flag = useSignal<boolean>(false);

    const data = useResource$(({ track }) => {
        track(() => flag.value);
        return fetchUserData(name.value);
    });

    return (
        <div class="flex flex-col w-full">
            <div class="text-center mt-8 py-4">
                <h2 class="text-2xl font-semibold">Buscar Desenvolvedor</h2>
            </div>

            <input type="search"
                placeholder="nome de usuario"
                bind:value={name}
                class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" 
                onKeyUp$={(ev) => {
                    if (ev.key === 'Enter') {
                        flag.value = !flag.value;
                    }
                }}
            />

            <Resource value={data} 
                onPending={() => <div class="text-center text-2xl font-semibold py-4">Buscar dados...</div>}
                onResolved={(user) => <UsuarioCard user={user} />}
            />
        </div>
    );
});