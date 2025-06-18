import dns from "dns/promises";
import isDisposableEmail from "is-disposable-email";
import emailValidator from "email-validator";

export const isValidEmail = async (req, email) => {
  if (!emailValidator.validate(email)) {
    return false;
  }

  if (email.endsWith(".local")) {
    return false;
  }
  if (isDisposableEmail(email)) {
    return false;
  }

  const domain = email.split("@")[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return false;
    }
  } catch (dnsError) {
    return false;
  }
};
