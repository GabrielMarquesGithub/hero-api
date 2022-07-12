export default function reducerAction<T, U>(type: U, payload: T) {
  return {
    type: type,
    payload: payload,
  };
}
