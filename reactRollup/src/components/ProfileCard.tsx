import * as React from "react";
import { Box, Image, Text, Badge, Stack, Button } from "@chakra-ui/react";
import globe from "/globe.svg";
import calendar from "/calendar.svg";
import { MdCheckCircle } from "react-icons/md";

interface ProfileCardProps {
  name: string;
  role: string;
  location: string;
  joinDate: string;
  interests: string[];
}

const PencilIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
  
  

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  location,
  joinDate,
  interests,
}) => {
  return (
    <Box
      position="relative"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      display={"flex"}
    >
      <Button
        position="absolute"
        top={2}
        right={2}
        size="sm"
        leftIcon={<PencilIcon />}
      >
        Edit
      </Button>
      <Box position="relative" height={"100%"}>
        <Image
          borderRadius="full"
          objectFit="cover"
          boxSize="150px"
          src="/user.png"
          alt="Profile Picture"
          m={4}
        />
        <Box position="absolute" bottom={8} right={6} color="blue.500">
          <MdCheckCircle size="24px"/> {/* Size can be adjusted */}
        </Box>
      </Box>
      <Box p="6" gap={2} display="flex" flexDirection="column" >
        <Text
          mt="1"
          as="h4"
          lineHeight="tight"
          isTruncated
          fontSize="xl"
          fontWeight="extrabold"
        >
          {name}
        </Text>
        <Text>{role}</Text>
        <Box display="flex" alignItems="baseline">
          <img src={globe} alt="" width={12} />
          <Text
            ml="3"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
          >
            {location}
          </Text>
        </Box>
        <Box display="flex" alignItems="baseline" mb={8}>
          <img src={calendar} alt="" width={12} />
          <Text
            ml="3"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
          >
            {joinDate}
          </Text>
        </Box>
        <Text fontWeight={"semibold"}>Interests</Text>
        <Stack mt="2" direction="row" spacing={4}>
          {interests.map((interest) => (
            <Badge key={interest} px="2" py={1} colorScheme="gray">
              {interest}
            </Badge>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfileCard;
