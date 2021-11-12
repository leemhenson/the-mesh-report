import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Workspace {
        id: ID!
        name: String!
        description: String
        workflowIds: [ID!]!
    }

    type Query {
        workspaces: [Workspace!]!
        workspace(id: ID!): Workspace
    }
`;

const workspaces = [
    {
        id: 'ws-1',
        name: 'Workspace 1',
        description: 'The first workspace',
        workflowIds: ['wf-1'],
    },
    {
        id: 'ws-2',
        name: 'Workspace 2',
        description: null,
        workflowIds: ['wf-2', 'wf-3'],
    },
    {
        id: 'ws-3',
        name: 'Workspace 3',
        description: 'The third workspace',
        workflowIds: ['wf-4'],
    },
];

const resolvers = {
    Query: {
        workspaces: () => workspaces,
        workspace: (_: unknown, args: { id: string }) => workspaces.find(w => w.id === args.id),
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        {
            requestDidStart: context => {
                console.log('Request started! Query:\n' + context.request.query);
                return Promise.resolve();
            },
        },
    ],
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Workspaces service ready at ${url}`);
});
