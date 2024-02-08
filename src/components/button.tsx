import {ComponentPropsWithoutRef} from "react";

export default function Button(props: ComponentPropsWithoutRef<'a'> & ComponentPropsWithoutRef<'button'>) {
  const Comp = props.href !== undefined ? 'a' : 'button'

  return (
    <Comp
      {...props}
      href={props.href}
      className={['inline-flex items-center gap-4 px-6 py-4 bg-primary text-primary-foreground text-sm font-bold rounded-md transition-colors hover:bg-primary-hover', props.className].join(' ')}
    />
  )
}