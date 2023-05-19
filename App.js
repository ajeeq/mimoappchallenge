/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useRef, useMemo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Screens Stacks
import LearnStackScreen from './src/layouts/learn';
import LeaderboardStackScreen from './src/layouts/leaderboard';
import CommunityStackScreen from './src/layouts/community';
import ProfileStackScreen from './src/layouts/profile';



const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function Section({children, title}) {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function Home() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function App() {
  // const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const Tab = createBottomTabNavigator();
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            // tabBarIcon: ({ focused, color, size }) => {
            //   let iconName;

            //   if (route.name === 'Learn') {
            //     iconName = focused
            //       ? 'school'
            //       : 'school-outline';
            //   } else if (route.name === 'Leaderboard') {
            //     iconName = focused 
            //       ? 'list' 
            //       : 'list-outline';
            //   } else if (route.name === 'Community') {
            //     iconName = focused 
            //       ? 'list' 
            //       : 'list-outline';
            //   } else if (route.name === 'Profile') {
            //     iconName = focused 
            //       ? 'list' 
            //       : 'list-outline';
            //   }
              

            //   // You can return any component that you like here!
            //   return <Ionicons name={iconName} size={size} color={color} />;
            // },
            
            tabBarIcon: ({ focused, color, size }) => {
              let IconComponent;
              let iconProps = {};
              let src;

              if (route.name === 'Learn') {
                src = focused
                ? require('./src/assets/icons/round_school_black_48dp_2x.png')
                : require('./src/assets/icons/outline_school_black_48dp_2x.png')
              } else if (route.name === 'Leaderboard') {
                src = focused
                ? require('./src/assets/icons/round_emoji_events_black_48dp_2x.png')
                : require('./src/assets/icons/outline_emoji_events_black_48dp_2x.png')
              } else if (route.name === 'Community') {
                src = focused
                ? require('./src/assets/icons/round_forum_black_48dp_2x.png')
                : require('./src/assets/icons/outline_forum_black_48dp_2x.png')
              } else if (route.name === 'Profile') {
                src = focused
                ? require('./src/assets/icons/round_person_black_48dp_2x.png')
                : require('./src/assets/icons/outline_person_black_48dp_2x.png')
              }

              return <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                  source={src}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#242746' : '#748C94'
                  }}
                />
                <Text style={{color: focused ? '#242746' : '#748C94', fontSize: 12 }}>
                  {route.name}
                </Text>
              </View>;
            },
            headerShown: false,
            tabBarShowLabel: false,
            // tabBarActiveTintColor: 'tomato',
            // tabBarInactiveTintColor: 'gray',
          })} >
          <Tab.Screen name="Learn" component={LearnStackScreen} />
          <Tab.Screen name="Leaderboard" component={LeaderboardStackScreen} />
          <Tab.Screen name="Community" component={CommunityStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
