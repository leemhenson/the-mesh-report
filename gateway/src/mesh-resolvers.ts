import { Resolvers } from '../.mesh';

export const resolvers: Resolvers = {
    // Your custom resolvers here
    Query: {
        foo: async () => {
            return 'foo!'; // type-safe, try changing this to a number
        },
        ws: async (_, { id }, { WorkspacesService }) => {
            console.log('before', { id });
            const res = await WorkspacesService.Query.workspace({ args: { id } });

            console.log('after', { res });
            return res || null;
        }, // typesafe service client
    },
};
