import { Resolvers } from '../.mesh';

export const resolvers: Resolvers = {
    // Your custom resolvers here
    Query: {
        foo: async () => {
            return 'foo!'; // type-safe, try changing this to a number
        },
    },
};
