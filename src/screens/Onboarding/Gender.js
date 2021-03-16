import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Portal } from 'react-native-paper';
import { connect } from 'react-redux';
import {
    BackButton,
    Container,
    Typography,
    Wrapper,
} from '../../components/generic/StyledComponent';
import { auth } from '../../redux/actions';

function Gender({ onboardingForm, updateOnboardingForm }) {
    const GENDER = [
        {
            title: 'Woman',
            value: 'woman',
        },
        {
            title: 'Man',
            value: 'man',
        },
        {
            title: 'Non Binary',
            value: 'non-binary',
        },
    ];

    const isSelected = (item) => {
        // const index = GENDER.
        if (item.value === onboardingForm.gender) return true;
        return false;
        // console.log(onboardingForm);
    };

    return (
        <Container>
            <BackButton />
            <Wrapper>
                <Typography variant="h3">What's your gender?</Typography>
                {GENDER.map((item) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[
                            styles.item,
                            isSelected(item) ? styles.selected : null,
                        ]}
                        onPress={() =>
                            updateOnboardingForm({ gender: item.value })
                        }
                    >
                        <Typography variant="h4" margin={1} style={styles.text}>
                            {item.title}
                        </Typography>
                    </TouchableOpacity>
                ))}
                <Portal>
                    <Typography>
                        This is rendered at a different place
                    </Typography>
                </Portal>
            </Wrapper>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    onboardingForm: state.auth.onboardingForm,
});

const mapDispatchToProps = (dispatch) => ({
    updateOnboardingForm: (data) => dispatch(auth.updateOnboardingForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gender);

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'black',
        marginVertical: 5,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#fff',
    },
    selected: {
        backgroundColor: 'red',
    },
});
