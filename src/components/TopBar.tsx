import { component$, useComputed$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const { url } = useLocation();
    const isFavoritos = useComputed$(() => url.pathname.startsWith('/favoritos'));

    const baseClasses = "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6";

    return (
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a href="/" class={[baseClasses, !isFavoritos.value ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent']}>
                    Home
                </a>

                <a href="/favoritos" class={[baseClasses, isFavoritos.value ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent']}>
                    Favoritos
                </a>
            </div>
        </nav>
    )
});