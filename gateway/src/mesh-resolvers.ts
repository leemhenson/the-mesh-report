import { Resolvers } from '../.mesh';

export const resolvers: Resolvers = {
    // Your custom resolvers here
    Workspace: {
        workflows: {
            selectionSet: '{ workflowIds }',
            resolve: async (root, _, context, info) => {
                console.log(root);
                return Promise.all(
                    root.workflowIds.map(workflowId =>
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
