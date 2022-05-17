import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import { getMovies } from "./src/services/Api";

interface Filme {
  Poster: string,
  Title: string,
}

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const dataBaseFilms = ["marvel", "matrix", "hellraiser"]

  async function getFilmes(params?: string) {
    const {data} = await getMovies(dataBaseFilms[Math.floor(Math.random()*dataBaseFilms.length)]);
    setFilmes(data.Search)
  }

  function sortearFilme() {
    return filmes[Math.floor(Math.random()*filmes.length)] 
  }

  useEffect(()=>{
    getFilmes()
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>QUIZ GAME</Text>
      <Card filme={sortearFilme()}
            filme2={sortearFilme()}
            filme3={sortearFilme()}
            getFilmesUpdate={getFilmes} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
