import { Slot, component$ } from '@builder.io/qwik';


export default component$(() => {
    return (
        <div class="flex flex-col gap-2 h-full">
            <h1 class="text-2xl font-bold py-2">Favoritos</h1>

            <div class="flex gap-2 h-full">
                <div class="flex flex-col gap-2 w-56">

                </div>

                <div class="flex-1">
                    <Slot />
                </div>
            </div>
        </div>
    )
});