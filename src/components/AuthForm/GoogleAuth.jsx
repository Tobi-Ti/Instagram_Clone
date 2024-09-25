import { Box, Flex, Image, Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} w={"full"} cursor={"pointer"}>
        <Box>
        <Image src="/google.png" alt="google logo"  w={5}></Image>
        </Box>
        <Text mx={2} color={"blue.500"} >Log in with Google </Text>

    </Flex>
  )
}

export default GoogleAuth