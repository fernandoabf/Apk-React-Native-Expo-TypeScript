import React from 'react';
import { 
    View, 
    Text, 
    Image,
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { BackGround } from '../../components/BackGround';

export function SignIn(){
    
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleSignIn(){
    navigation.navigate('Home')
   }

    return (
    <BackGround>
        <View style={styles.container}> 
            
            <Image 
                source={IllustrationImg} 
                style={styles.image}
                resizeMode="stretch" 
            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com Discord"
                    onPress={handleSignIn}
                />

            </View>
        </View>
    </BackGround>
  );
}