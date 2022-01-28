import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, useMediaQuery, UnorderedList, ListItem} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Navbar = () =>{
    const [navLinksDisplayer, setnavLinksDisplayer] = useState(null)
    const [isLargerThan450] = useMediaQuery('(min-width: 715px)')
    useEffect(()=>{
        if(isLargerThan450){
            setnavLinksDisplayer(
                <UnorderedList paddingRight="10" paddingTop="2">
                    <Link href="/" passHref>
                        <ListItem _hover={{fontSize:"xl", color:"purple.400", borderBottom:"1px"}} color="blue.400" fontSize="xl" cursor="pointer" display="inline" p="3" >Home</ListItem>
                    </Link>
                    <Link href="/search" passHref>
                        <ListItem _hover={{fontSize:"xl", color:"purple.400", borderBottom:"1px"}} color="blue.400" fontSize="xl" cursor="pointer" display="inline" p="3">search</ListItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <ListItem _hover={{fontSize:"xl", color:"purple.400", borderBottom:"1px"}} color="blue.400" fontSize="xl" cursor="pointer" display="inline" p="3">Buy Property</ListItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <ListItem _hover={{fontSize:"xl", color:"purple.400", borderBottom:"1px"}} color="blue.400" fontSize="xl" cursor="pointer" display="inline" p="3">Rent Property</ListItem>
                    </Link>
                </UnorderedList>    
            )
        }
        else{
            setnavLinksDisplayer(
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem cursor="pointer" icon={<FcHome/>}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem cursor="pointer" icon={<BsSearch/>}>search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem cursor="pointer" icon={<FcAbout/>}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem cursor="pointer" icon={<FiKey/>}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            )
        }
    },[isLargerThan450])
    return(
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box _hover={{color:"purple.400", borderBottom:"1px"}} fontSize="3xl" fontWeight="bold" color="blue.400">
                <Link href="/" paddingLeft="2" >Realtor</Link>
            </Box>
            <Spacer/>
            <Box>
                {navLinksDisplayer}
            </Box>
        </Flex>
    )
}

export default Navbar