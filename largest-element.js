function largestElement(array)
{
    let largest = array[0];
    for (let i = 0; i < array.length; i++)
    {
        const element = array[i];
        if (element > largest)
        {
            largest = element;
        }
    }
    return largest;
}


function smallestElement(array)
{
    let smallest = array[0];
    for (let i = 0; i < array.length; i++)
    {
        const element = array[i];
        if (element < smallest)
        {
            smallest = element;
        }
    }
    return smallest;
}


const ages = [24, 25, 35, 18, 38, 50, 75];
console.log(smallestElement(ages));

