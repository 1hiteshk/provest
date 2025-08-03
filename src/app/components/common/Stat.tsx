// components/StatCard.tsx
"use client";

import { Stat, StatLabel, StatNumber, TextProps } from "@chakra-ui/react";

interface StatCardProps {
  label: string;
  value: number | string;
  labelProps?: TextProps;
  valueProps?: TextProps;
}

export default function StatCard({
  label,
  value,
  labelProps,
  valueProps,
}: StatCardProps) {
  return (
    <Stat textAlign="center">
      <StatNumber textAlign={'left'} fontSize="3xl" fontWeight="bold" {...valueProps}>
        {value}
      </StatNumber>
      <StatLabel textAlign={'left'} fontSize="lg" color="gray.500" {...labelProps} _dark={{ color: "gray.300" }}>
        {label}
      </StatLabel>
    </Stat>
  );
}
