import React, { useEffect } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { GoogleSignin } from '@react-native-community/google-signin'
import { connect } from 'react-redux'

import SocialButton from '../../components/SocialButton'
import Typography from '../../components/Typography'
import { auth } from '../../redux/actions'

import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google-logo.png'


const { height, width } = Dimensions.get('window')

const Login = ({
    facebookLogin,
    googleLogin
}) => {
    const navigation = useNavigation()
    console.log(navigation)

    const googleSignInConfigure = () => {
        GoogleSignin.configure({
            scopes: ['email'],
            androidClientId: '314309949116-8k0dqshr7qqjo3png0440bl99h31onqm.apps.googleusercontent.com',
            // offlineAccess: true,
        })
    }

    useEffect(() => {
        googleSignInConfigure()
    }, [])

    const handleFacebookLogin = async () => {
        try {

            const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
            if (result.isCancelled) {
                throw 'User cancelled login process'
            }

            const data = await AccessToken.getCurrentAccessToken()

            if (!data) {
                throw 'Something went wrong obtaining access token'
            }

            console.log(data.accessToken)
            const body = {
                'access_token': data.accessToken
            }
            facebookLogin(body)
                .then(() => {
                    console.log('Helo')
                })
                .catch(error => {
                    console.log(error)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn()
            const token = await GoogleSignin.getTokens()
            console.log(userInfo, token)
            googleLogin(token.accessToken)
                .then(() => {

                })
                .catch(error => {
                    console.log(error)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Video
                style={styles.backgroundVideo}
                source={require('../../assets/img/couple_video.mp4')}
                muted={true}
                repeat={true}
                resizeMode={'cover'}
                rate={1.0}
                ignoreSilentSwitch={'obey'}
            />
            <View style={styles.spaceAround}>
                <View style={styles.center}>
                    <Typography
                        style={styles.center}
                        variant="h1"
                        color="#fff"
                    >
                        amare
                    </Typography>
                    <Typography
                        style={styles.center}
                        variant="h4"
                        color="#fff"
                    >
                        Meet the one.
                    </Typography>
                </View>
                <View style={styles.center}>
                    <SocialButton
                        title="Continue with Facebook"
                        backgroundColor="#4867aa"
                        color="#fff"
                        icon='facebook'
                        handleLogin={handleFacebookLogin}
                    />
                    <SocialButton
                        title="Continue with Google"
                        backgroundColor="#fff"
                        color="#000"
                        icon='google'
                        handleLogin={handleGoogleLogin}
                    />
                    <Typography
                        variant="h4"
                        onPress={() => navigation.navigate('Phone')}
                        color="#fff"
                    >
                        Continue with Mobile
                    </Typography>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    spaceAround: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 100,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
    facebookLogin: (data) => dispatch(auth.facebookLogin(data)),
    googleLogin: (data) => dispatch(auth.googleLogin(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)