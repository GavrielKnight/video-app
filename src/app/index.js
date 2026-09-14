import { View, Text, Image, Button, ScrollView, Pressable } from "react-native";

import Layout from "./layout.js";

import { styles } from "./styles.js"

import { useState } from "react";

import VideoCard from "./VideoCard.js";
import videos from "../data/videos.json";

export default function Inicio() {

    const [categoria, setCategoria] = useState("Animación");
    const videosFiltrados = videos.filter(
        (video) => video.categoria === categoria
    );

    return (
        <Layout>
            <ScrollView>
                <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
                    <Pressable
                        style={styles.categoryButton}
                        onPress={() => setCategoria("Animación")}
                    >
                        <Text style={styles.categoryText}>Animación</Text>
                    </Pressable>
                    <Pressable
                        style={styles.categoryButton}
                        onPress={() => setCategoria("Música")}
                    >
                        <Text style={styles.categoryText}>Música</Text>
                    </Pressable>
                    <Pressable
                        style={styles.categoryButton}
                        onPress={() => setCategoria("Gameplays")}
                    >
                        <Text style={styles.categoryText}>Gameplays</Text>
                    </Pressable>
                    <Pressable
                        style={styles.categoryButton}
                        onPress={() => setCategoria("Programación")}
                    >
                        <Text style={styles.categoryText}>Programación</Text>
                    </Pressable>
                    <Pressable
                        style={styles.categoryButton}
                        onPress={() => setCategoria("General")}
                    >
                        <Text style={styles.categoryText}>General</Text>
                    </Pressable>
                </ScrollView>

                {videosFiltrados.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                        />
                    ))}
            </ScrollView>
        </Layout>
    );
}