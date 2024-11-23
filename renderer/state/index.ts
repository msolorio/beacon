import { observable } from "@legendapp/state";

const state$ = observable({
  fileTree: 'not yet set',
});

export { state$ };