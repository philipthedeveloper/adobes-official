import classNames from "classnames";

type Props = {
  rating: number;
  className?: string;
};
export const Rating = ({ rating, className }: Props) => {
  let number = +rating.toFixed(1);
  let hasDecimal = false;

  if (String(number).indexOf(".") !== -1) {
    number = +String(number).split(".")[0];
    hasDecimal = true;
  }

  return (
    <>
      {Array(number)
        .fill(0)
        .map((_, idx) => (
          <i
            key={idx}
            className={classNames("fi fi-sr-star flex text-base", className)}
          />
        ))}
      {hasDecimal ? (
        <i
          className={classNames(
            "fi fi-rr-star-sharp-half-stroke flex text-base",
            className
          )}
        />
      ) : null}
      {Array(5 - Math.ceil(rating))
        .fill(0)
        .map((_, idx) => (
          <i
            key={idx}
            className={classNames("fi fi-rr-star flex text-base", className)}
          />
        ))}
    </>
  );
};
