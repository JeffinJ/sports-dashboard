import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "./../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (process.env.EXPO_OS === 'web') {
    const client = new ApolloClient({
      uri: process.env.BACKEND_URL,
      cache: new InMemoryCache(),
    });
    return (
      <ApolloProvider client={client}>
        <Slot />
      </ApolloProvider>
    );
  }

  const client = new ApolloClient({
    uri: process.env.BACKEND_URL,
    cache: new InMemoryCache(),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'Gemini Dashboard',
              headerShown: true,
              headerStyle: {
                backgroundColor: colorScheme === 'light' ? '#fff' : '#0C1522',
              },
              headerTintColor: colorScheme === 'light' ? '#000' : '#fff',
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ApolloProvider>

  );
}
