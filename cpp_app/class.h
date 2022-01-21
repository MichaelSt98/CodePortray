#ifndef CPP_APP_FOO_H
#define CPP_APP_FOO_H

/**
 * @class
 * @brief Brief description
 *
 * More detailed description
 * @author Michael Staneker, Johannes Martin
 * @date January 2022
 */
class Foo {
public:
    /**
     * Constructor brief.
     *
     * Constructor more detailed.
     *
     * @param a variable a
     * @param b variable b
     * @return
     */
    Foo(int a, int b);
    /**
     * Destructor brief.
     *
     * Destructor more detailed.
     */
    ~Foo();

    /**
     * Function brief.
     *
     * Function more detailed.
     *
     * @return Sum of member variables a and b.
     */
    int add();

    /// @param member variable a
    int a;
    /// @param member variable b
    int b;
};


#endif 
