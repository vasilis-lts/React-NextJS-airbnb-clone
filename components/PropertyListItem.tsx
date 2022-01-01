import { Box, Stack, Text } from '@chakra-ui/react';
import useMapState from '../hooks/useMapState';

export default function PropertyListItem({ data }) {

  const { setSelectedHoverMarkerId } = useMapState();

  return (
    <div
      className="property-list-item"
      onMouseEnter={() => setSelectedHoverMarkerId(data.id)}
    >
      <Box p='2' borderBottom={'1px solid #ccc'}>
        <Stack spacing={1}>
          <Text fontSize='2xl'>{data.name}</Text>
          <Text fontSize='md'>€{data.pricePerNight} / night</Text>
        </Stack>
      </Box>

      <style jsx>{`
      .property-list-item:hover {
        background:#ddd;
      }     
    `}</style>
    </div>
  )

}