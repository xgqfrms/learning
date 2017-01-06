# data-*  



https://www.w3.org/TR/html51/dom.html#embedding-custom-non-visible-data-with-the-data-attributes




string        = *( plaintext ( embedding / override / isolation ) ) plaintext
embedding     = ( lre / rle ) string pdf
override      = ( lro / rlo ) string pdf
isolation     = ( lri / rli / fsi ) string pdi
lre           = %x202A ; U+202A LEFT-TO-RIGHT EMBEDDING
rle           = %x202B ; U+202B RIGHT-TO-LEFT EMBEDDING
lro           = %x202D ; U+202D LEFT-TO-RIGHT OVERRIDE
rlo           = %x202E ; U+202E RIGHT-TO-LEFT OVERRIDE
pdf           = %x202C ; U+202C POP DIRECTIONAL FORMATTING
lri           = %x2066 ; U+2066 LEFT-TO-RIGHT ISOLATE
rli           = %x2067 ; U+2067 RIGHT-TO-LEFT ISOLATE
fsi           = %x2068 ; U+2068 FIRST STRONG ISOLATE
pdi           = %x2069 ; U+2069 POP DIRECTIONAL ISOLATE
plaintext     = *( %x0000-2029 / %x202F-2065 / %x206A-10FFFF )
                ; any string with no bidirectional-algorithm formatting characters










