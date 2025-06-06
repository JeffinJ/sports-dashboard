import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ErrorProps {
    error?: Error | string;
    onRetry?: () => void;
    className?: string;
    title?: string;
    retryText?: string;
}

export default function Error({
    error,
    onRetry,
    className = "flex-1 items-center justify-center px-5",
    title = "Something went wrong",
    retryText = "Try Again"
}: ErrorProps) {
    const errorMessage = typeof error === 'string' ? error : error?.message || 'An unexpected error occurred';

    return (
        <View className={className}>
            <Text className="text-red-500 text-lg font-semibold mb-2 text-center">
                {title}
            </Text>
            <Text className="text-gray-600 text-base text-center mb-5">
                {errorMessage}
            </Text>
            {onRetry && (
                <TouchableOpacity
                    onPress={onRetry}
                    className="bg-blue-500 px-6 py-3 rounded-lg"
                >
                    <Text className="text-white font-medium">{retryText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}