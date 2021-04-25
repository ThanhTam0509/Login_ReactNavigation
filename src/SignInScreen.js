import * as React from 'react';
import { Button, TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';
import { AuthContext } from './utils';

export function SignInScreen(navigation) {
    // const image = { uri: "https://reactjs.org/logo-og.png" };
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);
    const { container, txtInput, button } = styles

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./Images/logo.png')} style={styles.image}>
                <TextInput
                    placeholder="   Username"
                    placeholderTextColor="#ff6f60"
                    value={username}
                    onChangeText={setUsername}
                    style={txtInput}
                />
                <TextInput
                    placeholder="   Password"
                    placeholderTextColor="#ff6f60"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={txtInput}
                />
                <View style={styles.fixToText}>
                    <Button
                        color="#e53935"
                        title="Sign in"
                        onPress={() => signIn({ username, password })}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01579b',
    },
    txtInput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 25,
        borderColor: '#ab000d',

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 5,
        borderRadius: 10,
    },
});


