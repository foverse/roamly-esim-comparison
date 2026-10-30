"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Info, RotateCcw, SlidersHorizontal, Star, Wifi } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { Destination, Plan } from "@/lib/plans";

type ExplorerDictionary = Dictionary["explorer"];
type DestinationMap = Record<Destination, { en: string; fr: string; es: string; code: string }>;
type SortKey = "recommended" | "lowestPrice" | "mostData" | "bestRated";
type Currency = "EUR" | "USD" | "GBP";

const currencyRates: Record<Currency, number> = { EUR: 1, USD: 1.08, GBP: 0.84 };

export function ComparisonExplorer({
  dictionary,
  locale,
  plans,
  destinations,
}: {
  dictionary: ExplorerDictionary;
  locale: Locale;
  plans: Plan[];
  destinations: DestinationMap;
}) {
  const [destination, setDestination] = useState<Destination>("japan");
  const [minData, setMinData] = useState("all");
  const [duration, setDuration] = useState("all");
  const [network, setNetwork] = useState("all");
  const [sort, setSort] = useState<SortKey>("recommended");
  const [currency, setCurrency] = useState<Currency>("EUR");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("destination");
    if (requested && requested in destinations) setDestination(requested as Destination);
  }, [destinations]);

  const filteredPlans = useMemo(() => {
    const result = plans.filter((plan) => {
      if (!plan.destinations.includes(destination)) return false;
      if (minData !== "all" && plan.dataGb !== null && plan.dataGb < Number(minData)) return false;
      if (duration !== "all" && plan.days < Number(duration)) return false;
      if (network !== "all" && plan.network !== network) return false;
      return true;
    });

    return result.toSorted((a, b) => {
      if (sort === "lowestPrice") return a.priceEur - b.priceEur;
      if (sort === "mostData") return (b.dataGb ?? 999) - (a.dataGb ?? 999);
      if (sort === "bestRated") return b.rating - a.rating;
      return Number(Boolean(b.tag)) - Number(Boolean(a.tag)) || b.rating - a.rating;
    });
  }, [destination, duration, minData, network, plans, sort]);

  function resetFilters() {
    setMinData("all");
    setDuration("all");
    setNetwork("all");
    setSort("recommended");
  }

  function formatPrice(eur: number) {
    return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 2 }).format(eur * currencyRates[currency]);
  }

  return (
    <section className="compare-section" id="compare">
      <div className="shell">
        <div className="compare-heading">
          <div>
            <p className="eyebrow"><SlidersHorizontal size={15} /> {dictionary.eyebrow}</p>
            <h2>{dictionary.title} <span>{destinations[destination][locale]}</span></h2>
          </div>
          <div className="update-note"><span className="status-dot" />{dictionary.updated}</div>
        </div>

        <div className="filter-bar" aria-label="Plan filters">
          <label className="filter-field wide-field">
            <span>{dictionary.destination}</span>
            <select value={destination} onChange={(event) => setDestination(event.target.value as Destination)}>
              {Object.entries(destinations).map(([key, item]) => <option key={key} value={key}>{item.code} · {item[locale]}</option>)}
            </select>
            <ChevronDown size={16} />
          </label>
          <label className="filter-field">
            <span>{dictionary.data}</span>
            <select value={minData} onChange={(event) => setMinData(event.target.value)}>
              <option value="all">{dictionary.anyData}</option>
              <option value="5">5 GB+</option>
              <option value="10">10 GB+</option>
              <option value="20">20 GB+</option>
            </select>
            <ChevronDown size={16} />
          </label>
          <label className="filter-field">
            <span>{dictionary.duration}</span>
            <select value={duration} onChange={(event) => setDuration(event.target.value)}>
              <option value="all">{dictionary.all}</option>
              <option value="7">7+ {dictionary.days}</option>
              <option value="15">15+ {dictionary.days}</option>
              <option value="30">30+ {dictionary.days}</option>
            </select>
            <ChevronDown size={16} />
          </label>
          <label className="filter-field">
            <span>{dictionary.network}</span>
            <select value={network} onChange={(event) => setNetwork(event.target.value)}>
              <option value="all">{dictionary.all}</option>
              <option value="5G">5G</option>
              <option value="4G/LTE">4G/LTE</option>
            </select>
            <ChevronDown size={16} />
          </label>
        </div>

        <div className="results-toolbar">
          <p><strong>{filteredPlans.length}</strong> {dictionary.results}</p>
          <div>
            <label className="compact-select"><span>{dictionary.sort}</span><select value={sort} onChange={(event) => setSort(event.target.value as SortKey)}>
              <option value="recommended">{dictionary.recommended}</option>
              <option value="lowestPrice">{dictionary.lowestPrice}</option>
              <option value="mostData">{dictionary.mostData}</option>
              <option value="bestRated">{dictionary.bestRated}</option>
            </select><ChevronDown size={14} /></label>
            <label className="compact-select"><span className="sr-only">{dictionary.currency}</span><select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)}>
              <option>EUR</option><option>USD</option><option>GBP</option>
            </select><ChevronDown size={14} /></label>
          </div>
        </div>

        <div className="plan-list" aria-live="polite">
          {filteredPlans.length ? filteredPlans.map((plan, index) => (
            <article className={`plan-card ${index === 0 ? "featured-plan" : ""}`} key={plan.id}>
              {plan.tag ? <span className="plan-tag">{dictionary[plan.tag]}</span> : null}
              <div className="provider-cell">
                <span className="provider-mark" style={{ "--mark-color": plan.color } as React.CSSProperties}>{plan.mark}</span>
                <div><h3>{plan.provider}</h3><span className="rating"><Star size={14} fill="currentColor" /> {plan.rating} <small>({plan.reviews.toLocaleString(locale)})</small></span></div>
              </div>
              <dl className="plan-facts">
                <div><dt>{dictionary.data}</dt><dd>{plan.dataGb === null ? dictionary.unlimited : `${plan.dataGb} GB`}</dd></div>
                <div><dt>{dictionary.validFor}</dt><dd>{plan.days} {dictionary.days}</dd></div>
                <div><dt>{dictionary.speed}</dt><dd><Wifi size={15} />{plan.network}</dd></div>
                <div><dt>{dictionary.hotspot}</dt><dd>{plan.hotspot === "yes" ? <Check size={16} /> : <Info size={16} />}{plan.hotspot === "yes" ? dictionary.included : dictionary.limited}</dd></div>
              </dl>
              <div className="price-cell">
                <small>{plan.dataGb ? `${formatPrice(plan.priceEur / plan.dataGb)} / GB` : dictionary.unlimited}</small>
                <strong>{formatPrice(plan.priceEur)}</strong>
                <a href="#sample-prices" aria-label={`${dictionary.viewDeal}: ${plan.provider}`}>{dictionary.viewDeal}<ArrowUpRight size={18} /></a>
              </div>
            </article>
          )) : (
            <div className="empty-state"><SlidersHorizontal /><h3>{dictionary.noResults}</h3><button onClick={resetFilters}><RotateCcw size={17} />{dictionary.reset}</button></div>
          )}
        </div>
        <p className="sample-note" id="sample-prices"><Info size={15} />{dictionary.sample}</p>
      </div>
    </section>
  );
}
