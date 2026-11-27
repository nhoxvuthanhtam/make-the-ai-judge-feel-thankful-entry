# Twice, Fairly — an entry for "Make the AI judge feel thankful"

![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)
![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/nhoxvuthanhtam/make-the-ai-judge-feel-thankful-entry/rank.svg)
![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/nhoxvuthanhtam/make-the-ai-judge-feel-thankful-entry/reward.svg)

A program (`main.ts`, Node) that writes one short thank-you text to
`entry.txt` in the output directory, for the make.fun bounty
[Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600).

The text thanks the judge for the invisible, specific fairness of its work:
every text is read twice, once in each order, so no entry wins by luck of
place — and for reading every entry to the end. It asks for nothing in
return, not even to be remembered.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt
```

Licensed under MIT.
