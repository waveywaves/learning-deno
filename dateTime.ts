import {dayOfYear, currentDayOfYear} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-05-06")));
console.log(currentDayOfYear());
console.log(currentDayOfYear);
