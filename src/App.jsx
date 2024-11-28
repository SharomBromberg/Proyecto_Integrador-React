import Routes from './routes/Routes'

import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import { Toaster } from 'sonner'
import VideoBackground from './components/UI/Background/Background'

function App() {
	return (
		<>
			<VideoBackground />
			<Layout>
				<Toaster richColors />
				<Navbar />
				<Routes />
				<Footer />
			</Layout>
		</>
	)
}

export default App
