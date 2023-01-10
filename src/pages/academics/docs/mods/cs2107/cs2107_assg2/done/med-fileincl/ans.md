1. Question mentions URL parameters, append `?f=secret.php`. troll page obtained.
2. Typing gibberish reveals parameter `f` is used to `include()` a file.
3. Refer to includes [cheatsheet](https://highon.coffee/blog/lfi-cheat-sheet/), trying `?f=php://filter/convert.base64-encode/resource=secret.php` obtains base 64 data
4. decode data for flag using online decoders