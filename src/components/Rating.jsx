import { HStack, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Rating = ({ value, onChange, totalStars = 5 }) => {
  const [hoverValue, setHoverValue] = useState(null);

  return (
    <HStack spacing={1}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isActive = hoverValue
          ? starValue <= hoverValue
          : starValue <= value;

        return (
          <Icon
            key={index}
            as={StarIcon}
            boxSize={5}
            cursor="pointer"
            transition="all 0.2s ease"
            color={isActive ? "#FFCA28" : "#E2E8F0"} // ✅ Updated color
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHoverValue(starValue)}
            onMouseLeave={() => setHoverValue(null)}
          />
        );
      })}
    </HStack>
  );
};

export default Rating;
