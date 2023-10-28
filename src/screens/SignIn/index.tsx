import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';
import { BackGround } from '../../components/BackGround';
import { useAuth } from '../../hooks/auth';
import { Prompt, useAuthRequest } from 'expo-auth-session';
import {
    REDIRECT_URI,
    SCOPES,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE,
    CLIENT_SECRET
} from '../../configs/discordAuth'
import qs from 'qs';
import { api } from '../../services/api';


WebBrowser.maybeCompleteAuthSession();
export function SignIn() {

    const { user } = useAuth();

    const discovery = {
        authorizationEndpoint: 'https://discord.com/oauth2/authorize',
    };

    const [request, response, promptAsync] = useAuthRequest(
        {
            responseType: RESPONSE_TYPE,
            clientId: CLIENT_ID,
            scopes: SCOPES,
            redirectUri: REDIRECT_URI,
        },
        discovery
    );

    useEffect(() => {
        async function responseDiscord() {
            if (response?.type === 'success') {

                const { code } = response.params;
                console.log(code)

                await requestAuthToken(code)
            }
        }
        responseDiscord()
    }, [response]);

    async function handleSignIn() {
        try {
            await promptAsync()
        } catch (error) {
            Alert.alert('error')
        }
    }

    async function requestAuthToken(code: string) {
        const params = {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials',
            code: code,
            redirect_uri: REDIRECT_URI,
            scope: SCOPES.join(' '),
        };
        const requestBody = qs.stringify(params);

        await api.post('/oauth2/token', requestBody,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        ).then(async response => {
            console.log(response.data)
            if (response.data.access_token) 
            await requestUser(response.data.access_token)
            // await requestGuilds(response.data.access_token)
        });

    }
    async function requestUser(token: string) {
        await api.get('/users/@me', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            console.log("usuario", response.data);
        });
    };
    
    // async function requestGuilds(token: string) {
    //     await api.get('/users/@me/guilds', {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         console.log("usuario guilds", response.data);
    //     });
    // };

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