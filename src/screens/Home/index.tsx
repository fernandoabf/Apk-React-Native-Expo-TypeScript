import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'

import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider/indes';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { BackGround } from '../../components/BackGround';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function Home(){
    const [category, setCategory] = useState('')
    
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    
    const appoitments = [
        {
            id: '1',
            guild:{
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '23/10 ás 20:40h',
            description: 'Hoje ganharemos ao menos uma'
        },
        {
            id: '2',
            guild:{
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '3',
            date: '26/10 ás 20:40h',
            description: 'Hoje ganharemos ao menos uma'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    
    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails')
    }
    
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }
    
    return(
        <BackGround>
            <View>
                <View style = {styles.header}> 
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate}
                    />
                </View>

                <View>
                    <CategorySelect
                    categorySelected = {category}
                    setCategory= {handleCategorySelect}
                    />
                </View>

                <View style ={styles.content}>
                    <ListHeader 
                    title='Partidas Agendadas'
                    subtitle='Total 6'
                    />

                    <FlatList 
                    data={appoitments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment 
                        data = {item} 
                        onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={ListDivider}
                    style = {styles.matches}
                    showsVerticalScrollIndicator = {false}
                    
                    />
                    
                </View>
            </View>
        </BackGround>
    );

}