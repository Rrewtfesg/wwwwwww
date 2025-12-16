import { error } from '@sveltejs/kit';
import { breeds } from '$lib/data';

export const load = ({ params }) => {
    const breed = breeds.find((b) => b.id === params.slug);

    if (!breed) {
        throw error(404, 'Breed not found');
    }

    return {
        breed
    };
};
