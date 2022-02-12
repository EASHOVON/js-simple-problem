function arrayTotal(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        const element = array[i];
        sum = sum + element;
    }
    return sum;
}


console.log(arrayTotal([20, 40, 50, 60, 35]));