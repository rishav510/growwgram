type Action = {
  type: string,
  payload?: Payload,
}

type Payload = any;

export default Action;
