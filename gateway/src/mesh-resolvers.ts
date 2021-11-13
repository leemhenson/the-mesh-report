import { Resolvers } from '../.mesh';

export const resolvers: Resolvers = {
    // Your custom resolvers here
    Workspace: {
        workflows: {
            selectionSet: '{ workflowIds }',
            resolve: async (root, _, context, info) => {
                console.log(root);
                const rootWithSelectionSet: typeof root & {
                    workflowIds: string[];
                } = root as any;

                return Promise.all(
                    rootWithSelectionSet.workflowIds.map(workflowId =>
                        // typesafe service client
                        context.WorkflowsService.Query.workflow({
                            root,
                            args: { id: workflowId },
                            context,
                            info,
                        })
                    )
                );
            },
        },
    },
};
