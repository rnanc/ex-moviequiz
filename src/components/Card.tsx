import React, { useState } from "react"
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

interface Props {
  filme: {
    Poster: string,
    Title: string,
  },
  filme2: {
    Title: string,
  },
  filme3: {
    Title: string,
  },
  getFilmesUpdate(): void,
}

const Card = ({filme, filme2, filme3, getFilmesUpdate}: Props) =>  {
  let titles: string[] = []
  const [score, setScore] = useState<number>(0)
  const [turns, setTurns] = useState<number>(0)

  const buttonAction = (title: string) => {
    if (title === filme.Title) {
      setScore(score+1)
    }
    getFilmesUpdate()
    setTurns(turns+1)
  }

  if (filme!=undefined && turns !== 5) {
    titles.push(filme.Title)
    titles.push(filme2.Title)
    titles.push(filme3.Title)
    titles.sort(() => Math.random() - .5)

    return (
      <>
        <Image source={{uri: filme.Poster}} style={styles.poster} />
        <Text style={{color: '#ff0606'}}>Score: {score}</Text>
        <TouchableOpacity onPress={() => buttonAction(titles[0])} style={styles.title} >
          <Text style={{color: '#FFFFFF'}}>
            {titles[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonAction(titles[1])} style={styles.title} >
          <Text style={{color: '#FFFFFF'}}>
            {titles[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonAction(titles[2])} style={styles.title} >
          <Text style={{color: '#FFFFFF'}}>
            {titles[2]}
          </Text>
        </TouchableOpacity>
      </>
    )  
  }else{
    return (<>
    <Text style={{color: '#ff0606'}}>The END</Text>
    <Text style={{color: '#ff0606'}}>Score: {score}</Text>
    </>)
  }
}

const styles = StyleSheet.create({
  poster: {
    width: 300, 
    height: 400,
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#0000FF',
    padding: 10,
  },
})

export default Card;