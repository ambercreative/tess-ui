import React from 'react';
import * as SwitchRx from '@radix-ui/react-switch';

const Switch = () => (
  <SwitchRx.Root
    className="relative w-[28px] h-[16px] bg-contrast-lower rounded-full outline-none cursor-default transition

    focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-offset-[2px] focus-visible:outline-primary
    
    data-[state=checked]:bg-primary data-[state=checked]:shadow 
    
    data-[state=checked]:after:absolute data-[state=checked]:after:inset-0 data-[state=checked]:after:rounded-inherit data-[state=checked]:after:pointer-events-none data-[state=checked]:after:shadow-md data-[state=checked]:after:shadow-primary/30 data-[state=checked]:after:transition
    
    dark:data-[state=checked]:before:absolute dark:data-[state=checked]:before:inset-0 dark:data-[state=checked]:before:rounded-inherit dark:data-[state=checked]:before:pointer-events-none dark:data-[state=checked]:before:shadow-[inset_0_1px_0_hsla(var(--color-white)/0.2)]"
    id="airplane-mode"
    style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
  >
    <SwitchRx.Thumb className="block w-[12px] h-[12px] bg-white rounded-full shadow transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[14px] data-[state=checked]:shadow-primary-darker/30" />
  </SwitchRx.Root>
);

export default Switch;