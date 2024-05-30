import React, { forwardRef } from 'react';
import * as CheckboxRx from '@radix-ui/react-checkbox';
import CheckIconSm from '../icons/checkIconSm';

type CheckboxRef = React.ElementRef<typeof CheckboxRx.Root>;
type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxRx.Root>;

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>
  (({...props}, ref) => {
  return (
    <CheckboxRx.Root className="h-[16px] w-[16px] relative appearance-none flex items-center justify-center rounded-[5px] ring-1 ring-inset ring-contrast-higher/20 shadow-sm bg-surface-light

    hover:ring-contrast-higher/30 hover:bg-surface-lighter 
    
    data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:ring-primary

    data-[state=checked]:before:absolute data-[state=checked]:before:pointer-events-none data-[state=checked]:before:inset-0 data-[state=checked]:before:rounded-inherit data-[state=checked]:before:shadow-md data-[state=checked]:before:shadow-primary/40 dark:data-[state=checked]:before:shadow-primary/30

    dark:data-[state=checked]:after:absolute dark:data-[state=checked]:after:inset-0 dark:data-[state=checked]:after:rounded-inherit dark:data-[state=checked]:after:pointer-events-none dark:data-[state=checked]:after:shadow-[inset_0_1px_0_hsla(var(--color-white)/0.2)]
    
    focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-offset-[2px] focus-visible:outline-primary 
    
    active:translate-y-px active:transition-transform data-[state=checked]:active:translate-y-0" {...props} ref={ref}>
      <CheckboxRx.Indicator className="text-current">
        <CheckIconSm size="12px" aria-hidden={true}/>
      </CheckboxRx.Indicator>
    </CheckboxRx.Root>
  )
  }
)

Checkbox.displayName = CheckboxRx.Root.displayName

export default Checkbox;