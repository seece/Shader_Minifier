// test with --no-renaming-list i

int foo(int a, int d)
{
  return a + 1;
}

int i()
{
  foo(0);
}

int bar(int b, int c, int d)
{
  return b + i();
}
