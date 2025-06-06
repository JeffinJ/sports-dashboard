import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

type LoadingProps = {
    message?: string;
    size?: 'small' | 'large';
    color?: string;
    className?: string;
}

export default function Loading({
    message = 'Loading...',
    size = 'large',
    color = '#007AFF',
    className = "flex-1 items-center justify-center"
}: LoadingProps) {
    return (
        <View className={className}>
            <ActivityIndicator size={size} color={color} />
            <Text className="mt-3 text-gray-600 text-base">{message}</Text>
        </View>
    );
}