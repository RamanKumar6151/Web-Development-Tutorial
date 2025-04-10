console.clear();
// NUMBERS

// 2. integer precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let a = 999999999999999;
let b = 9999999999999999;
console.log(a);
// a = 999999999999999
// This is still within the safe range, so it's printed correctly: ✅ 999999999999999
console.log(b);
// This exceeds the precision limit. JavaScript rounds it up to the nearest representable number:⚠️ 9999999999999999 becomes → 10000000000000000
// 🤯 Why does this happen?
// JavaScript uses the Number type (which is a 64-bit floating point format, IEEE 754) for numeric values. It can safely represent integers only up to 2^53 - 1 (which is 9007199254740991).

// This range is known as the "safe integer range", because beyond that, JavaScript starts losing precision.

// 3. FLOATING POINT PRECISION
console.log("\n3. FLOATING POINT PRECISION");
//  not always 100% accurate due to binary representation limitations.
// examples
let x = 0.22 + 0.12;
console.log(x);
// To solve this problem, multiply and divide:
let y = (0.22 * 10 + 0.12 * 10) / 10;
console.log(y);

// 4. Numeric Strings
console.log("\n4. Numeric Strings");
x = "100" / "10";
y = "100" * "10";
let z = "100" - "10";
console.log(x);
console.log(y);
console.log(z);

// 5. NUMBER LITERALS
console.log("\nn5. NUMBER LITERALS");
// 5.1: Decimal Numbers
let dec1 = 33;
let float1 = 3.3;
// 5.2: Octal Numbers
console.log("5.2: Octal Numbers");
// 0 followed by digits less then 8
let oct1 = 0562; // output will 370
console.log(oct1);
// 5.3: Binary Numbers
console.log("5.3: Binary Numbers");
// 0b followed by 0's and 1's
let binary1 = 0b11; // o/p: 3
console.log(binary1);
// 5.4: Hexadecimal
console.log("5.4: Hexadecimal");
// 0x or 0X followed by any digit or alpabet belonging to 0123456789ABCDEF
let hex1 = 0xffff;
let hex2 = 0xffff;
console.log(hex1);
console.log(hex2);
