#include <stdio.h>
 int main(){

 int a[5]={10,20,30,40,50};
 int sum=0;

 for(int i=0;i<5;i++){
    sum+=a[i];
 }

 printf("The sum of the elements of the array is %d ",sum);

 int arr1[3][3]={{1,2,3},{4,5,6},{7,8,9}};
 printf("element=%d\n", arr1[1][1]);

 }
