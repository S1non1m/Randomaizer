# Randomizer API

# API рандомайзера

Простий API рандомізатора, створений за допомогою Node.js і Express.

## Кінцеві точки

- `/number?min=MIN&max=MAX` - повертає випадкове число від `min` до `max` (за замовчуванням: 1-100).
- `/element?array=a,b,c,d` - повертає випадковий елемент із наданого масиву.
- `/string?length=LENGTH` - повертає випадковий рядок заданої довжини (за замовчуванням: 10).

## Розгортання

1. Клонуйте репозиторій.
2. Запустіть `npm install`, щоб встановити залежності.
3. Запустіть сервер локально: `npm start`.
4. Розгорніть на [Render.com](https://render.com).

## Example Usage

```bash
curl http://localhost:3000/number?min=10&max=50
curl http://localhost:3000/element?array=apple,banana,orange
curl http://localhost:3000/string?length=15
