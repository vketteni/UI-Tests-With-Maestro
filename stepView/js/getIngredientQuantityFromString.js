if (isFirst) // environment variable
{
    output.ingredientQuantity = {
    first : parseInt(output.string.split(" ")[0])
    }
} else {
    output.ingredientQuantity = {
    second : parseInt(output.string.split(" ")[0])
    }
}