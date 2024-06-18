import { Box, Text, Center, HStack, VStack, Pressable, Image } from "../../../components/index";
import { useBackground } from "../../components/Background";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const { width: ww } = Dimensions.get("window");

const ItemCard = ({ filteredData }) => { 

        const navigation = useNavigation();
      
        const handlePress = (itemId) => { 
            navigation.navigate("Details", { itemId });
          };
  return (
    <Center>
      <Box w={ww * 0.9}  py={ww * 0.03}>
        <Box  flexDirection="row" flexWrap="wrap" justifyContent="space-between" >
          {filteredData.map((item) => ( 
            <Pressable
              key={item.name} 
              rounded="$lg"
              onPress={() => handlePress(item.id)} 
              overflow="hidden"
              px={ww * 0.03}
              py={ww * 0.025}
              my={ww * 0.025}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 3,
              }}
              width="48%" 
              sx={useBackground("Surfaces2")}
            >
              
                <VStack align="start">
                <Image
                bg="white"
                height={ww * 0.35}
                width={ww * 0.35}
                mb={ww * 0.02}
                rounded='$xl'
                alt="Notification Info"
                source={item.img}
                alignSelf="center"
              />
                  <Text mb={ww * 0.01} numberOfLines={2} color="$text700" ellipsizeMode="tail" ff="Inter-SemiBold" fontSize={ww * 0.04}>
                    {item.name} 
                  </Text>
                  <Text fontSize={ww * 0.04} mb={ww * 0.01} color="$success500" ff="Inter-ExtraBold">$ {item.price}</Text>
                  
                </VStack>
            
            </Pressable>
          ))}
        </Box>
      </Box>
    </Center>
  );
};

export default ItemCard;