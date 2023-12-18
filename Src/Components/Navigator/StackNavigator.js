import { createStackNavigator } from '@react-navigation/stack';
import SelectUserType from '../../../Src/Components/Auth/SelectUserType';
import Registration from '../../../Src/Components/Auth/Registration'
import RegistrationStep2 from '../Auth/RegistrationStep2';
import PersonalInfo from '../Réparateur/Registration/PersonalInfo';
import Adress from '../Réparateur/Registration/Adress';
import Identification from '../Réparateur/Registration/Identification'
import BankingInfo from '../Réparateur/Registration/BankingInfo';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="SelectUserType" component={SelectUserType} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="RegistrationStep2" component={RegistrationStep2} options={{ headerShown: false }} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }} />
            <Stack.Screen name="Adress" component={Adress} options={{ headerShown: false }} />
            <Stack.Screen name="Identification" component={Identification} options={{ headerShown: false }} />
            <Stack.Screen name="BankingInfo" component={BankingInfo} options={{ headerShown: false }} />



        </Stack.Navigator>

    );
}

export default StackNavigator