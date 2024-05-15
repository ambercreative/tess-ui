import { forwardRef } from 'react';
import * as CheckboxRx from '@radix-ui/react-checkbox';
import CheckIcon from '../icons/checkIcon';

const Checkbox = forwardRef(({...props}, ref) => {
  return (
    <CheckboxRx.Root className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]" {...props} ref={ref}>
      <CheckboxRx.Indicator className="text-violet11">
        <CheckIcon aria-hidden={true}/>
      </CheckboxRx.Indicator>
    </CheckboxRx.Root>
  )
  }
)

Checkbox.displayName = CheckboxRx.Root.displayName

export default Checkbox;