import {Public_Sans} from 'next/font/google'

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--public-sans",
});

export { publicSans }