import { RootState } from "./../redux/root";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "../redux/store";

export const useRedux = () => {
  const dispatch: AppDispatch = useDispatch();
  const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
  return { dispatch, useStateSelector };
};

export const useSelectState = (reducerName: keyof RootState) => {
  const { useStateSelector } = useRedux();
  const state = useStateSelector((state) => state[reducerName]);
  return state;
};
