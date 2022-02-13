// Fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
/* 
13th = 12th + 11th
30th = 29th + 28th

nth = (n-1)th + (n-2)th
*/

const fibo = [0, 1];
for (let i = 2; i <= 20; i++)
{
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

function fibonacciSeries(num)
{
    if (typeof num != "number")
    {
        return "Please Enter a number"
    }

    if (num < 2)
    {
        return "Please Enter a positive Value greater than 1"
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++)
    {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}


console.log(fibonacciSeries(20));

// 0, 1, 1, 2, 3, 5

function fibonacci(n)
{
    if (n == 0)
    {
        return 0;
    }
    if (n == 1)
    {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const fiboElement = fibonacci(6);
console.log(fiboElement);

function fibonacciSeries(n)
{
    if (n == 0)
    {
        return [0]
    }
    if (n == 1)
    {
        return [0, 1]
    }

    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const fiboSeries = fibonacciSeries(6);
console.log(fiboSeries);