# Randomizer API

A simple randomizer API built with Node.js and Express.

## Endpoints

- `/number?min=MIN&max=MAX` - Returns a random number between `min` and `max` (default: 1-100).
- `/element?array=a,b,c,d` - Returns a random element from the provided array.
- `/string?length=LENGTH` - Returns a random string of specified length (default: 10).

## Deployment

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server locally: `npm start`.
4. Deploy to [Render.com](https://render.com).

## Example Usage

```bash
curl http://localhost:3000/number?min=10&max=50
curl http://localhost:3000/element?array=apple,banana,orange
curl http://localhost:3000/string?length=15
