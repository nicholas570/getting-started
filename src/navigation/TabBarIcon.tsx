import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

export const TabBarIcon = ({ name, color }: TabBarIconProps) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} name={name} color={color} />;
};
