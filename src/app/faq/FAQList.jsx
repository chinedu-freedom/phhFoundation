"use client";

import { useState } from "react";
import { Search, ChevronDown, HelpCircle, Mail, Phone } from "lucide-react";

export default function FAQList({ categories = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (globalIndex) => {
    setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex);
  };

  // Build flattened and filtered list of FAQs
  let globalCounter = 0;
  const allItems = categories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.category,
      globalIndex: globalCounter++,
    }))
  );

  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <div className="flex flex-col items-center justify-center gap-6 border-b border-zinc-100 pb-8 dark:border-zinc-800">
        {/* Live Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setExpandedIndex(null); // Reset toggle on search
            }}
            className="block w-full rounded-xl border border-zinc-200/50 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["All", ...categories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedIndex(null); // Reset accordion
              }}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const isOpen = expandedIndex === item.globalIndex;
          return (
            <div
              key={item.globalIndex}
              className={`group rounded-2xl border border-slate-100/70 bg-white transition-all overflow-hidden dark:border-zinc-800 dark:bg-zinc-900 cursor-pointer ${
                isOpen ? "ring-1 ring-blue-600 border-blue-600 shadow-[0_8px_30px_rgb(0,0,0,0.02)]" : "hover:border-zinc-200 dark:hover:border-zinc-700"
              }`}
            >
              <button
                onClick={() => handleToggle(item.globalIndex)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 transition-transform dark:bg-zinc-800 ${
                    isOpen ? "rotate-180 bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Collapsible Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] border-t border-zinc-100 dark:border-zinc-800" : "max-h-0"
                }`}
              >
                <div className="p-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400 cursor-default select-text">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm text-zinc-400">
              No matching questions found. Try typing another query or selecting a different category tab.
            </p>
          </div>
        )}
      </div>

      {/* Support CTA Callout */}
      <div className="rounded-3xl bg-zinc-50/50 p-8 border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-center dark:bg-zinc-950/40 dark:border-zinc-850">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white">Still have questions?</h3>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          If you didn’t find your answers here, feel free to send us an email or call our support lines.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:hephzibahhumanitarianf@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
          >
            <Mail className="h-4 w-4" /> Email support
          </a>
          <a
            href="tel:+2348075889097"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <Phone className="h-4 w-4" /> Call: +234 807 588 9097
          </a>
        </div>
      </div>
    </div>
  );
}

