import { Box, Flex } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"

const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  return (
    <Flex>
      {/* the left side bar */}
      {pathname !== '/Auth' ? (
        <Box w={{base:"70px", md:"240px"}}>
          <Sidebar />
        </Box>
      ) : null}

      {/* the righ side bar */}
      <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>
          {children}
      </Box>

    </Flex>
  )
}

export default PageLayout