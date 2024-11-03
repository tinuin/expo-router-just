# Dev tools plugins

React Navigation

To use the plugin, start by installing the package:
```
npx expo install @dev-plugins/react-navigation
```


# Pass the navigation root to the plugin in your app's entry point: app/_layout.js

```
import { useEffect, useRef } from 'react';
import { useNavigationContainerRef, Slot } from 'expo-router';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';

export default Layout() {
  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return <Slot />;
}

```

# Apollo Client

To use the plugin, start by installing the package:

```
npx expo install @dev-plugins/apollo-client
```

Then pass your client instance to the plugin in your app's root component or where you wrap the rest of your app in the ApolloProvider: App.js

```
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useApolloClientDevTools } from '@dev-plugins/apollo-client';

const client = new ApolloClient({
  uri: 'https://demo.test.com/',
  cache: new InMemoryCache(),
});

export default function App() {
  useApolloClientDevTools(client);

  return <ApolloProvider>{/* ... */}</ApolloProvider>;
}

```

# React Query

Inspired by react-query-native-devtools, the React Query dev tools plugin lets you explore data and queries, cache status, and refetch and remove queries from the cache from TanStack Query.

To use the plugin, start by installing the package:

```
npx expo install @dev-plugins/react-query
```


