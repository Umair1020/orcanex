export default function LegacySection({ html, index }) {
  return <div data-legacy-section={index} dangerouslySetInnerHTML={{ __html: html }} />;
}
