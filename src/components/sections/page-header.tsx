import {PropsWithChildren} from "react";

export default function PageHeader({title, headline, breadcrumbs = [], ...props}: PropsWithChildren & {
  title: string,
  headline: string,
  breadcrumbs: string[]
}) {
  return (
    <section role="heading">
      <div className="py-16 text-center">
        <h1 className="text-text-second font-bold uppercase leading-5">{title}</h1>
        <p className="text-6xl font-bold my-8">{headline}</p>

        <nav className="space-x-2">
          {breadcrumbs.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`inline-flex items-center gap-2 text-sm font-bold ${idx === breadcrumbs.length - 1 ? 'text-text-second' : ''}`}>
              {item}
              {(idx !== breadcrumbs.length - 1) && (
                <svg className="size-5 text-muted" aria-hidden="true" fill="none" strokeWidth={2} stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </nav>
      </div>

      {props.children}
    </section>
  )
}