import { View, Dimensions} from "react-native";
import React from "react";
import { Box , Text, Image, Icon, Center, HStack, VStack,ScrollView} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import notificationsData from '../../../API/notificationsdata.json'
import { Background, useBackground } from "../../components/Background";
const { width: ww, height: wh } = Dimensions.get("window");

const data = notificationsData.notifications;
export default function Notifications() {

  return (
<>
<Background color="Surfaces2">
    <Box w={ww}>
    <ScrollView h={wh} mt={wh * 0.02}>
      <Center>
        <Box w={ww * 0.9}>
        {data && data.map((item, index) => (
              <>
              
              <Box rounded='$md'  my={wh * 0.0075} p={wh* 0.01}  bg="$primary100" key={index} >
                <HStack >
                <Image
                height={ww * 0.15}
                width={ww * 0.15}
                rounded='$xl'
                alt="Notification Info"
                source={item.image}
                alignSelf="center"
              />
                    <VStack flex={1} mx={ ww * 0.025} >
                      <Text  fs={wh * 0.015} ff="Inter-SemiBold" flex={1} textAlign="right" color="$secondary200"
                                        
                                        >00:00:00</Text>
                                        <Text  mb={ww * 0.01} flex={1} fs={wh * 0.015} ff="Inter-Medium"  textAlign="right" color="$text400"
                                        
                                        >{item.text}</Text>
                    </VStack>
                </HStack>
              </Box>
        
              </>
        ))}
        </Box>
      </Center>
      </ScrollView>
 
    </Box>
    </Background>
    </>   
  );
}
