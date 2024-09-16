import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import { useCountries } from "../../hooks/use-countries";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";

export const CountrySelect = () => {
  const DEFAULT_PHONE_COUNTRY = "Portugal";

  const { data: countries } = useCountries();

  const { checkoutData, setCheckoutData } = useCheckoutStore();

  return (
    <FormControl>
      <Select
        value={checkoutData.phoneCountry ?? DEFAULT_PHONE_COUNTRY}
        onChange={(
          e: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
          value: string | null
        ) => {
          setCheckoutData({ phoneCountry: value ?? DEFAULT_PHONE_COUNTRY });
        }}
        sx={{ width: 160 }}
      >
        {countries?.map(({ pais, ddi }) => (
          <Option key={pais} value={pais}>
            {pais + " (" + ddi + ")"}
          </Option>
        ))}
      </Select>
    </FormControl>
  );
};
