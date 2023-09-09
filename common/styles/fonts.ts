import { Sora, Poppins } from 'next/font/google';

export const poppins = Poppins({
  variable: '--poppins-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800']
});
