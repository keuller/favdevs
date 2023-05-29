import PocketBase from 'pocketbase';
import { Developer, FavoritarUser } from '~/types';

const pb = new PocketBase('http://127.0.0.1:9000');

export function favoritarDesenvolvedor(data: FavoritarUser) {
    return pb.collection('devs').create({
        name: data.name,
        avatar: data.avatar,
        slug: data.login
    }).then(record => ({
        oid: record.id,
        message: 'Desenvolvedor favoritado.'
    })).catch(err => {
        console.error(err);
        throw err;
    });
}

export function listarDesenvolvedores(): Promise<Developer[] | void> {
    return pb.collection('devs')
        .getList(1, 50)
        .then(records => {
            return records.items.map((record) => {
                return {
                    id: record.id,
                    name: record.name,
                    avatar: record.avatar,
                    slug: record.slug
                } satisfies Developer;
            });
        });
}

export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}
