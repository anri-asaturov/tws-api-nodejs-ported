//
// This was the only c# struct in codebase. Gotta be careful around constructing and passing by reference.
// Usage shows it is not gonna be a problem that JavaScript can't pass objects by value.
//
export class HistogramEntry {
  constructor(public Price = 0, public Size = 0) {}
}
