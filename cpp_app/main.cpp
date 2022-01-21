#include <iostream>
#include <string>
#include "class.h"

int main() {

    printf("Hello World!\n");

    Foo foo {1, 3};
    int sum = foo.add();
    printf("sum of %i and %i is %i!\n", foo.a, foo.b, sum);

    return 0;
}
