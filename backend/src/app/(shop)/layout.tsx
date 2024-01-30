import type { Metadata } from 'next'
import { Inter, Single_Day } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import NavBar from '@/components/NavBar'
import { CartProvider } from '@/components/CartContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'Chat gpt prompts',
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full h-full wp-5 m-5'>
       <div className='flex flex-col p-5 m-5'>
       <CartProvider>
        <NavBar />
        
        <div className='flex gap-1'>
        <Sidebar />
        


        {children}
        
        
        
        

        </div>
        </CartProvider>
       </div>
      </body>
    </html>
  )
}
