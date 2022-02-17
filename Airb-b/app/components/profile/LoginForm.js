import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { Input, Button, Icon } from "react-native-elements"
import { isEmpty } from "lodash"
import { getAuth, singInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm(props) {
    const {navigation}=props
    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [error, setError] = useState({ email: "", password: "" })
    const change = (event, type) => {
        setFormData({ ...formData, [type]: event.nativeEvent.text })
    }
    
    const login = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password)) {
            setError({
                email: "Campo obligatorio",
                password: "Campo obligatorio"

            })
        } else {
            setError({
                email: "",
                password: ""
            })
            //inicio de sesion 
            const auth = getAuth();
            singInWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    navigation.navigate("profileStack")
                })
                .catch((error) => {
                    console.log("Usuaria o contraseña incorrectas", error);
                    // ..
                });
        }
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="20203tn140@utez.edu.mx"
                keyboardtype='email-address'
                rightIcon={
                    <Icon type="material-community"
                        name="email-outline"
                        size={20}
                        color="#FF0560" />
                }
                label="Correo electrónico"
                containerStyle={styles.containerInput}
                labelStyle={styles.labelInput}
                onChange={(event) => change(event, "email")}
                errorMessage={error.email}
            />
            <Input
                placeholder="********"
                rightIcon={
                    <Icon type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color="#FF0560"
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                label="Contraseña:*"
                containerStyle={styles.containerInput}
                labelStyle={styles.labelInput}
                secureTextEntry={showPassword}
                onChange={(event) => change(event, "password")}
                errorMessage={error.password}
            />
            <Button
                title=" Iniciar sesion"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                icon={
                    <Icon
                        name="sign-in"
                        type="font-awesome"
                        size={20}
                        color="#FFF"
                    />
                }
                iconContainerStyle={{ marginRight: 20 }}
                onPress={login}
            />
            <Text style={styles.textCreateAccount}>
                <Icon
                    type="material-community"
                    name="account-plus"
                    size={16}
                    color="#1E84B6"

                />
                Crear cuenta
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },
    containerInput: {
        width: "100%",
        marginBottom: 20,
    },
    labelInput: {
        fontSize: 20,
        color: "#FF0560"
    },
    btn: {
        color: "#FFF",
        backgroundColor: "#FF0560"

    },
    textCreateAccount: {
        color: "#1E84B6",
        marginTop: 16,

    }

})