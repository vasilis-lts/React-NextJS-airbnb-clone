import { Box, Stack, Text } from "@chakra-ui/react";
import useMapState from "../hooks/useMapState";
import PropertyListItem from "./PropertyListItem";

export default function PropertiesAvailable() {
  const { propertiesAvailable } = useMapState();

  return (
    <>
      <Box p='2'>
        <Stack spacing={1} marginBottom={10} >
          <Text fontSize='md'>{propertiesAvailable.length} stays in map area</Text>
        </Stack>
      </Box>
      {
        propertiesAvailable.length ?
          <div id="properties-container">
            {propertiesAvailable.map(entry => {
              return (
                <PropertyListItem
                  key={entry.id}
                  data={entry}
                />
              )
            })}
          </div>
          : null
      }
    </>
  )
}