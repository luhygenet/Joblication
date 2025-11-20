

export const useAuthValidations = (getValues: () => any) => {
  const confirmPasswordValidation = {
    validate: (value: string) =>
      value === getValues().password || "Passwords must match",


  };

  const passwordValidation = {
    required: "Password is required",
    minLength: { value: 8, message: "Must be at least 8 characters" },
  };

  return {
    confirmPasswordValidation,
    passwordValidation,
  };
};
