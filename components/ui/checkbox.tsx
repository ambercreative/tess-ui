import React, { forwardRef } from 'react';
import * as CheckboxRx from '@radix-ui/react-checkbox';
import CheckIconSm from '../icons/checkIconSm';

type CheckboxRef = React.ElementRef<typeof CheckboxRx.Root>;
type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxRx.Root>;

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>
  (({...props}, ref) => {
  return (
    <CheckboxRx.Root className="h-[14px] w-[14px] relative appearance-none flex items-center justify-center rounded-[4px] ring-1 ring-shadow/20 shadow-sm bg-surface-light hover:ring-shadow/30 hover:bg-surface-lighter after:absolute after:inset-0 after:rounded-inherit after:shadow-[inset_0_1px_0_hsla(var(--color-white)/var(--light-opacity))] data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:ring-primary focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-offset-[3px] focus-visible:outline-primary active:translate-y-px active:transition-transform data-[state=checked]:active:translate-y-0" {...props} ref={ref}>
      <CheckboxRx.Indicator className="text-current">
        <CheckIconSm size="12px" aria-hidden={true}/>
      </CheckboxRx.Indicator>
    </CheckboxRx.Root>
  )
  }
)

Checkbox.displayName = CheckboxRx.Root.displayName

export default Checkbox;