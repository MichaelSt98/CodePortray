#include "class.h"

Foo::Foo(int a, int b) {
    this->a = a;
    this->b = b;
}

Foo::~Foo() {

}

int Foo::add() {
    return a + b;
}
