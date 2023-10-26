import React from 'react'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import {styles} from './styles'
import { BackGround } from '../../components/BackGround'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider/indes'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentDetails(){

    const members = [
        {
            id: '1',
            username: 'Fernando',
            avatar_url: 'https://i.imgur.com/bWhx7OT.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Fernando',
            avatar_url: 'https://i.imgur.com/bWhx7OT.png',
            status: 'offline'
        }
    ]


    return(
        <BackGround>
            <Header 
            title='Detalhes'
            action={
                <GestureHandlerRootView>
                    <BorderlessButton>
                        <Fontisto
                        name = "share"
                        color={theme.colors.primary}
                        size={24}
                        />
                    </BorderlessButton>
                </GestureHandlerRootView>
            }            
            />   
        
            <ImageBackground 
            source={BannerImg}
            style = {styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        Hoje ganharemos ao menos uma
                    </Text>
                </View>    
            </ImageBackground>
            
            <ListHeader
            title='Jogadores'
            subtitle='Total 3'
            />
            <FlatList 
            data={members}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <Member data={item}/>
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title='Entrar na partida'/>
            </View>
        </BackGround>
    )

}