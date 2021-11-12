import { ApolloServer } from 'apollo-server';

export default async ({ getBuiltMesh, documents, logger }: any) => {
    const { schema } = await getBuiltMesh();
    const playground: any = {
        tabs: documents.map(({ location, rawSDL }: any) => ({
            name: location,
            endpoint: '/graphql',
            query: rawSDL,
        })),
    };

    const apolloServer = new ApolloServer({
        schema,
        context: ({ req }: any) => req,
        playground,
    } as any);

    const { url } = await apolloServer.listen(4000);
    logger.info(`🚀 Mesh ready at ${url}`);
};
