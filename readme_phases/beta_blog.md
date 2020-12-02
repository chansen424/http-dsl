## Vision

We want to build (in Typescript) an interpreter for an easily readable domain specific language that can manipulate JSON objects and make HTTP requests. This means we aim have the ability to submit GET, POST and other HTTP requests through our REPL interface, define JSON objects, carry out basic evaluations using contexts, and have the ability to manipulate JSON objects in a way that is useful for someone who is making API calls with different parameters. Generally speaking, our vision has remained the same. However, we also decided to prioritize project organization, good error messages, and the creation of an api to test the features of our language.

## Status

In this sprint, we made quite a lot of progress by extending our language to support post requests, and to allow JSON maipulation to a certain extent. We also added new data types (arrays) and allowed variable declarations inside JSONs which makes structuring POST requests quite convenient. We also reorganized our code to make feature additions more sustainable, and additonally made our own internal testing API that allows you to make changes with side effects to our backend through POST requests. Overall, we're in a pretty good shape to finish off what we had initially scoped out!

## Next Steps

Our last sprint will be focused on finishing offf some things that need a bit more polishing, such as our JSON manipulation mechanisms. We will also be including File I/O that allows users to save and read from files (for instance, a user could save the return JSONs to files). We will include operations for array and string manipulation, and if time allows, include mechanisms for configuring HTTP request options (such as encoding and cookies)
