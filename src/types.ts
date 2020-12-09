type Value = number | string | Object | null | Array<Value>;

type Context = { [key: string]: Value };

export { Value, Context };
