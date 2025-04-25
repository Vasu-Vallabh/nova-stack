import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>
declare const PopoverTrigger: React.ForwardRefExoticComponent<
  PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>
>
declare const PopoverArrow: React.ForwardRefExoticComponent<
  PopoverPrimitive.PopoverArrowProps & React.RefAttributes<SVGSVGElement>
>
declare const PopoverContent: React.ForwardRefExoticComponent<
  Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, 'ref'> &
    React.RefAttributes<HTMLDivElement>
>
export { Popover, PopoverTrigger, PopoverContent, PopoverArrow }
