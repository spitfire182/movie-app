/**
 * Extracts the year from a date string.
 * @param dateString - The date string in "YYYY-MM-DD" format.
 * @returns The four-digit year as a string, or "N/A" if the input is invalid.
 */
export const getYearFromDate = (dateString: string): string => {
  if (!dateString) {
    return "N/A";
  }
  return dateString.split("-")[0];
};
