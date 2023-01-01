

export const styles: any = {
  global: {
    "body, html": {
      all: {
        fontFamily: "IRANYekan,sans-serif",
      },
      color: "systemBlackOrWhiteReverse.1000",
      background: "systemBlackOrWhite",
      lineHeight: "base",
      width: "full",
      height: "full",
      overflow: "hidden"
    },
    "#root": {
      width: "full",
      height: "full"
    },
    "*::placeholder": {
      color: "systemBlackOrWhiteReverse.1000",
    },
    "*, *::before, &::after": {
      borderColor: "systemBlackOrWhite",
      wordWrap: "break-word",
    },
    "@font-face": {
      fontDisplay: "swap",
      fontFamily: "IRANYekan",
      fontStyle: "normal",
      fontWeight: 700,
      src: `url("../../../assets/fonts/iranYekan/iranyekanwebbold.woff2")
        format("woff2")`
    }
  },
}

