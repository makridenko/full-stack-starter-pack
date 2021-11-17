import {
	Environment,
	Network,
	RecordSource,
	Store,
} from 'relay-runtime';

import { BACKEND_URL } from 'global-settings';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch(`${BACKEND_URL}/api/`, {
    method: 'POST',
    headers: {
      'Accept': 'Application/json',
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
	network,
	store,
});

export default environment;
