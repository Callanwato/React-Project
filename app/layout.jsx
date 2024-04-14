import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: 'promptopia',
    desc: 'Discover AI prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
          <main className='app'>
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout;
