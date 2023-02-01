import React, { ElementType } from "react";
import { Box, Text, Stack, Icon, StackProps, HStack } from "@chakra-ui/react";
import {
  MoneyBackGuarenteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "./icon/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxWidth="1024px" margin="auto" pt="60px" pb="8">
      <Stack
        px="12"
        direction={["column", "column", "row"]}
        spacing={["6", "6", "5"]}
      >
        <Feature icon={MoneyBackGuarenteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
