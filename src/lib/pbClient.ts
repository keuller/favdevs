import PocketBase from 'pocketbase';
import { FavoritarUser } from '~/types';

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

export function listarDesenvolvedores() {
    // const records = await pb.collection('devs').getList(1, 50);

}