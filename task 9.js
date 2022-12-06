let capital = prompt('What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris');
let stars = prompt('How many stars on the USA flag? 1 - 50 2 - 45 3 - 60');
let man = prompt('Who is the fastest man on the Earth? 1 - Me 2 - Usain Bolt 3 - You');
let score = 0;
if (capital == 1)
    score += 2;
if (stars == 1)
    score += 2;
if (Man == 3)
    score += 2;
alert('Your score is ' + score);
