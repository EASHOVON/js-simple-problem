// Fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
/* 
13th = 12th + 11th
30th = 29th + 28th

nth = (n-1)th + (n-2)th
*/

// const fibo = [0, 1];
// for (let i = 2; i <= 20; i++)
// {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }

// console.log(fibo);

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