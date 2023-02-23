
import React,{useState} from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from "./style";

export function Home() {

  const [partipants,setPartipants] = useState<string[]>([])

  const [participantName,setParticipantName] = useState('')

  

  function handleParticipantAdd() {

   

    if(partipants.includes(participantName)){
      return  Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    if(participantName===''){
      return  Alert.alert("Aviso", "Nome de Participante");
    }

   
 
    setPartipants(prevState=>[...prevState,participantName])
    setParticipantName('')

  }

  function handleParticipantRemove(name: string) {

    //return partipants.filter(partipant=>partipant!==name)


    

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setPartipants(prevState=>prevState.filter(partipants=>partipants !==name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 16 de Fevereiro de 2023.
      </Text>

      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList

        data={partipants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(`${item}`)}

          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
           Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}