import { View, Text, Button, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles.js"

export default function Layout({ children }) {
    return (
        <View style={{ flex: 1 }}>

            {/* Barra superior */}
            <View style={styles.upperBar}>
                <Image source={require("../../assets/images/expo-logo.png")}
                style={styles.logo}/>
                <Text style={styles.appTitle}>Video App</Text>
                <TextInput style={styles.searchBox} placeholder="Search video..."/>
                <Image source={require("../../assets/images/search-icon.svg")}
                style={styles.icon}/>
            </View>

            {/* Contenido */}
            <View style={{
                flex: 1,
                paddingHorizontal: 30,
                paddingTop: 30
            }}>
                {children}
            </View>

            {/* Barra inferior */}
            <View style={styles.bottomBar}>
                <Pressable style={styles.menuButton}>
                    <Text style={styles.menuText}>Inicio</Text>
                </Pressable>
                <Pressable style={styles.menuButton}>
                    <Text style={styles.menuText}>Listas de Reproducción</Text>
                </Pressable>
                <Pressable style={styles.menuButton}>
                    <Text style={styles.menuText}>Perfil</Text>
                </Pressable>
            </View>
        </View>
    );
}