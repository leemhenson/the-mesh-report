import { Resolvers } from '../.mesh';

export const resolvers: Resolvers = {
    // Your custom resolvers here
    Query: {
        foo: async () => {
            return 'foo!'; // type-safe, try changing this to a number
        },
        ws: async (root, args, context, info) =>
            context.WorkspacesService.Query.workspace({
                root,
                args: { id: args.id },
                context,
                info,
            }), // typesafe service client
    },
};
