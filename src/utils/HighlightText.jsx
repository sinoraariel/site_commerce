export function highlightText(text, searchTerm) {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark key={index} className="bg-yellow-300">
        {part}
      </mark>
    ) : (
      part
    )
  );
}