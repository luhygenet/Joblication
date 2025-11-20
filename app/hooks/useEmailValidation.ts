export const useEmailValidation = (getValues: () => any) => {
  {
    const emailValidation = {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email address",
      },
      validate: {
        notAdmin: (fieldValue: string) => {
          return (
            !(fieldValue == "liya.daniel.zeleke@gmail.com") ||
            "This email is not allowed"
          );
        },
        notBlacklisted: (fieldValue: string) => {
          return (
            !fieldValue.endsWith("baddomain.com") ||
            "This domain is blacklisted"
          );
        },
      },
    };
    return { emailValidation };
  }
};
