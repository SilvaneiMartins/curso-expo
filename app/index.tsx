import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Index() {
    const [image, setImage] = useState<string | null>(null);

    const pickerImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        // TODO: Salvar no banco de dados

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Curso Expo</Text>

            <TouchableOpacity
                style={styles.buttonGaleria}
                onPress={pickerImage}
            >
                <Text style={styles.buttonText}>Galeria de Imagem</Text>
            </TouchableOpacity>

            {image  &&
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonGaleria: {
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: "tomato",
    },
    buttonText: {
        color: "white",
    },
    image: {
        width: 200,
        height: 200,
    }
});
