import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import Feed from "./screens/Feed";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import Home from "./screens/tabScreens/Home";
import Lotteries from "./screens/tabScreens/Lotteries";
import Profile from "./screens/tabScreens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Example from "./screens/homeStacks/example";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Lottery from "./screens/lotteriesStacks/lottery";
import Comision from "./screens/profileStacks/comision";
import Entregas from "./screens/profileStacks/entregas";
import Level from "./screens/profileStacks/level";
import Details from "./screens/profileStacks/opciones";
import General from "./screens/profileStacks/generalStacks/general";
import Password from "./screens/profileStacks/generalStacks/password";
import Languague from "./screens/profileStacks/generalStacks/languague";
import Contact from "./screens/profileStacks/generalStacks/contact";
import NovaxDetails from "./screens/profileStacks/generalStacks/novax";
import Question from "./screens/profileStacks/generalStacks/questions";
import Conditions from "./screens/profileStacks/generalStacks/conditions";
import Sold from "./screens/homeStacks/sold";
import Ticket from "./screens/homeStacks/soldStacks/ticket";
import Game from "./screens/homeStacks/soldStacks/games";
import Winner from "./screens/homeStacks/soldStacks/lotteryWin";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import T from "./screens/homeStacks/soldStacks/t";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// ACCIONEs
import * as actions from './../../store/actions/actions';
import { Text, View } from "react-native";
import LoadingGame from "./screens/homeStacks/soldStacks/loading/game";
import LoadingSold from "./screens/homeStacks/soldStacks/loading/sold";
import LoadingTiquete from "./screens/homeStacks/soldStacks/loading/tiquete";
import LoadingStackTiquetSold from "./screens/homeStacks/soldStacks/loading/LoadingStackTiquetSold";
import BigFacture from "./screens/homeStacks/soldStacks/bigFacture";
import Presentation from "./presentation/enter";

// Drawer
// const Drawer = createDrawerNavigator();

// function DrawerHome(){
//     return (
//         <Drawer.Navigator>

//         </Drawer.Navigator>
//     )
// }


// TOP TAP NAVIGATOR 
const TabTop = createMaterialTopTabNavigator();

function SoldTopTap(props){
    const usuario = props.usuario;
    const gameSelected = useSelector(store => store.games.winnerGame);
    const loadingSelected = useSelector(store => store.games.loadingWinner);
    const dispatch = useDispatch();
    const route = useRoute();
    useEffect(() => {
        if(gameSelected){
            if(route.params.tiquete.id != gameSelected.lotteries[0].id){
                dispatch(actions.axiosGetWinnerGame(usuario.id,route.params.tiquete.id, true)); 
            }
        }else{
            if(!loadingSelected){
                dispatch(actions.axiosGetWinnerGame(usuario.id,route.params.tiquete.id, true)); 
            }

        }
         
     
    }, [route.params.tiquete.id]) 
    return (

                <TabTop.Navigator 
                initialRouteName="Ticket"
                
                screenOptions={{
                    tabBarActiveTintColor:"#000",
                    tabBarLabelStyle: {fontSize:12},
                    tabBarStyle: { backgroundColor:'white', marginTop:0, borderWidth:0,borderColor:'white', shadowColor:'white'},
                }}>
                    <TabTop.Screen name="Detalles">
                        {
                            !gameSelected || loadingSelected == true ?
                            props =>  <LoadingTiquete /> 
                            :
                            props =>  <Ticket usuario={usuario} gameSelected={gameSelected}/> 
                        }
                    </TabTop.Screen>
                    <TabTop.Screen name="Tiquetes" >
                        {
                            !gameSelected || loadingSelected == true ?
                            props =>  <LoadingStackTiquetSold />
                            :
                            props =>  <StackTiquetSold usuario={usuario} gameSelected={gameSelected} />
                        }
                    </TabTop.Screen>
                </TabTop.Navigator>
        
    )
}
// Stack 
const Stack = createNativeStackNavigator();
   
    // Stacks home
    function StackHome(props){
        const myGames = props.myGames; 
        const usuario = props.usuario;
        const loading = props.loading;

 
        useEffect(() => {

        }, [usuario])

        return (
            <Stack.Navigator>
                <Stack.Screen name="HomeNovax"  options={{
                    headerShown:false
                }}>
                    {props => <Home myGames={myGames} usuario={usuario} loading={loading} />}
                </Stack.Screen> 

                <Stack.Screen name="StackGameNovax" options={{
                    presentation:"modal",
                    headerShown:false
                }}>
                    {props => <StackGameHome usuario={usuario} /> }
                </Stack.Screen>

                <Stack.Screen name="StackSoldNovax" options={{
                    presentation:"modal",
                    headerShown:false
                }}>
                    {props => <StackSoldHome usuario={usuario}/>}
                </Stack.Screen>

            </Stack.Navigator>
        )
    }
        // Stacks GAMES SOLD
        function StackGameHome( props){
            const usuario = props.usuario;
            const dispatch = useDispatch();
            const subscribed = useSelector(store => store.games.subscribed);
            const loadingSubscribe = useSelector(store => store.games.loadingSubscribe);

            useEffect(() => {
                console.log('disparado');
                dispatch(actions.axiosGetSuscribe(usuario.id, true))

            }, [])
            return (
 
                <Stack.Navigator>
                    <Stack.Screen name="GameNovax" options={{presentation:"modal",headerShown:false}} >
  
                        {
                            !subscribed || loadingSubscribe == true ?
                            props => <LoadingSold />
                            :
                            props => <Game subscribed={subscribed} usuario={usuario} />
                        }

                    </Stack.Screen>
 
                    <Stack.Screen name="WinnerNovax"  options={{presentation:"modal",headerShown:false}} >
                        {
                            !subscribed || loadingSubscribe == true ?
                            props => <LoadingTiquete />
                            :
                            props => <Winner usuario={usuario} />
                        }
                    </Stack.Screen>
                    
                    
                </Stack.Navigator> 
                    
            )
        }

        // Stacks HOME SOLD
        function StackSoldHome(props){

            const usuario = props.usuario;
            const dispatch = useDispatch();
            const subscribed = useSelector(store => store.games.subscribed);
            const loadingSubscribe = useSelector(store => store.games.loadingSubscribe);

            useEffect(() => {
                dispatch(actions.axiosGetSuscribe(usuario.id, true))

            }, [])

            return (

                <Stack.Navigator >
                    <Stack.Screen name="SoldNovax" options={{
                        presentation:"modal",
                        headerShown:false,
                    }}>
                        {
                            !subscribed || loadingSubscribe == true ?
                            // Cargando...
                            props => <LoadingSold />
                            :
                            // Registro de sorteos en los que ha participado y ha vendido.
                            props => <Sold subscribed={subscribed} usuario={usuario} />
                        }
                    </Stack.Screen>


                    <Stack.Screen name="HomeTicketNovax" options={{
                        headerShadowVisible:false,
                        title:"Sorteo"
                    }} >
                        {
                            !subscribed || loadingSubscribe == true ?
                                props => <SoldTopTap usuario={usuario} />
                            :
                                props => <SoldTopTap usuario={usuario} />
                        }
                    </Stack.Screen>   
                </Stack.Navigator>
                
            )
        }

        // Stack dentro del SOLD

        function StackTiquetSold(props){
            const juegos = props.gameSelected;
            const usuario = props.usuario;
            return (
                <Stack.Navigator useLegacyImplementation={true}>
                    <Stack.Screen name="TiquetesTopTapNovax" options={{
                        presentation:"modal",
                        headerShown:false,
                    }} >
                        {props => <T usuario={usuario} tiquetes={juegos} />}
                    </Stack.Screen>
                    <Stack.Screen name="FactureTopTapNovax" options={{
                        headerShadowVisible:false,
                        title:"",
                        headerTitleStyle:{
                            fontSize:14
                        }
                    }} >
                        {props => <BigFacture usuario={usuario} />}
                    </Stack.Screen>
                </Stack.Navigator>
            )
        }

    // Stacks Lotteries
    function StackLotteries(props){
        const myGames = props.myGames; 
        const usuario = props.usuario;
        const loading = props.loading;


        const games = useSelector(store => store.games.games);
        const loadingGames = useSelector(store => store.games.loadingGames);

        const filter = useSelector(store => store.games.gameFiltered);
        const dispatch = useDispatch();
        useEffect(() => {
                dispatch(actions.axiosToGetGames(usuario.id, true))
        }, [usuario.id]) 
        return ( 
            <Stack.Navigator>
                <Stack.Screen name="LotteriesNovax"  options={{
                    presentation:'modal',
                    headerShown:false
                }} >
                {props => <Lotteries myGames={myGames} usuario={usuario} games={games} />}
                </Stack.Screen>

                <Stack.Screen name="LotteryNovax" options={{
                    presentation:'modal',
                    headerShown:false
                }} >
                    {props => <Lottery myGames={myGames} usuario={usuario} />}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
    // Stacks Profile
    function StacksProfile(props){
        const usuario = props.usuario;
        const myGames = props.myGames;
        const profile = useSelector(store => store.games.profile);
        
        const loadingProfile = useSelector(store => store.games.loadingProfile);
        
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(actions.axiosGetProfile(usuario.id, true))
        }, [usuario.id])
        return (
            <Stack.Navigator>
                <Stack.Screen name="ProfileNovax" component={Profile} options={{
                    presentation:'modal',
                    headerShown:false
                }} />
                <Stack.Screen name="ComisionNovax" options={{
                    presentation:'modal',
                    headerShown:false
                }} >
                    
                    {
                    !profile || loadingProfile ?
                        props => <LoadingTiquete />
                    :
                        props => <Comision usuario={usuario} profile={profile}/>
                    }
                </Stack.Screen>
                <Stack.Screen name="EntregasNovax" options={{
                    presentation:'modal',
                    headerShown:false
                }} >
                    {
                        !profile || loadingProfile ?
                            props => <LoadingTiquete />
                        :
                            props => <Entregas usuario={usuario} profile={profile}/>
                    }
                </Stack.Screen>
                <Stack.Screen name="LevelNovax" options={{
                    presentation:'modal',
                    headerShown:false
                }} >
                    {
                        !profile || loadingProfile ?
                            props => <LoadingTiquete />
                        :
                            props => <Level usuario={usuario} profile={profile}/>
                    }
                </Stack.Screen>
                <Stack.Screen name="StacksDetailsNovax" component={StacksDetailsProfile} options={{
                    presentation:'modal',
                    headerShown:false
                }} />
            </Stack.Navigator>
        )
    }

        function StacksDetailsProfile(){
            return(
                <Stack.Navigator>
                    <Stack.Screen name="DetailsNovax" component={Details} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="GeneralDatails" component={General} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="ChangePasswordDetails" component={Password} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="LanguagueDatails" component={Languague} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="ContactDatails" component={Contact} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="NovaxDatails" component={NovaxDetails} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="QuestionDatails" component={Question} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                    <Stack.Screen name="ConditionsDatails" component={Conditions} options={{
                        presentation:'modal',
                        headerShown:false
                    }}/>
                </Stack.Navigator>
            )
        }
// Tab
const Tab = createBottomTabNavigator();

function TabGroup(){
    const dispatch = useDispatch();
    const usuario = useSelector(store => store.usuario.user);
    const myGames = useSelector(store => store.games.MyGames);
    const loadingMyGames = useSelector(store => store.games.loadingMyGames);

    useEffect(() => {
            if(myGames == 'notrequest' || myGames == null){
                dispatch(actions.axiosToGetMyGames(usuario.id, true))
            }
    }, [usuario]) 
    return (
            loadingMyGames == false && myGames != null && usuario != null ?
                <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarShowLabel:false,
                    tabBarIcon: ({color,focused,size}) => {
                        let iconName;
                        if(route.name === "Home") {
                            iconName = focused ? "md-home" : "md-home-outline" 
                        }else if(route.name === "Juegos"){
                            // iconName = focused ? "game-controller" : "game-controller-outline" 
                            iconName = focused ? "gift" : "gift-outline" 
                        }else if(route.name === "Perfil"){
                            iconName = focused ? "ios-people" : "people-outline"
                        } 
                        return <Ionicons name={iconName} color={color} size={size} />
                    },
                    headerShown:false,
                    
                })}> 

                    <Tab.Screen name="Home" >
                        {props => <StackHome myGames={myGames} usuario={usuario} loading={loadingMyGames} />}
                    </Tab.Screen>
                    <Tab.Screen name="Juegos">
                        {props => <StackLotteries myGames={myGames} usuario={usuario} loading={loadingMyGames} />}
                    </Tab.Screen>
                    <Tab.Screen name="Perfil" >
                        {props => <StacksProfile usuario={usuario} myGames={myGames} />}
                    </Tab.Screen>
         
                </Tab.Navigator>
            : <Presentation />
        
    )
}
export default function Navigation(){
    return (
        <NavigationContainer>
            {/* Screens */}
            <TabGroup />
            {/* <StackHome /> */}
        </NavigationContainer>
    )
}