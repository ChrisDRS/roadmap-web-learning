function hasPermisson(mask, flag) {
    return (mask & flag) !==0;
}
console.log(hasPermisson(10, 2));
