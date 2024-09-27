import { Spinner, SpinnerType } from "./Spinner";

interface LoaderProps {
  type?: SpinnerType;
}

export const Loader = ({ type = "brand" }: LoaderProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-[100000]">
      <div className="">
        <Spinner classNames="h-[40px]" type={type} />
      </div>
    </div>
  );
};
