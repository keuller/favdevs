import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const head: DocumentHead = {
    title: 'Favoritos'
}

export default component$(() => {
    return (
        <> 
            <h1 class="text-xl font-bold py-2">Repositórios</h1>
        </>
    )
});