import {ComponentProps, ReactElement} from "react";

export default function PageSection({
                                      title = undefined,
                                      titleElement = undefined,
  subtitle = null,
                                      subtitleElement = undefined,
  children,
  className,
}: ComponentProps<"section"> & {
  title?: string | undefined;
  titleElement?: ReactElement | string | undefined;
  subtitle?: string | null | undefined;
  subtitleElement?: ReactElement | string | undefined;
}) {
  return (
    <section className={[`py-24`, className || ""].join(" ")}>
      <div className="text-center container">
        {titleElement ? titleElement : <h2 className="text-4xl font-bold mb-8 capitalize">{title}</h2>}
        {subtitleElement ? subtitleElement :
          <p className="max-w-md mx-auto font-medium text-text-second">{subtitle}</p>}
      </div>

      {children}
    </section>
  );
}
