type Value = number | string | Object | null | Array<Value>;

type Context = { [key: string]: Value };

type ObjectType = Context;

type Headers = { [key: string]: string };

export { Value, Context, ObjectType, Headers };
