# Alpha Release

Ansh Godha, Christopher Hansen

## Vision

We want to build (in Typescript) an interpreter for an easily readable domain specific language that can manipulate JSON objects and make HTTP requests. This means we aim have the ability to submit GET, POST and other HTTP requests through our REPL interface, define JSON objects, carry out basic evaluations using contexts, and have the ability to manipulate JSON objects in a way that is useful for someone who is making API calls with different parameters. Essentially, this would allow someone to make simple requests like ` GET from “https://my.api.example/id=3” `. We also will support option configuration for HTTP requests (like encodings (XML, x-www-form-urlencoded), cookies, etc.

## Status

We set up our project using the Typescript target for ANTLR4 and defined a subset of our grammar which ANTLR uses to generate a lexer and parser. Our grammar includes: ints, strings, variable names, let expressions, JSONs and key-value pairs, GET and POST requests, print statements, and comments. Our interpreter can take in a .http file and interprets value literals (strings, ints, JSONs) as well as print statements and basic GET requests that return JSON.

Example:

```[javscript]
 print(GET from "https://aws.random.cat/meow?ref=apilist.fun")
```

Output:

```[javscript]
{
  file: 'https://purr.objects-us-east-1.dream.io/i/20170429_094413.jpg'
}
```

Example:

```[javascript]
print(
  {"name": "Chris", "Education":
    {"college": "Cornell", "degree": "Computer Science"}
  }
)
```

Output:

```[javascript]
{
  name: 'Chris',
  Education: { college: 'Cornell', degree: 'Computer Science' }
}
```

## Next Steps

We will be extending our project to support arrays, additional HTTP requests, the ability to manipulate JSONs (by supporting operations such as merging JSONs and adding/removing fields dynamically from existing JSONs) and File I/O.
