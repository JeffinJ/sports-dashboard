import { Stack } from 'expo-router';
import React from 'react';

export default function DashboardLayout() {
    return (
        <Stack screenOptions={{
            headerStyle:{},
            // headerTintColor:""
        }}>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    headerShown: true
                }}
            />
        </Stack>
    );
}
