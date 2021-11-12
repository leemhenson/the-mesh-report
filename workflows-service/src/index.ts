import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Workflow {
        id: ID!
        name: String!
        steps: Int!
    }

    type Query {
        workflows: [Workflow!]!
        workflow(id: ID!): Workflow
    }
`;

const workflows = [
    {
        id: 'wf-1',
        name: 'Workflow 1',
        steps: 1,
    },
    {
        id: 'wf-2',
        name: 'Workflow 2',
        steps: 2,
    },
    {
        id: 'wf-3',
        name: 'Workflow 3',
        steps: 3,
    },
    {
        id: 'wf-4',
        name: 'Workflow 4',
        steps: 4,
    },
];

const resolvers = {
    Query: {
        workflows: () => workflows,
        workflow: (_: unknown, args: { id: string }) => workflows.find(w => w.id === args.id),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Workflows service ready at ${url}`);
});
