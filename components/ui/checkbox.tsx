import React, { forwardRef } from 'react';
import * as CheckboxRx from '@radix-ui/react-checkbox';
import CheckIcon from '../icons/checkIcon';

type CheckboxRef = React.ElementRef<typeof CheckboxRx.Root>;
type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxRx.Root>;

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>
  (({...props}, ref) => {
  return (
    <CheckboxRx.Root className="h-[14px] w-[14px] appearance-none flex items-center justify-center rounded-[4px] ring-1 ring-shadow/20 shadow-sm bg-surface-light hover:ring-shadow/30 hover:bg-surface-lighter data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:ring-primary focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-primary" {...props} ref={ref}>
      <CheckboxRx.Indicator className="text-current">
        <CheckIcon size="12px" aria-hidden={true}/>
      </CheckboxRx.Indicator>
    </CheckboxRx.Root>
  )
  }
)

Checkbox.displayName = CheckboxRx.Root.displayName

export default Checkbox;