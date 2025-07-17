import './globals.css'
import { Analytics } from '@vercel/analytics/react';
 
export const metadata = {
  title: 'Segun Aruleba Portfolio',
  description: 'Segun Aruleba Portfolio',
}
export const RootLayout = () =>{
  
  return (
    <html lang="en">
      <head>
        <title>Analytics</title>
      </head>
      <body>
        
        <Analytics />
      </body>
    </html>
  );
}