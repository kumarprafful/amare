import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import {
    BackButton,
    Button,
    Input,
    PhoneInputField,
    Container,
    Typography,
    Wrapper,
} from '../../components/generic/StyledComponent';

const Phone = () => {
    const [disabled, setDisabled] = useState(true);
    const [mobile, setMobile] = useState();
    const [error, setError] = useState();

    const phoneRef = useRef(null);
    const navigation = useNavigation();

    const handleMobileChange = (value) => {
        if (value) {
            setMobile(value);
            setError(null);
            setDisabled(false);
        } else {
            setMobile(null);
            setDisabled(true);
        }
    };

    const handleMobileSubmit = () => {
        setError(null);

        if (mobile) {
            if (phoneRef.current?.isValidNumber(mobile) === false) {
                setError('Mobile number is not valid');
            } else {
                navigation.navigate('Email');
                setError(null);
            }
        } else {
            setError('This field is required');
        }
    };

    return (
        <Container>
            <BackButton />
            <Wrapper>
                <Typography variant="h3">What's your number?</Typography>

                <PhoneInputField
                    reference={phoneRef}
                    // value={mobile}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={handleMobileChange}
                    error={error}
                    autoFocus
                />
                <Button disabled={disabled} onPress={handleMobileSubmit}>
                    Continue
                </Button>
            </Wrapper>
        </Container>
    );
};

export default Phone;
