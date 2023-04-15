# tutorial-redux-vite
<img width="1042" alt="Redux Architecture" src="https://user-images.githubusercontent.com/36891099/232228577-fb7a5930-a1db-4d8b-b6ad-fd4da5bfe89b.png">


<img width="1057" alt="Actions and Reducers" src="https://user-images.githubusercontent.com/36891099/232228587-2477c290-ccb9-45fb-b931-3aeb3673d719.png">


<img width="757" alt="use of Index" src="https://user-images.githubusercontent.com/36891099/232228594-94f5d40e-e672-412e-b147-07df3a8302d4.png">

# Big Issues with Redux/React-Redux + Typescript
- Imports between files can turn into a mess very quickly
- Communicating types over to your components can be challenging
- Type def files for Redux, React-Redux, and others are possibly over-engineered

In the upcoming lecture, we will be adding our searchRepositories action. You will likely see a TS error in the catch block that says Object is of type 'unknown'

There are two ways that you can resolve this for now:

Option #1

} catch (err: any) {
Option #2

...

} catch (err) {
  if (err instanceof Error) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message,
    });
  }
}
