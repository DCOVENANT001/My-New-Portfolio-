import Reveal from "./Reveal";
import CA from "country-flag-icons/react/3x2/CA";
import IE from "country-flag-icons/react/3x2/IE";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";

const countries = [
  { Flag: US, name: "United States" },
  { Flag: CA, name: "Canada" },
  { Flag: IE, name: "Ireland" },
  { Flag: GB, name: "United Kingdom" },
];

const track = [...countries, ...countries, ...countries];

export default function TrustBadge() {
  return (
    <Reveal delay={100} className="mx-auto -mt-6 max-w-6xl px-6 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-border sm:w-14" />
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-navy/70">
          TRUSTED BY
        </span>
        <span className="h-px w-8 bg-border sm:w-14" />
      </div>
      <p className="mx-auto mt-3 max-w-lg font-mono text-sm text-muted">
        Real businesses and CEOs across the US, Canada, Ireland &amp; the
        UK — every system still running.
      </p>
      <div className="marquee-fade mx-auto mt-6 max-w-3xl overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12">
          {track.map((c, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 opacity-80"
            >
              <span className="h-7 w-7 overflow-hidden rounded-full shadow-sm">
                <c.Flag className="h-full w-full object-cover" />
              </span>
              <span className="font-mono text-sm font-medium tracking-wide text-navy">
                {c.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
