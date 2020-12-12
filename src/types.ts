type Value = number | string | Object | null | Array<Value>;

type ObjectType = { [key: string]: Value };

type Context = ObjectType;

type Headers = { [key: string]: string };

export { Value, Context, ObjectType, Headers };
