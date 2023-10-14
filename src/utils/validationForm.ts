export const validationForm = (profile:{ user:string, email:string }) => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const name = profile.user.length >= 5;
  const email = emailRegex.test(profile.email);

  return name && email;
};
