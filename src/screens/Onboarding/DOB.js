import React, { useEffect, createRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import {
    MaskedInput,
    BackButton,
    Button,
    Container,
    Input,
    Wrapper,
} from '../../components/StyledComponent';
import Typography from '../../components/generic/Typography';
import { auth } from '../../redux/actions';

// eslint-disable-next-line prettier/prettier
const DOB = ({
    onboardingForm,
    updateOnboardingForm,
}) => {
    const dobRef = createRef(null);

    const [dob, setDob] = useState();
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState();

    const handleDOBSubmit = () => {
        const isValid = dobRef.current.isValid();
        console.log('isValid', isValid);
        if (isValid) {
            updateOnboardingForm({
                dob: dob,
            });
            setError(null);
        } else {
            setError('Enter a valid date of birth(DD/MM/YYYY)');
        }
    };

    return (
        <Container>
            <BackButton />
            <Wrapper>
                <Typography variant="h3">When's your Birthday?</Typography>
                <MaskedInput
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY',
                    }}
                    placeholder="DD/MM/YYYY"
                    value={dob}
                    onChangeText={(text) => {
                        setDob(text);
                    }}
                    style={styles.input}
                    error={error}
                    ref={dobRef}
                />
                <Button disabled={disabled} onPress={handleDOBSubmit}>
                    Continue
                </Button>
            </Wrapper>
        </Container>
    );
};

const styles = StyleSheet.create({
    dobField: {
        flexDirection: 'row',
        // width: 100,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
        fontSize: 15,
        borderRadius: 5,
    },
});

const mapStateToProps = (state) => ({
    onboardingForm: state.auth.onboardingForm,
});

const mapDispatchToProps = (dispatch) => ({
    updateOnboardingForm: (data) => dispatch(auth.updateOnboardingForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DOB);
