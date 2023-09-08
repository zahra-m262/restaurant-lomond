import { useNumericFormat, NumberFormatBase } from "react-number-format";

const numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function CustomNumeralNumericFormat(props) {
  const { format, removeFormatting, ...rest } = useNumericFormat(props);

  const _format = (val) => {
    const _val = format(val);
    return _val.replace(/\d/g, ($1) => numeral[Number($1)]);
  };

  const _removeFormatting = (val) => {
    const _val = val.replace(new RegExp(numeral.join("|"), "g"), ($1) =>
      numeral.indexOf($1)
    );

    return removeFormatting(_val);
  };

  return (
    <NumberFormatBase
      displayType="text"
      format={_format}
      removeFormatting={_removeFormatting}
      {...rest}
    />
  );
}

export default CustomNumeralNumericFormat;
