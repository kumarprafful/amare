import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    BackButton,
    Button,
    Input,
    Container,
    Typography,
    Wrapper,
} from '../../components/generic/StyledComponent';

import { auth } from '../../redux/actions';

const Email = ({ updateOnboardingForm }) => {
    const [disabled, setDisabled] = useState(true);
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const navigation = useNavigation();

    const handleEmailChange = (value) => {
        if (value) {
            setEmail(value);
            setError(null);
            setDisabled(false);
        } else {
            setEmail(null);
            setDisabled(true);
        }
    };

    const handleEmailSubmit = () => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        setError(null);

        if (email) {
            if (reg.test(email) === false) {
                setError('Enter a valid email address');
            } else {
                updateOnboardingForm({
                    email: email,
                });
                setError(null);
                navigation.navigate('Name');
            }
        } else {
            setError('This field is required');
        }
    };

    return (
        <Container>
            <BackButton />
            <Wrapper>
                <Typography variant="h3">What's your email address?</Typography>
                <Input
                    placeholder="Email Address"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    onChangeText={handleEmailChange}
                    value={email}
                    error={error}
                />

                <Button disabled={disabled} onPress={handleEmailSubmit}>
                    Continue
                </Button>
            </Wrapper>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    onboardingForm: state.auth.onboardingForm,
});

const mapDispatchToProps = (dispatch) => ({
    updateOnboardingForm: (data) => dispatch(auth.updateOnboardingForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
