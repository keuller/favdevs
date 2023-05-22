import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    const name = useSignal<string>('');

    return (
        <div class="flex flex-col w-full">
            <div class="text-center mt-8 py-4">
                <h2 class="text-2xl font-semibold">Buscar Desenvolvedor</h2>
            </div>

            <form action="#" class="px-8">
                <input type="search"
                    placeholder="Username"
                    bind:value={name}
                    class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </form>

            <pre>{name.value}</pre>

            <div class="text-center py-3">
                Nao encontrado!
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'FavDevs',
    meta: [
        {
            name: 'description',
            content: 'Qwik Favorite Developers app',
        },
    ],
};
