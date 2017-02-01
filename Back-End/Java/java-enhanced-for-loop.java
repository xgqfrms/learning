// java enhanced for loop


/*


for( var i : arr) 

//2007

for( var i !  arr) 
//2005



*/


int[] info = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
for (int i : info) {
    System.out.println(i + (i % 10 == 0 ? "" : ", "));
}
