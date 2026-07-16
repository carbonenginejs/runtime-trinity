/**
 * Checks whether a modified-property selection includes a field.
 *
 * A nullish selection represents broad modification and matches every field.
 *
 * @param {string|Iterable<string>|null} properties
 * @param {string} property
 * @returns {boolean}
 */
function hasModifiedProperty(properties, property) {
  if (properties === null || properties === undefined) return true;
  if (typeof properties === "string") return properties === property;
  return typeof properties[Symbol.iterator] === "function" && [...properties].includes(property);
}

export { hasModifiedProperty };
//# sourceMappingURL=hasModifiedProperty.js.map
