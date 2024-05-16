import React from 'react';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: string; // pass size rather than height and width
  secondaryFill?: string; // only for duotone icons; use fill for monotone icons
}