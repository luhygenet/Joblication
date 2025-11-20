export const useNameValidations = () => {
  const nameValidations = {
    required: {
      value: true,
      message: "Full name is required",
    },
  };
  return { nameValidations };
};
