import { component$ } from '@builder.io/qwik';
import { Form, routeAction$, z, zod$ } from '@builder.io/qwik-city';
import { delay } from '~/lib/pbClient';
import { type NovaLead, criarLead } from './leads.service';

export const useCriarLead = routeAction$(async (lead) => {
    await delay(1500);
    const done = await criarLead(lead as NovaLead);
    return {
        success: done
    };
}, zod$({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(30),
    email: z.string().email({ message: 'E-mail inválido' }),
    company: z.string().max(50).optional(),
    message: z.string().optional(),
}));

export default component$(() => {
    const labelClass = "block text-sm text-gray-500 dark:text-gray-300";
    const inputClass = "block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300";

    const action = useCriarLead();

    return (
        <div class="flex flex-col items-center w-full p-2">

            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white py-4">Nova Lead</h2>

            <Form id="leadForm" action={action} 
                spaReset class="grid grid-cols-2 gap-3 w-[43rem]">
                
                <div class="flex flex-col">
                    <label for="firstName" class={labelClass}>Primeiro Nome</label>
                    <input id="firstName" type="text" 
                        name="firstName" 
                        class={inputClass}
                        maxLength={20} />
                    <span class="text-sm text-red-500">{action.value?.fieldErrors?.firstName}</span>
                </div>

                <div class="flex flex-col">
                    <label for="lastName" class={labelClass}>Ultimo Nome</label>
                    <input id="lastName" type="text" 
                        name="lastName" 
                        class={inputClass}
                        maxLength={30} />
                    <span class="text-sm text-red-500">{action.value?.fieldErrors?.lastName}</span>
                </div>

                <div class="flex flex-col">
                    <label for="email" class={labelClass}>E-mail</label>
                    <input id="email" type="text" 
                        name="email" 
                        class={inputClass}
                        maxLength={100} />
                    <span class="text-sm text-red-500">{action.value?.fieldErrors?.email}</span>
                </div>

                <div class="flex flex-col">
                    <label for="company" class={labelClass}>Empresa</label>
                    <input id="company" type="text" 
                        name="company" 
                        class={inputClass}
                        maxLength={50} />
                </div>

                <div class="flex flex-col col-span-2">
                    <label for="company" class={labelClass}>Empresa</label>
                    <textarea id="message" name="message" rows={3} class={inputClass}></textarea>
                </div>

                <div class="flex col-span-2">
                    <button disabled={action.isRunning}
                        class="px-6 py-2 text-sm uppercase font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 disabled:bg-slate-400">
                        {action.isRunning ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </Form>
        </div>
    )
});