"# Assignment-1" 
১) keyof কীওয়ার্ডের ব্যবহার (TypeScript)
keyof ব্যবহার করা হয় কোনো object-এর key গুলোকে একটি union type হিসেবে পাওয়ার জন্য।
অর্থাৎ, এটি object-এর property নামগুলো বের করে type হিসেবে ব্যবহার করতে দেয়।

উদাহরণ:

type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonKeys = keyof Person;
// PersonKeys = "name" | "age" | "address"

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const p: Person = { name: "Alvi", age: 22, address: "Dhaka" };

console.log(getValue(p, "name"));


এখানে keyof Person মানে:
"name" | "age" | "address"
ফলে ভুল key দিলে TypeScript error দেখাবে।



২) any, unknown, এবং never এর পার্থক্য

any

যে কোনো কিছুর মান হতে পারে।

TypeScript এই টাইপে কোনো চেক করে না।

ভুল হলেও error দেখায় না (unsafe)।

উদাহরণ:

let x: any = 10;
x = "hello"; 
x = true;

unknown

যে কোনো মান রাখা যায়,
কিন্তু ব্যবহারের আগে TypeScript চেক করতে বাধ্য করে।

এটি safer version of any.

উদাহরণ:

let y: unknown = "Hello";

if (typeof y === "string") {
  console.log(y.toUpperCase()); // allowed
}


চেক ছাড়া ব্যবহার করা যায় না।

never

এমন type যা কখনোই কোনো মান রিটার্ন করে না।

সাধারণত error throw করা ফাংশন বা infinite loop এ ব্যবহার হয়।

উদাহরণ:

function throwError(msg: string): never {
  throw new Error(msg);
}
এখানে ফাংশন কিছুই return করবে না—সরাসরি error দেবে।
