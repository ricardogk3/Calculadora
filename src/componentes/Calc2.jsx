import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from "../../styles/style";

export default function Calculadora(){
    const[calcula, setCalcula] = useState(
        {
            nome:'',
            resposta:'',
            a:0, 
            b:0,
            subtotal: 0
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
    console.log(calcula)
    if(calcula.nome == 'R'){
        setCalcula({
            ...calcula, resposta: ("oi1") 
        })}  
    const visible = () => {
        if(calcula.nome == 'R'){
            setCalcula({
                ...calcula, resposta: ("oi1") 
            })
        }else{
            setCalcula({
                ...calcula, resposta: ("oi2xx") 
            })
        }
    }
    
    

    return(
        <View style={styles.cont1}>
            <TextInput style={styles.conf7}
                placeholder="Seu nome" 
                onChangeText={(valor)=> handleInputChange("nome", valor)}
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