import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

const SocialButton = ({ title, icon, backgroundColor, color, handleLogin }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{
                backgroundColor: backgroundColor ? backgroundColor : '#000',
                padding: 15,
                margin: 10,
                width: width / 1.5,
                flexDirection: 'row',
                alignItems: 'center',
            }}
            onPress={handleLogin}
        >
            {/* <Image
                source={icon}
                style={{
                    minHeight: 30,
                    minWidth: 30,
                }}
            /> */}
            <Icon name={icon} size={20} color={color} />
            <Text
                style={{
                    color: color ? color : '#fff',
                    fontSize: 18,
                    textAlign: 'center',
                    width: '90%',
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default SocialButton;
