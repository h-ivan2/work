#include <stdio.h>

int add(int a,int b){
return a+b;
}

int subtract(int a,int b){
return a-b;
}

int multiply(int a ,int b){
return a*b;
}

float divide(int a, int b){
return(float)a/b;
}

int main(){
int choice,x,y;
printf("Choose an operation:\n 1.Add\n 2.subtract\n 3.Multiply\n 4. Divide\n");
scanf("%d",&choice);
//printf("The chosen sign is %d ",choice);

printf("Enter  number 1: ");
scanf("%d",&x);
printf("Enter number 2: ");
scanf("%d",&y);

switch(choice){
    case 1: printf("The result of the operation= %d",add(x,y));
    break;
    case 2: printf("The result of the operation = %d",subtract(x,y));
    break;
    case 3:printf("The result of the operation = %d",multiply(x,y));
    break;
    case 4:printf("The result of the operation =%.2f",divide(x,y));
    break;

}

return 0;
}
