import { pb } from "~/lib/pbClient";

export type NovaLead = {
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    message?: string;
}

export async function criarLead(lead: NovaLead) {
    const record = await pb.collection('leads').create(lead);
    return {
        leadId: record.id,
        message: 'Lead criada com sucesso'
    }
}
