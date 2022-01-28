import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearcFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg"
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({properties}) =>{
    const [searchFilter,setSearchFilter] = useState(false)
    const router = useRouter()
    return(
        <Box>
            <Flex cursor="pointer" bg="gray.100" borderBottom="1px" 
                  borderColor="gray.200" fontWeight="black" fontSize="lg" 
                  justifyContent="center" alignItems="center"
                  onClick={()=>setSearchFilter(!searchFilter)}
            >
                <Text> Search Property By Filter</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
             {searchFilter && <SearchFilters />}
             <Text fontSize="2xl" fontWeight="bold" paddingTop="5" paddingBottom="5">
                Properties {router.query.purpose}
             </Text>
             <Flex flexWrap="wrap" justifyContent="space-around">
                {properties.map(property => <Property key={property.id} property={property}/> )}
             </Flex>
             {properties.length === 0 &&(
                 <Flex justifyContent="center" alignItems="center"  flexDirection="column" marginTop="5" marginBottom="5">
                    <Image width="300px" height="300px" borderRadius alt="No Result" src={noresult}/>
                    <Text fontSize="2xl" marginTop="10"> No Results Found </Text>
                 </Flex>
             )}
        </Box>
    )
}

export default Search

export async function getServerSideProps({query}){
    const purpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "yearly";
    const priceMin = query.priceMin || "0";
    const priceMax = query.priceMax || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000"
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";
    
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalIDs=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`) 
    
    return{
        props:{
            properties: data?.hits 
        }
    }
}