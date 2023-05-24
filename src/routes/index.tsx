import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import BuscaContainer from './(buscar)/BuscaContainer';

export default component$(() => {
    return <BuscaContainer />
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
