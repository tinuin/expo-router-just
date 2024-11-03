import { View, Text } from 'react-native'
import React from 'react'
import { ExpoRequest, ExpoResponse } from 'expo-router/server'

// const HelloApi = () => {
//   return (
//     <View>
//       <Text>HelloApi</Text>
//     </View>
//   )
// }
// export function GET(request: ExpoRequest){
//     return ExpoRespone.json({hello: 'world'});

// }
export function GET(request: Request) {
    console.log(request);
    return Response.json({ user: 'Vadim' });
}
// export default HelloApi