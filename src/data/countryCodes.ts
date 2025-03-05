export interface CountryCode {
  code: string;
  dial_code: string;
  name: string;
}

export const countryCodes: CountryCode[] = [
  { code: "DE", dial_code: "+49", name: "Germany" },
  { code: "IL", dial_code: "+972", name: "Israel" },
  { code: "GB", dial_code: "+44", name: "United Kingdom" },
  { code: "US", dial_code: "+1", name: "United States" },
  { code: "FR", dial_code: "+33", name: "France" },
  { code: "IT", dial_code: "+39", name: "Italy" },
  { code: "ES", dial_code: "+34", name: "Spain" },
  { code: "NL", dial_code: "+31", name: "Netherlands" },
  { code: "BE", dial_code: "+32", name: "Belgium" },
  { code: "CH", dial_code: "+41", name: "Switzerland" },
  { code: "AT", dial_code: "+43", name: "Austria" },
  { code: "SE", dial_code: "+46", name: "Sweden" },
  { code: "DK", dial_code: "+45", name: "Denmark" },
  { code: "NO", dial_code: "+47", name: "Norway" },
  { code: "FI", dial_code: "+358", name: "Finland" },
  { code: "PL", dial_code: "+48", name: "Poland" },
  { code: "CZ", dial_code: "+420", name: "Czech Republic" },
  { code: "PT", dial_code: "+351", name: "Portugal" },
  { code: "GR", dial_code: "+30", name: "Greece" },
  { code: "HU", dial_code: "+36", name: "Hungary" }
];