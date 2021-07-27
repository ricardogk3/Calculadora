import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from "../../styles/style";

export default function Calculadora(){
    const[calcula, setCalcula] = useState(
        {
            a:0, 
            b:0,
            subtotal: 0,
            nome:"",
            resposta:""
        }
    )

    const handleInputChange = (name, value) => {
        setCalcula({
            ...calcula, [name]:value
        })
    }

    const cmais = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a + calcula.b) 
        })
    }

    const cmenos = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a - calcula.b) 
        })
    }

    const cmulti = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a * calcula.b) 
        })
    }

    const cdiv = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a/calcula.b)
        })
    }

    const cdivis = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a%calcula.b) 
        })
    }

    const cana2 = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a*calcula.a) 
        })
    }

    const cbna2 = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.b*calcula.b) 
        })
    }

    const canab = () => {
        setCalcula({
            ...calcula, subtotal: (calcula.a**calcula.b) 
        })
    }

    //altera a visibilidade do campo


    const handleInputChange2 = (value) => {
        let calculaC = value
        if(calculaC == "Leide"){
            setCalcula({
                ...calcula, nome:calculaC, resposta:"SE ESCONDAM, lá vem exercício bem legal"
            })
        }else if(calculaC == "Filipe"){
            setCalcula({
                ...calcula, nome:calculaC , resposta:"Olha, parece que temos um artista entre nós!"
            })
        } else if(calculaC == "LOL"){
            setCalcula({
                ...calcula, nome:calculaC , resposta:"Isso NÃO é jogo"
            })
        } else if(calculaC == "Valorant"){
            setCalcula({
                ...calcula, nome:calculaC , resposta:"Isso é jogo"
            })
        }else if(calculaC == ""){
            setCalcula({
                ...calcula, nome:calculaC , resposta:""
            })
        }else{
            setCalcula({
                ...calcula, nome:calculaC , resposta:`Olá, ${calcula.nome}`
            })
        }
    }    

    return(
        
        <View style={styles.cont1}>
            <Text style={styles.conf8}>Calcula até a verdade!</Text>
            <TextInput style={styles.conf7}
                placeholder="Seu nome" 
                onChangeText={(valor)=> handleInputChange2((valor))}
            />
            <Text style={styles.conf6}>{calcula.resposta}</Text>
            <View style={styles.conf2}>
                <TextInput 
                    placeholder="A"  
                    onChangeText={(valor)=> handleInputChange("a", Number(valor))}
                    keyboardType="numeric"
                    style={styles.conf3}
                />
                <TextInput 
                    placeholder="B"  
                    onChangeText={(valor)=> handleInputChange("b", Number(valor))}
                    keyboardType="numeric"
                    style={styles.conf3}
                />
            </View>
            <View style={styles.conf2}> 
                <TouchableOpacity style={styles.conf1} 
                    onPress={cmais}>
                    <Text style={styles.conf5}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conf1} 
                    onPress={cmenos}>
                    <Text style={styles.conf5}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conf1} 
                    onPress={cmulti}>
                    <Text style={styles.conf5}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conf1} 
                    onPress={cdiv}>
                    <Text style={styles.conf5}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.conf2}>
                <TouchableOpacity style={styles.conf1} 
                    onPress={cdivis}>
                    <Text style={styles.conf5}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conf1} 
                    onPress={cana2}>
                    <Text style={styles.conf5}>a²</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conf1} 
                    onPress={cbna2}>
                    <Text style={styles.conf5}>b²</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conf1} 
                    onPress={canab}>
                    <Text style={styles.conf5}>a^b</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.conf6}>{calcula.subtotal}</Text>
        </View>
    )
}