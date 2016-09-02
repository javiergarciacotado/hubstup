export function industriesFormattedForDropdown (industries) {
  return industries.map(industry => {
    return {
      value: industry.id,
      text: industry.name
    };
  });
}
