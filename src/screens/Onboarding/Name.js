import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    BackButton,
    Input,
    Typography,
    Wrapper,
    Button,
} from '../../components/generic/StyledComponent';
import { connect } from 'react-redux';
import { auth } from '../../redux/actions';

const Name = ({ updateOnboardingForm }) => {
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState();
    const [error, setError] = useState();
    const navigation = useNavigation();

    return (
        <Container>
            <BackButton />
            <Wrapper>
                <Typography variant="h3">What's your name?</Typography>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    onChangeText={(text) => {
                        if (error && text) setError(null);
                        setName(text);
                    }}
                    value={name}
                    error={error}
                    helpText="This is how it will look on your profile. Be honest, you won't be able to change this later."
                />
                <Button
                    disabled={disabled}
                    onPress={() => {
                        if (name) {
                            updateOnboardingForm({
                                name: name,
                            });
                            navigation.navigate('DOB');
                        } else {
                            setError('This field is required.');
                        }
                    }}
                >
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

export default connect(mapStateToProps, mapDispatchToProps)(Name);
