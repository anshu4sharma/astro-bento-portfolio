export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInIndia(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to India's time (IST)
  const offsetIndia = 5.5; // IST is UTC+5:30
  now.setHours(now.getUTCHours() + offsetIndia, now.getUTCMinutes() + 30);

  return now;
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Format the time in 12-hour format with AM/PM
    timeZone: "Asia/Kolkata",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  
  // Append the time zone abbreviation. IST does not change with Daylight Saving Time.
  formattedTime += " IST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
