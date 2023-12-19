import { createStackNavigator } from '@react-navigation/stack';
import SelectUserType from '../../../Src/Components/Auth/SelectUserType';

import Registration from '../Client/Registration'
import RegistrationStep2 from '../Client/RegistrationStep2';
import TabBarNavigation from '../Client/Navigations/TabBarNavigation'

import PersonalInfo from '../Réparateur/Registration/PersonalInfo';
import Adress from '../Réparateur/Registration/Adress';
import Identification from '../Réparateur/Registration/Identification'
import BankingInfo from '../Réparateur/Registration/BankingInfo';

import CourierInfo from '../Courier/Registration/CourierInfo';
import CourierAdress from '../Courier/Registration/CourierAdress';
import CourierBankInfo from '../Courier/Registration/CourierBankInfo';
import CourierIndentity from '../Courier/Registration/CourierIndentity'

import CourieHome from '../Courier/CourierSrc/CourieHome';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="SelectUserType" component={SelectUserType} options={{ headerShown: false }} />
           
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="RegistrationStep2" component={RegistrationStep2} options={{ headerShown: false }} />
            <Stack.Screen name="TabBarNavigation" component={TabBarNavigation} options={{ headerShown: false }} />
            



            <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }} />
            <Stack.Screen name="Adress" component={Adress} options={{ headerShown: false }} />
            <Stack.Screen name="Identification" component={Identification} options={{ headerShown: false }} />
            <Stack.Screen name="BankingInfo" component={BankingInfo} options={{ headerShown: false }} />

            <Stack.Screen name="courierPersonalInfo" component={CourierInfo} options={{ headerShown: false }} />
            <Stack.Screen name="courierAdress" component={CourierAdress} options={{ headerShown: false }} />
            <Stack.Screen name="courierIdentification" component={CourierIndentity} options={{ headerShown: false }} />
            <Stack.Screen name="courierBankingInfo" component={CourierBankInfo} options={{ headerShown: false }} />

            <Stack.Screen name='courieHome' component={CourieHome} options={{ headerShown: false }} />

        </Stack.Navigator>

    );
}

export default StackNavigator    


