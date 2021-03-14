import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Typography = ({ children, color, variant, onPress }) => {
    const getFontSize = (type) => {
        switch (type) {
            case 'h1':
                return 64;
            case 'h2':
                return 32;
            case 'h3':
                return 24;
            case 'h4':
                return 18;
            case 'h5':
                return 14;
            case 'h6':
                return 10;
            default:
                return 12;
        }
    };

    return (
        <Text
            onPress={onPress}
            style={{
                color: color ? color : '#000',
                fontSize: getFontSize(variant),
                marginBottom: 15,
            }}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({});

export default Typography;
