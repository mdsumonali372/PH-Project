/*
[ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
*/

const numbers = [1, 49, 2, 3, 4, 5, 21, 101, 199];
const result = numbers.filter((parameter) => parameter % 2 === 1);

console.log(result);
