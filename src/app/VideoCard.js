import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { imagenes } from "./imagenes.js";

export default function VideoCard({ video }) {
    return (
        <View style={styles.videoCard}>
            <Pressable>
                <Image
                    source={imagenes[video.thumbnail]}
                    style={styles.thumbnail}
                />
            </Pressable>
            <Text style={styles.videoTitle}>
                {video.titulo}
            </Text>
            <Text>
                {video.creador}
            </Text>
        </View>
    );
}