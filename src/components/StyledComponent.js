import React from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

import { MAIN_COLOR } from '../services/constants';
import { TextInputMask } from 'react-native-masked-text';
// import { TouchableHighlight } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background: #f6f6f6;
`;

export const Wrapper = styled.View`
    margin: 10px;
`;

export const Typography = ({
    children,
    color,
    variant,
    onPress,
    margin,
    style,
}) => {
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
            style={[
                {
                    color: color ? color : '#000',
                    fontSize: getFontSize(variant),
                    marginBottom: margin ? margin : 15,
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

export const Input = (props) => {
    return (
        <>
            <TextInput
                style={[
                    styles.inputStyle,
                    { borderColor: props.error ? 'red' : 'transparent' },
                ]}
                {...props}
            />
            <Text
                style={{
                    color: 'red',
                    marginBottom: 5,
                }}
            >
                {props.error}
            </Text>
            {props.helpText ? (
                <Text
                    style={{
                        color: '#737373',
                        marginBottom: 20,
                    }}
                >
                    {props.helpText}
                </Text>
            ) : null}
        </>
    );
};

const MaskedInput = React.forwardRef((props, ref) => (
    <>
        <TextInputMask
            style={[
                styles.inputStyle,
                { borderColor: props.error ? 'red' : 'transparent' },
            ]}
            ref={ref}
            {...props}
        />
        <Text
            style={{
                color: 'red',
                marginBottom: 5,
            }}
        >
            {props.error}
        </Text>
        {props.helpText ? (
            <Text
                style={{
                    color: '#737373',
                    marginBottom: 20,
                }}
            >
                {props.helpText}
            </Text>
        ) : null}
    </>
));

export default MaskedInput;

export const PhoneInputField = (props) => {
    return (
        <>
            <PhoneInput
                ref={props.reference}
                textContainerStyle={styles.textContainerStyle}
                containerStyle={{
                    height: 50,
                    width: '100%',
                    borderColor: props.error ? 'red' : 'transparent',
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                textInputStyle={styles.textInputStyle}
                {...props}
            />
            <Text
                style={{
                    color: 'red',
                    marginBottom: 5,
                }}
            >
                {props.error}
            </Text>
        </>
    );
};

export const Button = ({ children, style, disabled, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={disabled ? 1 : 0.7}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={{
                    backgroundColor: disabled ? '#757575' : MAIN_COLOR,
                    padding: 15,
                    textAlign: 'center',
                    color: '#fff',
                    textTransform: 'uppercase',
                    borderRadius: 5,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export const BackButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.iconContainer}>
            <Icon
                size={38}
                color={MAIN_COLOR}
                name="chevron-left"
                onPress={() => navigation.goBack()}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textContainerStyle: {
        backgroundColor: '#f9f9f9',
    },
    containerStyle: {
        height: 50,
        width: '100%',
        // marginBottom: 20,
    },
    textInputStyle: {
        height: 50,
        backgroundColor: '#fff',
    },

    inputStyle: {
        borderWidth: 1,
        backgroundColor: '#f9f9f9',
        width: '100%',
        marginTop: 10,
        margin: 'auto',
        padding: 10,
        borderRadius: 5,
    },

    iconContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        borderRadius: 10,
        padding: 3,
    },
});
