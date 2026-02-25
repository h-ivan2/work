#include <iostream>
using namespace std;

int main(){
    //cout << "Hello world\n" << endl;
    //cout << "Have a good day\n";
    //cout <<  3+3 <<"\n" << endl ;

    //int myNum = 15;
    //cout << myNum << endl;
    //cout <<" I am "<< myNum <<" years old\n";
    //string name="IVAN";
    //double height=6.5;
    /*cout << "My name is  " << name <<"and I have"<< myNum
     <<" years old "<< "and I have "<< height <<"feet of height\n\n" ;

    auto y=5, x=10;
    int sum= x+y;
    cout << sum;

    const int myConst= 15;*/


    /*string name;
    cout << "Enter your fullname: ";
    getline(cin,name);
    cout<<"Your full name is " << name ;*/

   /* int x;

    cout << "Enter your age : ";
    cin >> x ;
    if(cin.fail()){
        cout << "Invalid age";
    }
    else if (x<18){
        cout <<"You are still a child";
    } else if(x=18){
    cout<< "You can apply now";
    }else{
    cout << "You are allowed to join ";
    }*/

    int x, sum=1;
    cout << "Enter a number you want to find the factorial: ";
    cin >> x;
     for (int i=x;i>=1;i--){
        sum*=i;
     }
     cout<< "The factorial of "<< x << " is " << sum ;



    return 0;



}
