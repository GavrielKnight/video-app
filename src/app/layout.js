import { View, Text, Button, Pressable } from "react-native";
import { styles } from "./styles.js"

export default function Layout({ children }) {
    return (
        <View style={{ flex: 1 }}>

            {/* Barra superior */}
            <View style={styles.bars}>
                <Text style={{
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold"
                }}>
                    Video App
                </Text>
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
            <View style={styles.bars}>
                <Pressable style={styles.menuButton}>
                    <Text style={styles.menuText}>Inicio</Text>
                </Pressable>
                <Pressable style={styles.menuButton}>
                    <Text style={styles.menuText}>Alumnos</Text>
                </Pressable>
                <Pressable style={styles.menuButton}>
                    <Text style={styles.menuText}>Materias</Text>
                </Pressable>
            </View>
        </View>
    );
}