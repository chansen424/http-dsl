type Value = number | string | Object | null | Array<Value>;

type Context = { [key: string]: Value };

type ObjectType = Context;

export { Value, Context, ObjectType };
