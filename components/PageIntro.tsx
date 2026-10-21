import { Tibeb } from "@/components/Tibeb";

/** Ink opening band shared by the inner pages: the page's name at display scale. */
export function PageIntro({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-parchment">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-16">
        <h1 className="type-display max-w-5xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand sm:text-xl">{intro}</p>}
        {children}
      </div>
      <Tibeb />
    </section>
  );
}
