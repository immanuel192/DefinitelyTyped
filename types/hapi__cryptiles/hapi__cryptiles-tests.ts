import * as cryptiles from "@hapi/cryptiles";

cryptiles.randomString(0); // $ExpectType string
cryptiles.randomDigits(0); // $ExpectType string
cryptiles.fixedTimeComparison("", ""); // $ExpectTpe boolean
