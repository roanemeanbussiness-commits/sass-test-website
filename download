/**
 * Renders a JSON-LD structured-data block. Structured data is a core signal
 * for AEO and GEO: it lets search and AI engines parse the brand, its
 * services, FAQs and articles as trustworthy, machine-readable facts.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is fully controlled sample data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
