1. `ts-node ./src/index.ts` in workspaces + workflows services to boot apollo server apis.
2. `mesh dev` in `gateway` to boot the mesh
3. Go to `http://localhost:4000/graphql` to get the apollo playground for the mesh server.
4. check out `additionalResolvers` in the `.meshrc.yaml`

Use `mesh build` after making config changes, then reboot the `mesh dev`.
