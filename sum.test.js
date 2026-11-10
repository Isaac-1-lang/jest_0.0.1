const sum=require('./sum');

test('adds 1 + 2 equals to 3',()=>{
    expect(sum(1,2)).toBe(3);
})


test('adds 2+2 equals to 5',()=> {
    expect(sum(2,2)).toBe(4);
})


test("Any 2 or more positive numbers u add, u get +",()=> {
    for(i=1;i<10;i++) {
        for(j=0;j<10;j++) {

            expect(i+j).not.toBe(0);
        }
    }
})