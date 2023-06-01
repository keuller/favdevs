import { Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Link, routeLoader$, server$ } from '@builder.io/qwik-city';
import { listarDesenvolvedores, removerDesenvolvedor } from '~/lib/pbClient';
import type { Developer } from '~/types';

export const useListaDesenvolvedores = routeLoader$(async () => {
    return await listarDesenvolvedores() as Array<Developer>;
});

export const removerFavorito = server$(removerDesenvolvedor);

export default component$(() => {
    const data = useListaDesenvolvedores();
    const lista = useSignal<Developer[]>([]);

    useTask$(() => {
        lista.value = data.value;
    });

    return (
        <div class="flex flex-col gap-2 py-2 w-full h-full">
            <h1 class="text-2xl font-bold py-2">Favoritos</h1>

            <div class="flex gap-2 h-full">
                <div class="flex flex-col gap-2 w-56">
                    {lista.value.map((dev) => (
                        <div class="border bg-white p-2 rounded-lg w-full" key={dev.id}>
                            <div class="flex flex-col gap-4">
                                <span class="text-xl font-semibold">{dev.name}</span>

                                <div class="flex justify-between">
                                    <Link prefetch href={`/favoritos/${dev.slug}`}>
                                        <span class="text-base text-slate-500">{dev.slug}</span>
                                    </Link>

                                    <button class="text-sm uppercase text-red-500"
                                        onClick$={async () => {
                                            await removerFavorito(dev.id);
                                            lista.value = await listarDesenvolvedores() ?? [];
                                        }}>
                                        Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="flex-1 bg-white rounded-lg py-2 px-4">
                    <Slot />
                </div>
            </div>
        </div>
    )
});