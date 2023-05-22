import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="container flex flex-col items-center justify-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <p class="text-sm text-gray-600 dark:text-gray-300">KmDev &copy; Copyright 2023.</p>
            </div>
        </footer>
    )
});