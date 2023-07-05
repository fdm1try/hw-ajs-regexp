export default function parsePhoneNumber(str) {
  const phoneNumber = str.replace(/[^\d+]/g, '');
  let countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
  if (!countryCode.includes('+')) {
    countryCode = countryCode === '8' ? '+7' : `+${countryCode}`;
  }
  return countryCode + phoneNumber.slice(-10);
}
