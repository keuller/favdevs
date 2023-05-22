import { component$, Slot } from '@builder.io/qwik';
import FooterApp from '~/components/FooterApp';
import TopBar from '~/components/TopBar';

export default component$(() => {
    return (
        <main class="flex flex-col h-screen">
            <TopBar />

            <div class="flex flex-1 bg-slate-100 px-4">
                <Slot />
            </div>

            <FooterApp />
        </main>
    );
});
