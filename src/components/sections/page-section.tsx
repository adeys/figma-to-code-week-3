import {ComponentProps} from "react";

export default function PageSection({title, subtitle = null, children, className}: ComponentProps<'section'> & {
  title: string,
  subtitle?: string | null | undefined
}) {
  return (
    <section className={[`py-24`, className || ''].join(' ')}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 capitalize">{title}</h2>
        {subtitle && <p className="max-w-md mx-auto font-medium text-text-second">{subtitle}</p>}
      </div>

      {children}
    </section>
  )
}